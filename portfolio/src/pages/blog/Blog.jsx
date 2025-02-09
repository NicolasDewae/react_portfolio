import React, { useEffect, useState } from "react";
import "./Blog.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Split from "../../components/split/Split";
import ScrollToTopBtn from "../../components/scrollToTopBtn/ScrollToTopBtn";
import { API_WP_BLOG, MAX_NB_ITEMS } from "../../data/globalVar";
import axios from "axios";
import { Link } from "react-router-dom";

const Blog = () => {
  // Get translate data
  let defaultValueTranslate = localStorage.getItem("defaultValueTranslate");
  // Convert translate data into a boolean
  defaultValueTranslate = defaultValueTranslate === "false" ? false : true;

  const [translate, setTranslate] = useState(defaultValueTranslate);
  const handleTranslate = () => {
    localStorage.setItem("defaultValueTranslate", !translate);
    setTranslate(!translate);
  };

  const [page, setPage] = useState(1); // Page actuelle
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0); // Nombre total de pages

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Récupération des articles
        const response = await axios.get(
          API_WP_BLOG + "/posts?per_page=" + MAX_NB_ITEMS + "&page=" + page
        );

        // Détermination du nombre total de pages
        const totalPagesHeader = response.headers["x-wp-totalpages"];
        setTotalPages(Number(totalPagesHeader));

        // Récupération des images
        const postsWithImages = await Promise.all(
          response.data.map(async (post) => {
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
        console.error("Erreur lors de la récupération des articles :", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  if (loading) {
    return (
      <>
        {/* Translation button */}
        <button className="translateBtn" onClick={handleTranslate}>
          <p className="translate">{translate ? "Fr" : "En"}</p>
        </button>
        <Navbar data={translate} />
        <h2>Chargement des articles...</h2>
        <ScrollToTopBtn />
        <Footer data={translate} />
      </>
    );
  }

  return (
    <>
      {/* Translation button */}
      <button className="translateBtn" onClick={handleTranslate}>
        <p className="translate">{translate ? "Fr" : "En"}</p>
      </button>
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
            <Link to={`/blog/${post.slug}`}>
              <a className="button">Lire l'article</a>
            </Link>
            <Split data={translate} />
          </div>
        ))}

        {/* Navigation des pages */}
        {totalPages > 1 && ( // Afficher la pagination seulement s'il y a plus d'une page
          <div className="pagination">
            <button
              disabled={page === 1} // Désactiver le bouton précédent sur la première page
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            >
              Précédent
            </button>
            <span className="responsive-text">Page {page}</span>
            <button
              disabled={page === totalPages} // Désactiver le bouton suivant sur la dernière page
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