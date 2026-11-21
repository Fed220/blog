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
              Hogar
            </Link>
            <Link to="/about" className={styles.link}>
              Acerca del proyecto
            </Link>
            <Link to="/disclaimer" className={styles.link}>
              Descargo de responsabilidad
            </Link>
            <Link to="/privacy" className={styles.link}>
              política de privacidad
            </Link>
            <Link to="/contacts" className={styles.link}>
              Contactos
            </Link>
          </div>
        </div>

        <div className={styles.disclaimerBox}>
          <span className={styles.disclaimerTitle}>
            Aviso importante (Disclaimer):{" "}
          </span>
          Todo el material publicado en este sitio web tiene fines meramente
          informativos, educativos y de referencia. La información no constituye
          asesoramiento financiero, de inversión ni legal. La administración del
          sitio web no participa en el intercambio, venta, compra ni
          almacenamiento de activos digitales.
        </div>

        <div className={styles.copyright}>
          © {new Date().getFullYear()} SolidBase Docs. Libro de referencia
          informativo y educativo.
        </div>
      </div>
    </footer>
  );
};
