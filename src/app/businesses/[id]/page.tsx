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

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.3;
  const stars: string[] = [];

  for (let i = 0; i < 5; i++) {
    if (i < full) stars.push("\u2605");
    else if (i === full && hasHalf) stars.push("\u2605");
    else stars.push("\u2606");
  }

  return (
    <span className={styles.rating} aria-label={`${rating} out of 5`}>
      {stars.join("")} {rating.toFixed(1)}/5
    </span>
  );
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
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 4l-4 4 4 4" />
        </svg>
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

        <StarRating rating={business.rating} />
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
              <p>Not listed</p>
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
            <span className={styles.disabledAction}>No Website</span>
          )}
        </div>
      </article>
    </main>
  );
}
