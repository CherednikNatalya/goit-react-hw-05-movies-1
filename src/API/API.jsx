import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'e6343f2aadc575b1d7088cbe8f702b7d';

export const onMovieSearch = async request => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${request}`
  );
  return response.data;
};

export const onMovieTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const onMovieDetails = async id => {
  const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return response.data;
};

export const onMovieCasts = async id => {
  const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return response.data;
};

export const onMovieReviews = async id => {
  const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return response.data;
};