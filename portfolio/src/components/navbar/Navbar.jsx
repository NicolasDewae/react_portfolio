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
                    <a href="/">Nicolas De Waegenaere</a>
                </div>
                <nav className={`nav ${showLinks ? "showNav" : "hideNav"}`}>
                    <ul className="links">
                        <li><a href="/work">Work</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>
                    <button className="burger" onClick={handleShowLinks}>
                        <span className="burger_line"></span>
                    </button>
                </nav>
                <div>
                </div>
            </div>
        </>
    );
}

export default Navbar;