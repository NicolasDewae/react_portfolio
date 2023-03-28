import React, { useState } from 'react';
import './PreviewProjectHome.css';
import { Link } from 'react-router-dom';
import Split from '../split/Split';

const PreviewProjectHome = ({ projects, data }) => {
    
    const [previewClass, setClassName] = useState('preview-container');
    const [iconClass, setIconClass] = useState('plus');
    const [projectButton, setProjectButton] = useState('projectButton-flex');

    const changeClass = () => {
        setClassName(previewClass === 'preview-container' ? 'preview-container-hover' : 'preview-container');
        setIconClass(iconClass === 'plus' ? 'minus' : 'plus');
        setProjectButton(projectButton === 'projectButton-flex' ? 'projectButton-block' : 'projectButton-flex');
    };

    return (
        <>
            <section className={previewClass} onClick={changeClass}>
                {previewClass === 'preview-container-hover' &&
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
                        <a className="button">
                            {data[0].button}
                        </a>
                    </Link>
                </div>
                <div className={iconClass}>
                    <p>+</p>
                </div>
            </section>
            <div>
                <Split />
            </div>
        </>
    );
}

export default PreviewProjectHome;
