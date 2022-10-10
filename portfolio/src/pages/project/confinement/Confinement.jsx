import React, { useState } from "react";
import "./Confinement.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { confinement } from "../../../config/projectsData";
import { projects } from "../../../config/i18n";
import ScrollToTopBtn from "../../../components/scrollToTopBtn/ScrollToTopBtn";

const Confinement = () => {
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
                                <img src={confinement.projectImages.un} alt="confinement" />
                            </div>
                            <div className="single">
                                <img src={confinement.projectImages.seize} alt="confinement" />
                            </div>
                            <div className="pair">
                                <img src={confinement.projectImages.deux} alt="confinement" />
                                <img src={confinement.projectImages.trois} alt="confinement" />
                            </div>
                            <div className="pair">
                                <img src={confinement.projectImages.quatre} alt="confinement" />
                                <img src={confinement.projectImages.six} alt="confinement" />
                            </div>
                            <div className="single">
                                <img src={confinement.projectImages.vingt} alt="confinement" />
                            </div>
                            <div className="pair">
                                <img src={confinement.projectImages.sept} alt="confinement" />
                                <img src={confinement.projectImages.dix} alt="confinement" />
                            </div>
                            <div className="pair">
                                <img src={confinement.projectImages.cinq} alt="confinement" />
                                <img src={confinement.projectImages.neuf} alt="confinement" />
                            </div>
                            {/* outside */}
                            <div className="single">
                                <img src={confinement.projectImages.huit} alt="confinement" />
                            </div>
                            <div className="pair">
                                <img src={confinement.projectImages.quatorze} alt="confinement" />
                                <img src={confinement.projectImages.quinze} alt="confinement" />
                            </div>
                            <div className="single">
                                <img src={confinement.projectImages.douze} alt="confinement" />
                            </div>
                            <div className="pair">
                                <img src={confinement.projectImages.onze} alt="confinement" />
                                <img src={confinement.projectImages.vingtun} alt="confinement" />
                            </div>
                            <div className="single">
                                <img src={confinement.projectImages.treize} alt="confinement" />
                            </div>
                            <div className="single">
                                <img src={confinement.projectImages.dixhuit} alt="confinement" />
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