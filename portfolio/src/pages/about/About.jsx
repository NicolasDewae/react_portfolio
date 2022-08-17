import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './About.css';
import Split from '../../components/split/Split';

const About = () => {
    return (
        <>
            <Navbar />
            <div>
                <h1>About</h1>
            </div>
            <Split />
            <Footer/>
        </>
    );
}

export default About;