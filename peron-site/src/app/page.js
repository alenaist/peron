'use client';

import styles from "./page.module.css";
import ScrollingBiography from "./components/ScrollingBiography";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.visuallyHidden}>
        <h1>Juan Domingo Perón - Biografía Completa e Interactiva</h1>
        <p>Explore la vida y legado de Juan Domingo Perón (1895-1974), figura clave en la historia política argentina.</p>
      </header>
      <ScrollingBiography />
      <footer className={styles.visuallyHidden}>
        <p>Biografía interactiva de Juan Domingo Perón. Todos los derechos reservados.</p>
      </footer>
      <Analytics />
    </main>
  );
}
