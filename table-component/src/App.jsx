import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Papa from 'papaparse';
import TableComponent from './components/TableComponent';
import DetailsComponent from './components/DetailsComponent';

function App() {
  const [rideRunData, setRideRunData] = useState([]);
  const [runWalkData, setRunWalkData] = useState([]);
  const [swimData, setSwimData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const rideRunResponse = await fetch('/Ride-Run.csv');
      const runWalkResponse = await fetch('/Run-Walk.csv');
      const swimResponse = await fetch('/Swim.csv');

      const rideRunText = await rideRunResponse.text();
      const runWalkText = await runWalkResponse.text();
      const swimText = await swimResponse.text();

      Papa.parse(rideRunText, {
        header: true,
        complete: results => setRideRunData(results.data),
      });
      Papa.parse(runWalkText, {
        header: true,
        complete: results => setRunWalkData(results.data),
      });
      Papa.parse(swimText, {
        header: true,
        complete: results => setSwimData(results.data),
      });
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TableComponent rideRunData={rideRunData} runWalkData={runWalkData} swimData={swimData} />} />
        <Route path="/details/:date" element={<DetailsComponent rideRunData={rideRunData} runWalkData={runWalkData} swimData={swimData} />} />
      </Routes>
    </Router>
  );
}

export default App;
