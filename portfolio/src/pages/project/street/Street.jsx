import React, { useState } from "react";
import "./Street.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { street } from "../../../data/projectsData";
import { projects } from "../../../data/i18n";
import ScrollToTopBtn from "../../../components/scrollToTopBtn/ScrollToTopBtn";


const Street = () => {

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
                                <img src={street.projectImages.treize.image} alt={street.projectImages.treize.alt} />
                            </div>
                            <div className="pair">
                                <img src={street.projectImages.douze.image} alt={street.projectImages.douze.alt} />
                                <img src={street.projectImages.onze.image} alt={street.projectImages.onze.alt} />
                            </div>
                            <div className="single">
                                <img src={street.projectImages.deux.image} alt={street.projectImages.deux.alt} />
                            </div>
                            <div className="pair">
                                <img src={street.projectImages.quatre.image} alt={street.projectImages.quatre.alt} />
                                <img src={street.projectImages.huit.image} alt={street.projectImages.huit.alt} />
                            </div>
                            <div className="pair">
                                <img src={street.projectImages.un.image} alt={street.projectImages.un.alt} />
                                <img src={street.projectImages.six.image} alt={street.projectImages.six.alt} />
                            </div>
                            <div className="pair">
                                <img src={street.projectImages.sept.image} alt={street.projectImages.sept.alt} />
                                <img src={street.projectImages.cinq.image} alt={street.projectImages.cinq.alt} />
                            </div>
                            <div className="single">
                                <img src={street.projectImages.trois.image} alt={street.projectImages.trois.alt} />
                            </div>
                            <div className="pair">
                                <img src={street.projectImages.neuf.image} alt={street.projectImages.neuf.alt} />
                                <img src={street.projectImages.dix.image} alt={street.projectImages.dix.alt} />
                            </div>
                            <div className="single">
                                <img src={street.projectImages.quatorze.image} alt={street.projectImages.quatorze.alt} />
                            </div>
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