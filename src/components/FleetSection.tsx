import { fleetSection } from '../content/site'

export default function FleetSection() {
  return (
    <section id="rates" className="relative overflow-hidden">
      <img
        src={fleetSection.image}
        alt={fleetSection.imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-8 py-24 md:py-32">
        <div className="max-w-xl">
          <p className="text-sm font-semibold tracking-wider text-white/70 uppercase">
            {fleetSection.eyebrow}
          </p>
          <h2 className="mt-3 text-4xl leading-tight tracking-tight text-white md:text-5xl">
            {fleetSection.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/80">{fleetSection.body}</p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {fleetSection.classes.map(({ name, detail }) => (
            <li
              key={name}
              className="rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm"
            >
              <p className="font-semibold text-white">{name}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{detail}</p>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="mt-10 inline-block rounded-full bg-white px-6 py-3 font-medium text-[#202A36] transition-colors hover:bg-gray-100"
        >
          Get a quote
        </a>
      </div>
    </section>
  )
}
