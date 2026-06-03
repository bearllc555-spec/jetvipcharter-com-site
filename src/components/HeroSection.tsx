import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4'

const NAV_ITEMS = [
  { label: 'Start', href: '#start' },
  { label: 'Story', href: '#story' },
  { label: 'Rates', href: '#rates' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'FAQ', href: '#faq' },
] as const

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <section id="start" className="relative h-screen overflow-hidden">
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

        <div className="relative flex h-full flex-col">
          <header className="mx-auto w-full max-w-7xl px-8 py-6">
            <div className="flex items-center justify-between">
              <a
                href="#start"
                className="flex flex-col transition-colors"
              >
                <span className="text-2xl font-semibold text-gray-900">
                  VIP Charters
                </span>
                <span className="text-xs font-medium tracking-wide text-gray-600">
                  Teterboro NJ · v1.1
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

          <div className="flex flex-1 items-center justify-center">
            <div className="-mt-80 flex flex-col items-center px-8 text-center">
              <p className="mb-4 text-sm font-semibold tracking-wider text-gray-600 uppercase">
                PRIVATE JETS
              </p>

              <h1 className="leading-none tracking-tighter">
                <span className="block text-6xl font-normal text-gray-500 md:text-7xl lg:text-8xl">
                  Premium.
                </span>
                <span className="-mt-3 block text-6xl font-normal text-[#202A36] md:text-7xl lg:text-8xl">
                  Accessible.
                </span>
              </h1>

              <p className="mx-auto mt-6 mb-6 max-w-2xl text-lg text-gray-600 md:text-xl">
                Your dedication deserves recognition.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#story"
                  className="rounded-full bg-gray-300 px-4 py-2 font-medium text-gray-800 transition-colors hover:bg-gray-400"
                >
                  Discover
                </a>
                <a
                  href="#rates"
                  className="rounded-full bg-[#202A36] px-4 py-2 font-medium text-white transition-colors hover:bg-[#1a2229]"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
