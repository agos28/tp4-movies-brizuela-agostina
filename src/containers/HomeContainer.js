"use client";

import CategoriasContainer from "@/components/EndpointsMovies";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const API_URL = "https://api.themoviedb.org/3";

const endpoints = {
  trendingMovies: `${API_URL}/trending/movie/day?api_key=${API_KEY}&language=es-ES`,
  popularMovies: `${API_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`,
  topRatedMovies: `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=es-ES`,
  nowPlayingMovies: `${API_URL}/movie/now_playing?api_key=${API_KEY}&language=es-ES`,
  upcomingMovies: `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=es-ES`,
};

export default function HomeContainer() {
  return (
    <main className="min-h-screen px-6 py-8">
      <CategoriasContainer API_URL={endpoints.trendingMovies} />
      <CategoriasContainer API_URL={endpoints.popularMovies} />
      <CategoriasContainer API_URL={endpoints.topRatedMovies} />
      <CategoriasContainer API_URL={endpoints.nowPlayingMovies} />
      <CategoriasContainer API_URL={endpoints.upcomingMovies} />
    </main>
  );
}