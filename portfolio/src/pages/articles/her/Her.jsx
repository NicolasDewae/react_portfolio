import React from "react";
import "./Her.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import ScrollToTopBtn from "../../../components/scrollToTopBtn/ScrollToTopBtn";
import Split from "../../../components/split/Split";
import Title from "../../../components/articlesComponents/title/Title";
import Title2 from "../../../components/articlesComponents/title2/Title2";
import Title3 from "../../../components/articlesComponents/title3/Title3";
import Image from "../../../components/articlesComponents/image/Image";
import OneDiv from "../../../components/articlesComponents/oneDiv/OneDiv";
import her from "../../../config/articles/her";

const Her = () => {

    return (
        <>
            <Navbar />
                <Title title={her.title1} />
                    <Title2 title={her.title2.introduction} />
                        <Title3 title={her.title3.synopsis} />
                            <OneDiv data={her.paragraphe.paragraphe1} />
                            <Image picture={her.picture.img1} />
                            <OneDiv data={her.paragraphe.paragraphe2} />
                            <OneDiv data={her.paragraphe.paragraphe3} />
                            <OneDiv data={her.paragraphe.paragraphe4} />
                            <OneDiv data={her.paragraphe.paragraphe5} />
                            <Image picture={her.picture.img2}/>
                    <Title2 title={her.title2.solitude} />
                        <OneDiv data={her.paragraphe.paragraphe6} />
                        <OneDiv data={her.paragraphe.paragraphe7} />
                        <OneDiv data={her.paragraphe.paragraphe8} />
                        <OneDiv data={her.paragraphe.paragraphe9} />
                        <OneDiv data={her.paragraphe.paragraphe10} />
                        <OneDiv data={her.paragraphe.paragraphe11} />
                        <OneDiv data={her.paragraphe.paragraphe12} />
                        <Image picture={her.picture.img3} />
                    <Title2 title={her.title2.rouge} />
                        <OneDiv data={her.paragraphe.paragraphe13} />
                        <Image picture={her.picture.img3} />
                        <OneDiv data={her.paragraphe.paragraphe14} />
                        <Image picture={her.picture.img3} />
                    <Title2 title={her.title2.jaune} />
                        <Image picture={her.picture.img3} />
                        <OneDiv data={her.paragraphe.paragraphe15} />
                        <OneDiv data={her.paragraphe.paragraphe16} />
                        <OneDiv data={her.paragraphe.paragraphe17} />
                        <OneDiv data={her.paragraphe.paragraphe18} />
                        <OneDiv data={her.paragraphe.paragraphe19} />
                        <OneDiv data={her.paragraphe.paragraphe20} />
                    <Title2 title={her.title2.blanc} />
                        <OneDiv data={her.paragraphe.paragraphe21} />
                        <OneDiv data={her.paragraphe.paragraphe22} />
                        <OneDiv data={her.paragraphe.paragraphe23} />
                    <Title2 title={her.title2.grosPlans} />
                        <Image picture={her.picture.img3} />
                        <OneDiv data={her.paragraphe.paragraphe24} />
                        <Image picture={her.picture.img3} />
                    <Title2 title={her.title2.hibou} />
                        <Image picture={her.picture.img3} />
                        <OneDiv data={her.paragraphe.paragraphe25} />
                        <OneDiv data={her.paragraphe.paragraphe26} />
                        <OneDiv data={her.paragraphe.paragraphe27} />
                        <OneDiv data={her.paragraphe.paragraphe28} />
                    <Title2 title={her.title2.directeurPhoto} />
                        <OneDiv data={her.paragraphe.paragraphe29} />
                    <Title2 title={her.title2.conslusion} />
                        <OneDiv data={her.paragraphe.paragraphe30} />
                        <OneDiv data={her.paragraphe.paragraphe31} />
                        <OneDiv data={her.paragraphe.paragraphe32} />
                        <OneDiv data={her.paragraphe.paragraphe33} />
                        <OneDiv data={her.paragraphe.paragraphe34} />
                        <OneDiv data={her.paragraphe.paragraphe35} />
                        <OneDiv data={her.paragraphe.paragraphe36} />
                        <OneDiv data={her.paragraphe.paragraphe37} />
                        <OneDiv data={her.paragraphe.paragraphe38} />
                        <OneDiv data={her.paragraphe.paragraphe39} />
                        <OneDiv data={her.paragraphe.paragraphe40} />
                        <OneDiv data={her.paragraphe.paragraphe41} />
                        <OneDiv data={her.paragraphe.paragraphe42} />
                        <OneDiv data={her.paragraphe.paragraphe43} />
                    <Title2 title={her.title2.bonus} />
                        <OneDiv data={her.paragraphe.paragraphe44} />
                        <OneDiv data={her.paragraphe.paragraphe45} />
                        <OneDiv data={her.paragraphe.paragraphe46} />
                        <OneDiv data={her.paragraphe.paragraphe47} />
                        <OneDiv data={her.paragraphe.paragraphe48} />
                        <OneDiv data={her.paragraphe.paragraphe49} />
                        <OneDiv data={her.paragraphe.paragraphe50} />
            <Split />
            <Footer />
            <ScrollToTopBtn />
        </>
    );
}

export default Her;