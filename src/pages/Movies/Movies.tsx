import {
  useEffect,
  useMemo,
  useState,
  FormEvent,
  ChangeEvent,
  FC,
} from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearch } from '../../services/moviesAPI';
import { Input, Button, Form } from './Movies.styled';
import { List, Item, MovieLink } from '../Home/Home.styled';
import { IMovie } from '../Home/Home';

const Movies: FC = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [searchParams, setSearchParams]: [URLSearchParams, Function] =
    useSearchParams();
  const query = useMemo(() => searchParams.get('query'), [searchParams]);
  const location = useLocation();

  useEffect(() => {
    if (query) {
      getSearch(query).then(setMovies).catch(console.log);
    }
  }, [query]);

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = (
      (e.target as HTMLFormElement).elements.namedItem(
        'query'
      ) as HTMLInputElement | null
    )?.value.trim();
    const newParams = query !== '' ? { query } : {};
    setSearchParams(newParams);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <main>
      <section>
        <Form onSubmit={onFormSubmit}>
          <Input
            type="text"
            name="query"
            value={value}
            onChange={handleChange}
          />
          <Button type="submit">Search</Button>
        </Form>
      </section>
      {movies.length !== 0 && (
        <section>
          <List>
            {movies.map(({ id, title }) => (
              <Item key={id}>
                <MovieLink to={`${id}`} state={{ from: location }}>
                  {title}
                </MovieLink>
              </Item>
            ))}
          </List>
        </section>
      )}
    </main>
  );
};
export default Movies;
