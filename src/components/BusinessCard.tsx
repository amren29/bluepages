import Link from "next/link";
import { type Business } from "@/lib/businesses";
import styles from "./BusinessCard.module.css";

type BusinessCardProps = {
  business: Business;
};

export default function BusinessCard({ business }: BusinessCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div>
          <p className={styles.category}>{business.category}</p>
          <h2 className={styles.title}>{business.name}</h2>
        </div>
        {business.isFeatured ? <span className={styles.badge}>Featured</span> : null}
      </div>

      <div className={styles.meta}>
        <p>Rating {business.rating.toFixed(1)}/5</p>
        <p>{business.address}</p>
      </div>

      <p className={styles.description}>{business.description}</p>

      <Link href={`/businesses/${business.id}`} className={styles.link}>
        View Details
      </Link>
    </article>
  );
}
