import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainFooter.module.css";

export const MainFooter: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.links}>
            <Link to="/" className={styles.link}>
              Главная
            </Link>
            <Link to="/about" className={styles.link}>
              О проекте
            </Link>
            <Link to="/disclaimer" className={styles.link}>
              Отказ от ответственности
            </Link>
            <Link to="/privacy" className={styles.link}>
              Политика конфиденциальности
            </Link>
            <Link to="/contacts" className={styles.link}>
              Контакты
            </Link>
          </div>
        </div>

        <div className={styles.disclaimerBox}>
          <span className={styles.disclaimerTitle}>
            Важное уведомление (Disclaimer):{" "}
          </span>
          Все материалы, размещенные на данном ресурсе, носят исключительно
          справочный, образовательный и ознакомительный характер. Информация не
          является финансовой, инвестиционной или юридической рекомендацией.
          Администрация сайта не осуществляет деятельность по обмену, продаже,
          покупке или хранению цифровых активов.
        </div>

        <div className={styles.copyright}>
          © {new Date().getFullYear()} CryptoBase Docs.
          Информационно-образовательный справочник.
        </div>
      </div>
    </footer>
  );
};
