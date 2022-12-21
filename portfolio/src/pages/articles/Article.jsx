import React, { useState, useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './Article.css';
import blogBata from '../../config/blogData';
import { useParams } from 'react-router-dom';
import ScrollToTopBtn from '../../components/scrollToTopBtn/ScrollToTopBtn';

const Article = () => {

    // Get translate data
    let defaultValueTranslate = localStorage.getItem('defaultValueTranslate');
    // Convert translate data into a boolean
    defaultValueTranslate = defaultValueTranslate === "false" ? false : true;

    const [translate, setTranslate] = useState(defaultValueTranslate);
    const handleTranslate = () => {
        localStorage.setItem('defaultValueTranslate', !translate);  
        setTranslate(!translate);
    }

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
            {/* Translation button */}
            <button className='translateBtn' onClick={handleTranslate}>
                <p className='translate'>
                    {translate ? 'Fr' : 'En'}
                </p>
            </button>
            <Navbar data={translate} />
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
                <div className="blog">
                    <div className="blog-title">
                        <h1>Article introuvable</h1>
                    </div>
                    <div className="blog-content">
                        <p>
                            L'article que vous recherchez n'existe pas.
                        </p>
                    </div>
                </div>
            )}
            <ScrollToTopBtn />
            <Footer data={translate}/>
        </>
    );
}

export default Article;