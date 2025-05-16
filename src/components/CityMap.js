

import React from 'react';

export default function CityMap({ shown, url, onFetch }) {
  return (
    <div className={`map-container fade-in ${shown ? 'visible' : ''}`}>
      {!shown && <button onClick={onFetch} className="button">Get City Map</button>}
      {url && (
        <div>
          <h2>City Map</h2>
          <iframe
            title="City Map"
            width="100%"
            height="400px"
            src={url}
            frameBorder="0"
            style={{ border: 0, maxWidth: '100%', maxHeight: '400px' }}
          ></iframe>
        </div>
      )}
    </div>
  );
}