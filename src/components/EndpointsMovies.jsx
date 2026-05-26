"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "@/components/MovieCard";

export default function CategoriasContainer({ API_URL }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleGetItems = async () => {
      try {
        const response = await axios.get(API_URL);

        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        setError("Error al cargar los datos");
        setLoading(false);
      }
    };

    handleGetItems();
  }, [API_URL]);

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