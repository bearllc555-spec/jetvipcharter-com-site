import { business } from '../lib/business'
import { introSection } from '../content/site'

export default function IntroSection() {
  return (
    <section className="border-t border-gray-200 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-8 text-center">
        <h2 className="text-4xl leading-tight tracking-tight text-[#202A36] md:text-5xl">
          {introSection.title}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-gray-600">{introSection.body}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={business.phoneHref}
            className="rounded-full border border-[#202A36] px-6 py-3 font-medium text-[#202A36] transition-colors hover:bg-[#202A36] hover:text-white"
          >
            {business.phone}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-[#202A36] px-6 py-3 font-medium text-white transition-colors hover:bg-[#1a2229]"
          >
            Request a quote
          </a>
        </div>
      </div>
    </section>
  )
}
