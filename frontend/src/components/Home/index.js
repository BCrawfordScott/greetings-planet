import React from 'react';
import './Home.css';
import globe from './planet-earth.svg'
import GreetingIndex from '../GreetingIndex';

export default (props) => {
    return (
        <div className="home">
            <marquee>
                <h1>Hello World!</h1>
            </marquee>

            <img src={globe} />

            <h2>So many greetings!</h2>
            <GreetingIndex />
        </div>
    )
}
