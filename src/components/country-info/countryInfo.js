import React, { useState, useEffect } from 'react';

function CountryInfo({ country }) {
  const [data, setData] = useState(null);

  // Use the `useEffect` hook to fetch the data from the REST Countries API and update the `data` state when the `country` prop changes.
  useEffect(() => {
    async function fetchData() {
      // Construct the API endpoint URL by interpolating the `country` prop into the URL string and adding the  parameters.
      const url = `https://restcountries.com/v2/name/${country}?fullText=true&fields=name,capital,region,population,currencies,languages,flag`;
      // Make a GET request
      const response = await fetch(url);
      // Parse the response data 
      const jsonData = await response.json();
      // Set the `data` state to the first element of the JSON data array.
      setData(jsonData[0]);
    }
    fetchData();
  }, [country]); 

  // Render the `data` state if it is not `null`.
  return (
    <div>
      {data && (
        <div>
          {/* Display flag */}
          <img src={data.flag} alt={data.name} style={{ width: '200px' }} />
          {/* Display population */}
          <p>Population: {data.population.toLocaleString()}</p>
          {/* Display currency name and code using the `currencies` property. */}
          <p>Currency: {data.currencies[0].name} ({data.currencies[0].code})</p>
          {/* Display languages */}
          <p>Languages: {data.languages.map((lang) => lang.name).join(', ')}</p>
          {/* Displaycapital city */}
          <p>Capital city: {data.capital}</p>
          {/* Display the country region */}
          <p>Region: {data.region}</p>
        </div>
      )}
    </div>
  );
}

export default CountryInfo;
