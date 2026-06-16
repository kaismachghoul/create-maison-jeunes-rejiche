import type { Metadata, Viewport } from "next";
import { Fraunces, Space_Grotesk, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maison-jeunes-rejiche.example"),
  title: "Maison des Jeunes de Rejiche — Là où la mer rencontre l'imagination",
  description:
    "Une expérience méditerranéenne immersive pour la Maison des Jeunes de Rejiche, Mahdia — culture, création, communauté et jeunesse au bord de la mer.",
  keywords: [
    "Maison des Jeunes",
    "Rejiche",
    "Mahdia",
    "Tunisie",
    "Dar Chabab",
    "culture",
    "jeunesse",
  ],
  openGraph: {
    title: "Maison des Jeunes de Rejiche",
    description: "Là où la mer rencontre l'imagination.",
    type: "website",
    locale: "fr_TN",
  },
};

export const viewport: Viewport = {
  themeColor: "#08293b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${grotesk.variable} ${arabic.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
