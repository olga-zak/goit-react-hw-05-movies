import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

export const MoviesListItem = ({ title, id }) => {
  // const idToString = id.toString();
  return (
    <li>
      {/* <Link to={idToString}>{title}</Link> */}
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  );
};

MoviesListItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
