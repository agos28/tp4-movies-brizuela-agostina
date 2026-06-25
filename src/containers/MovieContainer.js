'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { archivoBlack, roboto} from '@/lib/fonts'
import Image from 'next/image';
import { MdStar, MdCalendarToday } from "react-icons/md";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const API_URL = "https://api.themoviedb.org/3";

const MovieContainer = ({ id }) => {
  const [movie, setMovie] = useState(null);
  const [logos, setLogos] = useState([]);
  const [backdrops, setBackdrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const endpoints = {
    movie: `${API_URL}/movie/${id}?api_key=${API_KEY}&language=eng-ENG`,
    images: `${API_URL}/movie/${id}/images?api_key=${API_KEY}`,
  };

  useEffect(() => {
    const handleGetItems = async () => {
      try {
        const movieRes = await axios.get(endpoints.movie);
        const imagesRes = await axios.get(endpoints.images);
        setMovie(movieRes.data);
        setLogos(imagesRes.data.logos);
        setBackdrops(imagesRes.data.backdrops);
        setLoading(false);
      } catch (error) {
        setError("Error al cargar los datos");
        setLoading(false);
      }
    };

    handleGetItems();
  }, [id]);

  return (
    <div className='bg-black flex-1'>{/*quedaba un espacio en blanco y lo unico que lo soluciono fue flex1 */}
      {loading && <p className="text-gray-400 flex justify-center items-center">Cargando...</p>}
      {error && <p className="text-red-400">{error}</p>}
      {!loading && !error && movie && (
        <div className={`${roboto.className} bg-black relative text-white`}>
          <div className="relative">
            <Image
              src={`https://image.tmdb.org/t/p/original${backdrops[0].file_path}`}
              width={780}
              height={192}
              className="w-full h-48 lg:h-72 object-cover brightness-50"
              alt={movie.title}
            />
            <div className="absolute bottom-0 w-full h-20 lg:h-32 bg-linear-to-b from-transparent to-black z-10" />
          </div>
          <div className="m-7 lg:m-15">
            <div className="flex gap-4 lg:mt-3">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                width={150}
                height={225}
                className="rounded-lg object-cover lg:h-96 lg:w-auto"
                alt={movie.title}
              />

              <div className="flex flex-col">
                <h1 className={`${archivoBlack.className} uppercase pt-2 text-3xl lg:text-6xl`}>{movie.title}</h1>
                <div className="flex gap-3 mt-3">
                  <MdCalendarToday className="text-2xl text-blue-500" />
                  <p className={`${archivoBlack.className} uppercase`}>{movie.release_date}</p>
                  <MdStar className="text-2xl text-yellow-500" />
                  <p className={`${archivoBlack.className} uppercase`}>{movie.vote_average}</p>
                </div>
              </div>
            </div>

            <p className={`${archivoBlack.className} uppercase mt-6 text-2xl`}>synopsis</p>
            <p className="mt-6">{movie.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieContainer;