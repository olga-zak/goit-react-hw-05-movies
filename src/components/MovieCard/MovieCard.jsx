import { useLocation } from 'react-router-dom';

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
  LinkStyled,
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
  const release_year = release_date.split('-')[0];
  const location = useLocation();
  return (
    <MovieCardWrapper>
      <MovieHeader>
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <MainHeader>
          {title} ({release_year})
        </MainHeader>
        <Score>Score {userScore}%</Score>
        <Genres>{listOfGenres}</Genres>
      </MovieHeader>

      <Overview>{overview}</Overview>

      <AdditionalInfo>
        <AdditionalInfoItem>
          <LinkStyled to="cast" state={location.state}>
            Cast
          </LinkStyled>
        </AdditionalInfoItem>
        <AdditionalInfoItem>
          <LinkStyled to="reviews" state={location.state}>
            Reviews
          </LinkStyled>
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
