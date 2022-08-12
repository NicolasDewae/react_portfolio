import React from 'react';
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    }

    return (
        <>
            <div className="header">
                <div className="title">
                    <a>Nicolas De Waegenaere</a>
                </div>
                <nav className={`nav ${showLinks ? "showNav" : "hideNav"}`}>
                    <ul className="links">
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">A propos</a></li>
                        <li><a href="#">Projets</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <button className="burger" onClick={handleShowLinks}>
                        <span className="burger_line"></span>
                    </button>
                </nav>
            </div>
        </>
    );
}

export default Navbar;