import { Outlet } from 'react-router-dom';
import { useFetchMovie } from 'hooks/useFetchMovie';
//import { useFetchMovieCredits } from 'hooks/useFetchMovieCredits';
import { MovieCard } from 'components/MovieCard/MovieCard';
//import { MovieCast } from 'components/MovieCast/MovieCast';

export const MoviePage = () => {
  const movie = useFetchMovie();
  //const credits = useFetchMovieCredits();
  //console.log(credits);

  return (
    <>
      {movie && <MovieCard movieData={movie} />}
      <Outlet />
      {/* {credits && <MovieCast data={credits} />} */}
    </>
  );
};
