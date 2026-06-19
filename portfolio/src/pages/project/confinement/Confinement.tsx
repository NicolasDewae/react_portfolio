// src/pages/project/confinement/Confinement.tsx
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import MasonryGrid from '../../../components/MasonryGrid';
import ScrollToTopBtn from '../../../components/scrollToTopBtn';
import useTranslate from '../../../hooks/useTranslate';
import { confinement } from '../../../data/projectsData';
import { projects } from '../../../data/i18n';
import styles from '../../../styles/projectPage.module.css';

const Confinement = () => {
  const { translate, handleTranslate } = useTranslate();
  const description = translate
    ? projects.fr[1].confinement
    : projects.en[1].confinement;

  const images = Object.values(confinement.projectImages);

  return (
    <div className={styles.page}>
      <Navbar translate={translate} onTranslate={handleTranslate} />
      <div className={styles.hero}>
        <h1 className={styles.title}>{confinement.title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <MasonryGrid images={images} />
      <ScrollToTopBtn />
      <Footer data={translate} />
    </div>
  );
};

export default Confinement;
