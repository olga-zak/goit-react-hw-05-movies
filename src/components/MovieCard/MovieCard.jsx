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
  AdditionalInfoText,
} from './MovieCard.styled';

export const MovieCard = ({ movieData }) => {
  //console.log(movieData);
  const { title, release_date, poster_path, overview, genres, vote_average } =
    movieData;
  const listOfGenres = genres.map(genre => (
    <li key={genre.id}>{genre.name}</li>
  ));
  const userScore = Math.round(vote_average * 10);
  return (
    <MovieCardWrapper class="movie_card" id="bright">
      <InfoSection class="info_section">
        <MovieHeader class="movie_header">
          <Image
            class="locandina"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
          <MainHeader>{title}</MainHeader>
          <SubHeader>{release_date}</SubHeader>
          <Score class="minutes">Score {userScore}%</Score>
          <Genres class="type">
            <ul>{listOfGenres}</ul>
          </Genres>
        </MovieHeader>
        {/* <div class="movie_desc"> */}
        <Overview class="text">{overview}</Overview>
        {/* </div> */}
        <AdditionalInfo class="movie_social">
          <ul>
            <AdditionalInfoItem>
              <AdditionalInfoText class="material-icons">
                Cast
              </AdditionalInfoText>
            </AdditionalInfoItem>
            <AdditionalInfoItem>
              <AdditionalInfoText class="material-icons">
                Reviews
              </AdditionalInfoText>
            </AdditionalInfoItem>
            {/* <li>
              <i class="material-icons">chat_bubble</i>
            </li> */}
          </ul>
        </AdditionalInfo>
      </InfoSection>
      <Background class="blur_back bright_back"></Background>
    </MovieCardWrapper>
    // <>
    //   <p>This is movie card</p>
    //   <h1>
    //     {title} ({release_date})
    //   </h1>
    //   <p>User Score: {userScore}%</p>
    //   <h2>Overview</h2>
    //   <p>{overview}</p>
    //   <h3>Genres</h3>
    //   <ul>{listOfGenres}</ul>
    //   <img
    //     src={`https://image.tmdb.org/t/p/w500${poster_path}`}
    //     alt="{title}"
    //     width="200px"
    //   />
    // </>
  );
};

// !!!add proptypes!!!
// https://codepen.io/simoberny/pen/WMMqwL
