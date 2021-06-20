import React from 'react';
import LocalNewCaseChart from '../ChartController/LocalNewCaseChart';
import LocalTotalCaseChart from '../ChartController/LocalTotalCaseChart';
import LocalStatusCard from './LocalStatusCard';
import './style/LocalStatusBoard.css';

export default function LocalStatusBoard({ localData, vaccineData }) {
  
  let localDataArr = Object.entries(localData);
  let vaccineDataArr = Object.entries(vaccineData);
  const mergedLocalData = [];

  localDataArr = localDataArr.slice(3, 20);   // idx) 4: 광주, 5: 대전 6: 울산, 7: 세종
  vaccineDataArr = vaccineDataArr.slice(1);   // idx) 4: 울산, 5: 광주 6: 세종, 7: 대전

  [vaccineDataArr[4], vaccineDataArr[5], vaccineDataArr[6], vaccineDataArr[7]] =
    [vaccineDataArr[5], vaccineDataArr[7], vaccineDataArr[4], vaccineDataArr[6]];

  // console.log(localDataArr);
  // console.log(vaccineDataArr);

  for (let i = 0; i < localDataArr.length; i++){
    mergedLocalData[i] = Object.assign(
      {},
      { name : `${localDataArr[i][1].countryName}. ${vaccineDataArr[i][1].sido}` },
      { local : localDataArr[i][1] },
      { vaccine : vaccineDataArr[i][1] }
    );
  }
  console.log(mergedLocalData);

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
          {mergedLocalData.map((local, idx) => {
              return <LocalStatusCard key={idx} eLocalData={local} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
}