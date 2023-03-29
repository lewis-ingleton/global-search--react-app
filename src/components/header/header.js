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
        <div className="visited-countries-btn">
          <VisitedCountries
            visitedCountries={visitedCountries}
            onClearVisitedCountries={handleClearVisitedCountries}
          />
        </div>
      </div>
      <div className="header">
        <div className="headerWrapper">
          <h2>Search the Globe</h2>
          <p>
            **User story** Global Search is the educational tool that gives you
            breaking news from all countries across the globe, as well as latest
            key data for all countries.
          </p>
          <p>Use the search bar to search for a country.</p>
          <SearchBar
            onSearch={onSearch}
            onZoomChange={onZoomChange}
            zoomLevel={zoomLevel}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
