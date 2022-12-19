import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
// import Layout from './Layout/Layout';
// import Home from 'pages/Home/Home';
// import Movies from 'pages/Movies/Movies';
// import MoviePage from 'pages/MoviePage/MoviePage';
//import MovieCast from './MovieCast/MovieCast';
//import MovieReviews from './MovieReviews/MovieReviews';
import Header from './Header/Header';

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MoviePage = lazy(() => import('pages/MoviePage/MoviePage'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* index === path="/" */}
            {/* <Route index element={<Home />} /> */}
            <Route index element={<Home />} />

            <Route path="movies" element={<Movies />} />

            {/* <Route path="movies/:movieId" element={<MoviePage />} /> */}
            <Route path="movies/:movieId" element={<MoviePage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
      <GlobalStyles />
    </>
  );
};
