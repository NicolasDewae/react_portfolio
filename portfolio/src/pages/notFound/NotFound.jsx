import React, { useState } from 'react';
import "./NotFound.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import Split from "../../components/split/Split";
import ScrollToTopBtn from "../../components/scrollToTopBtn/ScrollToTopBtn";
import { notFound } from "../../config/i18n";

const NotFound = () => {

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
            {notFound.map((text) => {
                text = translate ? text.fr : text.en;
                return (
                    text.map((item) => {
                        return (
                            <div className="notFound">
                                <div className="notFound__content">
                                    <h1>{item.title}</h1>
                                    <h2>{item.subTitle}</h2>
                                    <p>{item.message}</p>
                                    <Link to="/">
                                        <a className="button">{item.button}</a>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                )
            })}
            <div>
                <Split />
            </div>
            <Footer />
            <ScrollToTopBtn />
        </>
    )}

export default NotFound;
