import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div>
                    <h2>Pour être tenu au courant des projets à venir</h2>
                </div>
                <div>
                    <form action="">
                        <input className="input" type="text" placeholder="Email" />
                        <div>
                            <button className="button">S'abonner</button>
                        </div>
                    </form>
                </div>
            </footer>
        </>
    );
}

export default Footer;