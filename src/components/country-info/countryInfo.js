import { useState, useEffect } from "react";

function CountryInfo({ country }) {
  // State variables to store the country information
  const [flag, setFlag] = useState("");
  const [summary, setSummary] = useState("");
  const [population, setPopulation] = useState("");
  const [languages, setLanguages] = useState([]);
  const [capital, setCapital] = useState("");
  const [region, setRegion] = useState("");

  // Effect hook to fetch data from the first API
  useEffect(() => {
    const url = `https://restcountries.com/v2/name/${country}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Set the state variables based on the API response
        setFlag(data[0].flag);
        setPopulation(data[0].population);
        setLanguages(data[0].languages);
        setCapital(data[0].capital);
        setRegion(data[0].region);
      })
      .catch((error) => console.error(error));
  }, [country]);

  // Effect hook to fetch data from the second API
  useEffect(() => {
    const apiUrl = `http://api.geonames.org/wikipediaSearchJSON?q=${country}&maxRows=1&username=skhan`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Set the state variable for summary based on the API response
        setSummary(data.geonames[0].summary);
      })
      .catch((error) => console.error(error));
  }, [country]);

  return (
    <div className="flag-section">
      {/* Render the country flag */}
      <img src={flag} alt={`Flag of ${country}`} />

      {/* Render the summary */}
      <h3>{summary}</h3>

      {/* Render the population */}
      <p>Population: {population}</p>

      {/* Render the languages */}
      <p>Languages: {languages.map((lang) => lang.name).join(", ")}</p>

      {/* Render the capital city */}
      <p>Capital: {capital}</p>

      {/* Render the region */}
      <p>Region: {region}</p>
    </div>
  );
}

export default CountryInfo;
