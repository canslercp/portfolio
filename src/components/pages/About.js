import React from 'react';
import me from '../../assets/Me.jpg';

export default function About() {
    return (
        <div className="bio">
            <img className="me-image" src={me} alt="Corbin Cansler head-shot" />
            <p className="bio-text">
            Hello there, I am a Full-Stack Web Developer with a passion for learning and a strong foundation in problem solving, 
            pattern recognition, and logic, established through my degree in mathematics. I am an effective 
            communicator and team player, demonstrated throughout the Georgia Tech Coding Bootcamp 
            Certificate Program, where I kept open and regular communication with my teammates while working 
            on projects together. I exhibit strong time management and leadership skills, acquired during my 
            time as a High School Math Teacher, where I balanced instruction, planning, professional 
            development, and leading the Math 1 instructional team. My experience as an educator required me 
            to continue to learn and apply new teaching methodologies and in doing so, I was awarded 
            Beginning Teacher of the Year! I look forward to continuing to expand my skills and explore new 
            technologies in this exciting and ever-changing industry. Current web development skills include:
            HTML, CSS, JavaScript, React, Node.js, Express.js, OOP, Git, MySQL, MongoDB, GraphQL, TDD, MVC, 
            ORM, RESTful API, Third-Party API, jQuery, and Bootstrap
            </p>
        </div>
    );
}