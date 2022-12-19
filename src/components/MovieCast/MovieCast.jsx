//delete hook useFetchMovieCredits
import { useState, useEffect } from 'react';
import { fetchMovieCreditsById } from 'services/moviesAPI';
import { useParams } from 'react-router-dom';

import { ActorCard } from 'components/ActorCard/ActorCard';

import { List } from './MovieCast.styled';

const MovieCast = () => {
  const [credits, setCredits] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCreditsById(movieId).then(setCredits);
  }, [movieId]);

  //console.log(credits); //сначала консолит нулл, потом только массив
  return (
    <>
      {credits && (
        <List>
          {credits.map(credit => {
            return (
              <ActorCard
                key={credit.credit_id}
                name={credit.name}
                role={credit.character}
                photo_path={credit.profile_path}
              />
            );
          })}
        </List>
      )}
      <p>Here will be additional info "Movie Cast"</p>
    </>
  );
};
export default MovieCast;
