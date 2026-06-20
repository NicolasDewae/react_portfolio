// src/components/ProjectCard/ProjectCard.tsx
import Link from 'next/link';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  pathway: string;
  picture: string;
  label: string;
  index: number;
}

const ProjectCard = ({ title, pathway, picture, label, index }: ProjectCardProps) => (
  <Link href={`/project/${pathway}`} className={`${styles.card} ${index % 2 === 1 ? styles.cardOffset : ''}`}>
    <div className={styles.imageWrapper}>
      <img src={picture} alt={title} className={styles.image} loading="lazy" />
    </div>
    <div className={styles.meta}>
      <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.label}>{label}</span>
    </div>
  </Link>
);

export default ProjectCard;
