import { useEffect, useState, FC } from 'react';
import { getTrendingMovies } from '../../services/moviesAPI';
import { MovieLink, List, Item, Title } from './Home.styled';

export interface IMovie {
  id: string;
  title: string;
}

const Home: FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

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
