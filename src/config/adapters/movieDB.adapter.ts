import { AxiosAdapter } from './http/axios.adapter';


export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '9d6a90c2b95d4a700ee5cb9705c94b0f',
    language: 'es'
  }
});