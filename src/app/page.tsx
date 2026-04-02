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
        <p className={styles.eyebrow}>Local directory MVP</p>
        <h1 className={styles.title}>Find Local Services</h1>
        <p className={styles.subtitle}>
          Browse trusted local businesses with simple search, clear contact details, and no
          unnecessary steps.
        </p>

        <div className={styles.searchPanel}>
          <SearchForm />
        </div>

        <div className={styles.quickFacts}>
          <div className={styles.factCard}>
            <strong>18 businesses</strong>
            <span>Stored in one local JSON file</span>
          </div>
          <div className={styles.factCard}>
            <strong>Featured first</strong>
            <span>Priority listings stay visible in results</span>
          </div>
          <div className={styles.factCard}>
            <strong>Static and fast</strong>
            <span>No database and no external API calls</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionLabel}>Popular searches</p>
            <h2>Featured businesses in Kuala Lumpur</h2>
          </div>
          <p className={styles.sectionText}>
            A few sample listings to make the homepage useful even before the first search.
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
