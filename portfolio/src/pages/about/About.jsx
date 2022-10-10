import React, { useState } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './About.css';
import Split from '../../components/split/Split';
import { about } from '../../config/i18n';
import ScrollToTopBtn from '../../components/scrollToTopBtn/ScrollToTopBtn';


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
            {about.map((text) => {
                text = translate ? text.fr : text.en;
                return (
                    text.map((item) => {
                        return (
                            <div className="about">
                                <h1>{item.title}</h1>
                                <h2>{item.message}</h2>
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