import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SearchBar = ({ onSearch, onZoomChange, zoomLevel }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchButtonClick = () => {
    onSearch(searchInput);
  };

  const handleSliderChange = (event, newValue) => {
    onZoomChange(newValue);
  };

  return (
    <div>
      <TextField
        label="Country"
        value={searchInput}
        onChange={handleSearchInput}
      />
      <Button variant="contained" onClick={handleSearchButtonClick}>
        Search
      </Button>
      <Slider
        value={zoomLevel}
        min={1}
        max={20}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default SearchBar;
