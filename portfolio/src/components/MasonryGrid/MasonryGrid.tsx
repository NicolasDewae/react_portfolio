// src/components/MasonryGrid/MasonryGrid.tsx
import { useState, useEffect, useCallback } from 'react';
import { ProjectImage } from '../../types/project.types';
import ScrollReveal from '../ScrollReveal';
import styles from './MasonryGrid.module.css';

interface MasonryGridProps {
  images: ProjectImage[];
}

const MasonryGrid = ({ images }: MasonryGridProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, goToPrev, goToNext]);

  return (
    <>
      <div className={styles.grid}>
        {images.map((img, index) => (
          <ScrollReveal key={img.image} className={styles.item}>
            <img
              src={img.image}
              alt={img.alt}
              loading="lazy"
              onClick={() => setLightboxIndex(index)}
              className={styles.thumbnail}
            />
          </ScrollReveal>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div className={styles.overlay} onClick={closeLightbox}>
          <button className={styles.close} onClick={closeLightbox} aria-label="Fermer">
            ✕
          </button>
          <button
            className={`${styles.navBtn} ${styles.navPrev}`}
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            aria-label="Image précédente"
          >
            ‹
          </button>
          <img
            src={images[lightboxIndex].image}
            alt={images[lightboxIndex].alt}
            className={styles.lightboxImg}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className={`${styles.navBtn} ${styles.navNext}`}
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            aria-label="Image suivante"
          >
            ›
          </button>
          <span className={styles.counter}>
            {lightboxIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
};

export default MasonryGrid;
