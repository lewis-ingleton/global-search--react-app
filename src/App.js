import React, { useState } from "react";

// CSS
import "./index.css";

// COMPONENTS
import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
import ResponsiveLayout from "./components/responsive-layout/Responsive";
// import NewsList from "./components/News-Api/NewsList";



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
      <Header />
      <ResponsiveLayout
        onSearch={handleSearch}
        searchedCountry={searchedCountry}
        onZoomChange={handleZoomChange}
        zoomLevel={zoomLevel}
      />
      <Footer />
    </div>
  );
}

export default App;
