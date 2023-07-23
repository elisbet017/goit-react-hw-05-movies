import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const responce = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDlhZWMzZTAxMTQzYTcwM2I0ODM4MjVhODMzMzY2ZiIsInN1YiI6IjY0N2YxMTg3MGUyOWEyMmJlMDhlOTk4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FrnBh2tYMap5WoIYIMa-C8qNNuc5WsMKgDAIEwEVz6g',
            },
          }
        );
        setMovie(responce.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getMovieDetails();
  }, [movieId]);

  const { title, poster_path, release_date, vote_average, overview, genres } =
    movie;
  return (
    <main>
      <Link to={backLinkHref}>Go back</Link>
      <section>
        <img
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          alt={title}
        />
        <div>
          <h2>
            {title} ({release_date?.slice(0, 4)})
          </h2>
          <p>User Score: {((vote_average * 100) / 10)?.toFixed(2)}%</p>
          <p>Overview</p>
          <p>{overview}</p>
          <p>Genres</p>
          <p>{genres?.map(genre => genre.name).join(', ')}</p>
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
        <Suspense fallback={<p>Loading subpage...</p>}>
          <Outlet />
        </Suspense>
      </section>
    </main>
  );
};

export default MovieDetails;
