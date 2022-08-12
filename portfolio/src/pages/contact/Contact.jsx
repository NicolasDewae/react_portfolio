import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import ContactForm from '../../components/contactForm/ContactForm';
import './Contact.css';
import Split from '../../components/split/Split';

const Contact = () => {
    return (
        <>
            <Navbar/>
            <div>
                <h1>Contact</h1>
            </div>
            <div className='contact'>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cum aspernatur quas atque eius rerum ratione, explicabo fuga ea accusamus odit, ab nobis officiis quos? Molestiae, aliquam saepe! Labore, ipsam.
                    </p>
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
            <Split />
            <Footer/>
        </>
    );
}

export default Contact;