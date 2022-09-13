import { lazy } from 'react';
import { GlobalStyle } from '../General/GlobalStyle';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';

// import { Movies } from 'pages/Movies';
// import { MovieDetails } from 'pages/MovieDetails';
// import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound/NotFound';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

const MovieDetails = lazy(() =>
  import('../../pages/MovieDetailes/MovieDetails.js')
);
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const Home = lazy(() => import('../../pages/Home/Home.js'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />

          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
