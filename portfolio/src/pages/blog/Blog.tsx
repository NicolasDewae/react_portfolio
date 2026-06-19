// src/pages/blog/Blog.tsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import ScrollReveal from '../../components/ScrollReveal';
import ScrollToTopBtn from '../../components/scrollToTopBtn';
import useTranslate from '../../hooks/useTranslate';
import { API_WP_BLOG, MAX_NB_ITEMS } from '../../data/globalVar';
import styles from './Blog.module.css';

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
        setTotalPages(Number(response.headers['x-wp-totalpages']));

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

  return (
    <div className={styles.page}>
      <Navbar translate={translate} onTranslate={handleTranslate} />
      <div className={styles.hero}>
        <h1 className={styles.title}>Articles</h1>
      </div>

      {loading ? (
        <p className={styles.loading}>Chargement...</p>
      ) : (
        <div className={styles.list}>
          {posts.map((post) => (
            <ScrollReveal key={post.slug}>
              <article className={styles.article}>
                {post.featured_image && (
                  <img
                    src={post.featured_image}
                    alt={post.title.rendered}
                    className={styles.articleImage}
                  />
                )}
                <div className={styles.articleBody}>
                  <h2
                    className={styles.articleTitle}
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <p
                    className={styles.articleExcerpt}
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  <Link to={`/blog/${post.slug}`} className={styles.readMore}>
                    {translate ? 'Lire l\'article' : 'Read article'} →
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}

          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button
                className={styles.paginationBtn}
                disabled={page === 1}
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              >
                ←
              </button>
              <span className={styles.paginationPage}>{page} / {totalPages}</span>
              <button
                className={styles.paginationBtn}
                disabled={page === totalPages}
                onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              >
                →
              </button>
            </div>
          )}
        </div>
      )}

      <ScrollToTopBtn />
      <Footer data={translate} />
    </div>
  );
};

export default Blog;
