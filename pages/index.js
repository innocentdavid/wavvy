import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Featured from '@/components/Featured'
import CTA1 from '@/components/CTA1'
import CTA2 from '@/components/CTA2'
import Podcasting from '@/components/Podcasting'
import HIW from '@/components/HIW'
import Team from '@/components/Team'
import FAQ from '@/components/FAQ'
import CTA3 from '@/components/CTA3'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`max-w-[1600px] mx-auto ${inter.className}`}
    >
      <Header />
      <Featured />
      <CTA1 />
      <CTA2 />
      <Podcasting/>
      <HIW />
      <Team />
      <FAQ/>
      <CTA3 />
      <Footer/>
    </main>
  )
}
