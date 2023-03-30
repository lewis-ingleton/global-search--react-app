import React from "react";
import LanguageIcon from "@mui/icons-material/Language";

// CSS
import "./header.css";

// components
import SearchBar from "../searchbar/SearchBar";
import VisitedCountries from "../visited-countries/VisitedCountries";

function Header({
  onSearch,
  onZoomChange,
  zoomLevel,
  visitedCountries,
  setVisitedCountries,
  onCountryClick, // Add the onCountryClick prop
}) {
  const handleClearVisitedCountries = () => {
    localStorage.removeItem("visitedCountries");
    setVisitedCountries([]);
  };

  return (
    <>
      <div className="titleWrapper">
        <div className="title-container">
          <LanguageIcon className="headerIcon" />
          <h1>Global Search</h1>
        </div>
        <div className="visited-countries-btn"></div>
      </div>
      <div className="header">
        <div className="headerWrapper">
          <h2>Search the Globe</h2>
          <p>
            Use Global Search to find out all you need to know about a country. Get key data about a countries population, language and more. Also get the latest news stories so you can stay up to date with what's going on in the world. Start searching now! 
          </p>
          <SearchBar
            onSearch={onSearch}
            onZoomChange={onZoomChange}
            zoomLevel={zoomLevel}
          />
          <VisitedCountries
            visitedCountries={visitedCountries}
            onClearVisitedCountries={handleClearVisitedCountries}
            onCountryClick={onCountryClick} // Pass the handleCountryClick function to the VisitedCountries component
          />
        </div>
      </div>
    </>
  );
}

export default Header;
