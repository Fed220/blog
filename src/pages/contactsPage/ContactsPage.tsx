import React from "react";
import { InfoPageLayout } from "../../shared/ui/infoPageLayout/InfoPageLayout";
import styles from "./ContactsPage.module.css";

export const ContactsPage: React.FC = () => {
  return (
    <InfoPageLayout title="Контакты редакции">
      <p>
        Если вы заметили техническую неточность в одной из статей, хотите
        предложить тему для нового образовательного руководства или направить
        запрос по работе информационного портала, свяжитесь с нашей редакцией по
        электронной почте.
      </p>

      <div className={styles.contactCard}>
        <div className={styles.contactLabel}>Электронная почта редакции:</div>
        <a
          href="mailto:editorial@yourdomain.com"
          className={styles.contactValue}
        >
          editorial@yourdomain.com
        </a>
      </div>

      <h2>Режим обработки обращений</h2>
      <p>
        Редакция рассматривает обращения в рабочие дни с 10:00 до 18:00 (UTC+3).
        Обращаем внимание, что мы не оказываем техническую поддержку по
        восстановлению доступа к сторонним кошелькам и не консультируем по
        финансовым вопросам.
      </p>
    </InfoPageLayout>
  );
};
