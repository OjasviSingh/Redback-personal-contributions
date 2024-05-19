import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';
import './DetailsComponent.css';

const DetailsComponent = ({ rideRunData, runWalkData, swimData }) => {
  const { date } = useParams();
  const allData = [...rideRunData, ...runWalkData, ...swimData];
  const dateData = allData.filter(item => item['Activity Date'] === date);

  const [clicked, setClicked] = useState(false);

  const saveAsImage = () => {
    const dashboard = document.getElementById('dashboard');
    toPng(dashboard)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `${date}-details.png`;
        link.href = dataUrl;
        link.click();
        setClicked(true);
      })
      .catch((err) => {
        console.error('Failed to save image', err);
      });
  };

  const saveAsPdf = () => {
    const dashboard = document.getElementById('dashboard');
    toPng(dashboard)
      .then((dataUrl) => {
        const pdf = new jsPDF();
        pdf.addImage(dataUrl, 'PNG', 10, 10, 190, 0);
        pdf.save(`${date}-details.pdf`);
        setClicked(true);
      })
      .catch((err) => {
        console.error('Failed to save PDF', err);
      });
  };

  return (
    <div className="page-container">
      <h1 className="main-heading">Activity Details</h1>
      <div className="details-container">
        <h2 className="details-heading">Details for {date}</h2>
        {dateData.length === 0 ? (
          <p>No data available for this date.</p>
        ) : (
          <>
            <div id="dashboard" className="dashboard">
              {Object.entries(dateData[0]).map(([key, value], index) => (
                <div className="card" key={index}>
                  <div className="card-title">{key}</div>
                  <div className="card-value">{value}</div>
                </div>
              ))}
            </div>
            <div className="save-buttons">
              <button className={clicked ? 'clicked' : ''} onClick={saveAsImage}>Save as Image</button>
              <button className={clicked ? 'clicked' : ''} onClick={saveAsPdf}>Save as PDF</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DetailsComponent;
