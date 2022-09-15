import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByInput } from 'components/Utils/fetchMovies';
import { notification } from 'components/Utils/notification';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { StyledMovies } from './StyledMovies';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();

    if (inputValue === '') {
      console.log(inputValue);
      notification('Enter text for searching!');
    } else {
      setSearchParams({ query: inputValue });
      setQuery(inputValue);
    }
    e.target.form.reset();
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    fetchMovieByInput(query)
      .then(response => {
        if (response.length === 0) {
          notification('Try another query');
          setMovies(null);
        } else {
          setMovies(response);
        }
      })
      .catch(error => console.log(error.message));
  }, [query]);

  return (
    <StyledMovies>
      <form>
        <input
          type="text"
          onChange={e => setInputValue(e.target.value)}
          placeholder="Search movies"
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>

      {movies && <MovieGallery movies={movies} />}
    </StyledMovies>
  );
};

export default Movies;
