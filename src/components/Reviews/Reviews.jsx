import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../services/moviesAPI';
import { ReviewsSection, Review, Author } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getReviews(movieId).then(setReviews).catch(console.log);
  }, [movieId]);

  return (
    <ReviewsSection>
      {reviews && reviews.length === 0 && (
        <p>We don't hane any reviews for this movie</p>
      )}
      <ul>
        {reviews?.map(({ id, author, content }) => (
          <Review key={id}>
            <Author>Author: {author}</Author>
            <p>{content}</p>
          </Review>
        ))}
      </ul>
    </ReviewsSection>
  );
};

export default Reviews;
