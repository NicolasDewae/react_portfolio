import React from "react";
import './ScrollToTopBtn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopBtn = () => {
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    };
    
    return (
        <div>
            <button className="scroll" onClick={scrollToTop}>
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </div>
    );
}

export default ScrollToTopBtn;