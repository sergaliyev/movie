const API_KEY = "4dff114364cc0c22d04c95af2496e25c";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const fetchAPIList = {
    fetchLatestURL: `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US`,
    fetchNowPlayingMovies: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopRatedURL: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopularURL: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
    searchAPI: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`,
};

export const fetchTVAPIList = {
    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchLatestTV: `https://api.themoviedb.org/3/tv/latest?api_key=${API_KEY}&language=en-US`,
    fetchAiringTV: `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopularTV: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopRatedTV: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    searchTV: `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=`,
}

export {IMG_PATH};
export default fetchAPIList;