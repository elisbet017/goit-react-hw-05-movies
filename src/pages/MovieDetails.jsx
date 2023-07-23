import { useEffect, useState, Suspense } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useParams,
  useNavigate,
} from 'react-router-dom';
import { getMovieDetails } from '../services/moviesAPI';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie).catch(console.log);
  }, [movieId]);

  const { title, poster_path, release_date, vote_average, overview, genres } =
    movie;
  return (
    <main>
      <button type="button" onClick={() => {navigate(backLinkHref)}}>Go back</button>
      {title && (
        <>
          <section>
            <img
              src={`https://image.tmdb.org/t/p/w200${poster_path}`}
              alt={title}
            />
            <div>
              <h2>
                {title} ({release_date.slice(0, 4)})
              </h2>
              <p>User Score: {((vote_average * 100) / 10).toFixed(2)}%</p>
              <p>Overview</p>
              <p>{overview}</p>
              <p>Genres</p>
              <p>{genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </section>
          <section>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </section>
          <section>
            <Suspense fallback={<div>Loading subpage...</div>}>
              <Outlet />
            </Suspense>
          </section>
        </>
      )}
    </main>
  );
};

export default MovieDetails;
