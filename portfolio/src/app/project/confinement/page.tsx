// src/app/project/confinement/page.tsx
import type { Metadata } from 'next';
export { default } from '../../../views/project/confinement/Confinement';

export const metadata: Metadata = {
  title: 'Confinement',
  description:
    'Série photographique réalisée durant le confinement de 2020 à Lille. Portraits de rue, vie de quartier et solitude en temps de crise sanitaire.',
  openGraph: {
    images: [
      {
        url: 'https://nicolasdewagner.fr/assets/imgProjects/confinement/Confinement-1.jpg',
        width: 1200,
        height: 800,
        alt: 'Confinement — Nicolas De Wagner',
      },
    ],
  },
};
