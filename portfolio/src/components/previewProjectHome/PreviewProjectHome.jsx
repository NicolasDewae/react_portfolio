import React, { useState } from 'react';
import './PreviewProjectHome.css';
import { Link } from 'react-router-dom';

const PreviewProjectHome = ({ projects, data, isOpen, onToggle }) => {

    const previewClass = isOpen ? 'preview-container-hover' : 'preview-container';
    const iconClass = isOpen ? 'minus' : 'plus';
    const projectButton = isOpen ? 'projectButton-block' : 'projectButton-flex';

    return (
        <>
            <section className={previewClass} onClick={onToggle}>
                {isOpen &&
                    <div className="preview-containt">
                        <div className="picture">
                            <img src={projects.picture} alt="photo du projet" />
                        </div>
                    </div>
                }
                <div className={projectButton}>
                    <div className="title">
                        <h2>{projects.title}</h2>
                    </div>
                    <Link to={`/project/${projects.pathway}`}>
                        <a className="button">{data[0].button}</a>
                    </Link>
                </div>
                <div className={iconClass}>
                    <p>+</p>
                </div>
            </section>
            <div className='seperate'>
                <span></span>
            </div>
        </>
    );
}

export default PreviewProjectHome;
