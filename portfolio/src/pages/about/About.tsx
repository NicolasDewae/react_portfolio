// src/pages/about/About.tsx
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Split from '../../components/split';
import ScrollToTopBtn from '../../components/scrollToTopBtn';
import TranslateButton from '../../components/translateButton';
import useTranslate from '../../hooks/useTranslate';
import { about } from '../../data/i18n';
import './About.css';

const About = () => {
  const { translate, handleTranslate } = useTranslate();
  const item = translate ? about.fr[0] : about.en[0];

  return (
    <>
      <TranslateButton translate={translate} onTranslate={handleTranslate} />
      <Navbar data={translate} />
      <div className="about">
        <h1>{item.title2}</h1>
        <p>{item.message[0]}</p>
        <p>{item.message[1]}</p>
        <p>{item.message[2]}</p>
        <p>{item.message[3]}</p>
      </div>
      <Split />
      <ScrollToTopBtn />
      <Footer data={translate} />
    </>
  );
};

export default About;
