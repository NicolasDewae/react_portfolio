import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './Project.css';
import data from '../../config/data';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Split from '../../components/split/Split';

const Project = () => {

        const { id } = useParams();
        const [project, setProject] = useState(null);
      
        useEffect(() => {
          let project = data.find((project) => project.id === parseInt(id));
          if (project) {
            setProject(project);
          }
        }, []);
    
    return (
        <>
            <Navbar />
            {project ? (
                <div className="project">
                    <div className="project-title">
                        <h1>{project.title}</h1>
                    </div>
                    <div className="project-content">
                        <p>
                            {project.description}
                        </p>
                    </div>
                    <div>
                        <img src={project.projectImages[2]} alt="images1" />
                        <img src={project.projectImages[0]} alt="images2" />
                    </div>
                </div>

            ) : (
                <Split />
            )}
            <Footer />
        </>
    );
}

export default Project;