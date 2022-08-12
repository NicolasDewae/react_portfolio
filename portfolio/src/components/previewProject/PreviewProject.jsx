import React from 'react';
import './PreviewProject.css';
import img from '../../assets/img/street_view-2.jpg';

const PreviewProject = () => {
    return (
        <>
            <div className="preview">
                <div className="picture">
                    <img src={img} alt="google street view" />
                </div>
                <div className="title">
                    <h2>Titre du projet</h2>
                </div>
                <a className="button">
                    Voir le projet
                </a>
            </div>
        </>
    );
}

export default PreviewProject;