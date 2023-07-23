import axios from 'axios';
import { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const responce = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`,
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDlhZWMzZTAxMTQzYTcwM2I0ODM4MjVhODMzMzY2ZiIsInN1YiI6IjY0N2YxMTg3MGUyOWEyMmJlMDhlOTk4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FrnBh2tYMap5WoIYIMa-C8qNNuc5WsMKgDAIEwEVz6g',
            },
          }
        );
        setCast(responce.data.cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovieCast();
  }, [movieId]);

  
  return (
    <section>
      {cast.length === 0 && <p>We don't hane any cast for this movie</p>}
      <ul>
        {cast?.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
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
