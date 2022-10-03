import React from "react";
import "./ProjectsListHome.css";
import PreviewProjectHome from "../previewProjectHome/PreviewProjectHome";
import { previewProject } from "../../config/i18n";

const ProjectsListHome = ({ data, projects }) => {
    return (
        <>
        <div className="project-list-home">
            {
                previewProject.map((text) => {
                    let translate = data ? text.fr : text.en;
                    return (
                        projects.map((project) => {
                            return (
                                <PreviewProjectHome projects={project} data={translate} />
                            )
                        })
                    );
                })
            }
        </div>
        </>
    );
}

export default ProjectsListHome;