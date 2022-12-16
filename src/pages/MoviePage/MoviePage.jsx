import { useFetchMovie } from 'hooks/useFetchMovie';

export const MoviePage = () => {
  const movie = useFetchMovie();
  console.log(movie);
  return (
    <>
      <h1>This is movie page with info about it</h1>
      {/* {movie && <MovieCard />} */}
    </>
  );
};
