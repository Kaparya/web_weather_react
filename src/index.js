import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CityContext } from './context/CityContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const RootWithContext = () => {
  const [city, setCity] = useState('');

  return (
    <CityContext.Provider value={{ city, setCity }}>
      <App />
    </CityContext.Provider>
  );
};

root.render(
  <React.StrictMode>
    <RootWithContext />
  </React.StrictMode>
);