import Fag from '@/components/Fag'
import Footer from '@/components/Footer';
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Fag />
      </main>
      <Footer />
    </>
  )
}
