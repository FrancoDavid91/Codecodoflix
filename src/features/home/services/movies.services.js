import {
    tmdb_api,
    tmdb_paths,
  } from "../../../core/datasource/remote/tmdb/tmdb_api";
import { tmdbMoviesTVAdapter } from "./adapters/tmdb.adapter";

export const getPopularMovies = async () => {
    const { data } = await tmdb_api.get(tmdb_paths.movies.popular);
  
    return tmdbMoviesTVAdapter(data);
  };
  
  export const getTopRatedMovies = async () => {
    const { data } = await tmdb_api.get(tmdb_paths.movies.top_rated);
  
    return tmdbMoviesTVAdapter(data);
  };
  
  export const getUpcomingMovies = async () => {
    const { data } = await tmdb_api.get(tmdb_paths.movies.upcoming);
  
    return tmdbMoviesTVAdapter(data);
  };