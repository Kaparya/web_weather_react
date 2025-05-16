

import React from 'react';

export default function Forecast({ data }) {
  return (
    <div className="weather-column fade-in">
      <h2>3-Day Forecast</h2>
      {data.map(day => (
        <div key={day.date}>
          <h3>{day.date}</h3>
          <p>{day.day.condition.text}</p>
          <p>Max: {day.day.maxtemp_c}°C, Min: {day.day.mintemp_c}°C</p>
          <a href={`https:${day.day.condition.icon}`} target="_blank" rel="noopener noreferrer">
            <img src={`https:${day.day.condition.icon}`} alt="Forecast Icon" />
          </a>
        </div>
      ))}
    </div>
  );
}