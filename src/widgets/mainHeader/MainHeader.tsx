import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./MainHeader.module.css";

export const MainHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <span>CryptoBase</span>
          <span className={styles.logoBadge}>DOCS</span>
        </Link>

        <button
          type="button"
          className={styles.burgerBtn}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Открыть меню"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <NavLink to="/" className={getLinkClass} onClick={closeMenu} end>
            Статьи
          </NavLink>
          <NavLink to="/about" className={getLinkClass} onClick={closeMenu}>
            О проекте
          </NavLink>
          <NavLink
            to="/disclaimer"
            className={getLinkClass}
            onClick={closeMenu}
          >
            Отказ от ответственности
          </NavLink>
          <NavLink to="/contacts" className={getLinkClass} onClick={closeMenu}>
            Контакты
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
