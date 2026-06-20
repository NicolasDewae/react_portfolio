'use client';
// src/components/PageTransition/PageTransition.tsx
import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './PageTransition.module.css';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <div className={`${styles.wrapper} ${visible ? styles.visible : ''}`}>
      {children}
    </div>
  );
};

export default PageTransition;
