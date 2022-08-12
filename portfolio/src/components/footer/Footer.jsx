import React from 'react';
import './Footer.css';
import InputMail from '../inputMail/InputMail';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div>
                    <h2>Pour être tenu au courant des projets à venir</h2>
                </div>
                <div>
                    <InputMail />
                </div>
            </footer>
        </>
    );
}

export default Footer;