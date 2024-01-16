import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { NowPlayingResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import type { Movie } from '../../entities/movie.entity';



export const moviesNowPlayingUseCase = async ( fetcher: HttpAdapter  ):Promise<Movie[]> => {
  
  try {

    const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');

    return nowPlaying.results.map(  MovieMapper.fromMovieDBResultToEntity );



  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - NowPlaying');
  }


}

