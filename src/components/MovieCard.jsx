import Link from "next/link";
import { archivoBlack, roboto} from '@/lib/fonts'
import { MdStar } from "react-icons/md";
import Image from "next/image";

export default function MovieCard({ movie }) {
  return (
    <div className={`${archivoBlack.className} text-white hover: transition delay-75 duration-150 ease-in-out`}>
      <div className="overflow-hidden rounded-lg">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={500}
          height={750}
          className="rounded-lg w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          alt={movie.title}
        />
      </div>

      <h3 className="uppercase h-24 mt-3">{movie.title}</h3>

      <div className="flex gap-2">
          <MdStar className="text-2xl text-yellow-500" />
          <p>{movie.vote_average}</p>
      </div>
      
      <div className="bg-gray-950 hover:bg-gray-900 flex justify-center items-center rounded-lg mt-3 h-10">
        <Link href={`/movie/${movie.id}`} className={`${roboto.className} `}>More info</Link>
      </div>
      
    </div>
  );
}