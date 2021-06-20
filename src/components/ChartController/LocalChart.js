import React, { useEffect, useState } from 'react';
import MyResponsivePie from '../Chart/MyResponsivePie';
import custom from '../../CustomFunction/custom';
//! Not use
export default function LocalChart({ elocalData }) {
  console.log('chart', elocalData);
  
  const [chartPieData, setChartPieData] = useState({});

  useEffect(() => {
    if (elocalData) {
      const totalCase = elocalData.local.totalCase;
      const recovered = custom.getNumber(elocalData.local.recovered);
      const death = custom.getNumber(elocalData.local.death);
      // const casePercentage = parseFloat(data.casePercentage);
      // const notcasePercentage = parseFloat(data.notcasePercentage);
      // const checkingPercentage = parseFloat(data.checkingPercentage);
      
      const newChartPieData = [
        {
          id: `사망자`,
          label: '사망자',
          value: death,
          color: 'rgb(235,186,180)',
        },
        {
          id: `확진자`,
          label: '확진자',
          value: totalCase,
          color: 'rgb(211,217,217)',
        },
        {
          id: `완치자`,
          label: '완치자',
          value: recovered,
          color: 'rgb(183,220,244)',
        },
      ];
      console.log(chartPieData);
      setChartPieData(newChartPieData);
    }
  }, [elocalData]);

  return (
    <MyResponsivePie data={chartPieData} />
  );
}