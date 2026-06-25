import Image from 'next/image'
import { bowlbyOne, mrDafoe, stackSansText } from '@/lib/fonts';


export default function hero() {

  return (
    <section className="h-105 flex items-end inset-shadow-sm relative">

      <Image
        src="/hero-bg.jpg"
        alt="hero"
        fill
        className="object-cover brightness-50"
      />

      {/*<h2 className={`$ uppercase text-8xl pl-6 text-white mb-6 z-10 tracking-wider`}>pelis</h2>*/}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-linear-to-b from-transparent to-black z-10" />
    </section>
  )
}