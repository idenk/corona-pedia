import React, { useEffect, useState } from 'react';
import MyResponsiveBar from '../Chart/MyResponsiveBar';
import custom from '../../CustomFunction/custom';

export default function LocalNewCaseChart({ localData }) {
  
  const [chartBarData, setChartBarData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);   //! for successful load
  
  const chartKey = '신규 확진자수'; // use one key
  
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
            newChartBarData[count].color = 'rgb(254,223,115)';  //? how to use diffrent color for each key?
            
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