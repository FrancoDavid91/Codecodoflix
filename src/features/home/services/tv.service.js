import {
    tmdb_api,
    tmdb_paths,
  } from "../../../core/datasource/remote/tmdb/tmdb_api";
import { tmdbMoviesTVAdapter } from "./adapters/tmdb.adapter";

export const getPopularTv = async () => {
    const { data } = await tmdb_api.get(tmdb_paths.tv.popular);
  
    return tmdbMoviesTVAdapter(data);
  };
  
  export const getTopRatedTv = async () => {
    const { data } = await tmdb_api.get(tmdb_paths.tv.top_rated);
  
    return tmdbMoviesTVAdapter(data);
  };
  
  export const getAiringTodayTv = async () => {
    const { data } = await tmdb_api.get(tmdb_paths.tv.airing_today);
  
    return tmdbMoviesTVAdapter(data);
  };