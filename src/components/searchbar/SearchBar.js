import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// CSS 
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = () => {
    onSearch(searchText);

    scrollPage();
  };

  const scrollPage = () => {
    window.scrollTo(0, document.body.scrollHeight);

  };

  return (
    <>
    <TextField
          className="textField"
          label="Country"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearchClick} className="button">
          Search
        </Button>
    </>
  );
};

export default SearchBar;
