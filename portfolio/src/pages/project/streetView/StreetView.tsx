// src/pages/project/streetView/StreetView.tsx
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import ScrollToTopBtn from '../../../components/scrollToTopBtn';
import TranslateButton from '../../../components/translateButton';
import useTranslate from '../../../hooks/useTranslate';
import { streetview } from '../../../data/projectsData';
import { projects } from '../../../data/i18n';
import './StreetView.css';

const StreetView = () => {
  const { translate, handleTranslate } = useTranslate();
  const description = translate
    ? projects.fr[0].streetview
    : projects.en[0].streetview;

  return (
    <>
      <TranslateButton translate={translate} onTranslate={handleTranslate} />
      <Navbar data={translate} />
      <div className="street-view">
        <div className="street-view__container">
          <div className="street-view__container__title">
            <h1>{streetview.title}</h1>
          </div>
          <div className="street-view__container__content">
            <div className="street-view__container__content__text">
              <p>{description}</p>
            </div>
            <div className="street-view__container__content__image">
              {streetview.projectImages.map((picture) => (
                <div key={picture.image}>
                  <img src={picture.image} alt={picture.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopBtn />
      <Footer data={translate} />
    </>
  );
};

export default StreetView;
