import PropTypes from 'prop-types';
import { CardWrapper, Img, Name, Role } from './ActorCard.styled';

export const ActorCard = ({ name, role, photo_path }) => {
  return (
    <>
      <CardWrapper>
        <Img src={`https://image.tmdb.org/t/p/w500${photo_path}`} alt={name} />
        <Name>{name}</Name>
        <Role>{role}</Role>
        {/* <p className={styles.location}>{location}</p> */}
      </CardWrapper>
    </>
  );
};

ActorCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
  photo_path: PropTypes.string,
};
