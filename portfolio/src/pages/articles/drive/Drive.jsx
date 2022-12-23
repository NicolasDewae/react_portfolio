import React, { useState } from "react";
import "./Drive.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import ScrollToTopBtn from "../../../components/scrollToTopBtn/ScrollToTopBtn";
import Split from "../../../components/split/Split";
import drive from "../../../data/articles/drive";

const Drive = () => {
    
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
            <Navbar data={translate}/>
            <div className="drive">
                <div className="drive__container">
                    <div className="drive__container__title">
                        <h1>{drive.title.title1}</h1>
                    </div>
                    <div className="her__container__content__title2">
                        <h2>{drive.title.title2.introduction}</h2>
                    </div>
                    <div className="her__container__content__paragraphe">
                        <p>{drive.paragraphe.p1}</p>
                    </div>
                    <div className="her__container__content__title2">
                        <h2>{drive.title.title2.regardFuyant}</h2>
                    </div>
                    <div className="her__container__content__image">
                        <img src={drive.picture.img3.src} alt={drive.picture.img3.alt} />
                    </div>
                    <div className="her__container__content__paragraphe">
                        <p>{drive.paragraphe.p2}</p>
                    </div>
                    <div className="her__container__content__image">
                        <img src={drive.picture.img2.src} alt={drive.picture.img2.alt} />
                    </div>
                    <div className="her__container__content__paragraphe">
                        <p>{drive.paragraphe.p3}</p>
                    </div>
                    <div className="her__container__content__image">
                        <img src={drive.picture.img11.src} alt={drive.picture.img11.alt} />
                    </div>
                    <div className="her__container__content__title2">
                        <h2>{drive.title.title2.couleurs}</h2>
                    </div>
                    <div className="her__container__content__paragraphe">
                        <p>{drive.paragraphe.p4[0]}</p>
                        <p>{drive.paragraphe.p4[1]}</p>
                    </div>
                    <div className="her__container__content__image">
                        <img src={drive.picture.img5.src} alt={drive.picture.img5.alt} />
                    </div>
                    <div className="her__container__content__image">
                        <img src={drive.picture.img14.src} alt={drive.picture.img14.alt} />
                    </div>
                    <div className="her__container__content__paragraphe">
                        <p>{drive.paragraphe.p5[0]}</p>
                    </div>
                    <div className="her__container__content__image">
                        <img src={drive.picture.img8.src} alt={drive.picture.img8.alt} />
                    </div>
                    <div className="her__container__content__paragraphe">
                        <p>{drive.paragraphe.p5[1]}</p>
                        <p>{drive.paragraphe.p5[2]}</p>
                    </div>
                    <div className="her__container__content__image">
                        <img src={drive.picture.img4.src} alt={drive.picture.img4.alt} />
                    </div>
                    <div className="her__container__content__paragraphe">
                        <p>{drive.paragraphe.p6[0]}</p>
                        <p>{drive.paragraphe.p6[1]}</p>
                        <p>{drive.paragraphe.p6[2]}</p>
                    </div>
                    <div className="her__container__content__image">
                        <img src={drive.picture.img9.src} alt={drive.picture.img9.alt} />
                    </div>
                    <div className="her__container__content__image">
                        <img src={drive.picture.img10.src} alt={drive.picture.img10.alt} />
                    </div>
                    <div className="her__container__content__title2">
                        <h2>{drive.title.title2.contreJour}</h2>
                    </div>
                    <div className="her__container__content__image">
                        <img src={drive.picture.img15.src} alt={drive.picture.img15.alt} />
                    </div>
                    <div className="her__container__content__paragraphe">
                        <p>{drive.paragraphe.p8}</p>
                    </div>
                    <div className="her__container__content__title2">
                        <h2>{drive.title.title2.spoiler}</h2>
                    </div>
                    <div className="her__container__content__paragraphe">
                        <p>{drive.paragraphe.p9[0]}</p>
                        <p>{drive.paragraphe.p9[1]}</p>
                        <p>{drive.paragraphe.p9[2]}</p>
                    </div>
                    <div className="her__container__content__image">
                        <img src={drive.picture.img13.src} alt={drive.picture.img13.alt} />
                    </div>
                    <div className="her__container__content__image">
                        <img src={drive.picture.img7.src} alt={drive.picture.img7.alt} />
                    </div>
                    <div className="her__container__content__image">
                        <img src={drive.picture.img6.src} alt={drive.picture.img6.alt} />
                    </div>
                    <div className="her__container__content__image">
                        <img src={drive.picture.img17.src} alt={drive.picture.img17.alt} />
                    </div>
                    <div className="her__container__content__title2">
                        <h2>{drive.title.title2.streetsOfRage}</h2>
                    </div>
                    <div className="her__container__content__image">
                        <img src={drive.picture.img12.src} alt={drive.picture.img12.alt} />
                    </div>
                    <div className="her__container__content__paragraphe">
                        <p>{drive.paragraphe.p10[0]}</p>
                        <p>{drive.paragraphe.p10[1]}</p>
                        <p>{drive.paragraphe.p10[2]}</p>
                    </div>
                    <div className="her__container__content__image">
                        <img src={drive.picture.img16.src} alt={drive.picture.img16.alt} />
                    </div>
                    <div className="her__container__content__paragraphe">
                        <p>{drive.paragraphe.p11}</p>
                    </div>
                </div>
            </div>
            <Split />
            <Footer data={translate} />
            <ScrollToTopBtn />
        </>
    );
};

export default Drive;