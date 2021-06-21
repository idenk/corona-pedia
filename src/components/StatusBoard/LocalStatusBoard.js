import React from 'react';
import LocalNewCaseChart from '../ChartController/LocalNewCaseChart';
import LocalTotalCaseChart from '../ChartController/LocalTotalCaseChart';
import LocalStatusCard from './LocalStatusCard';
import './style/LocalStatusBoard.css';

export default function LocalStatusBoard({ localData, vaccineData }) {
  
  let localDataArr = Object.entries(localData);
  let vaccineDataArr = Object.entries(vaccineData);
  const LocalTotalData = [];

  localDataArr = localDataArr.slice(2, 20);
  vaccineDataArr = vaccineDataArr.slice(0);

  // console.log(localDataArr);
  // console.log(vaccineDataArr);

  for (let i = 0; i < localDataArr.length; i++){
    LocalTotalData[i] = Object.assign(
      {},
      { name : `${localDataArr[i][1].countryName}.${vaccineDataArr[i][1].sido}` },
      { local : localDataArr[i][1] },
      { vaccine : vaccineDataArr[i][1] }
    );
  }
  console.log('LocalTotalData', LocalTotalData);

  return (
    <React.Fragment>
      <div id="local-status-container">
        <div id="local-status-chart-container">
          <div>
            <div className="local-status-chart-name">시도별 신규 확진자수</div>
            <div className="local-status-chart">
              <LocalNewCaseChart localData={localData} />
            </div>
          </div>
          <div>
            <div className="local-status-chart-name">시도별 확진자수</div>
            <div className="local-status-chart">
              <LocalTotalCaseChart localData={localData} />
            </div>
          </div>
        </div>
        <div id="local-status-card-container">
          {LocalTotalData.map((local, idx) => {
              return <LocalStatusCard key={idx} eLocalData={local} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
}