import type { Metadata } from "next";
import BusinessCard from "@/components/BusinessCard";
import SearchForm from "@/components/SearchForm";
import { getFeaturedBusinesses } from "@/lib/businesses";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Find Local Services",
};

export default function HomePage() {
  const featuredBusinesses = getFeaturedBusinesses(4);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Local Directory</p>
        <h1 className={styles.title}>
          Find trusted local services near you
        </h1>
        <p className={styles.subtitle}>
          Search local businesses in Kuala Lumpur. Clear contact details, no unnecessary steps.
        </p>

        <div className={styles.searchPanel}>
          <SearchForm />
        </div>

        <div className={styles.quickFacts}>
          <div className={styles.factCard}>
            <strong>18 listings</strong>
            <span>Local businesses</span>
          </div>
          <div className={styles.factCard}>
            <strong>Featured first</strong>
            <span>Priority results</span>
          </div>
          <div className={styles.factCard}>
            <strong>Instant</strong>
            <span>No loading, static data</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionLabel}>Popular</p>
            <h2>Featured businesses</h2>
          </div>
          <p className={styles.sectionText}>
            Top-rated listings in Kuala Lumpur
          </p>
        </div>

        <div className={styles.grid}>
          {featuredBusinesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>
      </section>
    </main>
  );
}
