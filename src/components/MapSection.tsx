import { business, mapEmbedUrl } from '../lib/business'

export default function MapSection() {
  return (
    <section id="map" className="w-full bg-black" aria-label="Location map">
      <iframe
        title={`${business.name} location`}
        src={mapEmbedUrl}
        className="block h-[200px] w-full md:h-[240px]"
        style={{
          border: 0,
          filter: 'grayscale(100%) contrast(1.08) brightness(0.72)',
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  )
}
