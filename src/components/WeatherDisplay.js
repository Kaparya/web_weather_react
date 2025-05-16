

import React from 'react';

export default function WeatherDisplay({ data }) {
  return (
    <div className="weather-column fade-in">
      <h2>Current Weather in {data.location.name}</h2>
      <p>{data.current.condition.text}</p>
      <p>Temperature: {data.current.temp_c}°C</p>
      <a href={`https:${data.current.condition.icon}`} target="_blank" rel="noopener noreferrer">
        <img src={`https:${data.current.condition.icon}`} alt="Weather Icon" />
      </a>
    </div>
  );
}