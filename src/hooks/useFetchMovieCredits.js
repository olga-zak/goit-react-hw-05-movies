import { useState, useEffect } from 'react';
import { fetchMovieCreditsById } from 'services/moviesAPI';
import { useParams } from 'react-router-dom';

export const useFetchMovieCredits = () => {
  const [credits, setCredits] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCreditsById(movieId).then(setCredits);
  }, [movieId]);

  return credits;
};
