// src/pages/project/street/Street.tsx
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import ScrollToTopBtn from '../../../components/scrollToTopBtn';
import TranslateButton from '../../../components/translateButton';
import useTranslate from '../../../hooks/useTranslate';
import { street } from '../../../data/projectsData';
import { projects } from '../../../data/i18n';
import './Street.css';

const Street = () => {
  const { translate, handleTranslate } = useTranslate();
  const description = translate
    ? projects.fr[2].street
    : projects.en[2].street;
  const imgs = street.projectImages;

  return (
    <>
      <TranslateButton translate={translate} onTranslate={handleTranslate} />
      <Navbar data={translate} />
      <div className="street">
        <div className="street_container">
          <div className="street_container_title">
            <h1>{street.title}</h1>
          </div>
          <div className="street_container_content">
            <div className="street_container_content_text">
              <p>{description}</p>
            </div>
            <div className="street_container_content_image">
              <div className="single">
                <img src={imgs.treize.image} alt={imgs.treize.alt} />
              </div>
              <div className="pair">
                <img src={imgs.douze.image} alt={imgs.douze.alt} />
                <img src={imgs.onze.image} alt={imgs.onze.alt} />
              </div>
              <div className="single">
                <img src={imgs.deux.image} alt={imgs.deux.alt} />
              </div>
              <div className="pair">
                <img src={imgs.quatre.image} alt={imgs.quatre.alt} />
                <img src={imgs.huit.image} alt={imgs.huit.alt} />
              </div>
              <div className="pair">
                <img src={imgs.un.image} alt={imgs.un.alt} />
                <img src={imgs.six.image} alt={imgs.six.alt} />
              </div>
              <div className="pair">
                <img src={imgs.sept.image} alt={imgs.sept.alt} />
                <img src={imgs.cinq.image} alt={imgs.cinq.alt} />
              </div>
              <div className="single">
                <img src={imgs.trois.image} alt={imgs.trois.alt} />
              </div>
              <div className="pair">
                <img src={imgs.neuf.image} alt={imgs.neuf.alt} />
                <img src={imgs.dix.image} alt={imgs.dix.alt} />
              </div>
              <div className="single">
                <img src={imgs.quatorze.image} alt={imgs.quatorze.alt} />
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

export default Street;
