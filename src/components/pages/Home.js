import React from 'react';
import background from '../../assets/coffee-5518359_1920.jpg'

export default function Home() {
    return (
    
    <div className='home-container'>
        <img className='home-hero-image' src={background} alt="background of tables and chairs inside a cafe"/>
        <div className="home-text">
        <h1>Full-Stack Developer</h1>
        <h2>Coffee+Lover Outdoor+Adventurer</h2>
        <h2>Musician Craftsman</h2>
        <h2>Friend</h2>
        </div>
    </div>
    
    );
}