import { useState, useRef } from 'react'

const REELS = [
  {
    title: 'Modern 1-Bedroom Apartment Rental',
    location: 'Munyonyo Kampala',
    video: '/videos/video-home.mp4',
    poster: '/extracted_images/home/home_2.jpg',
    tag: 'Home Section',
  },
  {
    title: '193-Acre Private Mailo Cattle Farm',
    location: 'Mukono Uganda',
    video: '/videos/video-about.mp4',
    poster: '/extracted_images/about-us/about-us_3.jpg',
    tag: 'About Us',
  },
  {
    title: '2 Bedrooms Apartment UGX 1.1M',
    location: 'Munyonyo Kampala',
    video: '/videos/video-services.mp4',
    poster: '/extracted_images/construction-civil-engineering/construction-civil-engineering_2.jpg',
    tag: 'Services',
  },
  {
    title: 'Luxury Architecture & Modern Villa',
    location: 'Kampala Prime',
    video: '/videos/video-projects.mp4',
    poster: '/extracted_images/projects/projects_2.jpg',
    tag: 'Projects',
  },
  {
    title: '2-Bedroom Apartment For Rent',
    location: 'Bunga Soya',
    video: '/videos/video-whyus.mp4',
    poster: '/extracted_images/health-and-safety-commitment/health-and-safety-commitment_2.jpg',
    tag: 'Why Choose Us',
  },
  {
    title: '3-Bedroom Homes For Sale',
    location: 'Muyenga Kisugu',
    video: '/videos/video-blog.mp4',
    poster: '/extracted_images/land-acquisition-disposal/land-acquisition-disposal_2.jpg',
    tag: 'Blog & Resources',
  },
  {
    title: 'Executive 1-Bedroom Apartment',
    location: 'Munyonyo Kampala',
    video: '/videos/video-contact.mp4',
    poster: '/extracted_images/contact-us/contact-us_2.jpg',
    tag: 'Contact',
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

        {/* 7 Video Reels Selector Thumbnails */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 max-w-6xl mx-auto">
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
