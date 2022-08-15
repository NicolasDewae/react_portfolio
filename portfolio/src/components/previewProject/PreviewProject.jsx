import React from 'react';
import './PreviewProject.css';
import { Link } from 'react-router-dom';
import Split from '../split/Split';

const PreviewProject = ({
    
    projects: {
        id,
        title,
        picture,
    }

}) => {

    
    return (
        <>
            <div className="preview">
                <div className="picture">
                    <img src={picture} alt="photo du projet" />
                </div>
                <div className="title">
                    <h2>{title}</h2>
                </div>
                <Link to={`/project/${id}`}>
                    <a className="button">
                        Voir le projet
                    </a>
                </Link>
            </div>
            <div>
                <Split />
            </div>
        </>
    );
}

export default PreviewProject;