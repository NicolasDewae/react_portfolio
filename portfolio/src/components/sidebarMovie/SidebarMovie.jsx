import React from "react";
import "./SidebarMovie.css";

const SidebarMovie = ({ movie }) => {
  const image_path = "https://image.tmdb.org/t/p/w500";
  const trailer_path = "https://www.youtube.com/embed/";
  return (
    <>
    {movie ?
      <div className="sidebar-movie">
        <div className="sidebar-movie-image">
          <img src={image_path + movie.poster_path} alt={movie.title} />
        </div>
        <div className="sidebar-movie-genre">
          <h4>Genres : </h4>
          {movie.genres?.map((genre) => (
            <li>{genre.name}</li>
          ))}
        </div>
        <div className="sidebar-movie-date">
          <h4>Date de sortie : </h4>
          <p>{movie.release_date}</p>
        </div>
        <div className="sidebar-movie-budget">
          <h4>Budget : </h4>
          <p>{movie.budget}</p>
        </div>
        <div className="sidebar-movie-synopsis">
          <h4>Synopsis : </h4>
          <p>{movie.overview}</p>
        </div>
        <div className="sidebar-movie-trailer">
          <h4>Trailer : </h4>
          { movie.video ? 
            <iframe width="560 " height="315" src={trailer_path + movie.videos} title={movie.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
            : <p>La bande annonce n'est pas disponible</p> }
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