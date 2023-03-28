import React from "react";

const CountryName = ({ country }) => {
  return (
    <div>
      {country ? (
        <h2>{country}</h2>
      ) : (
        <p>Please enter a country name to see the information.</p>
      )}
    </div>
  );
};

export default CountryName;
