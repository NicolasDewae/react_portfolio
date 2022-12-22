import React from 'react';
import './Navbar.css';
import { useState } from 'react';
import { navLink, authorName } from '../../data/i18n';

const Navbar = (translate) => {
    const [showLinks, setShowLinks] = useState(false);
    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    }

    return (
        <>
            <div className="header">
                <div className="title">
                    <a href="/">{ authorName }</a>
                </div>
                <nav className={`nav ${showLinks ? "showNav" : "hideNav"}`}>
                    <ul className="links">
                        {navLink.map((link) => {
                            link = translate.data ? link.fr : link.en;
                            return (
                                link.map((item) => {
                                    return (
                                        <li>
                                            <a href={item.pathway}>{item.title}</a>
                                        </li>
                                    )
                                })
                            )
                        })}
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