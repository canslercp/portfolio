import React from 'react';
import rerun from '../../assets/rerun-app.png'
import finalCountdown from '../../assets/final-countdown-app.png'
import weather from '../../assets/weather-app.png'

export default function Projects() {
    return (
        
        <div class='projects'>
            
            <a href='https://canslercp.github.io/the_final_countdown/' target="_blank" rel="noreferrer">
            <img className='project-image' src={finalCountdown} alt='A front-end, doomsday tracker where you click through and save recent disaster data'/>
            </a>
            <a href='https://rerun-game.herokuapp.com/' target="_blank" rel="noreferrer">
            <img className='project-image' src={rerun} alt='A text-based interactive fiction game where you must beat the clock, or Rerun!'/>
            </a>
            <a href='https://canslercp.github.io/weather-dashboard-corbin-cansler/' target="_blank" rel="noreferrer">
            <img className='project-image' src={weather} alt='A  weather dashboard that will run in the browser and use the OpenWeather One Call API to retrieve weather data for cities.'/>
            </a>
        </div>
    );
}