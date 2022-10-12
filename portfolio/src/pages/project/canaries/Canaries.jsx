import React, { useState } from "react";
import "./Canaries.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { canaries } from "../../../config/projectsData";
import { projects } from "../../../config/i18n";
import ScrollToTopBtn from "../../../components/scrollToTopBtn/ScrollToTopBtn";

const Canaries = () => {

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
            <div className="canaries">
                <div className="canaries_container">
                    <div className="canaries_container_title">
                        <h1>{canaries.title}</h1>
                    </div>
                    <div className="canaries_container_content">
                        <div className="canaries_container_content_text">
                            {projects.map((project) => {
                                project = translate ? project.fr : project.en;
                                return ( 
                                    project.map((item) => {
                                        return (
                                            <p>
                                                {item.canaries}
                                            </p>
                                        )
                                    })
                                )    
                            })}
                        </div>
                        <div className="canaries_container_content_image">
                            <div className="pair">
                                <img src={canaries.projectImages.un} alt="canaries" />
                                <img src={canaries.projectImages.deux} alt="canaries" />
                            </div>
                            <div className="pair">
                                <img src={canaries.projectImages.six} alt="canaries" />
                                <img src={canaries.projectImages.cinq} alt="canaries" />
                            </div>
                            <div className="pair">
                                <img src={canaries.projectImages.trois} alt="canaries" />
                                <img src={canaries.projectImages.quatre} alt="canaries" />
                                <img src={canaries.projectImages.neuf} alt="canaries" />
                            </div>
                            <div className="pair">
                                <img src={canaries.projectImages.huit} alt="canaries" />
                                <img src={canaries.projectImages.dix} alt="canaries" />
                            </div>
                            <div className="single">
                                <img src={canaries.projectImages.douze} alt="canaries" />
                            </div>
                            <div className="pair">
                                <img src={canaries.projectImages.onze} alt="canaries" />
                                <img src={canaries.projectImages.treize} alt="canaries" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTopBtn />
            <Footer data={translate} />
        </>
    );
}

export default Canaries;