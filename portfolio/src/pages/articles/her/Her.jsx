import React, { useState,useEffect } from "react";
import "./Her.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import ScrollToTopBtn from "../../../components/scrollToTopBtn/ScrollToTopBtn";
import Split from "../../../components/split/Split";
import her from "../../../data/articles/her";
import SidebarMovie from "../../../components/sidebarMovie/SidebarMovie";
import MoviesService from "../../../services/MoviesService";

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

    // movie service instanciation
    let moviesService = new MoviesService();
    let [movies, setMovies] = useState([]);

    useEffect(() => {
        moviesService.getMoviesById("152601", setMovies);
    }, []);
    
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
                            <h1>{her.title.title1}</h1>
                        </div>
                        <div className="her__container__content__title2">
                            <h2>{her.title.title2.introduction}</h2>
                        </div>
                        <div className="her__container__content__title3">
                            <h3>{her.title.title3.synopsis}</h3>
                        </div>
                        <div className="her__container__content__paragraphe">
                            <p>{her.paragraphe.p1}</p>
                        </div>
                        <div className="her__container__content__image">
                            <img src={her.picture.img1.src} alt={her.picture.img1.alt} />
                        </div>
                        <div className="her__container__content__paragraphe">
                            <p>{her.paragraphe.p2[0]}</p>
                            <p>{her.paragraphe.p2[1]}</p>
                            <p>{her.paragraphe.p2[2]}</p>
                        </div>
                        <div className="her__container__content__image">
                            <img src={her.picture.img3.src} alt={her.picture.img3.alt} />
                        </div>
                        <div className="her__container__content__title2">
                            <h2>{her.title.title2.solitude}</h2>
                        </div>
                            <div className="her__container__content__paragraphe">
                                <p>{her.paragraphe.p3[0]}</p>
                                <p>{her.paragraphe.p3[1]}</p>
                                <p>{her.paragraphe.p3[2]}</p>
                                <p>{her.paragraphe.p3[3]}</p>
                                <p>{her.paragraphe.p3[4]}</p>
                                <p>{her.paragraphe.p3[5]}</p>
                                <p>{her.paragraphe.p3[6]}</p>
                            </div>
                            <div className="her__container__content__image">
                                <img src={her.picture.img4.src} alt={her.picture.img4.alt} />
                            </div>
                            <div className="her__container__content__title2">
                                <h3>{her.title.title2.couleurs}</h3>
                            </div>
                            <div className="her__container__content__title3">
                                <h3>{her.title.title3.rouge}</h3>
                            </div>
                            <div className="her__container__content__paragraphe">
                                <p>{her.paragraphe.p4}</p>
                            </div>
                            <div className="her__container__content__image">
                                <img src={her.picture.img16.src} alt={her.picture.img16.alt} />
                            </div>
                            <div className="her__container__content__paragraphe">
                                <p >{her.paragraphe.p5}</p>
                            </div>
                            <div className="her__container__content__image">
                                <img src={her.picture.img20.src} alt={her.picture.img20.alt} />
                            </div>
                            <div className="her__container__content__title3">
                                <h3>{her.title.title3.jaune}</h3>
                            </div>
                            <div className="her__container__content__image">
                                <img src={her.picture.img13.src} alt={her.picture.img13.alt} />
                            </div>
                            <div className="her__container__content__paragraphe">
                                <p>{her.paragraphe.p6[0]}</p>
                                <p>{her.paragraphe.p6[1]}</p>
                                <p>{her.paragraphe.p6[2]}</p>
                                <p>{her.paragraphe.p6[3]}</p>
                                <p>{her.paragraphe.p6[4]}</p>
                                <p>{her.paragraphe.p6[5]}</p>
                            </div>
                            <div className="her__container__content__title3">
                                <h3>{her.title.title3.blanc}</h3>
                            </div>
                            <div className="her__container__content__paragraphe">
                                <p>{her.paragraphe.p7[0]}</p>
                                <p>{her.paragraphe.p7[1]}</p>
                                <p>{her.paragraphe.p7[2]}</p>
                            </div>
                            <div className="her__container__content__title2">
                                <h2>{her.title.title2.grosPlans}</h2>
                            </div>
                            <div className="her__container__content__image">
                                <img src={her.picture.img8.src} alt={her.picture.img8.alt} />
                            </div>
                            <div className="her__container__content__paragraphe">
                                <p>{her.paragraphe.p8[0]}</p>
                            </div>
                            <div className="her__container__content__image">
                                <img src={her.picture.img10.src} alt={her.picture.img10.alt} />
                            </div>
                            <div className="her__container__content__title2">
                                <h2>{her.title.title2.hibou}</h2>
                            </div>
                            <div className="her__container__content__image">
                                <img src={her.picture.img5.src} alt={her.picture.img5.alt} />
                            </div>
                            <div className="her__container__content__paragraphe">
                                <p>{her.paragraphe.p9[0]}</p>
                                <p>{her.paragraphe.p9[1]}</p>
                                <p>{her.paragraphe.p9[2]}</p>
                                <p>{her.paragraphe.p9[3]}</p>
                            </div>
                            <div className="her__container__content__title2">
                                <h2>{her.title.title2.directeurPhoto}</h2>
                            </div>
                            <div className="her__container__content__paragraphe">
                                <p>{her.paragraphe.p10}</p>
                            </div>
                            <div className="her__container__content__title2">
                                <h2>{her.title.title2.conslusion}</h2>
                            </div>
                            <div className="her__container__content__paragraphe">
                                <p>{her.paragraphe.p11[0]}</p>
                                <p>{her.paragraphe.p11[1]}</p>
                                <p>{her.paragraphe.p11[2]}</p>
                                <div className="her__container__content__video">
                                    <iframe src={her.link.video}></iframe>
                                </div>
                                <p>{her.paragraphe.p11[3]}</p>
                            </div>
                            <div className="her__container__content__song">
                                <p>{her.paragraphe.p12[0]}</p>
                                <p>{her.paragraphe.p12[1]}</p>
                                <p>{her.paragraphe.p12[2]}</p>
                                <p>{her.paragraphe.p12[3]}</p>
                                <p>{her.paragraphe.p12[4]}</p>
                                <p>{her.paragraphe.p12[5]}</p>
                                <p>{her.paragraphe.p12[6]}</p>
                                <p>{her.paragraphe.p12[7]}</p>
                                <p>{her.paragraphe.p12[8]}</p>
                                <p>{her.paragraphe.p12[9]}</p>
                                <p>{her.paragraphe.p12[10]}</p>
                            </div>
                            <div className="her__container__content__title2">
                                <h2>{her.title.title2.bonus}</h2>
                            </div>
                            <div className="her__container__content__paragraphe">
                                <p>{her.paragraphe.p13}</p>
                            </div>
                            <div className="her__container__content__dialog">
                                <p>{her.paragraphe.p14[0]}</p>
                                <p>{her.paragraphe.p14[1]}</p>
                                <p>{her.paragraphe.p14[2]}</p>
                                <p>{her.paragraphe.p14[3]}</p>
                                <p>{her.paragraphe.p14[4]}</p>
                                <p>{her.paragraphe.p14[5]}</p>
                            </div>
                        </div>
                    </div>
                    <div className="drive__sidebar">
                        <SidebarMovie movie={movies} />
                    </div>
                </div>
            <Split />
            <Footer data={translate} />
            <ScrollToTopBtn />
        </>
    );
}

export default Her;