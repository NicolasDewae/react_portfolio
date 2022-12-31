import React, { useState } from 'react';
import './Blog.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import blogPageData from '../../data/blogPageData';
import Split from '../../components/split/Split';
import ScrollToTopBtn from '../../components/scrollToTopBtn/ScrollToTopBtn';
import { Link } from 'react-router-dom';
import { blog } from '../../data/i18n';

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
                {
                    blogPageData.map((article) => {
                        return (
                            <>
                                <div className="preview">
                                    <div className="picture">
                                        <img src={article.picture.src} alt={article.picture.alt} />
                                    </div>
                                    <div className='text-block'>
                                        <div className="title">
                                            <h2>{article.title}</h2>
                                        </div>
                                        <div className='description'>
                                            <p>{article.description}</p>
                                        </div>
                                        <Link to={`/blog/${article.pathway}`}>
                                                {
                                                    blog.map((text) => {
                                                        var btn = translate ? text.fr : text.en;
                                                        return (
                                                            btn.map((item) => {
                                                                return (
                                                                    <a className="button">
                                                                        {item.button}
                                                                    </a>
                                                                )
                                                            })
                                                        )
                                                    })
                                                }
                                        </Link>
                                    </div>
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
