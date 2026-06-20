'use client';
// src/components/navbar/Navbar.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLink, AUTHOR_NAME } from '../../data/i18n';
import styles from './Navbar.module.css';

interface NavbarProps {
  translate: boolean;
  onTranslate: () => void;
}

const Navbar = ({ translate, onTranslate }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const items = translate ? navLink.fr : navLink.en;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        {AUTHOR_NAME}
      </Link>

      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
        <ul className={styles.links}>
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={item.pathway}
                className={`${styles.link} ${pathname === item.pathway ? styles.active : ''}`}
              >
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <button className={styles.langToggle} onClick={onTranslate}>
              {translate ? 'EN' : 'FR'}
            </button>
          </li>
        </ul>
      </nav>

      <button
        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Menu"
        aria-expanded={menuOpen}
      >
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
      </button>
    </header>
  );
};

export default Navbar;
