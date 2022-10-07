import React, { useState } from "react";
import "./StreetView.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { streetview } from "../../../config/projectsData";
import { projects } from "../../../config/i18n";

const StreetView = () => {
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
                                        <img src={picture} alt="street view" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <Footer data={translate} />
        </>
    );
};

export default StreetView;
