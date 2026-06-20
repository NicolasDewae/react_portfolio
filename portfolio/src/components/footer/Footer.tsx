'use client';
// src/components/footer/Footer.tsx
import dynamic from 'next/dynamic';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import InputMail from '../inputMail';
import { footer, AUTHOR_NAME, YEAR } from '../../data/i18n';
import styles from './Footer.module.css';

const FontAwesomeIcon = dynamic(
  () => import('@fortawesome/react-fontawesome').then((m) => m.FontAwesomeIcon),
  { ssr: false, loading: () => <span style={{ display: 'inline-block', width: '1em', height: '1em' }} /> }
);

interface FooterProps {
  data?: boolean;
}

interface SocialLink {
  href: string;
  icon: IconDefinition;
  label: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://www.instagram.com/nicolasdwphoto/', icon: faInstagram, label: 'Instagram' },
  { href: 'https://github.com/NicolasDewae', icon: faGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/nicolas-de-waegenaere-959209232/', icon: faLinkedin, label: 'LinkedIn' },
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
          {SOCIAL_LINKS.map(({ href, icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <FontAwesomeIcon icon={icon} />
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
