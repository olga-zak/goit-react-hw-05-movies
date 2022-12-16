export const MovieCard = ({ movieData }) => {
  //console.log(movieData);
  const { title, release_date, poster_path, overview, genres, vote_average } =
    movieData;
  const listOfGenres = genres.map(genre => <li>{genre.name}</li>);
  const userScore = Math.round(vote_average * 10);
  return (
    <>
      <p>This is movie card</p>
      <h1>
        {title} ({release_date})
      </h1>
      <p>User Score: {userScore}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <ul>{listOfGenres}</ul>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="{title}"
        width="200px"
      />
    </>
  );
};
