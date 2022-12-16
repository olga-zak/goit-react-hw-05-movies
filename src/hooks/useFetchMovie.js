import { useState, useEffect, useRef } from 'react';
import { fetchMovieById } from 'services/moviesAPI';
import { useParams } from 'react-router-dom';

export const useFetchMovie = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return movie;
};
