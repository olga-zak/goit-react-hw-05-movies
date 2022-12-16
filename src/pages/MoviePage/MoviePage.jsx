import { useFetchMovie } from 'hooks/useFetchMovie';
import { MovieCard } from 'components/MovieCard/MovieCard';

export const MoviePage = () => {
  const movie = useFetchMovie();

  return (
    <>
      <h1>This is movie page with info about it</h1>
      {movie && <MovieCard movieData={movie} />}
    </>
  );
};
