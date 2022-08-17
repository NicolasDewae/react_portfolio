import React from "react";
import './Projects.css';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import projectsData from '../../config/projectsData';
import CardProject from "../../components/cardProject/CardProject";
import { Link } from 'react-router-dom';
import Carousel from "../../components/carousel/Carousel";

const Projects = () => {
    return (
        <>
            <Navbar />
            <div className="projects">
                <div className="projects-title">
                    <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
                </div>
            </div>
            <div className="project-list">
                <CardProject pathway={projectsData[0].pathway} title={projectsData[0].title} picture={projectsData[3].projectImages[4]} />
                <CardProject pathway={projectsData[1].pathway} title={projectsData[1].title} picture={projectsData[3].projectImages[4]} />
            </div>
            <div className="work-list">
                <div className="carousel">
                    <Carousel 
                        picture1={projectsData[0].projectImages[0]} 
                        picture2={projectsData[1].projectImages[1]} 
                        picture3={projectsData[2].projectImages[2]}
                        picture4={projectsData[3].projectImages[3]} 
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
                <CardProject pathway={projectsData[2].pathway} title={projectsData[2].title} picture={projectsData[3].projectImages[4]} />
                <CardProject pathway={projectsData[3].pathway} title={projectsData[3].title} picture={projectsData[3].projectImages[4]} />
            </div>
            <div className="split">
                <Footer />
            </div>
        </>
    );
}

export default Projects;
