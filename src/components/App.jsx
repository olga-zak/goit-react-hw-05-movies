import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MoviePage } from 'pages/MoviePage/MoviePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* index === path="/" */}
        {/* <Route index element={<Home />} /> */}
        <Route index element={<Home />} />

        <Route path="movies" element={<Movies />}>
          <Route path=":movieId" element={<MoviePage />} />
        </Route>
      </Route>
    </Routes>
  );
};
