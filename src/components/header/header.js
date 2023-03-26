
import React from "react";
import LanguageIcon from '@mui/icons-material/Language';

// CSS.....
import './header.css'

// components 
import SearchBar from "../searchbar/SearchBar";


function Header({
    onSearch,
    onZoomChange,
    zoomLevel,}) {
    return (
        <>
            <div className="titleWrapper">
                <LanguageIcon className="headerIcon" />
                <h1>Global Search</h1>
            </div>
            <div className="header">
                <div className="headerWrapper">
                    <h2>Search the Globe</h2>
                    <p>**User story** Global Search is the educational tool that gives you breaking news from all countries across the globe, as well as latest key data for all countries.
                    </p>
                    <SearchBar
                        onSearch={onSearch}
                        onZoomChange={onZoomChange}
                        zoomLevel={zoomLevel}
                    />
                </div>
            </div>
        </>

    )
}

export default Header;