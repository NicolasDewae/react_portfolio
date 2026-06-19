// src/App.tsx
import Navbar from './components/navbar';
import Footer from './components/footer';
import HeroHome from './components/HeroHome';
import ProjectCard from './components/ProjectCard';
import ScrollReveal from './components/ScrollReveal';
import ScrollToTopBtn from './components/scrollToTopBtn';
import useTranslate from './hooks/useTranslate';
import projectsData from './data/projectsData';
import { mainContent, previewProject } from './data/i18n';
import styles from './App.module.css';

const App = () => {
  const { translate, handleTranslate } = useTranslate();

  const heroTitle = translate ? mainContent.fr[0].message : mainContent.en[0].message;
  const buttonLabel = translate ? previewProject.fr[0].button : previewProject.en[0].button;

  return (
    <div className={styles.page}>
      <Navbar translate={translate} onTranslate={handleTranslate} />

      <HeroHome
        title={heroTitle}
        tagline={translate ? 'Photographie — Lille' : 'Photography — Lille'}
      />

      <section className={styles.projectsSection}>
        <div className={styles.projectsGrid}>
          {projectsData.map((project, index) => (
            <ScrollReveal key={project.id} delay={(index % 3) as 0 | 1 | 2 | 3}>
              <ProjectCard
                title={project.title}
                pathway={project.pathway}
                picture={project.picture}
                label={buttonLabel}
                index={index}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <ScrollToTopBtn />
      <Footer data={translate} />
    </div>
  );
};

export default App;
