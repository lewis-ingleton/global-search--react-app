import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// CSS 
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  


  const handleSearchClick = () => {
    checkEmptySearch();
    onSearch(searchText);
    setSearchText(""); //to clear search input after clicking the search
    
  };

  // To validate the search input is not empty
  const checkEmptySearch = () => {
    if (searchText !== "") {
      onSearch(searchText);
    } else {
      alert("Please enter a valid country name!");
    }
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
