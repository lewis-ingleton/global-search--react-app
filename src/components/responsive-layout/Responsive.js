import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useMediaQuery, useTheme } from "@mui/material";

// CSS
import "./Responsive.css";

// Components
import Map from "../map/Map";
import ZoomSlider from "../zoom-slider/ZoomSlider";
import NewsApi from "../news-api/NewsApi";
import CountryName from "../country-name/CountryName";
import CountryInfo from "../country-info/countryInfo";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveLayout({
  searchedCountry,
  onZoomChange,
  zoomLevel,
}) {
  const theme = useTheme();
  const mediaSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {mediaSM ? (
        <Box sx={{ width: 0.9 }} className="smallWrapper">
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 12">
              <Item className="countryName">
                <CountryName country={searchedCountry} />
              </Item>
            </Box>
            <Box gridColumn="span 12">
              <Item className="countryInfo">
                <CountryInfo country={searchedCountry} />
              </Item>
            </Box>
            <Box gridColumn="span 12">
              <Item className="map-container">
                <Map country={searchedCountry} zoomLevel={zoomLevel} />
                <ZoomSlider onZoomChange={onZoomChange} />
              </Item>
            </Box>
            <Box gridColumn="span 12">
              <Item>
                <NewsApi country={searchedCountry} />
              </Item>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box sx={{ width: 0.9 }} className="largeWrapper">
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 12">
              <Item className="countryName">
                <CountryName country={searchedCountry} />
              </Item>
            </Box>
            <Box gridColumn="span 6">
              <Item className="countryInfo">
                <CountryInfo country={searchedCountry} />
              </Item>
            </Box>
            <Box gridColumn="span 6">
              <Item className="map-container">
                <Map country={searchedCountry} zoomLevel={zoomLevel} />
                <ZoomSlider onZoomChange={onZoomChange} />
              </Item>
            </Box>
            <Box gridColumn="span 12">
              <Item className="item">
                {" "}
                <NewsApi country={searchedCountry} />
              </Item>
              <Item className="item"></Item>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
