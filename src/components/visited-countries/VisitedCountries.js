import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./VisitedCountries.css";

const VisitedCountries = ({
  visitedCountries,
  onClearVisitedCountries,
  onCountryClick,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClear = () => {
    onClearVisitedCountries();
    handleClose();
  };

  const handleCountryItemClick = (country) => {
    onCountryClick(country); // Call the handleCountryClick function passed as a prop
    handleClose();
  };

  const modalBody = (
    <Box className="visited-countries-modal">
      <Typography variant="h6" component="h2">
        Visited Countries
      </Typography>
      <ul className="visited-countries-list">
        {visitedCountries.map((country, index) => (
          <li key={index} className="country-item">
            <Button
              onClick={() => handleCountryItemClick(country)}
              variant="outlined"
            >
              {country}
            </Button>
          </li>
        ))}
      </ul>

      <Button
        variant="outlined"
        onClick={handleClear}
        className="clear-visited-countries-btn"
      >
        Clear Visited Countries
      </Button>
    </Box>
  );

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Visited Countries
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="visited-countries-modal-title"
        aria-describedby="visited-countries-modal-description"
      >
        {modalBody}
      </Modal>
    </div>
  );
};

export default VisitedCountries;
