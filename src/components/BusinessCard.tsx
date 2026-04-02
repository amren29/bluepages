import Link from "next/link";
import { type Business } from "@/lib/businesses";
import styles from "./BusinessCard.module.css";

type BusinessCardProps = {
  business: Business;
};

export default function BusinessCard({ business }: BusinessCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <div className={styles.topline}>
              <p className={styles.category}>{business.category}</p>
              <p className={styles.rating}>Rating {business.rating.toFixed(1)}</p>
            </div>
            <h2 className={styles.title}>{business.name}</h2>
          </div>
          {business.isFeatured ? <span className={styles.badge}>Featured</span> : null}
        </div>

        <div className={styles.meta}>
          <p className={styles.metaLabel}>Address</p>
          <p>{business.address}</p>
        </div>

        <p className={styles.description}>{business.description}</p>
      </div>

      <div className={styles.actions}>
        <Link href={`/businesses/${business.id}`} className={styles.link}>
          View Details
        </Link>
      </div>
    </article>
  );
}
