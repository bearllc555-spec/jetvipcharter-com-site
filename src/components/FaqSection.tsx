import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { faqs } from '../content/site'

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-4xl leading-tight tracking-tight text-[#202A36] md:text-5xl">
              Frequently asked questions
            </h2>
            <p className="mt-5 text-base text-gray-600">Got questions? We&apos;ve got answers!</p>
          </div>
          <ul className="lg:col-span-8">
            {faqs.map((item, i) => {
              const isOpen = open === i
              return (
                <li key={item.q} className="border-b border-gray-200">
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 py-6 text-left"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-gray-900 md:text-lg">{item.q}</span>
                    <span
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        isOpen ? 'bg-[#202A36] text-white' : 'bg-gray-100 text-[#202A36]'
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="pb-6 text-sm leading-relaxed text-gray-600 md:text-base">{item.a}</p>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
