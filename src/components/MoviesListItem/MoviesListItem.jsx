//import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Item, Img, Text, LinkText } from './MovieListItem';

export const MoviesListItem = ({ title, id, poster }) => {
  // const idToString = id.toString();
  return (
    <Item>
      {/* <Link to={idToString}>{title}</Link> */}
      <LinkText to={`/movies/${id}`}>
        <Img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} />
        <Text>{title}</Text>
      </LinkText>
    </Item>
  );
};

MoviesListItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
