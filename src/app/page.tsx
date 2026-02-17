import { Hero } from '@/components/Hero'
import { ComponentGrid } from '@/components/ComponentGrid'
import { Github } from 'lucide-react'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <>
      <Hero />
      <ComponentGrid limit={6} />

 
 <Footer />

      {/* <RandomVibeButton /> */}
    </>
  )
}
