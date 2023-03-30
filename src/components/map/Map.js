import React, { useState, useEffect } from "react";

// CSS
import "./Map.css";

const apiKey = "17e097a809504fdd90da35662edf4c00";

const Map = ({ country, zoomLevel = 5 }) => {
  const [mapImageUrl, setMapImageUrl] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${country}&key=${apiKey}`
        );
        const data = await response.json();
        const { lat, lng } = data.results[0].geometry;

        // Update the map image URL with the country's latitude, longitude, and zoom level
        const newMapImageUrl = `https://image.maps.ls.hereapi.com/mia/1.6/mapview?apiKey=UWjFs9Z6aaqq3omYS7XHmO0fvl1udraQ0s4VxY4nzQ0&c=${lat},${lng}&z=${zoomLevel}&w=600&h=400&f=0`;
        setMapImageUrl(newMapImageUrl);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    if (country) {
      fetchCountryData();
    } else {
      setMapImageUrl(null);
    }
  }, [country, zoomLevel]);

  return (
    <div>
      {mapImageUrl ? (
        <img src={mapImageUrl} alt="Map" />
      ) : (
        <p>Please enter a country name to see its map.</p>
      )}
    </div>
  );
};

export default Map;
