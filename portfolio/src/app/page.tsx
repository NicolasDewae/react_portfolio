// src/app/page.tsx
import type { Metadata } from 'next';
export { default } from '../App';

export const metadata: Metadata = {
  title: 'Nicolas De Wagner — Photographe à Lille',
  description:
    'Portfolio photographique de Nicolas De Wagner, photographe de rue basé à Lille. Séries Street View, Confinement, Canaries, Street.',
  openGraph: {
    images: [
      {
        url: 'https://nicolasdewagner.fr/assets/imgProjects/streetview/Streetview-1.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};
