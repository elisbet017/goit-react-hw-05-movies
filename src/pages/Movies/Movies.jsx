import { useEffect, useMemo, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearch } from '../../services/moviesAPI';
import { Input, Button, Form } from './Movies.styled';
import { List, Item, MovieLink } from '../Home/Home.styled';

const Movies = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = useMemo(() => searchParams.get('query'), [searchParams]);
  const location = useLocation();

  useEffect(() => {
    if (query) {
      getSearch(query).then(setMovies).catch(console.log);
    }
  }, [query]);

  const onFormSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value.trim();
    const newParams = query !== '' ? { query } : {};
    setSearchParams(newParams);
  };

  const handleChange = e => {
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
