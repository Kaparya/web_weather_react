import { useState, useContext } from 'react';
import { CityContext } from '../context/CityContext';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const baseUrl = 'https://api.weatherapi.com/v1';

export default function useCityWeather() {
  const { city } = useContext(CityContext);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [astro, setAstro] = useState(null);
  const [moonShown, setMoonShown] = useState(false);
  const [mapShown, setMapShown] = useState(false);
  const [mapUrl, setMapUrl] = useState('');

  const fetchWeather = async () => {
    if (!city) return alert('Please enter a city.');

    const res = await fetch(`${baseUrl}/current.json?key=${apiKey}&q=${city}`);
    const data = await res.json();

    if (!data.location || !data.current) {
      alert('City not found. Please check the name and try again.');
      return;
    }

    setCurrentWeather(data);

    const res2 = await fetch(`${baseUrl}/forecast.json?key=${apiKey}&q=${city}&days=3`);
    const forecastData = await res2.json();

    if (!forecastData.forecast) {
      alert('Forecast data not available.');
      return;
    }

    setForecast(forecastData.forecast.forecastday);

    setAstro(null);
    setMoonShown(false);
    setMapShown(false);
    setMapUrl('');
  };

  const fetchMoon = async () => {
    const date = new Date().toISOString().split('T')[0];
    const res = await fetch(`${baseUrl}/astronomy.json?key=${apiKey}&q=${city}&dt=${date}`);
    const data = await res.json();
    setAstro(data.astronomy.astro);
    setMoonShown(true);
  };

  const fetchMap = async () => {
    const res = await fetch(`${baseUrl}/current.json?key=${apiKey}&q=${city}`);
    const data = await res.json();
    const { lat, lon } = data.location;
    const url = `https://www.openstreetmap.org/export/embed.html?bbox=${lon-0.1},${lat-0.1},${lon+0.1},${lat+0.1}&layer=mapnik&marker=${lon},${lat}`;
    setMapUrl(url);
    setMapShown(true);
  };

  return {
    currentWeather,
    forecast,
    astro,
    moonShown,
    mapShown,
    mapUrl,
    fetchWeather,
    fetchMoon,
    fetchMap
  };
}