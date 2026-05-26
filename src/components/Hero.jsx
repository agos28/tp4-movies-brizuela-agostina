import Image from 'next/image'
import { bowlbyOne, mrDafoe, stackSansText } from '@/lib/fonts';


export default function hero() {

  return (
    <section className="h-105 flex items-end inset-shadow-sm relative">

      <Image
        src="/bg-5.jpg"
        alt="hero"
        fill
        className="object-cover brightness-50"
      />

      <h3 className={`${mrDafoe.className} text-6xl pl-6 text-[#90a955] mb-24 absolute z-20`}>Recipes</h3>
      <h2 className={`${bowlbyOne.className} uppercase text-8xl pl-6 text-white mb-6 z-10 tracking-wider`}>Made easy</h2>

    </section>
  )
}