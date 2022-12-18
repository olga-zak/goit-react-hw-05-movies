import { useState, useEffect } from 'react';
import { fetchMovieReviewsById } from 'services/moviesAPI';
import { useParams } from 'react-router-dom';

export const MovieReviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviewsById(movieId).then(setReviews);
  }, [movieId]);

  console.log(reviews);
  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(review => {
            return <li key={review.id}>{review.content}</li>;
          })}
        </ul>
      )}
    </>
  );
};
