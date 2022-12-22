import React, { useState } from "react";
import "./Confinement.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { confinement } from "../../../data/projectsData";
import { projects } from "../../../data/i18n";
import ScrollToTopBtn from "../../../components/scrollToTopBtn/ScrollToTopBtn";

const Confinement = () => {

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
            <div className="confinement">
                <div className="confinement_container">
                    <div className="confinement_container_title">
                        <h1>{confinement.title}</h1>
                    </div>
                    <div className="confinement_container_content">
                        <div className="confinement_container_content_text">
                            {projects.map((project) => {
                                project = translate ? project.fr : project.en;
                                return ( 
                                    project.map((item) => {
                                        return (
                                            <p>
                                                {item.confinement}
                                            </p>
                                        )
                                    })
                                )    
                            })}
                        </div>
                        <div className="confinement_container_content_image">
                            {/* inside */}
                            <div className="single">
                                <img src={confinement.projectImages.un.image} alt={confinement.projectImages.un.alt} />
                            </div>
                            <div className="single">
                                <img src={confinement.projectImages.seize.image} alt={confinement.projectImages.seize.alt} />
                            </div>
                            <div className="pair">
                                <img src={confinement.projectImages.deux.image} alt={confinement.projectImages.deux.alt} />
                                <img src={confinement.projectImages.trois.image} alt={confinement.projectImages.trois.alt} />
                            </div>
                            <div className="pair">
                                <img src={confinement.projectImages.quatre.image} alt={confinement.projectImages.quatre.alt} />
                                <img src={confinement.projectImages.six.image} alt={confinement.projectImages.six.alt} />
                            </div>
                            <div className="single">
                                <img src={confinement.projectImages.vingt.image} alt={confinement.projectImages.vingt.alt} />
                            </div>
                            <div className="pair">
                                <img src={confinement.projectImages.sept.image} alt={confinement.projectImages.sept.alt} />
                                <img src={confinement.projectImages.dix.image} alt={confinement.projectImages.dix.alt} />
                            </div>
                            <div className="pair">
                                <img src={confinement.projectImages.cinq.image} alt={confinement.projectImages.cinq.alt} />
                                <img src={confinement.projectImages.neuf.image} alt={confinement.projectImages.neuf.alt} />
                            </div>
                            {/* outside */}
                            <div className="single">
                                <img src={confinement.projectImages.huit.image} alt={confinement.projectImages.huit.alt} />
                            </div>
                            <div className="pair">
                                <img src={confinement.projectImages.quatorze.image} alt={confinement.projectImages.quatorze.alt} />
                                <img src={confinement.projectImages.quinze.image} alt={confinement.projectImages.quinze.alt} />
                            </div>
                            <div className="single">
                                <img src={confinement.projectImages.douze.image} alt={confinement.projectImages.douze.alt} />
                            </div>
                            <div className="pair">
                                <img src={confinement.projectImages.onze.image} alt={confinement.projectImages.onze.alt} />
                                <img src={confinement.projectImages.vingtun.image} alt={confinement.projectImages.vingtun.alt} />
                            </div>
                            <div className="single">
                                <img src={confinement.projectImages.treize.image} alt={confinement.projectImages.treize.alt} />
                            </div>
                            <div className="single">
                                <img src={confinement.projectImages.dixhuit.image} alt={confinement.projectImages.dixhuit.alt} />
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

export default Confinement;