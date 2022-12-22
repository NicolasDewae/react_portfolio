import React from "react";
import { contact } from "../../data/i18n";
import "./ContactForm.css";

const ContactForm = (translate) => {

    return (
        <>
            <form className="contact-form" action={`https://formsubmit.co/${process.env.REACT_APP_MY_EMAIL}`} method="POST">
                <input type="hidden" name="_next" value="/contact"/>
                {contact.map((item) => {
                    item = translate.data ? item.fr : item.en;
                    return (
                        item.map((item) => {
                            return (
                                <>
                                    <div>
                                        <input type="text" name="firstname" placeholder={item.firstName}/>
                                        <input type="text" name="lastname" placeholder={item.lastName}/>
                                    </div>
                                    <div>
                                        <input type="email" name="email" placeholder={item.email}/>
                                    </div>
                                    <div>
                                        <textarea type="text" name="message" placeholder={item.message}/>
                                    </div>
                                    <div>
                                        <input type="hidden" name="_captcha" value="true"/>
                                    </div>
                                    <div>
                                        <button type="submit">{item.button}</button>
                                    </div>
                                </>
                            )
                        })
                    )
                })}
            </form>
        </>
    );
}

export default ContactForm;