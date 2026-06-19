// src/pages/contact/Contact.tsx
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Split from '../../components/split';
import ScrollToTopBtn from '../../components/scrollToTopBtn';
import ContactForm from '../../components/contactForm';
import TranslateButton from '../../components/translateButton';
import useTranslate from '../../hooks/useTranslate';
import { contact } from '../../data/i18n';
import './Contact.css';

const Contact = () => {
  const { translate, handleTranslate } = useTranslate();
  const item = translate ? contact.fr[0] : contact.en[0];

  return (
    <>
      <TranslateButton translate={translate} onTranslate={handleTranslate} />
      <Navbar data={translate} />
      <div>
        <h1>{item.title}</h1>
      </div>
      <div className="contact">
        <div>
          <h2>{item.text}</h2>
        </div>
        <ContactForm data={translate} />
      </div>
      <Split />
      <ScrollToTopBtn />
      <Footer data={translate} />
    </>
  );
};

export default Contact;
