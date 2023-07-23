import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const responce = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDlhZWMzZTAxMTQzYTcwM2I0ODM4MjVhODMzMzY2ZiIsInN1YiI6IjY0N2YxMTg3MGUyOWEyMmJlMDhlOTk4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FrnBh2tYMap5WoIYIMa-C8qNNuc5WsMKgDAIEwEVz6g',
            },
          }
        );
        setReviews(responce.data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <section>
      {reviews.length === 0 && <p>We don't hane any reviews for this movie</p>}
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
