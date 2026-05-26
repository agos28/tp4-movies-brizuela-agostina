import Link from "next/link";

export default function MovieCard({ movie }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
      <p>{movie.vote_average}</p>
      <Link href={`/movie/${movie.id}`}>Ver detalle</Link>
    </div>
  );
}