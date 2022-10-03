import React from 'react';
import './Footer.css';
import InputMail from '../inputMail/InputMail';
import { footer } from '../../config/i18n';

const Footer = (translate) => {
    return (
        <>
            <footer className="footer">
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
            </footer>
        </>
    );
}

export default Footer;