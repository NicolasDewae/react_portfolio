'use client';
// src/components/scrollToTopBtn/ScrollToTopBtn.tsx
import { useState, useEffect } from 'react';
import { IconArrowUp } from '../icons';
import styles from './ScrollToTopBtn.module.css';

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
      <IconArrowUp />
    </button>
  );
};

export default ScrollToTopBtn;
