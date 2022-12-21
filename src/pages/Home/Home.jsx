import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { fetchTrendingMovies } from 'services/moviesAPI';
import { MoviesList } from 'components/MoviesList/MoviesList';

import { Container } from 'components/CommonStyles';
import { Header } from './Home.styled';

//import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);

  //убрать этот isFirstRender при пуше на гит, из-за него не идёт запрос на сервер
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    movies && (
      <Container>
        <Header>20 Most Popular Movies Right Now</Header>
        <MoviesList movies={movies} />
      </Container>
    )
  );
};

export default Home;
