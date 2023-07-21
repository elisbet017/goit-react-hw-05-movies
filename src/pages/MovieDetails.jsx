import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <main>
      <p>Movie Details</p>
      <Link to="cast">Cast link</Link>
      <Link to="reviews">Reviews link</Link>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
