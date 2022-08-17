import React from 'react';
import './PreviewProjectHome.css';
import { Link } from 'react-router-dom';
import Split from '../split/Split';

const PreviewProjectHome = ({
    
    projects: {
        pathway,
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
                <Link to={`/project/${pathway}`}>
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

export default PreviewProjectHome;