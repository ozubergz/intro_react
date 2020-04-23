import React, { Component } from 'react';
import logo from '../images/ff7_logo.png';

class Banner extends Component {
    render() {
        return(
            <div className="banner">
                <img src={logo} alt="FF7 Remake Logo" />
            </div>
        )
    }
}

export default Banner;