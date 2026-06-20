'use client';
// src/pages/project/canaries/Canaries.tsx
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import MasonryGrid from '../../../components/MasonryGrid';
import ScrollToTopBtn from '../../../components/scrollToTopBtn';
import useTranslate from '../../../hooks/useTranslate';
import { canaries } from '../../../data/projectsData';
import { projects } from '../../../data/i18n';
import styles from '../../../styles/projectPage.module.css';

const Canaries = () => {
  const { translate, handleTranslate } = useTranslate();
  const description = translate
    ? projects.fr[3].canaries
    : projects.en[3].canaries;

  const images = Object.values(canaries.projectImages);

  return (
    <div className={styles.page}>
      <Navbar translate={translate} onTranslate={handleTranslate} />
      <div className={styles.hero}>
        <h1 className={styles.title}>{canaries.title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <MasonryGrid images={images} />
      <ScrollToTopBtn />
      <Footer data={translate} />
    </div>
  );
};

export default Canaries;
