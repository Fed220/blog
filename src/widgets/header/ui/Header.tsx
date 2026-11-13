import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoText}>
            Crypto Casinos
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navText}>
            Crypto Casinos
          </Link>
          <Link to="/contact" className={styles.navText}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
