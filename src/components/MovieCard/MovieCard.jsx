import { Link } from 'react-router-dom';

import {
  MovieCardWrapper,
  InfoSection,
  MovieHeader,
  MainHeader,
  SubHeader,
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
  console.log(movieData);
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
          <Link to="cast">Cast</Link>
        </AdditionalInfoItem>
        <AdditionalInfoItem>
          <Link to="reviews">Reviews</Link>
        </AdditionalInfoItem>
      </AdditionalInfo>

      <Background
        someUrl={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
      ></Background>
    </MovieCardWrapper>
    // <MovieCardWrapper>
    //   <InfoSection>
    //     <MovieHeader>
    //       <Image
    //         src={`https://image.tmdb.org/t/p/w500${poster_path}`}
    //         alt={title}
    //       />
    //       <MainHeader>{title}</MainHeader>
    //       <SubHeader>{release_date}</SubHeader>
    //       <Score>Score {userScore}%</Score>
    //       <Genres>{listOfGenres}</Genres>
    //     </MovieHeader>

    //     <Overview>{overview}</Overview>

    //     <AdditionalInfo>
    //       <ul>
    //         <AdditionalInfoItem>
    //           <Link to="cast">Cast</Link>
    //         </AdditionalInfoItem>
    //         <AdditionalInfoItem>
    //           <Link to="reviews">Reviews</Link>
    //         </AdditionalInfoItem>
    //       </ul>
    //     </AdditionalInfo>
    //   </InfoSection>
    //   <Background></Background>
    // </MovieCardWrapper>
    // // <>
    // //   <p>This is movie card</p>
    // //   <h1>
    // //     {title} ({release_date})
    // //   </h1>
    // //   <p>User Score: {userScore}%</p>
    // //   <h2>Overview</h2>
    // //   <p>{overview}</p>
    // //   <h3>Genres</h3>
    // //   <ul>{listOfGenres}</ul>
    // //   <img
    // //     src={`https://image.tmdb.org/t/p/w500${poster_path}`}
    // //     alt="{title}"
    // //     width="200px"
    // //   />
    // // </>
  );
};

// !!!add proptypes!!!
// https://codepen.io/simoberny/pen/WMMqwL
