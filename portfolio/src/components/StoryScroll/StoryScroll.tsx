'use client';
// src/components/StoryScroll/StoryScroll.tsx
import { useState, useEffect, useCallback } from 'react';
import { ProjectImage } from '../../types/project.types';
import { StoryBlock } from '../../types/story.types';
import ScrollReveal from '../ScrollReveal';
import styles from './StoryScroll.module.css';

interface StoryScrollProps {
  images: ProjectImage[];
  blocks: StoryBlock[];
}

const StoryScroll = ({ images, blocks }: StoryScrollProps) => {
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
      <div className={styles.story}>
        {blocks.map((block, i) => {
          const key = `block-${i}`;

          switch (block.kind) {
            case 'hero': {
              const img = images[block.imageIndex];
              return (
                <ScrollReveal key={key} className={styles.blockHero}>
                  <img
                    src={img.image}
                    alt={img.alt}
                    loading="eager"
                    className={styles.imgHero}
                    onClick={() => setLightboxIndex(block.imageIndex)}
                  />
                </ScrollReveal>
              );
            }

            case 'full': {
              const img = images[block.imageIndex];
              return (
                <ScrollReveal key={key} className={styles.blockFull}>
                  <figure className={styles.figure}>
                    <img
                      src={img.image}
                      alt={img.alt}
                      loading="lazy"
                      className={styles.imgFull}
                      onClick={() => setLightboxIndex(block.imageIndex)}
                    />
                    <figcaption className={`${styles.caption} ${styles.captionIndented}`}>
                      {img.alt}
                    </figcaption>
                  </figure>
                </ScrollReveal>
              );
            }

            case 'single': {
              const img = images[block.imageIndex];
              return (
                <ScrollReveal key={key} className={styles.blockSingle}>
                  <figure className={styles.figure}>
                    <img
                      src={img.image}
                      alt={img.alt}
                      loading="lazy"
                      className={styles.imgContained}
                      onClick={() => setLightboxIndex(block.imageIndex)}
                    />
                    <figcaption className={styles.caption}>{img.alt}</figcaption>
                  </figure>
                </ScrollReveal>
              );
            }

            case 'wide': {
              const img = images[block.imageIndex];
              return (
                <ScrollReveal key={key} className={styles.blockWide}>
                  <figure className={styles.figure}>
                    <img
                      src={img.image}
                      alt={img.alt}
                      loading="lazy"
                      className={styles.imgContained}
                      onClick={() => setLightboxIndex(block.imageIndex)}
                    />
                    <figcaption className={styles.caption}>{img.alt}</figcaption>
                  </figure>
                </ScrollReveal>
              );
            }

            case 'pair': {
              const [i0, i1] = block.imageIndices;
              return (
                <ScrollReveal key={key} className={styles.blockPair}>
                  {([i0, i1] as const).map((idx) => {
                    const img = images[idx];
                    return (
                      <figure key={idx} className={styles.figure}>
                        <img
                          src={img.image}
                          alt={img.alt}
                          loading="lazy"
                          className={styles.imgContained}
                          onClick={() => setLightboxIndex(idx)}
                        />
                        <figcaption className={styles.caption}>{img.alt}</figcaption>
                      </figure>
                    );
                  })}
                </ScrollReveal>
              );
            }

            case 'trio': {
              const [i0, i1, i2] = block.imageIndices;
              return (
                <ScrollReveal key={key} className={styles.blockTrio}>
                  {([i0, i1, i2] as const).map((idx) => {
                    const img = images[idx];
                    return (
                      <figure key={idx} className={styles.figure}>
                        <img
                          src={img.image}
                          alt={img.alt}
                          loading="lazy"
                          className={styles.imgContained}
                          onClick={() => setLightboxIndex(idx)}
                        />
                        <figcaption className={styles.caption}>{img.alt}</figcaption>
                      </figure>
                    );
                  })}
                </ScrollReveal>
              );
            }

            case 'text':
              return (
                <ScrollReveal key={key} className={styles.blockText}>
                  <p className={block.variant === 'paragraph' ? styles.textParagraph : styles.textShort}>
                    {block.content}
                  </p>
                </ScrollReveal>
              );

            case 'quote':
              return (
                <ScrollReveal key={key} className={styles.blockQuote}>
                  <blockquote className={styles.quoteText}>{block.content}</blockquote>
                </ScrollReveal>
              );

            default:
              return null;
          }
        })}
      </div>

      {lightboxIndex !== null && (
        <div className={styles.overlay} onClick={closeLightbox}>
          <button className={styles.closeBtn} onClick={closeLightbox} aria-label="Fermer">
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

export default StoryScroll;
