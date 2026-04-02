import type { Metadata } from "next";
import BusinessCard from "@/components/BusinessCard";
import SearchForm from "@/components/SearchForm";
import { filterBusinesses, readSearchValue } from "@/lib/businesses";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Search Results",
};

type ResultsPageProps = {
  searchParams: Promise<{
    q?: string | string[];
    location?: string | string[];
  }>;
};

export default async function ResultsPage({ searchParams }: ResultsPageProps) {
  const params = await searchParams;
  const keyword = readSearchValue(params.q);
  const location = readSearchValue(params.location) || "Kuala Lumpur";
  const businesses = filterBusinesses(keyword, location);

  return (
    <main className={styles.page}>
      <section className={styles.header}>
        <div className={styles.headerText}>
          <p className={styles.kicker}>Search local businesses</p>
          <h1>Results for your directory search</h1>
          <p>
            Featured listings appear first. The current search checks business names, categories,
            and addresses in the local mock dataset.
          </p>
        </div>

        <SearchForm defaultKeyword={keyword} defaultLocation={location} compact />
      </section>

      <section className={styles.summary}>
        <div className={styles.summaryCard}>
          <span>Keyword</span>
          <strong>{keyword || "All services"}</strong>
        </div>
        <div className={styles.summaryCard}>
          <span>Location</span>
          <strong>{location}</strong>
        </div>
        <div className={styles.summaryCard}>
          <span>Matches</span>
          <strong>{businesses.length}</strong>
        </div>
      </section>

      {businesses.length > 0 ? (
        <section className={styles.grid}>
          {businesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </section>
      ) : (
        <section className={styles.emptyState}>
          <h2>No businesses matched this search</h2>
          <p>
            Try a broader service name such as <strong>plumber</strong>, <strong>salon</strong>,
            or leave the keyword blank to browse everything in Kuala Lumpur.
          </p>
        </section>
      )}
    </main>
  );
}
