import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/moviesAPI';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    movies && (
      <ul>
        {movies.map(({ title, id }) => {
          return <li key={id}>{title}</li>;
        })}
      </ul>
    )
  );
};
