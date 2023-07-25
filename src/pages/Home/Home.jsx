import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../services/moviesAPI';
import { MovieLink, List, Item, Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies).catch(console.log);
  }, []);

  return (
    <main>
      <section>
        <Title>Trending Movies</Title>
        <List>
          {movies.map(({ id, title }) => (
            <Item key={id}>
              <MovieLink to={`movies/${id}`}>{title}</MovieLink>
            </Item>
          ))}
        </List>
      </section>
    </main>
  );
};

export default Home;
