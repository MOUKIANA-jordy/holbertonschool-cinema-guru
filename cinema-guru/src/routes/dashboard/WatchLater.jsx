import './dashboard.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import MovieCard from '../../components/movies/MovieCard';

function WatchLater() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    axios.get('http://localhost:8000/api/titles/watchlater', {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => setMovies(res.data))
    .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Movies to watch later</h1>

      <ul>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default WatchLater;
