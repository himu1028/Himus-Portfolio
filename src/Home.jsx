import React from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';
import CardSection from './CardSection';

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <About></About>
        <Projects></Projects>
        <CardSection></CardSection>
        <Education></Education>
        <Contact></Contact>
        </div>
    );
};

export default Home;