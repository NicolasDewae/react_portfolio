// src/components/PageTransition/PageTransition.tsx
import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './PageTransition.module.css';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
    return () => cancelAnimationFrame(id);
  }, [location.key]);

  return (
    <div className={`${styles.wrapper} ${visible ? styles.visible : ''}`}>
      {children}
    </div>
  );
};

export default PageTransition;
