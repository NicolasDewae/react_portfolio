import React, { useState } from "react";
import "./Her.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import ScrollToTopBtn from "../../../components/scrollToTopBtn/ScrollToTopBtn";
import Split from "../../../components/split/Split";
import her from "../../../config/articles/her";

const Her = () => {

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
            <div className="her">
                <div className="her__container">
                    <div className="her__container__content">
                        <div className="her__container__content__title">
                            <h1>{her.title1}</h1>
                        </div>
                        <div className="her__container__content__title2">
                            <h2>{her.title2.introduction}</h2>
                        </div>
                        <div className="her__container__content__title3">
                            <h3>{her.title3.synopsis}</h3>
                        </div>
                        <div className="her__container__content__paragraphe">
                            <p>{her.paragraphe.paragraphe1}</p>
                        </div>
                        <div className="her__container__content__image">
                            <img src={her.picture.img1.img} alt={her.picture.img1.alt} />
                        </div>
                        <div className="her__container__content__paragraphe">
                            <p>{her.paragraphe.paragraphe2[0]}</p>
                            <p>{her.paragraphe.paragraphe2[1]}</p>
                            <p>{her.paragraphe.paragraphe2[2]}</p>
                            <p>{her.paragraphe.paragraphe2[3]}</p>
                        </div>
                        <div className="her__container__content__image">
                            <img src={her.picture.img3.img} alt={her.picture.img3.alt} />
                        </div>
                        <div className="her__container__content__title2">
                            <h2>{her.title2.solitude}</h2>
                        </div>
                            <div className="her__container__content__paragraphe">
                                <p>{her.paragraphe.paragraphe3[0]}</p>
                                <p>{her.paragraphe.paragraphe3[1]}</p>
                                <p>{her.paragraphe.paragraphe3[2]}</p>
                                <p>{her.paragraphe.paragraphe3[3]}</p>
                                <p>{her.paragraphe.paragraphe3[4]}</p>
                                <p>{her.paragraphe.paragraphe3[5]}</p>
                                <p>{her.paragraphe.paragraphe3[6]}</p>
                            </div>
                            <div className="her__container__content__image">
                                <img src={her.picture.img4.img} alt={her.picture.img4.alt} />
                            </div>
                            <div className="her__container__content__title2">
                                <h2>{her.title2.rouge}</h2>
                            </div>
                            <div className="her__container__content__paragraphe">
                                <p>{her.paragraphe.paragraphe4}</p>
                            </div>
                            <div className="her__container__content__image">
                                <img src={her.picture.img15.img} alt={her.picture.img15.alt} />
                            </div>
                            <div className="her__container__content__paragraphe">
                                <p >{her.paragraphe.paragraphe5}</p>
                            </div>
                            <div className="her__container__content__image">
                                <img src={her.picture.img1.img} alt={her.picture.img1.alt} />
                            </div>
                            <div className="her__container__content__title2">
                                <h2>{her.title2.jaune}</h2>
                            </div>
                            <div className="her__container__content__image">
                                <img src={her.picture.img1.img} alt={her.picture.img1.alt} />
                            </div>
                            <div className="her__container__content__paragraphe">
                                <p>{her.paragraphe.paragraphe6[0]}</p>
                                <p>{her.paragraphe.paragraphe6[1]}</p>
                                <p>{her.paragraphe.paragraphe6[2]}</p>
                                <p>{her.paragraphe.paragraphe6[3]}</p>
                                <p>{her.paragraphe.paragraphe6[4]}</p>
                                <p>{her.paragraphe.paragraphe6[5]}</p>
                            </div>
                            <div className="her__container__content__title2">
                                <h2>{her.title2.blanc}</h2>
                            </div>
                            <div className="her__container__content__paragraphe">
                                <p>{her.paragraphe.paragraphe7[0]}</p>
                                <p>{her.paragraphe.paragraphe7[1]}</p>
                                <p>{her.paragraphe.paragraphe7[2]}</p>
                            </div>
                            <div className="her__container__content__title2">
                                <h2>{her.title2.grosPlans}</h2>
                            </div>
                            <div className="her__container__content__image">
                                <img src={her.picture.img1.img} alt={her.picture.img1.alt} />
                            </div>
                            <div className="her__container__content__paragraphe">
                                <p>{her.paragraphe.paragraphe8[0]}</p>
                            </div>
                            <div className="her__container__content__image">
                                <img src={her.picture.img1.img} alt={her.picture.img1.alt} />
                            </div>
                            <div className="her__container__content__title2">
                                <h2>{her.title2.hibou}</h2>
                            </div>
                            <div className="her__container__content__image">
                                <img src={her.picture.img1.img} alt={her.picture.img1.alt} />
                            </div>
                            <div className="her__container__content__paragraphe">
                                <p>{her.paragraphe.paragraphe9[0]}</p>
                                <p>{her.paragraphe.paragraphe9[1]}</p>
                                <p>{her.paragraphe.paragraphe9[2]}</p>
                                <p>{her.paragraphe.paragraphe9[3]}</p>
                            </div>
                            <div className="her__container__content__title2">
                                <h2>{her.title2.directeurPhoto}</h2>
                            </div>
                            <div className="her__container__content__paragraphe">
                                <p>{her.paragraphe.paragraphe10}</p>
                            </div>
                            <div className="her__container__content__title2">
                                <h2>{her.title2.conslusion}</h2>
                            </div>
                            <div className="her__container__content__paragraphe">
                                <p>{her.paragraphe.paragraphe11[0]}</p>
                                <p>{her.paragraphe.paragraphe11[1]}</p>
                                <p>{her.paragraphe.paragraphe11[2]}</p>
                                <p>{her.paragraphe.paragraphe11[3]}</p>
                            </div>
                            <div className="her__container__content__song">
                                <p>{her.paragraphe.paragraphe12[0]}</p>
                                <p>{her.paragraphe.paragraphe12[1]}</p>
                                <p>{her.paragraphe.paragraphe12[2]}</p>
                                <p>{her.paragraphe.paragraphe12[3]}</p>
                                <p>{her.paragraphe.paragraphe12[4]}</p>
                                <p>{her.paragraphe.paragraphe12[5]}</p>
                                <p>{her.paragraphe.paragraphe12[6]}</p>
                                <p>{her.paragraphe.paragraphe12[7]}</p>
                                <p>{her.paragraphe.paragraphe12[8]}</p>
                                <p>{her.paragraphe.paragraphe12[9]}</p>
                                <p>{her.paragraphe.paragraphe12[10]}</p>
                            </div>
                            <div className="her__container__content__title2">
                                <h2>{her.title2.bonus}</h2>
                            </div>
                            <div className="her__container__content__paragraphe">
                                <p>{her.paragraphe.paragraphe13}</p>
                            </div>
                            <div className="her__container__content__dialog">
                                <p>{her.paragraphe.paragraphe14[0]}</p>
                                <p>{her.paragraphe.paragraphe14[1]}</p>
                                <p>{her.paragraphe.paragraphe14[2]}</p>
                                <p>{her.paragraphe.paragraphe14[3]}</p>
                                <p>{her.paragraphe.paragraphe14[4]}</p>
                                <p>{her.paragraphe.paragraphe14[5]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            <Split />
            <Footer data={translate} />
            <ScrollToTopBtn />
        </>
    );
}

export default Her;