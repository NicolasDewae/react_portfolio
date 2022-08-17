import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './Article.css';
import blogBata from '../../config/blogData';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Split from '../../components/split/Split';

const Article = () => {

        const { id } = useParams();
        const [article, setBlog] = useState(null);
      
        useEffect(() => {
          let article = blogBata.find((article) => article.id === parseInt(id));
          if (article) {
            setBlog(article);
          }
        }, []);
    
    return (
        <>
            <Navbar />
            {article ? (
                <div className="blog">
                    <div className="blog-title">
                        <h1>{article.title}</h1>
                    </div>
                    <div className="blog-content">
                        <p>
                            {article.description}
                        </p>
                    </div>
                    <div>
                        <img src={article.blogImages[2]} alt="images1" />
                        <img src={article.blogImages[0]} alt="images2" />
                    </div>
                </div>

            ) : (
                <Split />
            )}
            <Footer />
        </>
    );
}

export default Article;