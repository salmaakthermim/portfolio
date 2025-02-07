import React from 'react';
import Navbar from '../Nabvar';
import Hero from '../Hero';
import AboutMe from '../AboutMe';
import PortfolioShowcase from '../PortfolioShowcase';
import ContactMe from '../ContactMe';
import Footer from './Footer';
import Snowfall from '../Snowfall';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto '>
            <Snowfall></Snowfall>
            <Navbar></Navbar>
            <Hero></Hero>
            <div className='/about'>
            <AboutMe ></AboutMe>
            </div>
            <PortfolioShowcase></PortfolioShowcase>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;