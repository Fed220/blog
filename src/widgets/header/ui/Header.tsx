import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { decodeText } from "../../../shared/function/decryptText";
import logo from "../../../shared/logo/chip (1).svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <Link to="/blog" className={styles.logoText} onClick={closeMenu}>
            <div className={styles.logoImgCover}>
              <img className={styles.logoImg} src={logo} alt="Logo" />
            </div>
            {decodeText("vJ6MlpGQjN+bmt+cjZaPi5CSkJGam56M")}
          </Link>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
        >
          <span className={styles.menuIcon}>
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <a href="#blogs" className={styles.navText} onClick={closeMenu}>
            {decodeText("vJ6MlpGQjN+bmt+cjZaPi5CSkJGam56M")}
          </a>

          <a href="#text" className={styles.navText} onClick={closeMenu}>
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
}
