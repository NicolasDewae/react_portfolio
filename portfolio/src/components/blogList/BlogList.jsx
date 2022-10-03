import React from "react";
import "./BlogList.css";
import PreviewArticle from "../previewArticle/PreviewArticle";

const BlogList = ({ articles, translate }) => {
    return (
        <>
        <div className="blog-list">
            {articles.map((article) => (
                <PreviewArticle articles={article} key={article.id}/>
            ))}
        </div>
        </>
    );
}

export default BlogList;