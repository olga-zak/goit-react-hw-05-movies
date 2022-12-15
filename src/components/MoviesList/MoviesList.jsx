import PropTypes from 'prop-types';

import { MoviesListItem } from 'components/MoviesListItem/MoviesListItem';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        return <MoviesListItem key={movie.id} title={movie.title} />;
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
