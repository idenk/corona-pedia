import React, { useEffect, useState } from 'react';
import MyResponsivePie from '../Chart/MyResponsivePie';
import custom from '../../CustomFunction/custom';


export default function InspectionChart({ data }) {

  const [chartPieData, setChartPieData] = useState([]);

  useEffect(() => {
    if (data) {
      const caseCount = custom.getNumber(data.caseCount);
      const notcaseCount = custom.getNumber(data.notcaseCount);
      const checkingCounter = custom.getNumber(data.checkingCounter);
      const casePercentage = parseFloat(data.casePercentage);
      const notcasePercentage = parseFloat(data.notcasePercentage);
      const checkingPercentage = parseFloat(data.checkingPercentage);
      
      const newChartPieData = [
        {
          id: `국내 검사결과 양성\n${casePercentage}%`,
          label: '국내 검사결과 양성',
          value: caseCount,
          color: 'rgb(235,186,180)',
        },
        {
          id: `국내 검사결과 음성\n${notcasePercentage}%`,
          label: '국내 검사결과 음성',
          value: notcaseCount,
          color: 'rgb(183,220,244)',
        },
        {
          id: `국내 검사중\n${checkingPercentage}%`,
          label: '국내 검사중',
          value: checkingCounter,
          color: 'rgb(211,217,217)',
        },
      ];

      setChartPieData(newChartPieData);
    }
  }, [data]);

  return (
    <MyResponsivePie data={chartPieData} />
  );
}