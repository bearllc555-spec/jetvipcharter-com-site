import { testimonials } from '../content/site'
import TestimonialCarousel from './TestimonialCarousel'

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl leading-tight tracking-tight text-[#202A36] md:text-5xl">
            What our members are saying
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-600">
            Their stories reflect the reliability, discretion, and comfort that come with flying private from
            Teterboro.
          </p>
        </div>
        <TestimonialCarousel items={testimonials} />
      </div>
    </section>
  )
}
