'use client';
// src/pages/about/About.tsx
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import ScrollReveal from '../../components/ScrollReveal';
import ScrollToTopBtn from '../../components/scrollToTopBtn';
import useTranslate from '../../hooks/useTranslate';
import { about } from '../../data/i18n';
import styles from './About.module.css';

const About = () => {
  const { translate, handleTranslate } = useTranslate();
  const item = translate ? about.fr[0] : about.en[0];

  return (
    <div className={styles.page}>
      <Navbar translate={translate} onTranslate={handleTranslate} />
      <div className={styles.hero}>
        <h1 className={styles.title}>{item.title2}</h1>
      </div>
      <div className={styles.content}>
        {item.message.map((paragraph, i) => (
          <ScrollReveal key={i} delay={(Math.min(i, 3)) as 0 | 1 | 2 | 3}>
            <p className={styles.paragraph}>{paragraph}</p>
          </ScrollReveal>
        ))}
      </div>
      <ScrollToTopBtn />
      <Footer data={translate} />
    </div>
  );
};

export default About;
