import axios from 'axios';

const API_KEY = 'd929b7a4b435aa22496bb0793b172bfc';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchTrendingMovies() {
  try {
    const response = await axios('trending/movie/day', {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMoviesBySearchQuery(searchWord, page) {
  try {
    const response = await axios('search/movie', {
      params: {
        api_key: API_KEY,
        query: searchWord,
        page,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieById(movieId) {
  try {
    const response = await axios(`movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        id: movieId,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieCreditsById(movieId) {
  try {
    const response = await axios(`movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
        id: movieId,
      },
    });
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieReviewsById(movieId) {
  try {
    const response = await axios(`movie/${movieId}/reviews`, {
      params: {
        api_key: API_KEY,
        id: movieId,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}
