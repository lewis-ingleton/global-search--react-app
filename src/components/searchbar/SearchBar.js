import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = () => {
    onSearch(searchText);
    setSearchText(""); //to clear search input after clicking the search button
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <TextField
          label="Country"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={handleSearchClick}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
