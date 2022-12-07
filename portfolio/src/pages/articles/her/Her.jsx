import React from "react";
import "./Her.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import ScrollToTopBtn from "../../../components/scrollToTopBtn/ScrollToTopBtn";
import Split from "../../../components/split/Split";
import Title from "../../../components/articlesComponents/title/Title";
import Image from "../../../components/articlesComponents/image/Image";
import OneDiv from "../../../components/articlesComponents/oneDiv/OneDiv";
import TwoDiv from "../../../components/articlesComponents/twoDiv/TwoDiv";
import ThreeDiv from "../../../components/articlesComponents/threeDiv/ThreeDiv";
import monPremierArticle from "../../../config/articles/monPremierArticle";

const Her = () => {
    const title = monPremierArticle.title;
    const picture = monPremierArticle.picture;
    const text = monPremierArticle.description;

    return (
        <>
            <Navbar />
            <Title title={title} />
            {console.log("picture = " + picture)}
            <Image picture={picture} />
            <OneDiv data={text} type="text" />
            <TwoDiv dataLeft={text} typeLeft="text" dataRight={picture} typeRight="text" />
            <ThreeDiv dataLeft={text} typeLeft="text" dataCenter={picture} typeCenter="text" dataRight={text} typeRight="text" />
            <Split />
            <Footer />
            <ScrollToTopBtn />
        </>
    );
}

export default Her;