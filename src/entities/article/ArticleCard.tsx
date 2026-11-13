import React from "react";
import { Link } from "react-router-dom";
import { Article, ArticleCategory } from "../../shared/mock/articles.mock";
import styles from "./ArticleCard.module.css";

const CATEGORY_LABELS: Record<ArticleCategory, string> = {
  wallets: "Криптокошельки",
  security: "Безопасность",
  basics: "База знаний",
};

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Link to={`/article/${article.slug}`} className={styles.card}>
      <div>
        <div className={styles.metaTop}>
          <span className={styles.category}>
            {CATEGORY_LABELS[article.category]}
          </span>
          <span className={styles.readTime}>
            {article.readTimeMinutes} мин чтения
          </span>
        </div>

        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.summary}>{article.summary}</p>
      </div>

      <div className={styles.footer}>
        <span>{article.publishedAt}</span>
        <span className={styles.readMore}>Читать →</span>
      </div>
    </Link>
  );
};
