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
              <span className="local-card-status-item-name">확진자</span>
              <span className="local-card-status-item-data">{(eLocalData.local.totalCase).toLocaleString('ko-KR')}</span>
              <span className="local-card-status-item-new yellow">&nbsp;(+{(eLocalData.local.newCase).toLocaleString('ko-KR')})</span>
            </div>
            <div className="local-card-status-item">
              <span className="local-card-status-item-name">완치자</span>
              <span className="local-card-status-item-data">{eLocalData.local.recovered}</span>
              <span className="local-card-status-item-new"></span>
            </div>
            <div className="local-card-status-item">
              <span className="local-card-status-item-name">사망자</span>
              <span className="local-card-status-item-data">{eLocalData.local.death}</span>
              <span className="local-card-status-item-new"></span>
            </div>
            <div className="local-card-status-item vaccine-status">
              <span className="local-card-status-item-name">1차 접종</span>
              <span className="local-card-status-item-data">{(eLocalData.vaccine.accumulatedFirstCnt).toLocaleString('ko-KR')}</span>
              <span className="local-card-status-item-new green">&nbsp;(+{(eLocalData.vaccine.firstCnt).toLocaleString('ko-KR')})</span>
            </div>
            <div className="local-card-status-item">
              <span className="local-card-status-item-name">접종 완료</span>
              <span className="local-card-status-item-data">{(eLocalData.vaccine.accumulatedSecondCnt).toLocaleString('ko-KR')}</span>
              <span className="local-card-status-item-new green">&nbsp;(+{(eLocalData.vaccine.secondCnt).toLocaleString('ko-KR')})</span>
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