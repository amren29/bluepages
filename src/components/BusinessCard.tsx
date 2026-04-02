import Link from "next/link";
import { type Business } from "@/lib/businesses";
import styles from "./BusinessCard.module.css";

type BusinessCardProps = {
  business: Business;
};

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
    <span className={styles.stars} aria-label={`${rating} out of 5`}>
      {stars.join("")}
      <span className={styles.ratingNum}>{rating.toFixed(1)}</span>
    </span>
  );
}

export default function BusinessCard({ business }: BusinessCardProps) {
  return (
    <Link href={`/businesses/${business.id}`} className={styles.card}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.category}>{business.category}</span>
          {business.isFeatured ? <span className={styles.badge}>Featured</span> : null}
        </div>

        <h2 className={styles.title}>{business.name}</h2>

        <StarRating rating={business.rating} />

        <p className={styles.address}>{business.address}</p>

        <p className={styles.description}>{business.description}</p>
      </div>

      <div className={styles.foot}>
        <span className={styles.viewLink}>
          View Details
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 4l4 4-4 4" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
