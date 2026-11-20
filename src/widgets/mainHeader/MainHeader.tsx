import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./MainHeader.module.css";
import { Gag } from "../cc/cc";

export const MainHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <span>SolidBase</span>
          <span className={styles.logoBadge}>DOCS</span>
        </Link>

        <button
          type="button"
          className={styles.burgerBtn}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Abrir menú"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <NavLink to="/" className={getLinkClass} onClick={closeMenu} end>
            Artículos
          </NavLink>
          <NavLink to="/about" className={getLinkClass} onClick={closeMenu}>
            Acerca del proyecto
          </NavLink>
          <NavLink
            to="/disclaimer"
            className={getLinkClass}
            onClick={closeMenu}
          >
            Descargo de responsabilidad
          </NavLink>
          <NavLink to="/contacts" className={getLinkClass} onClick={closeMenu}>
            Contactos
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
