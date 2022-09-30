import React, { useState } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './About.css';
import Split from '../../components/split/Split';

const About = () => {
    const [translate, setTranslate] = useState(false);
    const handleTranslate = () => {
        setTranslate(!translate);
    }
    
    return (
        <>
            {/* Translation button */}
            <button className='translateBtn' onClick={handleTranslate}>
                <p className='translate'>
                    {translate ? 'Fr' : 'En'}
                </p>
            </button>
            <Navbar data={translate} />
            <div>
                <h1>About</h1>
            </div>
            <Split data={translate} />
            <Footer data={translate} />
        </>
    );
}

export default About;