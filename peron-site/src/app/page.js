'use client';

import styles from "./page.module.css";
import ScrollingBiography from "./components/ScrollingBiography";

export default function Home() {
  return (
    <div className={styles.page}>
      <ScrollingBiography />
    </div>
  );
}
