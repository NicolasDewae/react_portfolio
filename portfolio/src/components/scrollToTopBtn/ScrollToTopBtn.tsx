'use client';
// src/components/scrollToTopBtn/ScrollToTopBtn.tsx
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import styles from './ScrollToTopBtn.module.css';

const FontAwesomeIcon = dynamic(
  () => import('@fortawesome/react-fontawesome').then((m) => m.FontAwesomeIcon),
  { ssr: false, loading: () => null }
);

const ScrollToTopBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`${styles.btn} ${visible ? styles.visible : ''}`}
      onClick={handleScrollToTop}
      aria-label="Remonter en haut de page"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default ScrollToTopBtn;
