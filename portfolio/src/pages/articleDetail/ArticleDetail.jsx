import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_WP_BLOG } from "../../data/globalVar";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Split from "../../components/split/Split";
import ScrollToTopBtn from "../../components/scrollToTopBtn/ScrollToTopBtn";

import "./ArticleDetail.css";
import NotFound from "../notFound/NotFound";

const ArticleDetail = () => {
  // Get translate data
  let defaultValueTranslate = localStorage.getItem("defaultValueTranslate");
  // Convert translate data into a boolean
  defaultValueTranslate = defaultValueTranslate === "false" ? false : true;

  const [translate, setTranslate] = useState(defaultValueTranslate);
  const handleTranslate = () => {
    localStorage.setItem("defaultValueTranslate", !translate);
    setTranslate(!translate);
  };

  const { slug } = useParams(); // Récupère le slug depuis l'URL
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          API_WP_BLOG + "/posts?slug=" + slug + "&_embed"
        );
        console.log("log = ", response.data);
        if (response.data.length > 0) {
          setArticle(response.data[0]);
        } else {
          setArticle(null); // Aucun article trouvé
        }
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération de l'article :", error);
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  console.log("Article dans le state :", article);

  if (loading)
    return (
      <>
        {/* Translation button */}
        <button className="translateBtn" onClick={handleTranslate}>
          <p className="translate">{translate ? "Fr" : "En"}</p>
        </button>
        <Navbar data={translate} />
        <h2>Chargement de l'article...</h2>
        <ScrollToTopBtn />
        <Footer data={translate} />
      </>
    );
  if (!article) return <NotFound />;

  return (
    <>
      {/* Translation button */}
      <button className="translateBtn" onClick={handleTranslate}>
        <p className="translate">{translate ? "Fr" : "En"}</p>
      </button>
      <Navbar data={translate} />
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: article.title.rendered }} />
        {article._embedded && article._embedded["wp:featuredmedia"] && (
          <div>
            <img
              className="responsive-image"
              src={article._embedded["wp:featuredmedia"][0].source_url}
              alt={article.title.rendered}
            />
          </div>
        )}
        <div className="responsive-text" dangerouslySetInnerHTML={{ __html: article.content.rendered }} />
      </div>
      <ScrollToTopBtn />
      <Split data={translate} />
      <Footer data={translate} />
    </>
  );
};

export default ArticleDetail;
