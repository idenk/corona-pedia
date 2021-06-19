import React, { useEffect, useState } from 'react';
import MyResponsiveBar from '../Chart/MyResponsiveBar';
import custom from '../../CustomFunction/custom';

export default function LocalTotalCaseChart({ localData }) {
  
  const [chartBarData, setChartBarData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const chartKey = '확진 환자수';
  
  useEffect(() => {
    setIsLoading(true);
    if (localData) {
      let newChartBarData = [];
      
      let count = 0;

      for (let key in localData) {
        if (localData[key].countryName !== '합계') {
          if (localData[key].totalCase) {
            localData[key].totalCase = custom.getNumber(localData[key].totalCase);

            newChartBarData[count] = {};

            if (count === 0) newChartBarData[count].chartKey = chartKey;
            newChartBarData[count].region = localData[key].countryName;
            newChartBarData[count][chartKey] = localData[key].totalCase;
            newChartBarData[count].color = 'rgb(199,186,167)';

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