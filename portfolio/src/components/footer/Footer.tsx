// src/components/footer/Footer.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import InputMail from '../inputMail';
import { footer, AUTHOR_NAME, YEAR } from '../../data/i18n';
import styles from './Footer.module.css';

interface FooterProps {
  data?: boolean;
}

const Footer = ({ data = true }: FooterProps) => {
  const item = data ? footer.fr[0] : footer.en[0];

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.newsletter}>
          <p className={styles.newsletterLabel}>{item.message}</p>
          <InputMail />
        </div>
        <div className={styles.social}>
          <a href="https://www.instagram.com/nicolasdwphoto/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://github.com/NicolasDewae" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/nicolas-de-waegenaere-959209232/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.copyright}>
          © {YEAR} {AUTHOR_NAME}
        </span>
        <p className={styles.context}>
          {item.contextMessage}{' '}
          <a href="https://www.andredwagner.com/" target="_blank" rel="noreferrer">
            andredwagner.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
