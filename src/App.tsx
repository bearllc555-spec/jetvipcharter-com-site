import { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import TestimonialsSection from './components/TestimonialsSection'
import FaqSection from './components/FaqSection'
import ContactSection from './components/ContactSection'
import MapSection from './components/MapSection'
import SiteFooter from './components/SiteFooter'

function PlaceholderSection({
  id,
  title,
  description,
}: {
  id: string
  title: string
  description: string
}) {
  return (
    <section id={id} className="border-t border-gray-200 bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-8 text-center">
        <h2 className="text-3xl tracking-tight text-[#202A36] md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">{description}</p>
      </div>
    </section>
  )
}

function App() {
  useEffect(() => {
    const { hash, pathname, search } = window.location
    if (hash === '#start' || hash === '#') {
      window.history.replaceState(null, '', pathname + search)
    }
  }, [])

  return (
    <>
      <HeroSection />
      <PlaceholderSection
        id="story"
        title="Your journey, elevated"
        description="VIP Charters connects discerning travelers with private aviation solutions through Aircraft Services Group at Teterboro."
      />
      <PlaceholderSection
        id="rates"
        title="Transparent charter options"
        description="Request a tailored quote based on aircraft class, routing, and schedule. Our team will outline clear pricing before you commit."
      />
      <PlaceholderSection
        id="benefits"
        title="Why fly private"
        description="Save time, protect privacy, and travel on your schedule with dedicated aircraft and crew from the NYC metro's premier general aviation hub."
      />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <MapSection />
      <SiteFooter />
    </>
  )
}

export default App
