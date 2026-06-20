// src/app/blog/[slug]/page.tsx
import type { Metadata } from 'next';
export { default } from '../../../views/articleDetail/ArticleDetail';

export const metadata: Metadata = {
  title: 'Article',
  description: 'Article de blog — Nicolas De Wagner, photographe à Lille.',
};
