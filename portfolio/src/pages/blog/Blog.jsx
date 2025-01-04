import React, { useEffect, useState } from "react";
import "./Blog.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Split from "../../components/split/Split";
import ScrollToTopBtn from "../../components/scrollToTopBtn/ScrollToTopBtn";
import { API_WP_BLOG } from "../../data/globalVar";
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

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Récupération des articles
        const response = await axios.get( API_WP_BLOG + "/posts?per_page=5");
        // Récupération des images
        const postsWithImages = await Promise.all(
          response.data.map(async (post) => {
            if (post.featured_media) {
              const mediaResponse = await axios.get(
                API_WP_BLOG + "/media/" + post.featured_media
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
  }, []);

  if (loading) {
    return (
      <>
        {/* Translation button */}
        <button className="translateBtn" onClick={handleTranslate}>
          <p className="translate">{translate ? "Fr" : "En"}</p>
        </button>
        <Navbar data={translate} />
        <p>Chargement des articles...</p>
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
          <div key={post.id}>
            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            {post.featured_image && (
              <img src={post.featured_image} alt={post.title.rendered} />
            )}
            <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            <Link to={`/article/${post.id}`}>Lire l'article complet</Link>
            <Split data={translate} />
          </div>
        ))}
      </div>
      <ScrollToTopBtn />
      <Footer data={translate} />
    </>
  );
};

export default Blog;
