import { useState, useEffect } from 'react';
import { fetchMovieReviewsById } from 'services/moviesAPI';
import { useParams } from 'react-router-dom';

import { Item, Author } from './MoviesReviews.styled';

const MovieReviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviewsById(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(review => {
            return (
              <Item key={review.id}>
                <Author>
                  Written by {review.author},{' '}
                  {review.created_at.substring(0, 10)}
                </Author>
                <p>{review.content}</p>
              </Item>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default MovieReviews;
