// CSS
import "./index.css";

// COMPONENTS
import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
import ResponsiveLayout from "./components/responsive-layout/Responsive";

import React, { useState } from "react";

function App() {
  const [searchedCountry, setSearchedCountry] = useState("");

  const handleSearch = (country) => {
    setSearchedCountry(country);
  };

  return (
    <>
      <Header />

      <ResponsiveLayout
        onSearch={handleSearch}
        searchedCountry={searchedCountry}
      />

      <Footer />
    </>
  );
}

export default App;
