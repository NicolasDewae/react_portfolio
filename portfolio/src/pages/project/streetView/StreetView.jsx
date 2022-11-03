import React, { useState } from "react";
import "./StreetView.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { streetview } from "../../../config/projectsData";
import { projects } from "../../../config/i18n";
import ScrollToTopBtn from "../../../components/scrollToTopBtn/ScrollToTopBtn";

const StreetView = () => {

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
            <div className="street-view">
                <div className="street-view__container">
                    <div className="street-view__container__title">
                        <h1>{streetview.title}</h1>
                    </div>
                    <div className="street-view__container__content">
                        <div className="street-view__container__content__text">
                            {projects.map((project) => {
                                project = translate ? project.fr : project.en;
                                return ( 
                                    project.map((item) => {
                                        return (
                                            <p>
                                                {item.streetview}
                                            </p>
                                        )
                                    })
                                )    
                            })}
                        </div>
                        <div className="street-view__container__content__image">
                            {streetview.projectImages.map((picture) => {
                                return (
                                    <div key={picture}>
                                        <img src={picture.image} alt={picture.alt} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTopBtn />
            <Footer data={translate} />
        </>
    );
};

export default StreetView;
