// src/pages/project/streetView/StreetView.tsx
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import MasonryGrid from '../../../components/MasonryGrid';
import ScrollToTopBtn from '../../../components/scrollToTopBtn';
import useTranslate from '../../../hooks/useTranslate';
import { streetview } from '../../../data/projectsData';
import { projects } from '../../../data/i18n';
import styles from '../../../styles/projectPage.module.css';

const StreetView = () => {
  const { translate, handleTranslate } = useTranslate();
  const description = translate
    ? projects.fr[0].streetview
    : projects.en[0].streetview;

  return (
    <div className={styles.page}>
      <Navbar translate={translate} onTranslate={handleTranslate} />
      <div className={styles.hero}>
        <h1 className={styles.title}>{streetview.title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <MasonryGrid images={streetview.projectImages} />
      <ScrollToTopBtn />
      <Footer data={translate} />
    </div>
  );
};

export default StreetView;
