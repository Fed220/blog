import React, { useState } from "react";
import {
  ArticleCategory,
  ARTICLES_MOCK,
} from "../../../shared/mock/articles.mock";
import { ArticleCard } from "../../../entities/article/ArticleCard";
import styles from "./MainHome.module.css";

type FilterValue = "all" | ArticleCategory;

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "Все материалы" },
  { value: "wallets", label: "Криптокошельки" },
  { value: "security", label: "Безопасность" },
  { value: "basics", label: "База знаний" },
];

const TOPICS: { category: ArticleCategory; title: string; desc: string }[] = [
  {
    category: "wallets",
    title: "Архитектура кошельков",
    desc: "Сравнение кастодиальных, программных и аппаратных решений для хранения ключей.",
  },
  {
    category: "security",
    title: "Криптография и защита",
    desc: "Стандарты BIP-39, резервное копирование сид-фраз и контроль смарт-контрактов.",
  },
  {
    category: "basics",
    title: "Устройство блокчейн-сетей",
    desc: "Принципы расчета комиссий (Gas), стандарты токенов и работа обозревателей.",
  },
];

export const MainHome: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const filteredArticles =
    activeFilter === "all"
      ? ARTICLES_MOCK
      : ARTICLES_MOCK.filter((item) => item.category === activeFilter);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.heroTag}>Техническая база знаний</span>
        <h1 className={styles.heroTitle}>
          Справочник по криптовалютам и цифровым кошелькам
        </h1>
        <p className={styles.heroSubtitle}>
          Независимые технические обзоры некастодиальных и аппаратных кошельков,
          пошаговые руководства по защите приватных ключей и разбор принципов
          работы распределенных реестров.
        </p>
        <div className={styles.heroStats}>
          <div className={styles.heroStatItem}>
            <strong>{ARTICLES_MOCK.length}</strong> подробных руководств
          </div>
          <div className={styles.heroStatItem}>
            <strong>100%</strong> образовательный контент без рекламы
          </div>
          <div className={styles.heroStatItem}>
            <strong>Актуально</strong> на ноябрь 2026 года
          </div>
        </div>
      </section>

      <section className={styles.topicsGrid}>
        {TOPICS.map((topic) => (
          <button
            key={topic.category}
            type="button"
            className={styles.topicCard}
            onClick={() => setActiveFilter(topic.category)}
          >
            <div className={styles.topicTitle}>{topic.title}</div>
            <div className={styles.topicDesc}>{topic.desc}</div>
          </button>
        ))}
      </section>

      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Статьи и обзоры</h2>
        <div className={styles.filters}>
          {FILTERS.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={`${styles.filterBtn} ${
                activeFilter === filter.value ? styles.filterBtnActive : ""
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <section className={styles.grid}>
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </section>
    </main>
  );
};
