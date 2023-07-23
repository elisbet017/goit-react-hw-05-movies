import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../services/moviesAPI';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getReviews(movieId).then(setReviews).catch(console.log);
  }, [movieId]);

  return (
    <section>
      {reviews && reviews.length === 0 && (
        <p>We don't hane any reviews for this movie</p>
      )}
      <ul>
        {reviews?.map(({ id, author, content }) => (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reviews;
