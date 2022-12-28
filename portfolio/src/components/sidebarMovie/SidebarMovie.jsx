import React from "react";

const SidebarMovie = ({ movie }) => {
  return (
    <>
    {/* if movie */}
    {movie ?
        <div className="sidebar-movie">
            <img src={movie.poster_path} alt={movie.title} />
            <div className="sidebar-movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
                <p>{movie.overview}</p>
                <p>{movie.budget}</p>
                {movie.genres?.map((genre) => (
                  <p>{genre.name}</p>
                  ))}
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