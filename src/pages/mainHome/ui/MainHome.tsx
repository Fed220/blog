import React, { useState } from "react";
import {
  ArticleCategory,
  ARTICLES_MOCK,
} from "../../../shared/mock/articles.mock";
import { ArticleCard } from "../../../entities/article/ArticleCard";
import styles from "./MainHome.module.css";

type FilterValue = "all" | ArticleCategory;

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "Todos los materiales" },
  { value: "wallets", label: "Carteras" },
  { value: "security", label: "Seguridad" },
  { value: "basics", label: "Base de conocimientos" },
];

const TOPICS: { category: ArticleCategory; title: string; desc: string }[] = [
  {
    category: "wallets",
    title: "Arquitectura de billetera",
    desc: "Comparación de soluciones de custodia, software y hardware para el almacenamiento de claves.",
  },
  {
    category: "security",
    title: "Criptografía y seguridad",
    desc: "Estándares BIP-39, copia de seguridad de claves semilla y control de contratos inteligentes.",
  },
  {
    category: "basics",
    title: "La estructura de las redes blockchain",
    desc: "Principios para el cálculo de comisiones (Gas), estándares de tokens y trabajo de los observadores.",
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
        <span className={styles.heroTag}>Base de conocimientos técnicos</span>
        <h1 className={styles.heroTitle}>
          Guía sobre divisas y monederos digitales
        </h1>
        <p className={styles.heroSubtitle}>
          Análisis técnicos independientes de monederos de hardware y sin
          custodia, guías paso a paso para proteger las claves privadas y un
          análisis de los principios de los libros de contabilidad distribuidos.
        </p>
        <div className={styles.heroStats}>
          <div className={styles.heroStatItem}>
            <strong>{ARTICLES_MOCK.length}</strong> manuales detallados
          </div>
          <div className={styles.heroStatItem}>
            <strong>100%</strong> Contenido educativo sin publicidad
          </div>
          <div className={styles.heroStatItem}>
            <strong>Importante</strong> A partir de noviembre de 2026
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
