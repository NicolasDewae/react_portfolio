import React from "react";
import './Works.css';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import projectsData from '../../config/projectsData';
import CardProject from "../../components/cardProject/CardProject";
import { Link } from 'react-router-dom';
import Carousel from "../../components/carousel/Carousel";
import Split from "../../components/split/Split";

const Works = () => {
    return (
        <>
            <Navbar />
            <div className="projects">
                <div className="projects-title">
                    <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
                </div>
            </div>
            <div className="project-list">
                <CardProject pathway={projectsData[0].pathway} title={projectsData[0].title} picture={projectsData[0].picture} />
                <CardProject pathway={projectsData[1].pathway} title={projectsData[1].title} picture={projectsData[1].picture} />
            </div>
            <div className="work-list">
                <div className="carousel">
                    <Carousel 
                        picture1={projectsData[0].picture} 
                        picture2={projectsData[1].picture} 
                        picture3={projectsData[2].picture}
                        picture4={projectsData[3].picture} 
                    />
                    <div className="column">
                        <div>
                            <h2>{projectsData[0].title}</h2>
                        </div>
                        <div>
                            <Link to={`/project/${projectsData[0].pathway}`}>
                                <a className="button">
                                    Voir le projet
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="black"></div>
            </div>
            <div className="project-list">
                <CardProject pathway={projectsData[2].pathway} title={projectsData[2].title} picture={projectsData[2].picture} />
                <CardProject pathway={projectsData[3].pathway} title={projectsData[3].title} picture={projectsData[3].picture} />
            </div>
            <Split />
            <Footer />
        </>
    );
}

export default Works;
