import styles from "./SearchForm.module.css";

type SearchFormProps = {
  defaultKeyword?: string;
  defaultLocation?: string;
  compact?: boolean;
};

export default function SearchForm({
  defaultKeyword = "",
  defaultLocation = "Kuala Lumpur",
  compact = false,
}: SearchFormProps) {
  return (
    <form action="/results" className={`${styles.form} ${compact ? styles.compact : ""}`}>
      {/* A normal GET form keeps the search flow easy to understand for beginners. */}
      <label className={styles.field}>
        <span>What service do you need?</span>
        <input
          type="text"
          name="q"
          placeholder="Try plumber or salon"
          defaultValue={defaultKeyword}
        />
      </label>

      <label className={styles.field}>
        <span>Location</span>
        <input
          type="text"
          name="location"
          placeholder="Kuala Lumpur"
          defaultValue={defaultLocation}
        />
      </label>

      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}
