import { archivoBlack, roboto} from '@/lib/fonts'

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800 ">
      <div className="px-5 lg:px-14 py-5 flex flex-col justify-between items-center gap-4">
        <h2 className={`${archivoBlack.className} uppercase text-xl`}>
          Moobi
        </h2>

        <p className="text-xs text-gray-500">
          © 2026 Moobi. TMDB.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
