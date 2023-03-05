// import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// const API_KEY = 'e6343f2aadc575b1d7088cbe8f702b7d';

// export const onMovieSearch = async request => {
//   const response = await axios.get(
//     `/search/movie?api_key=${API_KEY}&query=${request}`
//   );
//   return response.data;
// };

// export const onMovieTrending = async () => {
//   const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
//   return response.data;
// };

// export const onMovieDetails = async id => {
//   const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
//   return response.data;
// };

// export const onMovieCasts = async id => {
//   const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
//   return response.data;
// };

// export const onMovieReviews = async id => {
//   const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
//   return response.data;
// };


import axios from 'axios';

const API_KEY = 'bf2393b8354e3e35d9cd0d94a6af5ebc';
const moviesApi = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
});

export const fetchTrendingMovies = async () => {
	const {
		data: { results },
	} = await moviesApi.get(`trending/movie/day`, {
		params: {
			api_key: API_KEY,
		},
	});
	return results;
};

export const fetchSearchMovies = async searchName => {
	const {
		data: { results },
	} = await moviesApi.get(`search/movie`, {
		params: {
			api_key: API_KEY,
			query: searchName,
		},
	});
	return results;
};

export const fetchMovieDetailsById = async movieId => {
	const { data } = await moviesApi.get(`movie/${movieId}`, {
		params: {
			api_key: API_KEY,
		},
	});
	return data;
};

export const fetchCastById = async movieId => {
	const {
		data: { cast },
	} = await moviesApi.get(`movie/${movieId}/credits`, {
		params: {
			api_key: API_KEY,
		},
	});
	return cast;
};

export const fetchReviewsById = async movieId => {
	const {
		data: { results },
	} = await moviesApi.get(`movie/${movieId}/reviews`, {
		params: {
			api_key: API_KEY,
		},
	});
	return results;
};