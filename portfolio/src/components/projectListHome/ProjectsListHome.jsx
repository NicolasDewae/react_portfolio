import React, { useState } from "react";
import "./ProjectsListHome.css";
import PreviewProjectHome from "../previewProjectHome/PreviewProjectHome";
import { previewProject } from "../../data/i18n";

const ProjectsListHome = ({ data, projects }) => {

    const [openProjectId, setOpenProjectId] = useState(null);

    return (
        <>
        <div className="project-list-home">
            {
                previewProject.map((text) => {
                    let translate = data ? text.fr : text.en;
                    return (
                        projects.map((project) => {
                            return (
                                <PreviewProjectHome
                                    key={project.id}
                                    projects={project}
                                    data={translate}
                                    isOpen={openProjectId === project.id}
                                    onToggle={() => setOpenProjectId(
                                        openProjectId === project.id ? null : project.id
                                    )}
                                />
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