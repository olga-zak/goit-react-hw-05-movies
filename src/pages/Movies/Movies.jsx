import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { fetchMoviesBySearchQuery } from 'services/moviesAPI';

import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  //const [searchWord, setSearchword] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query');

  useEffect(() => {
    if (queryParam) {
      async function fetchMovies() {
        const data = await fetchMoviesBySearchQuery(queryParam, page);
        setMovies(data);
      }
      fetchMovies();
    }
  }, [queryParam, page]);

  const updateSearchQuery = query => {
    setSearchParams({ query });
    setPage(1);
    setMovies([]);
    //setTotalAmoutOfPages(0);
  };

  return (
    <>
      <h1>Here will be Movies Search form</h1>
      <SearchForm onSubmit={updateSearchQuery} />
      {movies && <MoviesList movies={movies} />}
      <Outlet />
    </>
  );
};
