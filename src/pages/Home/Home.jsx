import { useState, useEffect, useRef } from 'react';
import { fetchTrendingMovies } from 'services/moviesAPI';
import { MoviesList } from 'components/MoviesList/MoviesList';

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
      <>
        <h1>What's Popular Today</h1>
        <MoviesList movies={movies} />
      </>
    )
  );
};
