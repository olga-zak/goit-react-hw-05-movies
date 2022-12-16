import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

export const MoviesListItem = ({ title, id }) => {
  console.log(id);
  return (
    <li>
      <Link to={`${id}`}>{title}</Link>
    </li>
  );
};

MoviesListItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
