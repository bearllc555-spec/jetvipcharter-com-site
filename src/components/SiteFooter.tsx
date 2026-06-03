import { useState } from 'react'
import { business } from '../lib/business'
import { footerLinks } from '../content/site'

export default function SiteFooter() {
  const year = new Date().getFullYear()
  const [subHovered, setSubHovered] = useState(false)

  return (
    <footer className="bg-[#202A36] text-white">
      <div className="mx-auto max-w-7xl px-8 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="text-sm text-white/65">
              Join our newsletter for charter availability, routing updates, and seasonal travel insights.
            </p>
            <form
              className="mt-5 flex max-w-md flex-col gap-2 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email address"
                className="w-full flex-1 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none"
              />
              <button
                type="submit"
                onMouseEnter={() => setSubHovered(true)}
                onMouseLeave={() => setSubHovered(false)}
                className="shrink-0 rounded-full px-5 py-3 text-sm font-semibold transition-colors"
                style={{
                  background: subHovered ? '#E5E7EB' : '#F3F4F6',
                  color: subHovered ? '#111827' : '#202A36',
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
          <nav className="md:col-span-6 md:justify-self-end" aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/85 transition hover:opacity-70">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/15 pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg font-bold tracking-tight">{business.displayName}</p>
            <p className="mt-1 text-sm text-white/70">{business.name}</p>
            <p className="mt-2 text-xs text-white/50">
              &copy; {year} {business.name}. {business.address.split('\n')[1]}
            </p>
          </div>
          <p className="text-xs text-white/50 md:text-right">
            Built by{' '}
            <a
              href="https://998webdesigns.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/85 transition hover:opacity-80"
            >
              998 web designs
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
