import React from "react";
import "./ContactForm.css";

const ContactForm = () => {

    return (
        <>
            <form className="contact-form" action={`https://formsubmit.co/${process.env.REACT_APP_MY_EMAIL}`} method="POST">
                <input type="hidden" name="_next" value="/contact"/>
                <div>
                    <input type="text" name="firstname" placeholder="Firstname"/>
                    <input type="text" name="lastname" placeholder="Lastname"/>
                </div>
                <div>
                    <input type="email" name="email" placeholder="Email Address"/>
                </div>
                <div>
                    <textarea type="text" name="message" placeholder="Message"/>
                </div>
                <div>
                    <input type="hidden" name="_captcha" value="true"/>
                </div>
                <div>
                    <button type="submit">Send</button>
                </div>
            </form>
        </>
    );
}

export default ContactForm;