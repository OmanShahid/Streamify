import React, { useEffect, useState } from 'react';
import MovieService from '../services/MovieService';
import MovieCard from '../components/MovieCard';

const NowPlayingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await MovieService.getNowPlayingMovies();
        setMovies(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="now-playing-movies">
      <h1>Now Playing Movies</h1>
      {error && <p className="error">{error}</p>}
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default NowPlayingMovies;
