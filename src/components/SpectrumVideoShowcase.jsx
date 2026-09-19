import { useState, useRef } from 'react'

const REELS = [
  {
    title: 'Automated Car Wash, Café & Restaurant Tour',
    location: '1st Street Industrial Area, Kampala',
    video: '/videos/automatic-car-wash-cafe.mp4',
    poster: '/images/marketing-sales-office.jpeg',
    tag: 'Commercial Hub',
  },
  {
    title: 'Panda Bay Lounge & Commercial Complex',
    location: 'Kololo Dundas Road, Kampala',
    video: '/videos/automatic-car-wash-cafe.mp4',
    poster: '/images/panda-bay-lounge-1.jpeg',
    tag: 'Panda Bay',
  },
  {
    title: 'Modern Residential Bungalow Estate',
    location: 'Kampala Prime Corridor',
    video: '/videos/automatic-car-wash-cafe.mp4',
    poster: '/images/development-1.jpeg',
    tag: 'Residential Estate',
  },
  {
    title: 'Executive Contemporary Bungalow Development',
    location: 'Entebbe – Wakiso Corridor',
    video: '/videos/automatic-car-wash-cafe.mp4',
    poster: '/images/development-2.jpeg',
    tag: 'Luxury Bungalow',
  },
  {
    title: 'Custom Contemporary Residence & Villa',
    location: 'Wakiso – Kampala Metropolitan',
    video: '/videos/automatic-car-wash-cafe.mp4',
    poster: '/images/landscape-image.jpeg',
    tag: 'Modern Villa',
  },
  {
    title: 'Upcoming Commercial Plaza & Suites',
    location: 'Central Business District, Kampala',
    video: '/videos/automatic-car-wash-cafe.mp4',
    poster: '/images/upcoming-projects.jpeg',
    tag: 'Commercial Plaza',
  },
]

export default function SpectrumVideoShowcase() {
  const [activeReelIndex, setActiveReelIndex] = useState(0)
  const videoRef = useRef(null)

  const activeReel = REELS[activeReelIndex]

  const selectReel = (index) => {
    setActiveReelIndex(index)
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch(() => {})
    }
  }

  return (
    <section className="py-section bg-slate-900 text-white fade-section relative overflow-hidden" style={{ backgroundColor: '#032a3a' }}>
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="section-eyebrow" style={{ color: 'var(--color-cyan-accent)' }}>
            Video Tours & Walkthroughs
          </span>
          <h2 className="section-h2 text-white mb-3">
            Metrak Real Estate <span style={{ color: 'var(--color-cyan-accent)' }}>Project Video Tours</span>
          </h2>
          <p className="text-white/80 text-[16px] leading-relaxed">
            Explore real video walkthroughs of our featured properties, civil developments, and residential projects across Uganda.
          </p>
        </div>

        {/* Main Featured Video Player */}
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10 group mb-8 bg-black">
          <video
            ref={videoRef}
            src={activeReel.video}
            poster={activeReel.poster}
            autoPlay
            loop
            muted
            playsInline
            controls
            preload="auto"
            className="w-full h-[380px] md:h-[480px] object-cover"
          />

          <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[12px] font-bold text-cyan-accent border border-cyan-accent/30 pointer-events-none">
            <i className="fa-solid fa-play mr-1.5 text-cyan-accent text-[10px]" />
            {activeReel.tag} — {activeReel.location}
          </div>
        </div>

        {/* Video Reels Selector Thumbnails */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 max-w-6xl mx-auto">
          {REELS.map((reel, idx) => (
            <button
              key={reel.tag}
              type="button"
              onClick={() => selectReel(idx)}
              className={`relative rounded-xl overflow-hidden text-left border-2 transition-all duration-300 group ${
                activeReelIndex === idx
                  ? 'border-cyan-accent shadow-lg shadow-cyan-500/20 scale-[1.03]'
                  : 'border-white/10 hover:border-white/40'
              }`}
            >
              <img
                src={reel.poster}
                alt={reel.title}
                className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-2 flex flex-col justify-end">
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-accent">
                  {reel.tag}
                </span>
                <p className="text-[10.5px] font-semibold text-white/90 truncate">
                  {reel.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
