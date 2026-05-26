'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const API_URL = "https://api.themoviedb.org/3";

const MovieContainer = ({ id }) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleGetItems = async () => {
      try {
        const response = await axios.get(`${API_URL}/movie/${id}?api_key=${API_KEY}&language=es-ES`);
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error al cargar los datos");
        setLoading(false);
      }
    };

    handleGetItems();
  }, [id]);

  return (
    <>
      {loading && <p className="text-gray-400">Cargando...</p>}
      {error && <p className="text-red-400">{error}</p>}
      {!loading && !error && movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p>{movie.release_date}</p>
          <p>{movie.vote_average}</p>
        </div>
      )}
    </>
  );
};

export default MovieContainer;