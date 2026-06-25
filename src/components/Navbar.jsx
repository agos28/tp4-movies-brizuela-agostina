import { archivoBlack } from '@/lib/fonts'
import Link from 'next/link';
import { MdLocalMovies } from "react-icons/md";

const Navbar = () => {
  

  return (
    <header className={`${archivoBlack.className} flex justify-between bg-black text-white uppercase px-6 h-12 items-center`}>
      <div className='flex gap-2'>
        <MdLocalMovies className="text-2xl text-white" />
        <h2 className={`${archivoBlack.className} uppercase `}>moobi</h2>
      </div>
      <nav>
        <ul className="flex items-center gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
