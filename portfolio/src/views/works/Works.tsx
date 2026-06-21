'use client';
// src/pages/works/Works.tsx
import Link from 'next/link';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import ScrollReveal from '../../components/ScrollReveal';
import ScrollToTopBtn from '../../components/scrollToTopBtn';
import useTranslate from '../../hooks/useTranslate';
import projectsData from '../../data/projectsData';
import { previewProject } from '../../data/i18n';
import styles from './Works.module.css';

const Works = () => {
  const { translate, handleTranslate } = useTranslate();
  const buttonLabel = translate
    ? previewProject.fr[0].button
    : previewProject.en[0].button;

  return (
    <div className={styles.page}>
      <Navbar translate={translate} onTranslate={handleTranslate} />
      <div className={styles.hero}>
        <h1 className={styles.title}>
          {translate ? 'Projets' : 'Works'}
        </h1>
      </div>
      <div className={styles.grid}>
        {projectsData.map((project, index) => (
          <ScrollReveal key={project.id} delay={(index % 3) as 0 | 1 | 2 | 3}>
            <Link href={`/project/${project.pathway}`} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={project.picture} alt={project.title} loading="lazy" className={styles.image} />
              </div>
              <div className={styles.meta}>
                <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
                <h2 className={styles.cardTitle}>{project.title}</h2>
                <span className={styles.label}>{buttonLabel}</span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
      <ScrollToTopBtn />
      <Footer data={translate} />
    </div>
  );
};

export default Works;
