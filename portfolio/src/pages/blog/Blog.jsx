import React, { useState } from 'react';
import './Blog.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import blogData from '../../config/blogData';
import Split from '../../components/split/Split';
import ScrollToTopBtn from '../../components/scrollToTopBtn/ScrollToTopBtn';
import { Link } from 'react-router-dom';

const Blog = () => {

    // Get translate data
    let defaultValueTranslate = localStorage.getItem('defaultValueTranslate');
    // Convert translate data into a boolean
    defaultValueTranslate = defaultValueTranslate === "false" ? false : true;

    const [translate, setTranslate] = useState(defaultValueTranslate);
    const handleTranslate = () => {
        localStorage.setItem('defaultValueTranslate', !translate);  
        setTranslate(!translate);
    }

    return (
        <>
            {/* Translation button */}
            <button className='translateBtn' onClick={handleTranslate}>
                <p className='translate'>
                    {translate ? 'Fr' : 'En'}
                </p>
            </button>
            <Navbar data={translate} />

            <div className="blog">
                <Split />
                {
                    blogData.map((article) => {
                        return (
                            <>
                            <div className="preview">
                                <div className="picture">
                                    <img src={article.picture} alt="photo de l'article" />
                                </div>
                                <div className="title">
                                    <h2>{article.title}</h2>
                                </div>
                                <Link to={`/blog/${article.pathway}`}>
                                    <a className="button">
                                        Lire l'article
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Split />
                            </div>
                        </>
                        )
                    })
                }
            </div>

            <ScrollToTopBtn />
            <Footer data={translate} />
        </>
    )}

export default Blog;
