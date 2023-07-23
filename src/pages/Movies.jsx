import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const Movies = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = useMemo(() => searchParams.get('query'), [searchParams]);
  const location = useLocation();

  useEffect(() => {
    if (query) {
      const getSearch = async () => {
        const responce = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${query}`,
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDlhZWMzZTAxMTQzYTcwM2I0ODM4MjVhODMzMzY2ZiIsInN1YiI6IjY0N2YxMTg3MGUyOWEyMmJlMDhlOTk4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FrnBh2tYMap5WoIYIMa-C8qNNuc5WsMKgDAIEwEVz6g',
            },
          }
        );
        setMovies(responce.data.results);
      };
      getSearch();
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
