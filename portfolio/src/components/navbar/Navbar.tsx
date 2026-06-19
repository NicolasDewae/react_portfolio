// src/components/navbar/Navbar.tsx
import React, { useState } from 'react';
import { navLink, AUTHOR_NAME } from '../../data/i18n';
import './Navbar.css';

interface NavbarProps {
  data: boolean;
}

const Navbar = ({ data }: NavbarProps) => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => setShowLinks((prev) => !prev);

  const items = data ? navLink.fr : navLink.en;

  return (
    <div className="header">
      <div className="title">
        <a href="/">{AUTHOR_NAME}</a>
      </div>
      <nav className={`nav ${showLinks ? 'showNav' : 'hideNav'}`}>
        <ul className="links">
          {items.map((item) => (
            <li key={item.id}>
              <a href={item.pathway}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button className="burger" onClick={handleShowLinks}>
          <span className="burger_line" />
        </button>
      </nav>
      <div />
    </div>
  );
};

export default Navbar;
