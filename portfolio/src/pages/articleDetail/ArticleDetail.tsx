// src/pages/articleDetail/ArticleDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Split from '../../components/split';
import ScrollToTopBtn from '../../components/scrollToTopBtn';
import TranslateButton from '../../components/translateButton';
import NotFound from '../notFound';
import useTranslate from '../../hooks/useTranslate';
import { API_WP_BLOG } from '../../data/globalVar';
import './ArticleDetail.css';

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
      <>
        <TranslateButton translate={translate} onTranslate={handleTranslate} />
        <Navbar data={translate} />
        <h2>Chargement de l'article...</h2>
        <ScrollToTopBtn />
        <Footer data={translate} />
      </>
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
      <TranslateButton translate={translate} onTranslate={handleTranslate} />
      <Navbar data={translate} />
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: article.title.rendered }} />
        {featuredImage && (
          <div>
            <img
              className="responsive-image"
              src={featuredImage}
              alt={article.title.rendered}
            />
          </div>
        )}
        <div
          className="responsive-text"
          dangerouslySetInnerHTML={{ __html: article.content.rendered }}
        />
      </div>
      <ScrollToTopBtn />
      <Split />
      <Footer data={translate} />
    </>
  );
};

export default ArticleDetail;
