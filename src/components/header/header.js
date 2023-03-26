
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
                    <h1>Global Search</h1>
                    <p>Welcome to Global Search</p>
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