import { Link, useLocation } from 'react-router-dom';

import {
  MovieCardWrapper,
  MovieHeader,
  MainHeader,
  Score,
  Image,
  Genres,
  Overview,
  Background,
  AdditionalInfo,
  AdditionalInfoItem,
  ListItem,
} from './MovieCard.styled';

export const MovieCard = ({ movieData }) => {
  const {
    title,
    release_date,
    poster_path,
    overview,
    genres,
    vote_average,
    backdrop_path,
  } = movieData;
  const listOfGenres = genres.map(genre => (
    <ListItem key={genre.id}>{genre.name}</ListItem>
  ));
  const userScore = Math.round(vote_average * 10);
  const location = useLocation();
  return (
    <MovieCardWrapper>
      <MovieHeader>
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <MainHeader>
          {title} ({release_date})
        </MainHeader>
        <Score>Score {userScore}%</Score>
        <Genres>{listOfGenres}</Genres>
      </MovieHeader>

      <Overview>{overview}</Overview>

      <AdditionalInfo>
        <AdditionalInfoItem>
          <Link to="cast" state={location.state}>
            Cast
          </Link>
        </AdditionalInfoItem>
        <AdditionalInfoItem>
          <Link to="reviews" state={location.state}>
            Reviews
          </Link>
        </AdditionalInfoItem>
      </AdditionalInfo>

      <Background
        someUrl={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
      ></Background>
    </MovieCardWrapper>
  );
};

// !!!add proptypes!!!
// https://codepen.io/simoberny/pen/WMMqwL
