// src/components/footer/Footer.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import InputMail from '../inputMail';
import Split from '../split';
import { footer } from '../../data/i18n';
import './Footer.css';

interface FooterProps {
  data?: boolean;
}

const Footer = ({ data = true }: FooterProps) => {
  const item = data ? footer.fr[0] : footer.en[0];

  return (
    <footer className="footer">
      <div className="input_container">
        <div className="text">
          <div>
            <h2>{item.message}</h2>
          </div>
        </div>
        <div className="input">
          <InputMail />
        </div>
      </div>
      <Split />
      <div className="notice_container">
        <div className="left">
          <div>
            <h3>{item.copyright}</h3>
          </div>
          <div className="icons">
            <a
              href="https://www.instagram.com/nicolasdwphoto/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://github.com/NicolasDewae"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-de-waegenaere-959209232/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="vertical-line">
          <span />
        </div>
        <div className="right">
          <h3>{item.contextTitle}</h3>
          <p>
            {item.contextMessage}{' '}
            <a
              href="https://www.andredwagner.com/"
              target="_blank"
              rel="noreferrer"
            >
              andredwagner.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
