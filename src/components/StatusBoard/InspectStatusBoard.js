import React from 'react';
import CountUp from 'react-countup';
import custom from '../../CustomFunction/custom';
import InspectionChart from '../ChartController/InspectionChart';
import './style/InspectStatusBoard.css';

export default function InspectStatusBoard({ data }) {

  return (
    <React.Fragment>
      <div id="inspect-status-container">
        <div id="inspect-status-description">
          <div>검사현황</div>
          <div className="inspect-status-description-item">
            <span>누적 검사수</span>
            <span><CountUp end={custom.getNumber(data.TotalChecking)} duration={1} separator={','}/>건</span>
          </div>
          <div className="inspect-status-description-item">
            <span>결과 음성</span>
            <span><CountUp end={custom.getNumber(data.notcaseCount)} duration={1} separator={','}/>건</span>
          </div>
          <div className="inspect-status-description-item">
            <span>결과 양성</span>
            <span><CountUp end={custom.getNumber(data.caseCount)} duration={1} separator={','}/>건</span>
          </div>
          <div className="inspect-status-description-item">
            <span>누적 확진율</span>
            <span><CountUp end={custom.getNumber(data.casePercentage)} duration={1} separator={','} decimals={1}/>%</span>
          </div>
        </div>
        <div id="inspect-status-chart">
          <InspectionChart data={data} />
        </div>
      </div>
    </React.Fragment>
  );
}