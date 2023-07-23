import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getSearch } from '../services/moviesAPI';

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
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            name="query"
            value={value}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </section>
      {movies.length !== 0 && (
        <section>
          <ul>
            {movies.map(({ id, title }) => (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
};
export default Movies;
