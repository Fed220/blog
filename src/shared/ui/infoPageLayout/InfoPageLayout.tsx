import React from "react";
import styles from "./InfoPageLayout.module.css";

interface InfoPageLayoutProps {
  title: string;
  updatedAt?: string;
  children: React.ReactNode;
}

export const InfoPageLayout: React.FC<InfoPageLayoutProps> = ({
  title,
  updatedAt,
  children,
}) => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>{title}</h1>
        {updatedAt && (
          <div className={styles.updatedAt}>
            Последнее обновление: {updatedAt}
          </div>
        )}
        <div className={styles.content}>{children}</div>
      </div>
    </main>
  );
};
