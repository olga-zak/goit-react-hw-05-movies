import { useState, useEffect, useRef } from 'react';

import { fetchMoviesBySearchQuery } from 'services/moviesAPI';

import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  const [searchWord, setSearchword] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (searchWord) {
      fetchMoviesBySearchQuery(searchWord, page).then(setMovies);
    }
  }, [searchWord, page]);

  const updateSearchQuery = searchWord => {
    setSearchword(searchWord);
    setPage(1);
    setMovies([]);
    //setTotalAmoutOfPages(0);
  };

  return (
    <>
      <h1>Here will be Movies Search form</h1>
      <SearchForm onSubmit={updateSearchQuery} />
      {movies && <MoviesList movies={movies} />}
    </>
  );
};
