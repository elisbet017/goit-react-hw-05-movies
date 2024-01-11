import { useEffect, useState, FC } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../services/moviesAPI';
import { ReviewsSection, Review, Author } from './Reviews.styled';

interface IReview {
  id: string;
  author: string;
  content: string;
}

const Reviews: FC = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState<IReview[] | null>(null);

  useEffect(() => {
    movieId && getReviews(movieId).then(setReviews).catch(console.log);
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
