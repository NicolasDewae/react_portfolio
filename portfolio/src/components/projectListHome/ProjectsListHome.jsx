import React from "react";
import "./ProjectsListHome.css";
import PreviewProjectHome from "../previewProjectHome/PreviewProjectHome";

const ProjectsListHome = ({ projects }) => {
    return (
        <>
        <div className="project-list-home">
            {projects.map((project) => (
            <PreviewProjectHome projects={project} key={project.title}/>
            ))}
        </div>
        </>
    );
}

export default ProjectsListHome;