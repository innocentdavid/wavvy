import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`max-w-[1600px] mx-auto ${inter.className}`}
    >

    </main>
  )
}
