import React from 'react';
// Web app images
import rerun from '../../assets/rerun-app.png'
import finalCountdown from '../../assets/final-countdown-app.png'
import weather from '../../assets/weather-app.png'
// Tecnology icons
import github from '../../assets/GitHub-Mark-64px.png'
import css from '../../assets/css.png'
import express from '../../assets/express.png'
import graphql from '../../assets/graphql.png'
import handlebars from '../../assets/handlebars.png'
import heroku from '../../assets/heroku.png'
import html from '../../assets/HTML.webp'
import javascript from '../../assets/javascript.png'
import mongodb from '../../assets/mongodb.png'
import mysql from '../../assets/mysql-logo.png'
import node from '../../assets/node-js.png'
import npm from '../../assets/npm.png'
import openWeather from '../../assets/OpenWeather-Logo.jpeg'
import react from '../../assets/react.webp'
import sequelize from '../../assets/sequelize.png'
import bootstrap from '../../assets/bootstrap.png'
import jquery from '../../assets/jquery.png'

export default function Projects() {
    return (
        
        <div className='project-container'>
            <div className='project'>
            <a href='https://canslercp.github.io/the_final_countdown/' target="_blank" rel="noreferrer">
            <img className='project-image' src={finalCountdown} alt='A front-end, doomsday tracker where you click through and save recent disaster data'/>
            </a>
            <div className='project-description'>
            <p>Front-end doomsday tracker where you click through and save recent disaster data</p>
            {/* div for github link and tech used */}
            <div className='project-tech'>
                <a href='https://github.com/canslercp/the_final_countdown' target="_blank" rel="noreferrer">
                <img className='tech-icon' src={github} alt='GitHub'/>
                </a>
                <a href='https://www.javascript.com/' target="_blank" rel="noreferrer">
                <img className='tech-icon' src={javascript} alt='Javascript'/>
                </a>
                <a href='https://www.w3schools.com/css/' target="_blank" rel="noreferrer">
                <img className='tech-icon' src={css} alt='CSS'/>
                </a>
                <a href='https://www.w3schools.com/html/' target="_blank" rel="noreferrer">
                <img className='tech-icon' src={html} alt='HTML'/>
                </a>
                <a href='https://getbootstrap.com/' target="_blank" rel="noreferrer">
                <img className='tech-icon' src={bootstrap} alt='Bootstrap'/>
                </a>
                <a href='https://jquery.com/' target="_blank" rel="noreferrer">
                <img className='tech-icon' src={jquery} alt='jQuery'/>
                </a>
            </div>
            </div>
            </div>
            <div className='project'>
            <a href='https://rerun-game.herokuapp.com/' target="_blank" rel="noreferrer">
            <img className='project-image' src={rerun} alt='A text-based interactive fiction game where you must beat the clock, or Rerun!'/>
            </a>
            <div className='project-description'>
            <p>A Full-Stack, Text-based, speed-run adventure game where you play to beat the clock</p>
            {/* div for github link and tech used */}
            <div className='project-tech'>
                <a href='https://github.com/canslercp/rerun-game' target="_blank" rel="noreferrer">
                <img className='tech-icon' src={github} alt='GitHub'/>
                </a>
                <a href='https://www.javascript.com/' target="_blank" rel="noreferrer">
                <img className='tech-icon' src={javascript} alt='Javascript'/>
                </a>
                <a href='https://www.w3schools.com/css/' target="_blank" rel="noreferrer">
                <img className='tech-icon' src={css} alt='CSS'/>
                </a>
                <a href='https://www.w3schools.com/html/' target="_blank" rel="noreferrer">
                <img className='tech-icon' src={html} alt='HTML'/>
                </a>
                <a href='https://getbootstrap.com/' target="_blank" rel="noreferrer">
                <img className='tech-icon' src={bootstrap} alt='Bootstrap'/>
                </a>
                <a href='https://expressjs.com/' target="_blank" rel="noreferrer">
                <img className='tech-icon' src={express} alt='Express.js'/>
                </a>
                <a href='https://nodejs.org/en/' target="_blank" rel="noreferrer">
                <img className='tech-icon' src={node} alt='Node.js'/>
                </a>
                <a href='https://www.mysql.com/' target="_blank" rel="noreferrer">
                <img className='tech-icon' src={mysql} alt='MySQL'/>
                </a>
                <a href='https://sequelize.org/' target="_blank" rel="noreferrer">
                <img className='tech-icon' src={sequelize} alt='Sequelize'/>
                </a>
                <a href='https://www.npmjs.com/' target="_blank" rel="noreferrer">
                <img className='tech-icon' src={npm} alt='NPM'/>
                </a>
                <a href='https://handlebarsjs.com/' target="_blank" rel="noreferrer">
                <img className='tech-icon' src={handlebars} alt='Handlebars.js'/>
                </a>
                <a href='https://heroku.com/' target="_blank" rel="noreferrer">
                <img className='tech-icon' src={heroku} alt='Heroku'/>
                </a>
            </div>
            </div>
            </div>
            <div className='project'>
            <a href='https://canslercp.github.io/weather-dashboard-corbin-cansler/' target="_blank" rel="noreferrer">
            <img className='project-image' src={weather} alt='A  weather dashboard that will run in the browser and use the OpenWeather One Call API to retrieve weather data for cities.'/>
            </a>
            <div className='project-description'>
            <p>A weather dashboard that runs in the browser and uses the OpenWeather One Call API to retrieve weather data for cities.</p>
            {/* div for github link and tech used */}
            <div className='project-tech'>
                <a href='https://github.com/canslercp/the_final_countdown' target="_blank" rel="noreferrer">
                <img className='tech-icon' src={github} alt='GitHub'/>
                </a>
                <a href='https://www.javascript.com/' target="_blank" rel="noreferrer">
                <img className='tech-icon' src={javascript} alt='Javascript'/>
                </a>
                <a href='https://www.w3schools.com/css/' target="_blank" rel="noreferrer">
                <img className='tech-icon' src={css} alt='CSS'/>
                </a>
                <a href='https://www.w3schools.com/html/' target="_blank" rel="noreferrer">
                <img className='tech-icon' src={html} alt='HTML'/>
                </a>
                <a href='https://getbootstrap.com/' target="_blank" rel="noreferrer">
                <img className='tech-icon' src={bootstrap} alt='Bootstrap'/>
                </a>
                <a href='https://openweathermap.org/api' target="_blank" rel="noreferrer">
                <img className='tech-icon' src={openWeather} alt='Open Weather API'/>
                </a>
            </div >
            </div>
            </div>
        </div >
    );
}