// src/app/project/canaries/page.tsx
import type { Metadata } from 'next';
export { default } from '../../../views/project/canaries/Canaries';

export const metadata: Metadata = {
  title: 'Canaries',
  description:
    'Série photographique réalisée aux îles Canaries. Couleurs, lumière et scènes de vie à Tenerife.',
  openGraph: {
    images: [
      {
        url: 'https://nicolasdewagner.fr/assets/imgProjects/canaries/Canaries-11.jpg',
        width: 1200,
        height: 800,
        alt: 'Canaries — Nicolas De Wagner',
      },
    ],
  },
};
