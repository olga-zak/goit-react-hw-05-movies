import PropTypes from 'prop-types';

export const MoviesListItem = ({ title }) => {
  return <li>{title}</li>;
};

MoviesListItem.propTypes = {
  title: PropTypes.string.isRequired,
};
