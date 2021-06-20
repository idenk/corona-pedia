import React from 'react';
import CountUp from 'react-countup';
import custom from '../../CustomFunction/custom';
import './style/MainStatusBoard.css'

export default function MainStatusBoard({ data , localData, vaccineData }) {

  return (
    <React.Fragment>
      <div id="main-status-container">
        <div id="main-status-info">{data.updateTime}</div>
        <div id="status-header">
          <div className="status-header-card1">
            <div>일일 확진자</div>
          </div>
          <div className="status-header-card2">
            <span>국내 발생</span>
            <span className="yellow"><CountUp end={custom.getNumber(localData.korea.newCcase)} duration={1} separator={','}/></span>
          </div>
          <div className="status-header-card2">
            <span>해외 유입</span>
            <span className="yellow"><CountUp end={custom.getNumber(localData.korea.newFcase)} duration={1} separator={','}/></span>
          </div>
        </div>
        <div className="status-body">
          <div className="status-body-card">
            <div>국내 확진자수</div>
            <div><CountUp end={custom.getNumber(data.TotalCase)} duration={1} separator={','}/></div>
            <div className="yellow">+<CountUp end={custom.getNumber(localData.korea.newCase)} duration={1} separator={','}/></div>
          </div>
          <div className="status-body-card">
            <div>국내 완치자수</div>
            <div><CountUp end={custom.getNumber(data.TotalRecovered)} duration={1} separator={','}/></div>
            <div className="green">+<CountUp end={custom.getNumber(data.TodayRecovered)} duration={1} separator={','}/></div>
          </div>
          <div className="status-body-card">
            <div>국내 격리자수</div>
            <div><CountUp end={custom.getNumber(data.NowCase)} duration={1} separator={','} /></div>
            <div className="blue"><CountUp end={custom.getNumber(data.TotalCaseBefore)} duration={1} separator={','}/></div>
          </div>
          <div className="status-body-card">
            <div>국내 사망자수</div>
            <div><CountUp end={custom.getNumber(data.TotalDeath)} duration={1} separator={','} /></div>
            <div className="red">+<CountUp end={custom.getNumber(data.TodayDeath)} duration={1} separator={','}/></div>
          </div>
        </div>
        <div className="status-body">
          <div className="status-body-card">
            <div>백신 1차 접종</div>
            <div><CountUp end={vaccineData[0].totalFirstCnt} duration={1} separator={','}/></div>
            <div className="green">+<CountUp end={vaccineData[0].firstCnt} duration={1} separator={','}/></div>
          </div>
          <div className="status-body-card">
            <div>백신 접종 완료</div>
            <div><CountUp end={vaccineData[0].totalSecondCnt} duration={1} separator={','}/></div>
            <div className="green">+<CountUp end={vaccineData[0].secondCnt} duration={1} separator={','}/></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}