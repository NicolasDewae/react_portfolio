// src/pages/blog/Blog.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Split from '../../components/split';
import ScrollToTopBtn from '../../components/scrollToTopBtn';
import TranslateButton from '../../components/translateButton';
import useTranslate from '../../hooks/useTranslate';
import { API_WP_BLOG, MAX_NB_ITEMS } from '../../data/globalVar';
import './Blog.css';

interface Post {
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  featured_image: string | null;
}

const Blog = () => {
  const { translate, handleTranslate } = useTranslate();
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${API_WP_BLOG}/posts?per_page=${MAX_NB_ITEMS}&page=${page}`
        );
        const totalPagesHeader = response.headers['x-wp-totalpages'];
        setTotalPages(Number(totalPagesHeader));

        const postsWithImages = await Promise.all(
          response.data.map(async (post: Post) => {
            if (post.featured_media) {
              const mediaResponse = await axios.get(
                `${API_WP_BLOG}/media/${post.featured_media}`
              );
              return { ...post, featured_image: mediaResponse.data.source_url };
            }
            return { ...post, featured_image: null };
          })
        );

        setPosts(postsWithImages);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des articles :', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  if (loading) {
    return (
      <>
        <TranslateButton translate={translate} onTranslate={handleTranslate} />
        <Navbar data={translate} />
        <h2>Chargement des articles...</h2>
        <ScrollToTopBtn />
        <Footer data={translate} />
      </>
    );
  }

  return (
    <>
      <TranslateButton translate={translate} onTranslate={handleTranslate} />
      <Navbar data={translate} />
      <div>
        <h1>Articles</h1>
        {posts.map((post) => (
          <div key={post.slug}>
            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            {post.featured_image && (
              <img
                className="responsive-image"
                src={post.featured_image}
                alt={post.title.rendered}
              />
            )}
            <p
              className="responsive-text"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
            <Link className="button" to={`/blog/${post.slug}`}>
              Lire l'article
            </Link>
            <Split />
          </div>
        ))}
        {totalPages > 1 && (
          <div className="pagination">
            <button
              disabled={page === 1}
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            >
              Précédent
            </button>
            <span className="responsive-text">Page {page}</span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            >
              Suivant
            </button>
          </div>
        )}
      </div>
      <ScrollToTopBtn />
      <Footer data={translate} />
    </>
  );
};

export default Blog;
