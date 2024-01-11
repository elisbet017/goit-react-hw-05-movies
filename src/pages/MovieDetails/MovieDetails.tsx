import { useEffect, useState, Suspense, useRef, FC } from 'react';
import { Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../../services/moviesAPI';
import {
  Button,
  FilmTitle,
  Info,
  Text,
  LinksBlock,
} from './MovieDetails.styled';
import { Item, MovieLink } from '../Home/Home.styled';

interface IGenre {
  name: string;
}

interface IMovie {
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
  genres: IGenre[];
}

const MovieDetails: FC = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');
  const navigate = useNavigate();

  const [movie, setMovie] = useState<IMovie | null>(null);

  useEffect(() => {
    movieId && getMovieDetails(movieId).then(setMovie).catch(console.log);
  }, [movieId]);

  if (!movie) {
    return;
  }

  const { title, poster_path, release_date, vote_average, overview, genres } =
    movie;

  return (
    <main>
      <Button
        type="button"
        onClick={() => {
          navigate(backLinkLocation.current);
        }}
      >
        Go back
      </Button>
      {title && (
        <>
          <Info>
            <img
              src={`https://image.tmdb.org/t/p/w200${poster_path}`}
              alt={title}
            />
            <div>
              <FilmTitle>
                {title} ({release_date.slice(0, 4)})
              </FilmTitle>
              <Text>User Score: {((vote_average * 100) / 10).toFixed(2)}%</Text>
              <Text>Overview</Text>
              <Text>{overview}</Text>
              <Text>Genres</Text>
              <Text>{genres.map(genre => genre.name).join(', ')}</Text>
            </div>
          </Info>
          <LinksBlock>
            <Text>Additional information</Text>
            <ul>
              <Item>
                <MovieLink to="cast">Cast</MovieLink>
              </Item>
              <Item>
                <MovieLink to="reviews">Reviews</MovieLink>
              </Item>
            </ul>
          </LinksBlock>
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
