import './movies.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClock } from '@fortawesome/free-solid-svg-icons';

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    axios.get('http://localhost:8000/api/titles/favorite', {
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => {
      const found = res.data.find((m) => m.imdbId === movie.imdbId);
      if (found) setIsFavorite(true);
    });

    axios.get('http://localhost:8000/api/titles/watchlater', {
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => {
      const found = res.data.find((m) => m.imdbId === movie.imdbId);
      if (found) setIsWatchLater(true);
    });
  }, [movie.imdbId]);

  const handleClick = (type) => {
    const token = localStorage.getItem('accessToken');
    const url = `http://localhost:8000/api/titles/${type}/${movie.imdbId}`;

    if (type === 'favorite') {
      if (isFavorite) {
        axios.delete(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setIsFavorite(false);
      } else {
        axios.post(url, {}, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setIsFavorite(true);
      }
    }

    if (type === 'watchlater') {
      if (isWatchLater) {
        axios.delete(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setIsWatchLater(false);
      } else {
        axios.post(url, {}, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setIsWatchLater(true);
      }
    }
  };

  return (
    <li className="movie-card">
      <div className="icons">
        <FontAwesomeIcon
          icon={faHeart}
          onClick={() => handleClick('favorite')}
          color={isFavorite ? 'red' : 'gray'}
        />

        <FontAwesomeIcon
          icon={faClock}
          onClick={() => handleClick('watchlater')}
          color={isWatchLater ? 'blue' : 'gray'}
        />
      </div>

      <h3>{movie.title}</h3>
      <p>{movie.synopsis}</p>

      <div>
        {movie.genres?.map((g) => (
          <span key={g}>{g} </span>
        ))}
      </div>
    </li>
  );
}

export default MovieCard;
