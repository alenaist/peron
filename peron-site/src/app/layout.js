import { Inter, Roboto_Mono, EB_Garamond } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

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
  title: "Juan Domingo Perón - Biografía Completa e Interactiva | Historia Argentina",
  description: "Biografía interactiva y cronológica de Juan Domingo Perón (1895-1974), figura clave en la historia política argentina. Explore su vida, presidencias y legado político.",
  keywords: "Juan Domingo Perón, Perón, peronismo, Eva Perón, Evita, historia argentina, biografía, presidente argentino, justicialismo, política argentina",
  authors: [{ name: "Biografía Perón" }],
  creator: "Biografía Perón",
  publisher: "Biografía Perón",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://peron-alenaist.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'es-AR': '/',
    },
  },
  openGraph: {
    title: "Juan Domingo Perón - Biografía Completa e Interactiva",
    description: "Biografía interactiva y cronológica de Juan Domingo Perón (1895-1974), figura clave en la historia política argentina. Explore su vida, presidencias y legado político.",
    url: 'https://peron-alenaist.vercel.app',
    siteName: 'Biografía de Juan Domingo Perón',
    images: [
      {
        url: 'https://peron-alenaist.vercel.app/peronJoven.jpg',
        width: 800,
        height: 600,
        alt: 'Juan Domingo Perón en su juventud',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Juan Domingo Perón - Biografía Completa e Interactiva",
    description: "Biografía interactiva y cronológica de Juan Domingo Perón (1895-1974), figura clave en la historia política argentina.",
    images: ['https://peron-alenaist.vercel.app/peronJoven.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} ${robotoMono.variable} ${ebGaramond.variable}`}>
        {children}
        
        {/* Structured data for Juan Domingo Perón */}
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Juan Domingo Perón",
              "birthDate": "1895-10-08",
              "deathDate": "1974-07-01",
              "birthPlace": {
                "@type": "Place",
                "name": "Lobos, Buenos Aires, Argentina"
              },
              "description": "Político, militar y escritor argentino que fue presidente de Argentina en tres ocasiones.",
              "jobTitle": ["Presidente de Argentina", "Militar", "Político"],
              "spouse": [
                {
                  "@type": "Person",
                  "name": "Eva Duarte de Perón"
                },
                {
                  "@type": "Person",
                  "name": "María Estela Martínez de Perón"
                }
              ],
              "sameAs": [
                "https://es.wikipedia.org/wiki/Juan_Domingo_Per%C3%B3n",
                "https://www.britannica.com/biography/Juan-Peron"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
