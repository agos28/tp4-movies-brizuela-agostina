"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "@/components/MovieCard";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;//trae la key de la api
const API_URL = "https://api.themoviedb.org/3";// url de la api

const endpoints = {//guardo los endpoints pedidos
  trendingMovies: `${API_URL}/trending/movie/day?api_key=${API_KEY}&language=es-ES`,//añade la url, despues el endpoint y la key para que se pueda mostrar, tambien el idioma
  popularMovies: `${API_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`,
  topRatedMovies: `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=es-ES`,
  nowPlayingMovies: `${API_URL}/movie/now_playing?api_key=${API_KEY}&language=es-ES`,
  upcomingMovies: `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=es-ES`,
};

function Section({ url }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleGetItems = async () => {
      try {
        const response = await axios.get(url);
        setMovies(response.data.results);//guarda la info de la api en movies
        setLoading(false);
      } catch (error) {
        setError("Error al cargar los datos");
        setLoading(false);
      }
    };

    handleGetItems();
  }, [url]);

  return (
    <section className="mb-12">
      {loading && <p className="text-gray-400">Cargando...</p>}
      {error && <p className="text-red-400">{error}</p>}
      {!loading && !error && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  );
}

export default function HomeContainer() {
  return (
    <main className="min-h-screen px-6 py-8 ">
      
      <Section url={endpoints.trendingMovies} />{/*trae las pelis que pertenecen al endpoint y las muestra */}
      <Section url={endpoints.popularMovies} />
      <Section url={endpoints.topRatedMovies} />
      <Section url={endpoints.nowPlayingMovies} />
      <Section url={endpoints.upcomingMovies} />
    </main>
  );
}