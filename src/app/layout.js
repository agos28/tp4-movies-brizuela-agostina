
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}