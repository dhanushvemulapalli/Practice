const APILINK ='https://api.themoviedb.org/3/discover/movie? =sort_by=popularity.desc&api_key=5e3bdf1027d4c32b480860c9ebd6fbbf&page=1';

const IMGPATH ='https://image.tmdb.org/t/p/w1280';

const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=5e3bdf1027d4c32b480860c9ebd6fbbf&query=";

const API_KEY = "5e3bdf1027d4c32b480860c9ebd6fbbf"

const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};