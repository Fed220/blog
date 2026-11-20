import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { decodeText } from "../../../shared/function/decryptText";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoText}>
            {decodeText("vJ6MlpGQjN+bmt+cjZaPi5CSkJGam56M")}
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navText}>
            {decodeText("vJ6MlpGQjN+bmt+cjZaPi5CSkJGam56M")}
          </Link>
          <Link to="" className={styles.navText}>
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  );
}
