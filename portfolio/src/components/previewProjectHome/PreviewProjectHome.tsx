// src/components/previewProjectHome/PreviewProjectHome.tsx
import Link from 'next/link';
import { PreviewProjectItem } from '../../types/i18n.types';
import { ProjectListItem } from '../../types/project.types';
import './PreviewProjectHome.css';

interface PreviewProjectHomeProps {
  projects: ProjectListItem;
  data: PreviewProjectItem[];
  isOpen: boolean;
  onToggle: () => void;
}

const PreviewProjectHome = ({ projects, data, isOpen, onToggle }: PreviewProjectHomeProps) => {
  const previewClass = isOpen ? 'preview-container-hover' : 'preview-container';
  const iconClass = isOpen ? 'minus' : 'plus';
  const projectButton = isOpen ? 'projectButton-block' : 'projectButton-flex';

  return (
    <>
      <section className={previewClass} onClick={onToggle}>
        {isOpen && (
          <div className="preview-containt">
            <div className="picture">
              <img src={projects.picture} alt={projects.title} />
            </div>
          </div>
        )}
        <div className={projectButton}>
          <div className="title">
            <h2>{projects.title}</h2>
          </div>
          <Link className="button" href={`/project/${projects.pathway}`}>
            {data[0].button}
          </Link>
        </div>
        <div className={iconClass}>
          <p>+</p>
        </div>
      </section>
      <div className="seperate">
        <span />
      </div>
    </>
  );
};

export default PreviewProjectHome;
