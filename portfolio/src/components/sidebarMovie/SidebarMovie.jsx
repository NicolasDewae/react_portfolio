import React from "react";
import "./SidebarMovie.css";

const SidebarMovie = ({ movie }) => {
  const image_path = "https://image.tmdb.org/t/p/w500";
  const trailer_path = "https://www.youtube.com/embed/";
  // Movie path
  let movie_path = movie.poster_path ? image_path + movie.poster_path : "https://via.placeholder.com/500x750";
  // Title of the movie
  let movie_title = movie.title ? movie.title : "Titre non disponible";
  // Movie genre
  let movie_genres = [];
  movie_genres = movie.genres?.map((genre) => {
    if (genre === undefined) {
      return <li>Genre non disponible</li>;
    }
    return <li>{genre.name}</li>;
  });
  // formate realase date
  let split_release_date = movie.release_date ? movie.release_date.split("-").reverse() : "Date de sortie non disponible";
  let day = split_release_date[0];
  let month = split_release_date[1];
  let year = split_release_date[2];
  let release_date = day + "/" + month + "/" + year;
  // Movie budget
  let movie_budget = movie.budget ? movie.budget.toLocaleString("fr-FR") + " €" : "Budget non disponible";
  // Movie revenu
  let movie_revenu = movie.revenue ? movie.revenue.toLocaleString("fr-FR") + " €" : "Revenu non disponible";
  // Movie synopsis
  let movie_synopsis = movie.overview ? movie.overview : "Synopsis non disponible";
  // Movie trailer
  let movie_trailer = movie.video ? movie.video : "Trailer non disponible";
  return (
    <>
    {movie ?
      <div className="sidebar-movie">
        <div className="sidebar-movie-image">
          <img src={movie_path} alt={movie_title} />
        </div>
        <div className="sidebar-movie-type">
          <div className="sidebar-movie-genre">
            <h4>Genres : </h4>
            {movie_genres}
          </div>
          <div className="sidebar-movie-date">
            <h4>Date de sortie : </h4>
            <p>{release_date}</p>
          </div>
        </div>
        <div className="sidebar-movie-cash">
          <div className="sidebar-movie-budget">
            <h4>Budget : </h4>
            <p>{movie_budget}</p>
          </div>
          <div className="sidebar-movie-revenus">
            <h4>Revenus : </h4>
            <p>{movie_revenu}</p>
          </div>
        </div>
        <div className="sidebar-movie-synopsis">
          <h4>Synopsis : </h4>
          <p>{movie_synopsis}</p>
        </div>
        <div className="sidebar-movie-trailer">
          <h4>Trailer : </h4>
          {
            movie_trailer === "Trailer non disponible" ?
              <p>{movie_trailer}</p>
            :
            <iframe width="560 " height="315" src={trailer_path + movie_trailer} title={movie.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
          }
        </div>
      </div>
      :
        <div className="sidebar-movie">
          <p>Movie not found</p>
        </div>
    }
    </>
  );
}

export default SidebarMovie;