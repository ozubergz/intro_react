import React from 'react';
import logo from '../images/ff7_logo.png';

const TopBanner = () => {
    return(
        <div className="banner_container">
            <img src={logo} className="banner_logo" />
        </div>
    )
}

export default TopBanner;