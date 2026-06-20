// src/app/layout.tsx
import type { Metadata } from 'next';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import ScrollToTop from '../components/scrollToTop';
import PageTransition from '../components/PageTransition';
import '../index.css';

config.autoAddCss = false;

export const metadata: Metadata = {
  title: {
    default: 'Nicolas De Wagner — Photographe à Lille',
    template: '%s — Nicolas De Wagner',
  },
  description:
    'Portfolio photographique de Nicolas De Wagner, photographe de rue basé à Lille. Projets Street View, Confinement, Canaries, Street.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://nicolasdewagner.fr',
    siteName: 'Nicolas De Wagner',
    images: [
      {
        url: 'https://nicolasdewagner.fr/assets/imgProjects/streetview/Streetview-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Nicolas De Wagner — Photographe à Lille',
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <ScrollToTop />
        <PageTransition>{children}</PageTransition>
        <GoogleAnalytics gaId="G-9C72HPHP7D" />
      </body>
    </html>
  );
}
