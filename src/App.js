import React, { useContext } from 'react';
import { CityContext } from './context/CityContext';
import WeatherDisplay from './components/WeatherDisplay';
import Forecast from './components/Forecast';
import MoonInfo from './components/MoonInfo';
import CityMap from './components/CityMap';
import useCityWeather from './hooks/useCityWeather';

export default function App() {
  const { city, setCity } = useContext(CityContext);
  const {
    currentWeather,
    forecast,
    astro,
    mapUrl,
    moonShown,
    mapShown,
    fetchWeather,
    fetchMoon,
    fetchMap,
  } = useCityWeather();

  return (
    <div id="app">
      <h1 className="weather-title">Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={e => setCity(e.target.value)}
        className="weather-input"
        placeholder="Enter city"
      />
      <button onClick={fetchWeather} className="button">Get Weather</button>

      {currentWeather && (
        <>
          <div className="weather-column">
            <WeatherDisplay data={currentWeather} />
            <Forecast data={forecast} />
          </div>
          <div className="weather-column">
            <MoonInfo shown={moonShown} astro={astro} onFetch={fetchMoon} />
            <CityMap shown={mapShown} url={mapUrl} onFetch={fetchMap} />
          </div>
        </>
      )}
    </div>
  );
}