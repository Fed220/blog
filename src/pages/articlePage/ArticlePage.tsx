import React from "react";
import { useParams, Link } from "react-router-dom";
import { ARTICLES_MOCK } from "../../shared/mock/articles.mock";
import styles from "./ArticlePage.module.css";

export const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = ARTICLES_MOCK.find((item) => item.slug === slug);

  if (!article) {
    return (
      <main className={styles.wrapper}>
        <div className={styles.notFound}>
          <h1 className={styles.title}>Статья не найдена</h1>
          <Link to="/" className={styles.backLink}>
            ← Вернуться к списку статей
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.wrapper}>
      <Link to="/" className={styles.backLink}>
        ← Все статьи справочника
      </Link>

      <article className={styles.article}>
        <div className={styles.meta}>
          <span>Опубликовано: {article.publishedAt}</span>
          <span>•</span>
          <span>Время чтения: {article.readTimeMinutes} мин</span>
        </div>

        <h1 className={styles.title}>{article.title}</h1>

        <div className={styles.authorBox}>
          <div>
            <div className={styles.authorName}>
              Автор: {article.author.name}
            </div>
            <div className={styles.authorRole}>{article.author.role}</div>
          </div>
        </div>

        {article.sections.map((section, idx) => (
          <section key={idx} className={styles.section}>
            <h2 className={styles.heading}>{section.heading}</h2>
            {section.paragraphs.map((text, pIdx) => (
              <p key={pIdx} className={styles.paragraph}>
                {text}
              </p>
            ))}
          </section>
        ))}
      </article>
    </main>
  );
};
