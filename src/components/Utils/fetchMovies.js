import axios from 'axios';
import { notification } from './notification';

const API_KEY = '03358da3f30e688045791f6e219334d0';
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`;
const ID_URL = `${BASE_URL}/movie/`;
const SEARCH_BY_QUERY_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`${TREND_URL}`);
    return response.data.results;
  } catch (error) {
    return notification(error.message);
  }
};

export const fetchMovieById = async movieId => {
  try {
    const response = await axios.get(
      `${ID_URL}${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    return notification(error.message);
  }
};

export const fetchMovieByInput = async query => {
  try {
    const response = await axios.get(`${SEARCH_BY_QUERY_URL}&query=${query}`);
    return response.data.results;
  } catch (error) {
    return notification(error.message);
  }
};

export const fetchReviews = async movieId => {
  try {
    const response = await axios.get(
      `${ID_URL}${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    return notification(error.message);
  }
};

export const fetchCastInfo = async movieId => {
  try {
    const response = await axios.get(
      `${ID_URL}${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    return notification(error.message);
  }
};
