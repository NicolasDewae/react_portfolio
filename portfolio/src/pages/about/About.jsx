import React, { useState } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './About.css';
import Split from '../../components/split/Split';
import { about } from '../../data/i18n';
import ScrollToTopBtn from '../../components/scrollToTopBtn/ScrollToTopBtn';


const About = () => {
    
    // Get translate data
    let defaultValueTranslate = localStorage.getItem('defaultValueTranslate');
    // Convert translate data into a boolean
    defaultValueTranslate = defaultValueTranslate === "false" ? false : true;

    const [translate, setTranslate] = useState(defaultValueTranslate);
    const handleTranslate = () => {
        localStorage.setItem('defaultValueTranslate', !translate);  
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
            {about.map((text) => {
                text = translate ? text.fr : text.en;
                return (
                    text.map((item) => {
                        return (
                            <div className="about">
                                <h1>{item.title2}</h1>
                                <p>{item.message[0]}</p>
                                <p>{item.message[1]}</p>
                                <p>{item.message[2]}</p>
                                <p>{item.message[3]}</p>
                            </div>
                        )
                    })
                )
            })}
            <Split data={translate} />
            <ScrollToTopBtn />
            <Footer data={translate} />
        </>
    );
}

export default About;