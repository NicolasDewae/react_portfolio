// src/pages/works/Works.tsx
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Split from '../../components/split';
import ScrollToTopBtn from '../../components/scrollToTopBtn';
import CardProject from '../../components/cardProject';
import Carousel from '../../components/carousel';
import TranslateButton from '../../components/translateButton';
import useTranslate from '../../hooks/useTranslate';
import projectsData from '../../data/projectsData';
import { previewProject } from '../../data/i18n';
import './Works.css';

const Works = () => {
  const { translate, handleTranslate } = useTranslate();
  const buttonLabel = translate
    ? previewProject.fr[0].button
    : previewProject.en[0].button;

  return (
    <>
      <TranslateButton translate={translate} onTranslate={handleTranslate} />
      <Navbar data={translate} />
      <div className="project-list">
        <CardProject
          pathway={projectsData[0].pathway}
          title={projectsData[0].title}
          picture={projectsData[0].picture}
        />
        <CardProject
          pathway={projectsData[1].pathway}
          title={projectsData[1].title}
          picture={projectsData[1].picture}
        />
      </div>
      <div className="work-list">
        <div className="carousel">
          <Carousel images={projectsData[0].projectImages} />
          <div className="column">
            <div>
              <h2>{projectsData[0].title}</h2>
            </div>
            <div>
              <Link to={`/project/${projectsData[0].pathway}`} className="button">
                {buttonLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="project-list">
        <CardProject
          pathway={projectsData[2].pathway}
          title={projectsData[2].title}
          picture={projectsData[2].picture}
        />
        <CardProject
          pathway={projectsData[3].pathway}
          title={projectsData[3].title}
          picture={projectsData[3].picture}
        />
      </div>
      <Split />
      <ScrollToTopBtn />
      <Footer data={translate} />
    </>
  );
};

export default Works;
