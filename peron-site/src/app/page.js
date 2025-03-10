'use client';

import styles from "./page.module.css";
import ScrollingBiography from "./components/ScrollingBiography";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <div className={styles.page}>
      <ScrollingBiography />
      <Analytics />
    </div>
  );
}
