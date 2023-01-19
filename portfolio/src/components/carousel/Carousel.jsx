import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import './Carousel.css';

const Carousel = ({ picture1, picture2, picture3, picture4 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        { url: picture1 },
        { url: picture2 },
        { url: picture3 },
        { url: picture4 }
    ];

    // Go to the previous image
    const handlePrevious = () => {
        setCurrentIndex((currentIndex + images.length - 1) % images.length);
    };

    // Go to the next image
    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    return (
        <div className="carousel-container">
        <div className="arrow previous" onClick={handlePrevious}>
            <FontAwesomeIcon icon={faChevronLeft}/>
        </div>
        <img src={images[currentIndex].url} alt="carousel" className="carousel-image" />
        <div className="arrow next" onClick={handleNext}>
        <FontAwesomeIcon icon={faChevronRight} />
        </div>
        </div>
    );
};

export default Carousel;
