
import React from "react";
import LanguageIcon from '@mui/icons-material/Language';

// CSS 
import './Header.css'

// components 

function Header() {
    return (
        <>
            <div className="header">
                <LanguageIcon className="headerIcon" />
                <div className="headerWrapper">
                    <h1>Global Search</h1>
                    <input type="text"></input>
                </div>
            </div>
        </>

    )
}

export default Header;