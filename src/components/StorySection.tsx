import { storySection } from '../content/site'

export default function StorySection() {
  return (
    <section id="story" className="border-t border-gray-200 bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <img
            src={storySection.image}
            alt={storySection.imageAlt}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div>
          <h2 className="text-4xl leading-tight tracking-tight text-[#202A36] md:text-5xl">
            {storySection.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">{storySection.lead}</p>
          <ul className="mt-8 space-y-4">
            {storySection.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-gray-700">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#202A36]"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
          <a
            href="#rates"
            className="mt-10 inline-block rounded-full bg-[#202A36] px-6 py-3 font-medium text-white transition-colors hover:bg-[#1a2229]"
          >
            View charter options
          </a>
        </div>
      </div>
    </section>
  )
}
