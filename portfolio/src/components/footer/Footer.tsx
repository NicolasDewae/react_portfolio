'use client';
// src/components/footer/Footer.tsx
import { IconInstagram, IconGithub, IconLinkedin } from '../icons';
import InputMail from '../inputMail';
import { footer, AUTHOR_NAME, YEAR } from '../../data/i18n';
import styles from './Footer.module.css';

interface FooterProps {
  data?: boolean;
}

const SOCIAL_LINKS = [
  { href: 'https://www.instagram.com/nicolasdwphoto/', Icon: IconInstagram, label: 'Instagram' },
  { href: 'https://github.com/NicolasDewae', Icon: IconGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/nicolas-de-waegenaere-959209232/', Icon: IconLinkedin, label: 'LinkedIn' },
];

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
          {SOCIAL_LINKS.map(({ href, Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <Icon />
            </a>
          ))}
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
