// src/pages/project/confinement/Confinement.tsx
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import ScrollToTopBtn from '../../../components/scrollToTopBtn';
import TranslateButton from '../../../components/translateButton';
import useTranslate from '../../../hooks/useTranslate';
import { confinement } from '../../../data/projectsData';
import { projects } from '../../../data/i18n';
import './Confinement.css';

const Confinement = () => {
  const { translate, handleTranslate } = useTranslate();
  const description = translate
    ? projects.fr[1].confinement
    : projects.en[1].confinement;
  const imgs = confinement.projectImages;

  return (
    <>
      <TranslateButton translate={translate} onTranslate={handleTranslate} />
      <Navbar data={translate} />
      <div className="confinement">
        <div className="confinement_container">
          <div className="confinement_container_title">
            <h1>{confinement.title}</h1>
          </div>
          <div className="confinement_container_content">
            <div className="confinement_container_content_text">
              <p>{description}</p>
            </div>
            <div className="confinement_container_content_image">
              <div className="single">
                <img src={imgs.un.image} alt={imgs.un.alt} />
              </div>
              <div className="single">
                <img src={imgs.seize.image} alt={imgs.seize.alt} />
              </div>
              <div className="pair">
                <img src={imgs.deux.image} alt={imgs.deux.alt} />
                <img src={imgs.trois.image} alt={imgs.trois.alt} />
              </div>
              <div className="pair">
                <img src={imgs.quatre.image} alt={imgs.quatre.alt} />
                <img src={imgs.six.image} alt={imgs.six.alt} />
              </div>
              <div className="single">
                <img src={imgs.vingt.image} alt={imgs.vingt.alt} />
              </div>
              <div className="pair">
                <img src={imgs.sept.image} alt={imgs.sept.alt} />
                <img src={imgs.dix.image} alt={imgs.dix.alt} />
              </div>
              <div className="pair">
                <img src={imgs.cinq.image} alt={imgs.cinq.alt} />
                <img src={imgs.neuf.image} alt={imgs.neuf.alt} />
              </div>
              <div className="single">
                <img src={imgs.huit.image} alt={imgs.huit.alt} />
              </div>
              <div className="pair">
                <img src={imgs.quatorze.image} alt={imgs.quatorze.alt} />
                <img src={imgs.quinze.image} alt={imgs.quinze.alt} />
              </div>
              <div className="single">
                <img src={imgs.douze.image} alt={imgs.douze.alt} />
              </div>
              <div className="pair">
                <img src={imgs.onze.image} alt={imgs.onze.alt} />
                <img src={imgs.vingtun.image} alt={imgs.vingtun.alt} />
              </div>
              <div className="single">
                <img src={imgs.treize.image} alt={imgs.treize.alt} />
              </div>
              <div className="single">
                <img src={imgs.dixhuit.image} alt={imgs.dixhuit.alt} />
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

export default Confinement;
