import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'a8ee29bfb9bbeb066f9027b41e5a7445';

// Funkcja do pobierania aktualnie najpopularniejszych filmów
const getTrending = async () => {
  try {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(response.data.results);
      }, 500);
    });
  } catch (error) {
    console.log('getTrending error:', error);
  }
};

// Funkcja do wyszukiwania filmu po słowie kluczowym
const searchMovies = async keyword => {
  try {
    const response = await axios.get(
      `search/movie?api_key=${API_KEY}&query=${keyword}`
    );
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(response.data.results);
      }, 1000);
    });
  } catch (error) {
    console.log('searchMovies error:', error);
  }
};

// Funkcja do pobierania pełnych informacji o filmie
const getMovieDetails = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(response.data);
      }, 1000);
    });
  } catch (error) {
    console.error('getMovieDetails error:', error);
  }
};

// Funkcja do pobierania informacji o aktorach w filmie
const getMovieCredits = async movieId => {
  try {
    const response = await axios.get(
      `movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(response.data.cast);
      }, 500);
    });
  } catch (error) {
    console.error('getMovieCredits error:', error);
  }
};

// Funkcja do pobierania recenzji o filmie
const getMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(response.data.results);
      }, 500);
    });
  } catch (error) {
    console.error('getMovieReviews error:', error);
  }
};

export {
  getTrending,
  searchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
