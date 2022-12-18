import PropTypes from 'prop-types';

import { MoviesListItem } from 'components/MoviesListItem/MoviesListItem';

import { List } from './MovieList';

export const MoviesList = ({ movies }) => {
  //console.log(movies);
  return (
    <List>
      {movies.map(movie => {
        return (
          <MoviesListItem
            key={movie.id}
            title={movie.title}
            id={movie.id}
            poster={movie.poster_path}
          />
        );
      })}
    </List>
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
