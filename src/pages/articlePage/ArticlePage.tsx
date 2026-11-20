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
          <h1 className={styles.title}>Artículo no encontrado</h1>
          <Link to="/" className={styles.backLink}>
            ← Volver a la lista de artículos
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.wrapper}>
      <Link to="/" className={styles.backLink}>
        ← Todos los artículos de la guía de referencia
      </Link>

      <article className={styles.article}>
        <div className={styles.meta}>
          <span>Publicado: {article.publishedAt}</span>
          <span>•</span>
          <span>Tiempo de lectura: {article.readTimeMinutes} mín.</span>
        </div>

        <h1 className={styles.title}>{article.title}</h1>

        <div className={styles.authorBox}>
          <div>
            <div className={styles.authorName}>
              Autor: {article.author.name}
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
