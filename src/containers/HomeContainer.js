"use client";

import CategoriasContainer from "@/components/EndpointsMovies";
import Hero from "@/components/Hero";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const API_URL = "https://api.themoviedb.org/3";

const endpoints = {
  trendingMovies: `${API_URL}/trending/movie/day?api_key=${API_KEY}&language=eng-ENG`,
  popularMovies: `${API_URL}/movie/popular?api_key=${API_KEY}&language=eng-ENG`,
  topRatedMovies: `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=eng-ENG`,
  nowPlayingMovies: `${API_URL}/movie/now_playing?api_key=${API_KEY}&language=eng-ENG`,
  upcomingMovies: `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=eng-ENG`,
};

export default function HomeContainer() {
  return (
    <main className="min-h-screen bg-black">
      <Hero/>
      <div className="px-6 py-12 lg:px-14">
        <CategoriasContainer title="Trending Movies" API_URL={endpoints.trendingMovies} />
        <CategoriasContainer title="Popular Movies" API_URL={endpoints.popularMovies} />
        <CategoriasContainer title="Top Rated Movies" API_URL={endpoints.topRatedMovies} />
        <CategoriasContainer title="Now Playing Movies" API_URL={endpoints.nowPlayingMovies} />
        <CategoriasContainer title="Upcoming Movies" API_URL={endpoints.upcomingMovies} />
      </div>
      
    </main>
  );
}