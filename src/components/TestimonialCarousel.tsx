import { useCallback, useEffect, useRef, useState } from 'react'

const SCROLL_PX_PER_FRAME = 0.4

const AVATAR_COLORS = [
  '#202A36',
  '#4B5563',
  '#374151',
  '#1F2937',
  '#6B7280',
  '#111827',
]

function avatarColor(name: string) {
  let n = 0
  for (let i = 0; i < name.length; i++) n += name.charCodeAt(i)
  return AVATAR_COLORS[n % AVATAR_COLORS.length]
}

function GoogleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  )
}

function StarRow() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#F59E0B" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

type Testimonial = {
  quote: string
  name: string
  role: string
}

function TestimonialCard({ quote, name, role }: Testimonial) {
  const initial = name.charAt(0).toUpperCase()
  const bg = avatarColor(name)

  return (
    <article
      data-testimonial-card
      className="flex w-[17.5rem] max-w-[17.5rem] shrink-0 flex-[0_0_17.5rem] flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-4 md:w-[20.5rem] md:max-w-[20.5rem] md:flex-[0_0_20.5rem] md:p-5"
    >
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
          style={{ background: bg }}
          aria-hidden="true"
        >
          {initial}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold leading-tight text-gray-900">{name}</p>
          <div className="mt-0.5 flex items-center gap-1">
            <span className="text-xs text-gray-500">on</span>
            <GoogleIcon />
            <span className="text-xs font-medium text-gray-500">Google</span>
          </div>
        </div>
      </div>
      <StarRow />
      <p className="text-sm leading-relaxed text-gray-700">{quote}</p>
      <p className="text-xs text-gray-500">{role}</p>
    </article>
  )
}

export default function TestimonialCarousel({ items }: { items: readonly Testimonial[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)
  const [paused, setPaused] = useState(false)
  const [nudging, setNudging] = useState(false)

  const loopItems = [...items, ...items]

  const getStep = useCallback(() => {
    const track = trackRef.current
    if (!track) return 260
    const card = track.querySelector<HTMLElement>('[data-testimonial-card]')
    if (!card) return 260
    return card.offsetWidth + 12
  }, [])

  const getLoopWidth = useCallback(() => {
    const track = trackRef.current
    if (!track) return 0
    return track.scrollWidth / 2
  }, [])

  const applyTransform = useCallback((animate: boolean) => {
    const track = trackRef.current
    if (!track) return
    track.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`
    track.style.transition = animate ? 'transform 0.4s ease' : 'none'
  }, [])

  useEffect(() => {
    if (paused) return
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    let frame = 0
    const tick = () => {
      const loopWidth = getLoopWidth()
      offsetRef.current += SCROLL_PX_PER_FRAME
      if (loopWidth > 0 && offsetRef.current >= loopWidth) {
        offsetRef.current -= loopWidth
      }
      applyTransform(false)
      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [paused, getLoopWidth, applyTransform])

  const normalizeOffset = useCallback(() => {
    const loopWidth = getLoopWidth()
    if (loopWidth <= 0) return
    while (offsetRef.current < 0) offsetRef.current += loopWidth
    while (offsetRef.current >= loopWidth) offsetRef.current -= loopWidth
  }, [getLoopWidth])

  const nudge = (dir: -1 | 1) => {
    setPaused(true)
    setNudging(true)
    offsetRef.current += dir * getStep()
    normalizeOffset()
    applyTransform(true)
    window.setTimeout(() => setNudging(false), 400)
  }

  const controlClass =
    'inline-flex items-center justify-center p-1.5 text-gray-400 opacity-35 transition-opacity hover:opacity-70 focus-visible:opacity-90 focus-visible:outline-none'

  return (
    <div className="mt-10">
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-start gap-3 will-change-transform"
          style={{ transition: nudging ? undefined : 'none' }}
        >
          {loopItems.map((item, i) => (
            <TestimonialCard key={`${item.name}-${i}`} {...item} />
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <div className="inline-flex items-center gap-0.5">
          <button type="button" onClick={() => nudge(-1)} aria-label="Previous feedback" className={controlClass}>
            <span className="block h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
          </button>
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
              className={controlClass}
            >
              <span className="block h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
            </button>
          ))}
          <button type="button" onClick={() => nudge(1)} aria-label="Next feedback" className={controlClass}>
            <span className="block h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
