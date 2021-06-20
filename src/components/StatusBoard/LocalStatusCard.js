import React from 'react';
import LocalChart from '../ChartController/LocalChart';
import './style/LocalStatusCard.css';

export default function LocalStatusCard({ eLocalData }) {

  return (
    <React.Fragment>
      <div id="local-card-container">
        <div id="local-name">{eLocalData.vaccine.sido}</div>
        <div id="local-card-status-container">
          <div className="local-card-status">
            <div className="local-card-status-item">
              <span>확진자</span>
              <span>{(eLocalData.local.totalCase).toLocaleString('ko-KR')}</span>
              <span className="yellow">&nbsp;(+{(eLocalData.local.newCase).toLocaleString('ko-KR')})</span>
            </div>
            <div className="local-card-status-item">
              <span>완치자</span>
              <span>{eLocalData.local.recovered}</span>
              <span className="local-card-status-item-new"></span>
            </div>
            <div className="local-card-status-item">
              <span>사망자</span>
              <span>{eLocalData.local.death}</span>
              <span className="local-card-status-item-new"></span>
            </div>
            <div className="local-card-status-item vaccine-status">
              <span>1차 접종</span>
              <span>{(eLocalData.vaccine.totalFirstCnt).toLocaleString('ko-KR')}</span>
              <span className="green">&nbsp;(+{(eLocalData.vaccine.firstCnt).toLocaleString('ko-KR')})</span>
            </div>
            <div className="local-card-status-item">
              <span>접종 완료</span>
              <span>{(eLocalData.vaccine.totalSecondCnt).toLocaleString('ko-KR')}</span>
              <span className="green">&nbsp;(+{(eLocalData.vaccine.secondCnt).toLocaleString('ko-KR')})</span>
            </div>
          </div>
          {/* chart? */}
          {/* <div className="local-card-status">
            <div id="local-card-status-chart">
              <LocalChart elocalData={eLocalData} />
            </div>
          </div> */}
        </div>
      </div>
    </React.Fragment>
  );
}