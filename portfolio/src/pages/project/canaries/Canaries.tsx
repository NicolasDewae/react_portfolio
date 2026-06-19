// src/pages/project/canaries/Canaries.tsx
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import ScrollToTopBtn from '../../../components/scrollToTopBtn';
import TranslateButton from '../../../components/translateButton';
import useTranslate from '../../../hooks/useTranslate';
import { canaries } from '../../../data/projectsData';
import { projects } from '../../../data/i18n';
import './Canaries.css';

const Canaries = () => {
  const { translate, handleTranslate } = useTranslate();
  const description = translate
    ? projects.fr[3].canaries
    : projects.en[3].canaries;
  const imgs = canaries.projectImages;

  return (
    <>
      <TranslateButton translate={translate} onTranslate={handleTranslate} />
      <Navbar data={translate} />
      <div className="canaries">
        <div className="canaries_container">
          <div className="canaries_container_title">
            <h1>{canaries.title}</h1>
          </div>
          <div className="canaries_container_content">
            <div className="canaries_container_content_text">
              <p>{description}</p>
            </div>
            <div className="canaries_container_content_image">
              <div className="pair">
                <img src={imgs.un.image} alt={imgs.un.alt} />
                <img src={imgs.deux.image} alt={imgs.deux.alt} />
              </div>
              <div className="pair">
                <img src={imgs.six.image} alt={imgs.six.alt} />
                <img src={imgs.cinq.image} alt={imgs.cinq.alt} />
              </div>
              <div className="pair">
                <img src={imgs.trois.image} alt={imgs.trois.alt} />
                <img src={imgs.quatre.image} alt={imgs.quatre.alt} />
                <img src={imgs.neuf.image} alt={imgs.neuf.alt} />
              </div>
              <div className="pair">
                <img src={imgs.huit.image} alt={imgs.huit.alt} />
                <img src={imgs.dix.image} alt={imgs.dix.alt} />
              </div>
              <div className="single">
                <img src={imgs.douze.image} alt={imgs.douze.alt} />
              </div>
              <div className="pair">
                <img src={imgs.onze.image} alt={imgs.onze.alt} />
                <img src={imgs.treize.image} alt={imgs.treize.alt} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopBtn />
      <Footer data={translate} />
    </>
  );
};

export default Canaries;
