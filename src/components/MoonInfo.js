

import React from 'react';
import MoonPhase from './MoonPhase';

export default function MoonInfo({ shown, astro, onFetch }) {
  return (
    <div className={`moon-container fade-in ${shown ? 'visible' : ''}`}>
      {!shown && <button onClick={onFetch} className="button">Get Moon Phase</button>}
      {astro && (
        <div>
          <h2>Astronomy Info</h2>
          <p>Sunrise: {astro.sunrise}</p>
          <p>Sunset: {astro.sunset}</p>
          <p>Moon Phase: {astro.moon_phase}</p>
          <MoonPhase phase={astro.moon_phase} />
        </div>
      )}
    </div>
  );
}