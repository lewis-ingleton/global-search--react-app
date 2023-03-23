import React, { useState } from "react";
import ResponsiveLayout from "./components/responsive-layout/Responsive";

function App() {
  const [searchedCountry, setSearchedCountry] = useState("");
  const [zoomLevel, setZoomLevel] = useState(5);

  const handleSearch = (country) => {
    setSearchedCountry(country);
  };

  const handleZoomChange = (newZoomLevel) => {
    setZoomLevel(newZoomLevel);
  };

  return (
    <div className="App">
      <ResponsiveLayout
        onSearch={handleSearch}
        searchedCountry={searchedCountry}
        onZoomChange={handleZoomChange}
        zoomLevel={zoomLevel}
      />
    </div>
  );
}

export default App;
