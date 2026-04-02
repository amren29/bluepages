import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllBusinesses, getBusinessById } from "@/lib/businesses";
import styles from "./page.module.css";

type BusinessDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  // Prebuild every mock business page so the detail view stays static and fast.
  return getAllBusinesses().map((business) => ({
    id: business.id,
  }));
}

export async function generateMetadata({
  params,
}: BusinessDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const business = getBusinessById(id);

  if (!business) {
    return {
      title: "Business Not Found",
    };
  }

  return {
    title: business.name,
    description: business.description,
  };
}

export default async function BusinessDetailPage({ params }: BusinessDetailPageProps) {
  const { id } = await params;
  const business = getBusinessById(id);

  if (!business) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <Link href="/results?location=Kuala%20Lumpur" className={styles.backLink}>
        Back to results
      </Link>

      <article className={styles.card}>
        <div className={styles.topRow}>
          <div>
            <p className={styles.category}>{business.category}</p>
            <h1>{business.name}</h1>
          </div>
          {business.isFeatured ? <span className={styles.badge}>Featured</span> : null}
        </div>

        <p className={styles.rating}>Rating {business.rating.toFixed(1)}/5</p>
        <p className={styles.description}>{business.description}</p>

        <section className={styles.details}>
          <div className={styles.detailItem}>
            <span>Phone</span>
            <a href={`tel:${business.phone}`}>{business.phone}</a>
          </div>
          <div className={styles.detailItem}>
            <span>Address</span>
            <p>{business.address}</p>
          </div>
          <div className={styles.detailItem}>
            <span>Website</span>
            {business.website ? (
              <a href={business.website} target="_blank" rel="noreferrer">
                {business.website}
              </a>
            ) : (
              <p>Website not listed yet</p>
            )}
          </div>
        </section>

        <div className={styles.actions}>
          <a href={`tel:${business.phone}`} className={styles.primaryAction}>
            Call Now
          </a>

          {business.website ? (
            <a
              href={business.website}
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryAction}
            >
              Visit Website
            </a>
          ) : (
            <span className={styles.disabledAction}>Visit Website Unavailable</span>
          )}
        </div>
      </article>
    </main>
  );
}
