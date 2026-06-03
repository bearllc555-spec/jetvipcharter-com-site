import { business, directionsUrl, mapEmbedUrl } from '../lib/business'

export default function MapSection() {
  return (
    <section id="map" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-8 pb-20">
        <div className="overflow-hidden rounded-xl border border-gray-300">
          <div
            className="flex flex-wrap items-center justify-between gap-3 px-5 py-3"
            style={{
              background: 'linear-gradient(135deg, #e8eaed 0%, #c9cdd4 50%, #d8dbe1 100%)',
              borderBottom: '1px solid #c9cdd4',
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                style={{ background: 'linear-gradient(135deg, #b0b8c4 0%, #8d97a5 100%)' }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#3a3f47]">401 Industrial Ave</p>
                <p className="text-xs text-gray-500">Teterboro, NJ 07608</p>
              </div>
            </div>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-300/80 bg-white/55 px-3 py-1.5 text-xs font-medium text-[#3a3f47] transition hover:bg-white"
            >
              Get directions →
            </a>
          </div>
          <iframe
            title={`${business.name} location`}
            src={mapEmbedUrl}
            width="100%"
            height="280"
            style={{ border: 0, display: 'block', filter: 'grayscale(100%) contrast(1.05)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
