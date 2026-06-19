// src/pages/articleDetail/ArticleDetail.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import ScrollToTopBtn from '../../components/scrollToTopBtn';
import NotFound from '../notFound';
import useTranslate from '../../hooks/useTranslate';
import { API_WP_BLOG } from '../../data/globalVar';
import styles from './ArticleDetail.module.css';

interface FeaturedMedia {
  source_url: string;
}

interface Article {
  title: { rendered: string };
  content: { rendered: string };
  excerpt?: { rendered: string };
  _embedded?: {
    'wp:featuredmedia'?: FeaturedMedia[];
  };
}

const ArticleDetail = () => {
  const { translate, handleTranslate } = useTranslate();
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `${API_WP_BLOG}/posts?slug=${slug}&_embed`
        );
        setArticle(response.data.length > 0 ? response.data[0] : null);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération de l'article :", error);
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className={styles.page}>
        <Navbar translate={translate} onTranslate={handleTranslate} />
        <p className={styles.loading}>Chargement...</p>
        <Footer data={translate} />
      </div>
    );
  }

  if (!article) return <NotFound />;

  const featuredImage = article._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const cleanExcerpt = article.excerpt?.rendered
    ?.replace(/(<([^>]+)>)/gi, '')
    .slice(0, 160);

  return (
    <>
      <Helmet>
        <title>{article.title.rendered} | Nicolas De Wagner</title>
        <meta name="description" content={cleanExcerpt} />
        <link rel="canonical" href={`https://nicolasdewagner.fr/articles/${slug}`} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className={styles.page}>
        <Navbar translate={translate} onTranslate={handleTranslate} />
        <div className={styles.hero}>
          <h1
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: article.title.rendered }}
          />
        </div>
        <div className={styles.content}>
          {featuredImage && (
            <img
              src={featuredImage}
              alt={article.title.rendered}
              className={styles.featuredImage}
            />
          )}
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{ __html: article.content.rendered }}
          />
        </div>
        <ScrollToTopBtn />
        <Footer data={translate} />
      </div>
    </>
  );
};

export default ArticleDetail;
