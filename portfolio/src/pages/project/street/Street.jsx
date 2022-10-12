import React, { useState } from "react";
import "./Street.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { street } from "../../../config/projectsData";
import { projects } from "../../../config/i18n";
import ScrollToTopBtn from "../../../components/scrollToTopBtn/ScrollToTopBtn";


const Street = () => {

    // Get translate data
    let defaultValueTranslate = localStorage.getItem('defaultValueTranslate');
    // Convert translate data into a boolean
    defaultValueTranslate = defaultValueTranslate === "false" ? false : true;
    console.log(defaultValueTranslate);
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
            <div className="street">
                <div className="street_container">
                    <div className="street_container_title">
                        <h1>{street.title}</h1>
                    </div>
                    <div className="street_container_content">
                        <div className="street_container_content_text">
                            {projects.map((project) => {
                                project = translate ? project.fr : project.en;
                                return ( 
                                    project.map((item) => {
                                        return (
                                            <p>
                                                {item.street}
                                            </p>
                                        )
                                    })
                                )    
                            })}
                        </div>
                        <div className="street_container_content_image">
                            <div className="single">
                                <img src={street.projectImages.treize} alt="13" />
                            </div>
                            <div className="pair">
                                <img src={street.projectImages.douze} alt="12" />
                                <img src={street.projectImages.onze} alt="11" />
                            </div>
                            <div className="single">
                                <img src={street.projectImages.deux} alt="2" />
                            </div>
                            <div className="pair">
                                <img src={street.projectImages.quatre} alt="4" />
                                <img src={street.projectImages.huit} alt="8" />
                            </div>
                            <div className="pair">
                                <img src={street.projectImages.un} alt="1" />
                                <img src={street.projectImages.six} alt="6" />
                            </div>
                            <div className="pair">
                                <img src={street.projectImages.sept} alt="7" />
                                <img src={street.projectImages.cinq} alt="5" />
                            </div>
                            <div className="single">
                                <img src={street.projectImages.trois} alt="3" />
                            </div>
                            <div className="pair">
                                <img src={street.projectImages.neuf} alt="9" />
                                <img src={street.projectImages.dix} alt="10" />
                            </div>
                            {/* <div className="single">
                                <img src={street.projectImages.quatorze} alt="14" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTopBtn />
            <Footer data={translate} />
        </>
    )
}

export default Street;