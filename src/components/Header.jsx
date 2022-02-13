import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='app-header'>
            <div className="app-header-wrapper">
                <div className="app-logo">
                    <a href="/" className='logo'>Weather</a>
                </div>
                <div className="app-search">
                    <input type="text" className='search-bar' placeholder='Search by City name, IP address, Latitude/Longitude etc'/>
                </div>
            </div>
        </div>
    );
}

export default Header;