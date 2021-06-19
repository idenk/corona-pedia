import React, { useEffect, useState } from 'react';
import MyResponsiveBar from '../Chart/MyResponsiveBar';
import custom from '../../CustomFunction/custom';

export default function LocalNewCaseChart({ localData }) {
  
  const [chartBarData, setChartBarData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const chartKey = '신규 확진자수';
  
  useEffect(() => {
    setIsLoading(true);
    
    if (localData) {
      let newChartBarData = [];
      
      let count = 0;

      for (let key in localData) {
        if (localData[key].countryName !== '합계') {
          if (localData[key].newCase) {
            localData[key].newCase = custom.getNumber(localData[key].newCase);

            newChartBarData[count] = {};

            if (count === 0) newChartBarData[count].chartKey = chartKey;
            newChartBarData[count].region = localData[key].countryName;
            newChartBarData[count][chartKey] = localData[key].newCase;
            newChartBarData[count].color = 'rgb(254,223,115)';
            
            count++;
          }
        }
      }

      setChartBarData(newChartBarData);
      setIsLoading(false);
    }
  }, [localData]);

  return (
    <React.Fragment>
      {isLoading ? '' : <MyResponsiveBar data={chartBarData} />}
    </React.Fragment>
  );
}