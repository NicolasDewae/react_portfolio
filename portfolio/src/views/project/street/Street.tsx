'use client';
// src/pages/project/street/Street.tsx
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import MasonryGrid from '../../../components/MasonryGrid';
import ScrollToTopBtn from '../../../components/scrollToTopBtn';
import useTranslate from '../../../hooks/useTranslate';
import { street } from '../../../data/projectsData';
import { projects } from '../../../data/i18n';
import styles from '../../../styles/projectPage.module.css';

const Street = () => {
  const { translate, handleTranslate } = useTranslate();
  const description = translate
    ? projects.fr[2].street
    : projects.en[2].street;

  const images = Object.values(street.projectImages);

  return (
    <div className={styles.page}>
      <Navbar translate={translate} onTranslate={handleTranslate} />
      <div className={styles.hero}>
        <h1 className={styles.title}>{street.title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <MasonryGrid images={images} />
      <ScrollToTopBtn />
      <Footer data={translate} />
    </div>
  );
};

export default Street;
