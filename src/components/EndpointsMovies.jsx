"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "@/components/MovieCard";
import { archivoBlack } from '@/lib/fonts'

export default function CategoriasContainer({ title, API_URL }) {
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
      {loading && <p className="text-gray-400 flex justify-center items-center">Cargando...</p>}
      {error && <p className="text-red-400">{error}</p>}

      {!loading && !error && (
        <>{/*adentro de esto pq sino genera error ya que solo puede devolver una sola cosa */}
          <h2 className={`${archivoBlack.className} text-white text-2xl pb-5`}>{title}</h2>
          <div className="flex flex-nowrap gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {movies.map((movie) => (
              <div key={movie.id} className="shrink-0 w-40">{/*mantienen el ancho fijo */}
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}