import { Inter, Roboto_Mono, EB_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Juan Domingo Perón - Biografía",
  description: "Biografía interactiva de Juan Domingo Perón, figura clave en la historia argentina",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${robotoMono.variable} ${ebGaramond.variable}`}>
        {children}
      </body>
    </html>
  );
}
