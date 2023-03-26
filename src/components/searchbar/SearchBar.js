import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = () => {
    onSearch(searchText);
  };

  return (
    <Box
      component="form"
      className={styles.searchBarForm}
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <TextField
        label="Country"
        variant="outlined"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="searchBar"
      />
      <Button variant="contained" type="submit" className="button">
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
