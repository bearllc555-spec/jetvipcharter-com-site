import { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import IntroSection from './components/IntroSection'
import StorySection from './components/StorySection'
import FleetSection from './components/FleetSection'
import BenefitsSection from './components/BenefitsSection'
import TestimonialsSection from './components/TestimonialsSection'
import FaqSection from './components/FaqSection'
import ContactSection from './components/ContactSection'
import MapSection from './components/MapSection'
import SiteFooter from './components/SiteFooter'

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
      <IntroSection />
      <StorySection />
      <FleetSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <MapSection />
      <SiteFooter />
    </>
  )
}

export default App
