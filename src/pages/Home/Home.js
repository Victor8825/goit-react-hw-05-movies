import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'components/Utils/fetchMovies';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { StyledHome } from './StyledHome';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <StyledHome>
      <h1>Trending today</h1>
      {movies && <MovieGallery movies={movies} />}
    </StyledHome>
  );
};

export default Home;
