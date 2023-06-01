import Hero from '@/components/Hero'
import Services from '@/components/Services'
export const metadata = {
  title: 'Cleaning'
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
    </main>
  )
}
