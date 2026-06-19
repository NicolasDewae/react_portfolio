// src/pages/notFound/NotFound.tsx
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Split from '../../components/split';
import ScrollToTopBtn from '../../components/scrollToTopBtn';
import TranslateButton from '../../components/translateButton';
import useTranslate from '../../hooks/useTranslate';
import { notFound } from '../../data/i18n';
import './NotFound.css';

const NotFound = () => {
  const { translate, handleTranslate } = useTranslate();
  const item = translate ? notFound.fr[0] : notFound.en[0];

  return (
    <>
      <TranslateButton translate={translate} onTranslate={handleTranslate} />
      <Navbar data={translate} />
      <div className="notFound">
        <div className="notFound__content">
          <h1>{item.title}</h1>
          <h2>{item.subTitle}</h2>
          <p>{item.message}</p>
          <Link className="button" to="/">
            {item.button}
          </Link>
        </div>
      </div>
      <Split />
      <Footer data={translate} />
      <ScrollToTopBtn />
    </>
  );
};

export default NotFound;
