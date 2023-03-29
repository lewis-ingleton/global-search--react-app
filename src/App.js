import React, { useState, useEffect } from "react";

// CSS
import "./index.css";

// COMPONENTS
import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
import ResponsiveLayout from "./components/responsive-layout/Responsive";
import PlaceholderHeader from "./components/placeholder-header/Placeholder-header";

function App() {
  const [searchedCountry, setSearchedCountry] = useState("");
  const [zoomLevel, setZoomLevel] = useState(5);
  const [renderContent, setRenderContent] = useState(false); // to render content on click

  const [visitedCountries, setVisitedCountries] = useState(() => {
    const storedVisitedCountries = localStorage.getItem("visitedCountries");
    return storedVisitedCountries ? JSON.parse(storedVisitedCountries) : [];
  });

  useEffect(() => {
    const storedVisitedCountries = localStorage.getItem("visitedCountries");
    if (storedVisitedCountries) {
      setVisitedCountries(JSON.parse(storedVisitedCountries));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("visitedCountries", JSON.stringify(visitedCountries));
  }, [visitedCountries]);

  const handleSearch = (country) => {
    setSearchedCountry(country);
    setRenderContent(true);

    if (country && !visitedCountries.includes(country)) {
      const updatedVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(updatedVisitedCountries);
      localStorage.setItem(
        "visitedCountries",
        JSON.stringify(updatedVisitedCountries)
      );
    }
  };

  const handleZoomChange = (newZoomLevel) => {
    setZoomLevel(newZoomLevel);
  };

  return (
    <div className="App">
      <Header
        onSearch={handleSearch}
        visitedCountries={visitedCountries}
        setVisitedCountries={setVisitedCountries}
      />

      {renderContent ? (
        <ResponsiveLayout
          searchedCountry={searchedCountry}
          onZoomChange={handleZoomChange}
          zoomLevel={zoomLevel}
        />
      ) : (
        <PlaceholderHeader />
      )}

      <Footer />
    </div>
  );
}

export default App;
