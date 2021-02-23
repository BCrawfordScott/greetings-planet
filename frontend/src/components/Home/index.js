import React from 'react';
import './Home.css';
import globe from './planet-earth.svg'

export default (props) => {
    return (
        <div className="home">
            <marquee>
                <h1>Hello World!</h1>
            </marquee>

            <img src={globe} />
        </div>
    )
}
