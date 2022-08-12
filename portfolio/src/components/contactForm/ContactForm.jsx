import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
    return (
        <>
            <form className="contact-form" action="">
                <div>
                    <input type="text" placeholder="Firstname"/>
                    <input type="text" placeholder="Lastname"/>
                </div>
                <div>
                    <input type="email" placeholder="Email"/>
                </div>
                <div>
                    <textarea type="text" placeholder="Message"/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </>
    );
}

export default ContactForm;