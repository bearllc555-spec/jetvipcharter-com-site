import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { goHome } from '../lib/navigation'
import { SITE_VERSION } from '../lib/version'

const VIDEO_URL = '/videos/Black-Jet-01.mp4'

const NAV_ITEMS = [
  { label: 'Story', href: '#story' },
  { label: 'Rates', href: '#rates' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>

        <div
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent"
          aria-hidden="true"
        />

        <div className="relative flex h-full flex-col">
          <header className="mx-auto w-full max-w-7xl px-8 py-6">
            <div className="rounded-full bg-white/65 px-5 py-3 shadow-sm backdrop-blur-md md:px-8 md:py-3.5">
              <div className="flex items-center justify-between">
                <a
                  href="/"
                  onClick={(e) => {
                    goHome(e)
                    closeMobileMenu()
                  }}
                  className="flex flex-col transition-colors"
                >
                  <span className="text-2xl font-semibold text-gray-900">
                    VIP Charters
                  </span>
                  <span className="text-xs font-medium tracking-wide text-gray-600">
                    Teterboro NJ · {SITE_VERSION}
                  </span>
                </a>

                <nav
                  className="hidden items-center gap-8 md:flex"
                  aria-label="Main navigation"
                >
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-gray-900 transition-colors hover:text-gray-700"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <button
                  type="button"
                  className="rounded-lg p-2 text-gray-900 transition-colors hover:text-gray-700 md:hidden"
                  onClick={() => setMobileMenuOpen((open) => !open)}
                  aria-expanded={mobileMenuOpen}
                  aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                >
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>

            {mobileMenuOpen && (
              <nav
                className="mt-4 rounded-2xl border border-white/20 bg-white/95 p-4 shadow-lg backdrop-blur-md md:hidden"
                aria-label="Mobile navigation"
              >
                <ul className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="block rounded-lg px-4 py-3 text-gray-900 transition-colors hover:bg-gray-100 hover:text-gray-700"
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </header>

          <div className="flex flex-1 flex-col justify-end pb-14 md:pb-20">
            <div className="mx-auto w-full max-w-7xl px-8">
              <div className="max-w-3xl text-left">
                <p className="mb-5 flex items-center gap-4 text-xs font-semibold tracking-[0.28em] text-white/75 uppercase">
                  <span className="h-px w-10 bg-white/50 md:w-14" aria-hidden="true" />
                  Private Jets
                </p>

                <h1 className="leading-[0.92] tracking-tight text-white">
                  <span className="block text-[clamp(2.75rem,8vw,5.5rem)] font-light">
                    Premium<span className="text-white/45">.</span>
                  </span>
                  <span className="-mt-1 block text-[clamp(2.75rem,8vw,5.5rem)] font-semibold">
                    Accessible<span className="text-white/45">.</span>
                  </span>
                </h1>

                <p className="mt-5 max-w-md text-base leading-relaxed text-white/80 md:mt-6 md:text-lg">
                  Your dedication deserves recognition.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-10 md:gap-4">
                  <a
                    href="#story"
                    className="rounded-full border border-white/35 bg-white/10 px-5 py-2.5 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                  >
                    Discover
                  </a>
                  <a
                    href="#rates"
                    className="rounded-full bg-white px-5 py-2.5 font-medium text-[#202A36] transition-colors hover:bg-gray-100"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
