import React from 'react';
import './Footer.css';
import InputMail from '../inputMail/InputMail';
import { footer } from '../../data/i18n';
import Split from '../split/Split';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = (translate) => {
    return (
        <>
            <footer className="footer">
                <div className="input_container">
                    <div>
                        {footer.map((text) => {
                            text = translate.data ? text.fr : text.en;
                            return (
                                text.map((item) => {
                                    return (
                                        <div>
                                            <h2>{item.message}</h2>
                                        </div>
                                    )
                                })
                            )
                        })}
                    </div>
                    <div>
                        <InputMail />
                    </div>
                </div>
                <div>
                    <Split />
                </div>
                        {footer.map((text) => {
                            text = translate.data ? text.fr : text.en;
                            return (
                                text.map((item) => {
                                    return (
                                        <div className='notice_container'>
                                            <div className='left'>
                                                <div>
                                                    <h3>{item.copyright}</h3>
                                                </div>
                                                <div className='icons'>
                                                    <a href="https://www.instagram.com/nicolasdwphoto/" target="_blank">
                                                        <FontAwesomeIcon icon={faInstagram} />
                                                    </a>
                                                    <a href="https://github.com/NicolasDewae" target="_blank">
                                                        <FontAwesomeIcon icon={faGithub} />
                                                    </a>
                                                    <a href="https://www.linkedin.com/in/nicolas-de-waegenaere-959209232/" target="_blank">
                                                        <FontAwesomeIcon icon={faLinkedin} />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='vertical-line'>
                                                <span></span>
                                            </div>
                                            <div className='right'>
                                                <h3>{item.contextTitle}</h3>
                                                <p>
                                                    {item.contextMessage} 
                                                    <a href="https://www.andredwagner.com/" target="_blank">andredwagner.com</a>
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            )
                        })}
            </footer>
        </>
    );
}

export default Footer;