import { Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFetchMovie } from 'hooks/useFetchMovie';
import { MovieCard } from 'components/MovieCard/MovieCard';

import { Container } from 'components/CommonStyles';

export const MoviePage = () => {
  const movie = useFetchMovie();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Container>
        {movie && (
          <>
            <button
              onClick={() => {
                navigate(location?.state?.from ?? '/');
              }}
            >
              Go back
            </button>
            <MovieCard movieData={movie} />
          </>
        )}
        <Outlet />
      </Container>
    </>
  );
};
