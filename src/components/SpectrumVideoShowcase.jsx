import { useState, useRef } from 'react'

const REELS = [
  {
    title: '2 Bed Luxury Rental — Kalungu Bunga',
    video: '/videos/spectrum-bunga-tour.mp4',
    poster: '/images/spectrum-bunga-2bed.jpg',
    tag: 'Bunga Kampala',
    url: 'https://www.instagram.com/spectrumrealestateuganda/reel/Dc34jigt7Xr/',
  },
  {
    title: '1 Bed Modern Rental — Munyonyo Kampala',
    video: '/videos/spectrum-interior-tour.mp4',
    poster: '/images/spectrum-munyonyo-kitchen.jpg',
    tag: 'Munyonyo Kampala',
    url: 'https://www.instagram.com/spectrumrealestateuganda/reel/DbGWG6MMQ-0/',
  },
  {
    title: 'Exclusive Modern Villa & Gate Security Tour',
    video: '/videos/spectrum-villa-tour.mp4',
    poster: '/images/spectrum-villa-modern.jpg',
    tag: 'Kololo Kampala',
    url: 'https://www.instagram.com/spectrumrealestateuganda/',
  },
  {
    title: 'Spectrum Executive Office & CEO Message',
    video: '/videos/spectrum-office-tour.mp4',
    poster: '/images/spectrum-ceo-office.jpg',
    tag: 'Spectrum HQ',
    url: 'https://www.instagram.com/spectrumrealestateuganda/reel/Dc34jigt7Xr/',
  },
  {
    title: 'Multi-Story Apartment Block Construction',
    video: '/videos/spectrum-site-tour.mp4',
    poster: '/images/spectrum-apartment-block.jpg',
    tag: 'Naguru Kampala',
    url: 'https://www.instagram.com/spectrumrealestateuganda/',
  },
]

export default function SpectrumVideoShowcase() {
  const [activeReelIndex, setActiveReelIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef(null)

  const activeReel = REELS[activeReelIndex]

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const selectReel = (index) => {
    setActiveReelIndex(index)
    setIsPlaying(true)
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch(() => {})
    }
  }

  return (
    <section className="py-section bg-slate-900 text-white fade-section relative overflow-hidden" style={{ backgroundColor: '#032a3a' }}>
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="section-eyebrow" style={{ color: 'var(--color-cyan-accent)' }}>
            Instagram Video Reels & Virtual Tours
          </span>
          <h2 className="section-h2 text-white mb-4">
            Spectrum Properties <span style={{ color: 'var(--color-cyan-accent)' }}>Video Tours</span>
          </h2>
          <p className="text-white/80 text-[17px] leading-relaxed">
            Watch real video walkthroughs of our luxury homes, apartments, and commercial projects direct from <strong className="text-white">@spectrumrealestateuganda</strong>.
          </p>
        </div>

        {/* Main Featured Video Player */}
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10 group mb-10 bg-black">
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
            className="w-full h-[440px] md:h-[520px] object-cover"
          />

          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[12px] font-bold text-cyan-accent border border-cyan-accent/30 pointer-events-none">
            <i className="fa-brands fa-instagram mr-1.5 text-pink-500" />
            {activeReel.tag}
          </div>

          <div className="p-6 bg-slate-900/90 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1.5">
                <span className="w-6 h-[2px]" style={{ backgroundColor: 'var(--color-gold-accent)' }} />
                <span className="uppercase tracking-[0.2em] font-bold text-[11px] text-gold-accent">
                  Featured Instagram Reel
                </span>
              </div>
              <h3 className="font-heading font-bold text-lg md:text-xl text-white">
                {activeReel.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={togglePlay}
                className="px-4 py-2 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md transition-all font-bold text-xs text-white flex items-center gap-2 border border-white/20"
              >
                <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`} />
                {isPlaying ? 'Pause' : 'Play'}
              </button>

              <a
                href={activeReel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 transition-all font-bold text-xs text-white flex items-center gap-2 shadow-lg"
              >
                <i className="fa-brands fa-instagram text-sm" />
                Watch on Instagram
              </a>
            </div>
          </div>
        </div>

        {/* 5 Video Reels Selector Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {REELS.map((reel, idx) => (
            <button
              key={reel.title}
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
                className="w-full h-28 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-2.5 flex flex-col justify-end">
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-accent">
                  Reel {idx + 1}
                </span>
                <p className="text-[11px] font-semibold text-white truncate">
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
