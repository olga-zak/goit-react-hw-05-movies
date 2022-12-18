import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/moviesAPI';
import { MoviesList } from 'components/MoviesList/MoviesList';

import { Container } from 'components/CommonStyles';
import { Header } from './Home.styled';

//import { Link } from 'react-router-dom';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  //убрать этот isFirstRender при пуше на гит, из-за него идёт запрос на сервер
  // const isFirstRender = useRef(true);

  useEffect(() => {
    // if (isFirstRender.current) {
    //   isFirstRender.current = false;
    //   return;
    // }

    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    movies && (
      //   <ul>
      //     {movies.map(({ title, id }) => {
      //       return (
      //         <li key={id}>
      //           <Link to={id}>{title}</Link>
      //         </li>
      //       );
      //     })}
      //   </ul>
      <Container>
        <Header>What's Popular Today</Header>
        <MoviesList movies={movies} />
      </Container>
    )
  );
};
