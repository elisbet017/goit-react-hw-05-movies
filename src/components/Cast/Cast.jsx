import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/moviesAPI';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovieCast(movieId).then(setCast).catch(console.log);
  }, [movieId]);

  
  return (
    <section>
      {cast && cast.length === 0 && (
        <p>We don't hane any cast for this movie</p>
      )}
      <ul>
        {cast?.map(({ name, character, profile_path }) => (
          <li key={character}>
            <img
              src={
                profile_path && `https://image.tmdb.org/t/p/w200${profile_path}`
              }
              alt=""
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cast;
