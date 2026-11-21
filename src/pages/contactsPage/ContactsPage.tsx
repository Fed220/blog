import React from "react";
import { InfoPageLayout } from "../../shared/ui/infoPageLayout/InfoPageLayout";
import styles from "./ContactsPage.module.css";

export const ContactsPage: React.FC = () => {
  return (
    <InfoPageLayout title="Contactos editoriales">
      <p>
        Si detecta alguna inexactitud técnica en uno de nuestros artículos,
        desea sugerir un tema para una nueva guía educativa o tiene alguna
        consulta sobre el funcionamiento de este portal informativo, le rogamos
        que se ponga en contacto con nuestro equipo editorial a través del
        correo electrónico.
      </p>

      <div className={styles.contactCard}>
        <div className={styles.contactLabel}>
          Correo electrónico de la redacción :
        </div>
        <a
          href="mailto:editorial@yourdomain.com"
          className={styles.contactValue}
        >
          editorial@yourdomain.com
        </a>
      </div>

      <h2>Modo de procesamiento de solicitudes</h2>
      <p>
        El equipo editorial revisa las consultas en días laborables, entre las
        10:00 y las 18:00 (GMT-3). Tenga en cuenta que no ofrecemos soporte
        técnico para recuperar el acceso a monederos de terceros, ni brindamos
        asesoramiento sobre cuestiones financieras.
      </p>
    </InfoPageLayout>
  );
};
