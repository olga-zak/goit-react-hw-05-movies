import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

export const MoviesListItem = ({ title }) => {
  return (
    <li>
      <Link>{title}</Link>
    </li>
  );
};

MoviesListItem.propTypes = {
  title: PropTypes.string.isRequired,
};
