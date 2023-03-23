// CSS
import "./index.css";

// COMPONENTS
import Footer from "./components/footer/Footer";
import ResponsiveLayout from "./components/responsive-layout/Responsive";

import React, { useState } from "react";

function App() {
  const [searchedCountry, setSearchedCountry] = useState("");

  const handleSearch = (country) => {
    setSearchedCountry(country);
  };

  return (
    <>
      <h1>H1: Global Search !!!</h1>
      <h2>H2: Global Search !</h2>
      <h3>H3: Global Search !</h3>
      <h4>H4: Global Search !</h4>
      <p>p: Global Search !</p>
      <ResponsiveLayout
        onSearch={handleSearch}
        searchedCountry={searchedCountry}
      />
      <Footer />
    </>
  );
}

export default App;
