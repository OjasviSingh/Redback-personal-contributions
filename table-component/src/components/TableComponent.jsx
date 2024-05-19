import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TableComponent.css';

const TableComponent = ({ rideRunData, runWalkData, swimData }) => {
  const [filter, setFilter] = useState('All');
  const [selectedDate, setSelectedDate] = useState(null);

  const allData = [...rideRunData, ...runWalkData, ...swimData];

  const filteredData = allData.filter(item => {
    const matchType = filter === 'All' || item['Activity Type'] === filter;
    const matchDate = !selectedDate || new Date(item['Activity Date']).toDateString() === selectedDate.toDateString();
    return matchType && matchDate;
  });

  const commonFields = ['Activity Date', 'Activity Type', 'Distance', 'Elapsed Time'];

  return (
    <div className="page-container">
      <h1 className="main-heading">Activity Overview</h1>
      <div className="table-container">
        <div className="filter-container">
          <div className="select-wrapper">
            <select onChange={(e) => setFilter(e.target.value)} value={filter}>
              <option value="All">All</option>
              <option value="Run">Running</option>
              <option value="Ride">Cycling</option>
              <option value="Swim">Swimming</option>
            </select>
          </div>
          <div className="date-picker-wrapper">
            <DatePicker
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              isClearable
              placeholderText="Select a date"
            />
          </div>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                {commonFields.map(field => <th key={field}>{field}</th>)}
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((row, index) => (
                  <tr key={index}>
                    {commonFields.map(field => (
                      <td key={field}>
                        {field === 'Activity Date' ? <Link to={`/details/${row['Activity Date']}`}>{row[field]}</Link> : row[field]}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={commonFields.length} style={{ textAlign: 'center' }}>
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
