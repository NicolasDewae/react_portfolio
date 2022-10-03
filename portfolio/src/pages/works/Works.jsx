import React, { useState } from "react";
import './Works.css';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import projectsData from '../../config/projectsData';
import CardProject from "../../components/cardProject/CardProject";
import { Link } from 'react-router-dom';
import Carousel from "../../components/carousel/Carousel";
import Split from "../../components/split/Split";
import Main from "../../components/main/Main";
import { previewProject } from "../../config/i18n";

const Works = () => {
    const [translate, setTranslate] = useState(false);
    const handleTranslate = () => {
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
            <div className="projects">
                <Main data={translate} />
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
                            {
                                previewProject.map((text) => {
                                    var btn = translate ? text.fr : text.en;
                                    return (
                                        btn.map((item) => {
                                            return (
                                                <Link to={`/project/${projectsData[0].pathway}`}>
                                                    <button className="button">
                                                        {item.button}
                                                    </button>
                                                </Link>
                                            )
                                        })
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-list">
                <CardProject pathway={projectsData[2].pathway} title={projectsData[2].title} picture={projectsData[2].picture} />
                <CardProject pathway={projectsData[3].pathway} title={projectsData[3].title} picture={projectsData[3].picture} />
            </div>
            <Split />
            <Footer data={translate} />
        </>
    );
}

export default Works;
