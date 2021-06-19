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
              {/* <button onClick={() => chartHandler(0)}>신규</button>
              <button onClick={() => chartHandler(1)}>누적</button> */}
            </div>
            <div id="local-new_case-status-chart">
              <LocalNewCaseChart localData={localData} />
              <LocalTotalCaseChart localData={localData} />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}