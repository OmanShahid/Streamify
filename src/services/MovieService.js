import axios from 'axios';
const REACT_APP_TMDB_API_KEY = '94423c85c9367525fa4fc765186c06ca';
class MovieService {
  constructor() {
    this.apiKey = REACT_APP_TMDB_API_KEY; // Load from environment variables
    this.baseUrl = 'https://api.themoviedb.org/3';
  }

  async getNowPlayingMovies() {
    try {
      const response = await axios.get(`${this.baseUrl}/movie/now_playing`, {
        params: { api_key: this.apiKey },
      });
      return response.data.results;
    } catch (error) {
      throw new Error('Failed to fetch now playing movies: ' + error.message);
    }
  }
}

export default new MovieService();
