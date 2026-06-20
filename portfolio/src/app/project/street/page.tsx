// src/app/project/street/page.tsx
import type { Metadata } from 'next';
export { default } from '../../../views/project/street/Street';

export const metadata: Metadata = {
  title: 'Street',
  description:
    'Photographie de rue à Paris, New York, Montréal et Londres. Instants volés, humanité et hasard des rencontres.',
  openGraph: {
    images: [
      {
        url: 'https://nicolasdewagner.fr/assets/imgProjects/street/street-1.jpg',
        width: 1200,
        height: 800,
        alt: 'Street — Nicolas De Wagner',
      },
    ],
  },
};
