import React from "react";
import { Slider } from "@mui/material";

const ZoomSlider = ({ onZoomChange }) => {
  const handleChange = (event, newValue) => {
    onZoomChange(newValue);
  };

  return (
    <Slider
      aria-label="Zoom"
      defaultValue={5}
      valueLabelDisplay="auto"
      step={1}
      marks
      min={1}
      max={10}
      onChange={handleChange}
    />
  );
};

export default ZoomSlider;
