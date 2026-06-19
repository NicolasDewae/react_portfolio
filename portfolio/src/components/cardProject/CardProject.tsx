// src/components/cardProject/CardProject.tsx
import { Link } from 'react-router-dom';
import './CardProject.css';

interface CardProjectProps {
  pathway: string;
  title: string;
  picture: string;
}

const CardProject = ({ pathway, title, picture }: CardProjectProps) => (
  <Link className="card-link" to={`/project/${pathway}`}>
    <div className="preview-project">
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="picture">
        <img src={picture} alt={title} />
      </div>
    </div>
  </Link>
);

export default CardProject;
