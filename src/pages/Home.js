import React, { useState, useEffect } from 'react'
import { getCoronaData } from '../api/CoronaDataApi';
import InspectStatusBoard from '../components/StatusBoard/InspectStatusBoard';
import MainStatusBoard from '../components/StatusBoard/MainStatusBoard'
import LocalStatusBoard from '../components/StatusBoard/LocalStatusBoard'
import './style/Home.css';

export default function Home() {

  const [coronaData, setCoronaData] = useState([]);
  const [localCoronaData, setlocalCoronaData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getCoronaData()
      .then((data) => {
        console.log(data);
        setCoronaData(data[0]);
        setlocalCoronaData(data[1]);

        setIsLoading(false);
      })
  }, [])

  return (
    <div>
      {isLoading ? (
        ''
      ) : (
        <React.Fragment>
          <div id="home-main-container">
            <MainStatusBoard data={coronaData} localData={localCoronaData} />
            <InspectStatusBoard data={coronaData}/>
          </div>
          <div id="home-local-container">
            <LocalStatusBoard localData={localCoronaData} />
          </div>
        </React.Fragment>
      )}
    </div>
  );
}