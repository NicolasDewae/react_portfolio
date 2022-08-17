import React from "react";
import './Carousel.css';

const Carousel = ({ picture1, picture2, picture3, picture4 }) => {
    
        return (
            <>
                <div className="slider">
                    <div className="slides">
                        <div className="slide">
                            <img src={picture1} alt="photo 1" />
                        </div>
                        <div className="slide">
                            <img src={picture2} alt="photo 2" />
                        </div>
                        <div className="slide">
                            <img src={picture3} alt="photo 3" />
                        </div>
                        <div className="slide">
                            <img src={picture4} alt="photo 4" />
                        </div>        
                    </div>
                </div>
            </>
        );
    }

export default Carousel;