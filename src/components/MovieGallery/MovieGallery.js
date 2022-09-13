import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';
import { StyledMovieGallery, StyledLink } from './StyledMovieGallery';

export const MovieGallery = ({ movies }) => {
  const location = useLocation();

  return (
    <StyledMovieGallery>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </StyledLink>
        </li>
      ))}
    </StyledMovieGallery>
  );
};

MovieGallery.propTypes = {
  movies: PropTypes.array.isRequired,
};
