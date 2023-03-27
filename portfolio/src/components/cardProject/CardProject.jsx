import React from "react";
import './CardProject.css';
import { Link } from 'react-router-dom';

const Projects = ({ pathway, title, picture }) => {

    return (
        <>
            <Link className="card-link" to={"/project/" + pathway}>
                <div className="preview-project">
                    <div className="title">
                        <h3>{title}</h3>
                    </div>
                    <div className="picture">
                        <img src={picture} alt="photo du projet" />
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Projects;
