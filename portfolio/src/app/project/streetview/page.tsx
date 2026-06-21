// src/app/project/streetview/page.tsx
import type { Metadata } from 'next';
export { default } from '../../../views/project/streetView/StreetView';

export const metadata: Metadata = {
  title: 'Street View',
  description:
    'Série photographique inspirée du travail de Doug Rickard et Jon Rafman, réalisée depuis Google Street View. Scènes de rue capturées depuis un point de vue inédit.',
  openGraph: {
    images: [
      {
        url: 'https://nicolasdewagner.fr/assets/imgProjects/streetview/Streetview-1.jpg',
        width: 1200,
        height: 800,
        alt: 'Street View — Nicolas De Wagner',
      },
    ],
  },
};
