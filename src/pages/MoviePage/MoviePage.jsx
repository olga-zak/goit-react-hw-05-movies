import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFetchMovie } from 'hooks/useFetchMovie';
import { MovieCard } from 'components/MovieCard/MovieCard';

import { Container } from 'components/CommonStyles';
import { Button } from './MoviePage.styled';
import { LoaderSuspense } from 'components/LoaderSuspense/LoaderSuspense';

const MoviePage = () => {
  const movie = useFetchMovie();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Container>
        {movie && (
          <>
            <Button
              onClick={() => {
                navigate(location?.state?.from ?? '/');
              }}
            >
              Go back
            </Button>
            <MovieCard movieData={movie} />
          </>
        )}
        <Suspense fallback={<LoaderSuspense />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
export default MoviePage;
