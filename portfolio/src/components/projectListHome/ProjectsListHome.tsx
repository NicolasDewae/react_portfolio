// src/components/projectListHome/ProjectsListHome.tsx
import React, { useState } from 'react';
import { previewProject } from '../../data/i18n';
import { ProjectListItem } from '../../types/project.types';
import PreviewProjectHome from '../previewProjectHome';
import './ProjectsListHome.css';

interface ProjectsListHomeProps {
  data: boolean;
  projects: ProjectListItem[];
}

const ProjectsListHome = ({ data, projects }: ProjectsListHomeProps) => {
  const [openProjectId, setOpenProjectId] = useState<number | null>(null);
  const translateData = data ? previewProject.fr : previewProject.en;

  return (
    <div className="project-list-home">
      {projects.map((project) => (
        <PreviewProjectHome
          key={project.id}
          projects={project}
          data={translateData}
          isOpen={openProjectId === project.id}
          onToggle={() =>
            setOpenProjectId(openProjectId === project.id ? null : project.id)
          }
        />
      ))}
    </div>
  );
};

export default ProjectsListHome;
