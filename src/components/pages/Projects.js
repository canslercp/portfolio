import React from 'react';
import rerun from '../../assets/rerun-app.png'
import finalCountdown from '../../assets/final-countdown-app.png'
import weather from '../../assets/weather-app.png'

export default function Projects() {
    return (
        <div>
            <a href='https://rerun-game.herokuapp.com/'>
            <img src={rerun} alt='A text-based interactive fiction game where you must beat the clock, or Rerun!'/>
            </a>
            <a href='https://canslercp.github.io/the_final_countdown/'>
            <img src={finalCountdown} alt='A front-end, doomsday tracker where you click through and save recent disaster data'/>
            </a>
            <a href='https://canslercp.github.io/weather-dashboard-corbin-cansler/'>
            <img src={weather} alt='A  weather dashboard that will run in the browser and use the OpenWeather One Call API to retrieve weather data for cities.'/>
            </a>
        </div>
    );
}