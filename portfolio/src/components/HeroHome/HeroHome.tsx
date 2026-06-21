// src/components/HeroHome/HeroHome.tsx
import styles from './HeroHome.module.css';

interface HeroHomeProps {
  title: string;
  tagline: string;
}

const HeroHome = ({ title, tagline }: HeroHomeProps) => (
  <section className={styles.hero}>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.tagline}>{tagline}</p>
  </section>
);

export default HeroHome;
