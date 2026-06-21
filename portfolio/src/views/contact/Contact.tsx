'use client';
// src/pages/contact/Contact.tsx
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import ContactForm from '../../components/contactForm';
import ScrollToTopBtn from '../../components/scrollToTopBtn';
import useTranslate from '../../hooks/useTranslate';
import { contact } from '../../data/i18n';
import styles from './Contact.module.css';

const Contact = () => {
  const { translate, handleTranslate } = useTranslate();
  const item = translate ? contact.fr[0] : contact.en[0];

  return (
    <div className={styles.page}>
      <Navbar translate={translate} onTranslate={handleTranslate} />
      <div className={styles.hero}>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.subtitle}>{item.text}</p>
      </div>
      <div className={styles.formWrapper}>
        <ContactForm data={translate} />
      </div>
      <ScrollToTopBtn />
      <Footer data={translate} />
    </div>
  );
};

export default Contact;
