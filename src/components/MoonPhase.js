


import React from 'react';

export default function MoonPhase({ phase }) {
  const BASE_URL = process.env.PUBLIC_URL + '/';
  const phases = {
    "New Moon": "images/new_moon.png",
    "Waxing Crescent": "images/waxing_crescent.png",
    "First Quarter": "images/first_quarter.png",
    "Waxing Gibbous": "images/waxing_gibbous.png",
    "Full Moon": "images/full_moon.png",
    "Waning Gibbous": "images/waning_gibbous.png",
    "Last Quarter": "images/last_quarter.png",
    "Waning Crescent": "images/waning_crescent.png"
  };
  const imageSrc = BASE_URL + (phases[phase] || "images/new_moon.png");

  return <img src={imageSrc} alt={phase} style={{ width: '100px', marginTop: '10px' }} />;
}