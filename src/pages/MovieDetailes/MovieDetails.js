import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieById, BASE_IMG_URL } from 'components/Utils/fetchMovies';
import { Box } from 'components/General/Box.styled';
import { Loader } from 'components/Utils/Loader';
import { StyledMovieDetails, StyledLink } from './StyledMovieDetails';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  const backLinkHref = location.state?.from ?? '/';

  const {
    original_title: title,
    release_date: date,
    poster_path: poster,
    vote_average: vote,
    overview,
    genres,
  } = movie;

  return (
    <main>
      <StyledLink to={backLinkHref}>
        <button type="button">Go back</button>
      </StyledLink>

      {movie ? (
        <StyledMovieDetails>
          <Box>
            <img
              src={`${BASE_IMG_URL}${poster}`}
              alt=""
              width="400"
              height="500"
            />
            <Box flexDirection="column" p={8}>
              <h2>
                {title} ({date.slice(0, 4)})
              </h2>
              <p>User vote: {Math.round(vote)}</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <Box as="ul" gridGap={4}>
                {genres.map(({ name, id }) => (
                  <li key={id}>{name}</li>
                ))}
              </Box>
            </Box>
          </Box>
          <section>
            <h3>Additional information</h3>
            <ul>
              <li key="Cast">
                <StyledLink to="cast" state={{ from: backLinkHref }}>
                  Cast
                </StyledLink>
              </li>
              <li key="Reviews">
                <StyledLink
                  to="reviews"
                  title={title}
                  state={{ from: backLinkHref }}
                >
                  Reviews
                </StyledLink>
              </li>
            </ul>
          </section>
        </StyledMovieDetails>
      ) : (
        <Loader />
      )}
      <Outlet />
    </main>
  );
};

export default MovieDetails;
