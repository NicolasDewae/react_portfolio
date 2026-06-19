// src/components/sidebarMovie/SidebarMovie.tsx
import { Movie } from '../../types/movie.types';
import './SidebarMovie.css';

interface SidebarMovieProps {
  movie: Movie;
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const TRAILER_BASE_URL = 'https://www.youtube.com/embed/';

const SidebarMovie = ({ movie }: SidebarMovieProps) => {
  const moviePath = movie.poster_path
    ? IMAGE_BASE_URL + movie.poster_path
    : 'https://via.placeholder.com/500x750';

  const movieTitle = movie.title ?? 'Titre non disponible';

  const movieGenres = movie.genres?.map((genre) => (
    <li key={genre.id}>{genre.name}</li>
  )) ?? <li>Genre non disponible</li>;

  const releaseDate = movie.release_date
    ? movie.release_date.split('-').reverse().join('/')
    : 'Date de sortie non disponible';

  const movieBudget = movie.budget
    ? movie.budget.toLocaleString('fr-FR') + ' €'
    : 'Budget non disponible';

  const movieRevenu = movie.revenue
    ? movie.revenue.toLocaleString('fr-FR') + ' €'
    : 'Revenu non disponible';

  const movieSynopsis = movie.overview ?? 'Synopsis non disponible';
  const movieTrailer = movie.video ?? null;

  return (
    <div className="sidebar-movie">
      <div className="sidebar-movie-image">
        <img src={moviePath} alt={movieTitle} />
      </div>
      <div className="sidebar-movie-type">
        <div className="sidebar-movie-genre">
          <h4>Genres :</h4>
          {movieGenres}
        </div>
        <div className="sidebar-movie-date">
          <h4>Date de sortie :</h4>
          <p>{releaseDate}</p>
        </div>
      </div>
      <div className="sidebar-movie-cash">
        <div className="sidebar-movie-budget">
          <h4>Budget :</h4>
          <p>{movieBudget}</p>
        </div>
        <div className="sidebar-movie-revenus">
          <h4>Revenus :</h4>
          <p>{movieRevenu}</p>
        </div>
      </div>
      <div className="sidebar-movie-synopsis">
        <h4>Synopsis :</h4>
        <p>{movieSynopsis}</p>
      </div>
      <div className="sidebar-movie-trailer">
        <h4>Trailer :</h4>
        {movieTrailer ? (
          <iframe
            width="560"
            height="315"
            src={TRAILER_BASE_URL + movieTrailer}
            title={movie.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <p>Trailer non disponible</p>
        )}
      </div>
    </div>
  );
};

export default SidebarMovie;
