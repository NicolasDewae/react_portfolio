import React, {useState} from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import ContactForm from '../../components/contactForm/ContactForm';
import './Contact.css';
import Split from '../../components/split/Split';
import { contact } from "../../data/i18n";
import ScrollToTopBtn from '../../components/scrollToTopBtn/ScrollToTopBtn';

const Contact = () => {

    // Get translate data
    let defaultValueTranslate = localStorage.getItem('defaultValueTranslate');
    // Convert translate data into a boolean
    defaultValueTranslate = defaultValueTranslate === "false" ? false : true;

    const [translate, setTranslate] = useState(defaultValueTranslate);
    const handleTranslate = () => {
        localStorage.setItem('defaultValueTranslate', !translate);  
        setTranslate(!translate);
    }

    return (
        <>
            {/* Translation button */}
            <button className='translateBtn' onClick={handleTranslate}>
                <p className='translate'>
                    {translate ? 'Fr' : 'En'}
                </p>
            </button>
            <Navbar data={translate} />
                {contact.map((item) => {
                    item = translate ? item.fr : item.en;
                    return (
                        item.map((item) => {
                            return (
                                <>
                                    <div>
                                        <h1>{item.title}</h1>
                                    </div>
                                    <div className='contact'>
                                        <div>
                                            <h2>{item.text}</h2>
                                        </div>
                                        <div>
                                            <ContactForm data={translate} />
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    )
                })}
            <Split data={translate} />
            <ScrollToTopBtn />
            <Footer data={translate}/>
        </>
    );
}

export default Contact;