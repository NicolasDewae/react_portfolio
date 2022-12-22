import React, { useState } from "react";
import "./Canaries.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { canaries } from "../../../data/projectsData";
import { projects } from "../../../data/i18n";
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
                                <img src={canaries.projectImages.un.image} alt={canaries.projectImages.un.alt} />
                                <img src={canaries.projectImages.deux.image} alt={canaries.projectImages.deux.alt} />
                            </div>
                            <div className="pair">
                                <img src={canaries.projectImages.six.image} alt={canaries.projectImages.six.alt} />
                                <img src={canaries.projectImages.cinq.image} alt={canaries.projectImages.cinq.alt} />
                            </div>
                            <div className="pair">
                                <img src={canaries.projectImages.trois.image} alt={canaries.projectImages.trois.alt} />
                                <img src={canaries.projectImages.quatre.image} alt={canaries.projectImages.quatre.alt} />
                                <img src={canaries.projectImages.neuf.image} alt={canaries.projectImages.neuf.alt} />
                            </div>
                            <div className="pair">
                                <img src={canaries.projectImages.huit.image} alt={canaries.projectImages.huit.alt} />
                                <img src={canaries.projectImages.dix.image} alt={canaries.projectImages.dix.alt} />
                            </div>
                            <div className="single">
                                <img src={canaries.projectImages.douze.image} alt={canaries.projectImages.douze.alt} />
                            </div>
                            <div className="pair">
                                <img src={canaries.projectImages.onze.image} alt={canaries.projectImages.onze.alt} />
                                <img src={canaries.projectImages.treize.image} alt={canaries.projectImages.treize.alt} />
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