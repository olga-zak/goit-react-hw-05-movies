import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MoviePage } from 'pages/MoviePage/MoviePage';
import { MovieCast } from './MovieCast/MovieCast';

import { GlobalStyles } from './GlobalStyles';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* index === path="/" */}
          {/* <Route index element={<Home />} /> */}
          <Route index element={<Home />} />

          <Route path="movies" element={<Movies />} />

          {/* <Route path="movies/:movieId" element={<MoviePage />} /> */}
          <Route path="movies/:movieId" element={<MoviePage />}>
            <Route path="cast" element={<MovieCast />} />
          </Route>
        </Route>
      </Routes>
      <GlobalStyles />
    </>
  );
};
