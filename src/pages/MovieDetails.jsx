import React from "react";
import "./MovieDetails.css";

const MovieDetails = ({ movie }) => {
  return (
    <div className="movie-details">
      {/* Movie Poster and Details Container */}
      <div className="movie-content">
        {/* Movie Poster */}
        <div className="movie-poster">
          <img src={movie.image} alt={`${movie.title} Poster`} />
        </div>

        {/* Movie Information */}
        <div className="movie-info">
          <h2>{movie.title}</h2>
          <p><strong>Director:</strong> {movie.director}</p>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Release Date:</strong> {movie.releaseDate}</p>
          <p><strong>Cast:</strong> {movie.cast}</p>
          <p><strong>Country:</strong> {movie.country}</p>
          <p><strong>Production:</strong> {movie.production}</p>
          <p><strong>Duration:</strong> {movie.duration}</p>
          <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
          <p><strong>Overview:</strong> {movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
