import React from "react";
import "./ProjectsList.css";
import PreviewProject from "../previewProject/PreviewProject";

const ProjectsList = ({ projects }) => {
    return (
        <>
        <div className="project-list">
            {projects.map((project) => (
            <PreviewProject projects={project} key={project.title}/>
            ))}
        </div>
        </>
    );
}

export default ProjectsList;