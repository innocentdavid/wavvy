import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`max-w-[1600px] mx-auto ${inter.className}`}
    >
      <div className="fixed bottom-0 right-0 p-3 flex items-center gap-3">
        <Image src="/badge-dark.svg" alt="" width={161} height={29} />
      </div>

      <Nav />
      <Hero />
      <Features />
      <Footer />
    </main>
  )
}
