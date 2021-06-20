import React, { useState, useEffect } from 'react'
import { getCoronaData } from '../api/CoronaDataApi';
import InspectStatusBoard from '../components/StatusBoard/InspectStatusBoard';
import MainStatusBoard from '../components/StatusBoard/MainStatusBoard'
import LocalStatusBoard from '../components/StatusBoard/LocalStatusBoard'
import './style/Home.css';

export default function Home() {

  const [coronaData, setCoronaData] = useState([]);
  const [localCoronaData, setlocalCoronaData] = useState([]);
  const [vaccineData, setVaccineData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getCoronaData()
      .then((data) => {
        console.log(data); //! check data
        setCoronaData(data[0]);
        setlocalCoronaData(data[1]);
        setVaccineData(data[2].data);

        setIsLoading(false);
      })
  }, []);

  return (
    <React.Fragment>
      {isLoading ? (
        ''
      ) : (
          <div>
            <div id="home-main-container">
              <MainStatusBoard data={coronaData} localData={localCoronaData} vaccineData={vaccineData}/>
              <InspectStatusBoard data={coronaData} />
            </div>
            <div id="home-local-container">
              <LocalStatusBoard localData={localCoronaData} vaccineData={vaccineData} />
            </div>
          </div>
      )}
    </React.Fragment>
  );
}