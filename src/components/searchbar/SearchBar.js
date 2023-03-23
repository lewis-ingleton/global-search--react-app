import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import styles from "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    onSearch(searchValue);
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
      />
      <Button variant="contained" color="primary" type="submit">
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
