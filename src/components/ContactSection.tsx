import type { ReactNode } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { business } from '../lib/business'
import { contactNote } from '../content/site'

function ContactIconRow({
  href,
  icon: Icon,
  children,
}: {
  href?: string
  icon: typeof Phone
  children: ReactNode
}) {
  const inner = (
    <>
      <span
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20"
        aria-hidden="true"
      >
        <Icon className="h-4 w-4 text-white" strokeWidth={1.75} />
      </span>
      <span className="text-base font-medium text-white md:text-lg">{children}</span>
    </>
  )

  if (href) {
    return (
      <li>
        <a href={href} className="inline-flex items-center gap-4 transition hover:opacity-80">
          {inner}
        </a>
      </li>
    )
  }

  return (
    <li>
      <div className="inline-flex items-center gap-4">{inner}</div>
    </li>
  )
}

export default function ContactSection() {
  return (
    <section id="contact" className="bg-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,28rem)] lg:gap-16 xl:grid-cols-[1fr_30rem]">
          <div className="flex flex-col justify-center">
            <h2 className="max-w-md text-4xl leading-tight text-white md:text-5xl">
              Get in touch with {business.name}
            </h2>
            <ul className="mt-8 space-y-5 md:mt-10">
              <ContactIconRow href={business.phoneHref} icon={Phone}>
                {business.phone}
              </ContactIconRow>
              <ContactIconRow href={`mailto:${business.email}`} icon={Mail}>
                {business.email}
              </ContactIconRow>
              <ContactIconRow icon={MapPin}>
                <span className="whitespace-pre-line">{business.address}</span>
              </ContactIconRow>
            </ul>
          </div>

          <div className="rounded-2xl bg-gray-50 p-7 shadow-xl md:p-8">
            <h3 className="text-xl text-[#202A36] md:text-2xl">Send us a message</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">{contactNote}</p>
            <form className="mt-8 space-y-7" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="contact-name" className="block text-sm text-gray-900">
                  Name (required)
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  className="w-full border-0 border-b border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-0"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm text-gray-900">
                  Email (required)
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  className="w-full border-0 border-b border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-0"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm text-gray-900">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  className="min-h-[5.5rem] w-full resize-y border-0 border-b border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-0"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-[#202A36] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a2229]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
