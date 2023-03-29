import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./VisitedCountries.css";

const VisitedCountries = ({ visitedCountries, onClearVisitedCountries }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClear = () => {
    onClearVisitedCountries();
    handleClose();
  };

  const modalBody = (
    <Box className="visited-countries-modal">
      <Typography variant="h6" component="h2">
        Visited Countries
      </Typography>
      <ul className="visited-countries-list">
        {visitedCountries.map((country, index) => (
          <li key={index}>{country}</li>
        ))}
      </ul>
      <Button variant="outlined" onClick={handleClear}>
        Clear Visited Countries
      </Button>
    </Box>
  );

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
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
