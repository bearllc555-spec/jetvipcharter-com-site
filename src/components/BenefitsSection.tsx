import { benefitsSection } from '../content/site'

export default function BenefitsSection() {
  return (
    <section id="benefits" className="border-t border-gray-200 bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-8 lg:grid-cols-2 lg:gap-16">
        <div className="lg:order-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <img
              src={benefitsSection.image}
              alt={benefitsSection.imageAlt}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="lg:order-1">
          <h2 className="text-4xl leading-tight tracking-tight text-[#202A36] md:text-5xl">
            {benefitsSection.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">{benefitsSection.lead}</p>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {benefitsSection.items.map(({ title, detail }) => (
              <li key={title}>
                <h3 className="font-semibold text-[#202A36]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
