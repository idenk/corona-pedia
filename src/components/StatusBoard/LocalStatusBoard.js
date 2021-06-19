import React, { useEffect, useState } from 'react';
import LocalNewCaseChart from '../ChartController/LocalNewCaseChart';
import LocalTotalCaseChart from '../ChartController/LocalTotalCaseChart';
import './style/LocalStatusBoard.css';

export default function LocalStatusBoard({ localData }) {
  
  const [chart, setChart] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  //! ERROR 
  // console.log(localData);

  // function chartHandler(num) {
  //   setChart(num);
  // }

  useEffect(() => {
    setIsLoading(true);

    setIsLoading(false);
  }, [chart]);


  return (
    <React.Fragment>
      {isLoading ? (
        ''
      ) : (
        <div>
          <div id="local-status-container">
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
        </div>
      )}
    </React.Fragment>
  );
}