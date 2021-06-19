import React from 'react';
// import CountUp from 'react-countup';
// import custom from '../../CustomFunction/custom';
import InspectionChart from '../ChartController/InspectionChart';
import './style/InspectStatusBoard.css';

export default function InspectStatusBoard({ data = {} }) {

  return (
    <React.Fragment>
      <div id="inspect-status-container">
        <div id="inspect-status-description">
          <div>검사현황</div>
          <div className="inspect-status-description-item">
            <span>누적 검사수</span>
            <span>{data.TotalChecking}건</span>
          </div>
          <div className="inspect-status-description-item">
            <span>결과 음성</span>
            <span>{data.notcaseCount}건</span>
          </div>
          <div className="inspect-status-description-item">
            <span>결과 양성</span>
            <span>{data.caseCount}건</span>
          </div>
          <div className="inspect-status-description-item">
            <span>누적 확진율</span>
            <span>{data.casePercentage}%</span>
          </div>
        </div>
        <div id="inspect-status-chart">
          <InspectionChart data={data} />
        </div>
      </div>
    </React.Fragment>
  );
}