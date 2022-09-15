import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastInfo } from 'components/Utils/fetchMovies';
import { BASE_IMG_URL } from 'components/Utils/fetchMovies';
import { StyledCast } from './StyledCast';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchCastInfo(movieId).then(response => setActors(response));
  }, [movieId]);

  const dummyImg = `https://dummyimage.com/100x200/000/fff&text=NO+IMAGE`;
  return (
    <StyledCast>
      {!actors.length > 0 ? (
        <h3>There are no cast info!</h3>
      ) : (
        actors.map(({ profile_path: poster, name, character, cast_id }) => (
          <li key={cast_id}>
            <img
              src={`${poster ? BASE_IMG_URL + poster : dummyImg}`}
              alt={name}
              width="100"
              height="200"
            />
            <p>
              <b>{name}</b>
            </p>
            <p>Character: {character}</p>
          </li>
        ))
      )}
    </StyledCast>
  );
};

export default Cast;
