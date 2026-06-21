'use client';
// src/pages/notFound/NotFound.tsx
import Link from 'next/link';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import useTranslate from '../../hooks/useTranslate';
import { notFound } from '../../data/i18n';
import styles from './NotFound.module.css';

const NotFound = () => {
  const { translate, handleTranslate } = useTranslate();
  const item = translate ? notFound.fr[0] : notFound.en[0];

  return (
    <div className={styles.page}>
      <Navbar translate={translate} onTranslate={handleTranslate} />
      <div className={styles.content}>
        <h1 className={styles.code}>{item.title}</h1>
        <p className={styles.subtitle}>{item.subTitle}</p>
        <p className={styles.message}>{item.message}</p>
        <Link href="/" className={styles.back}>
          {item.button}
        </Link>
      </div>
      <Footer data={translate} />
    </div>
  );
};

export default NotFound;
