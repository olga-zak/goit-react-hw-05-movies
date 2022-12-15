import { useState, useEffect, useRef } from 'react';
import { fetchTrendingMovies } from 'services/moviesAPI';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

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
