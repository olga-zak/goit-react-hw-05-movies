import { Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFetchMovie } from 'hooks/useFetchMovie';
import { MovieCard } from 'components/MovieCard/MovieCard';
//import { MovieCast } from 'components/MovieCast/MovieCast';

export const MoviePage = () => {
  const movie = useFetchMovie();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  return (
    <>
      {movie && (
        <>
          <button
            onClick={() => {
              navigate(location.state.from);
            }}
          >
            Go back
          </button>
          <MovieCard movieData={movie} />
        </>
      )}
      <Outlet />
      {/* {credits && <MovieCast data={credits} />} */}
    </>
  );
};
