import { useState, useRef } from 'react'

export default function SpectrumVideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef(null)

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

  return (
    <section className="py-section bg-slate-900 text-white fade-section relative overflow-hidden" style={{ backgroundColor: '#032a3a' }}>
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="section-eyebrow" style={{ color: 'var(--color-cyan-accent)' }}>
            Video Tour & Property Showcase
          </span>
          <h2 className="section-h2 text-white mb-4">
            Experience Spectrum Properties{' '}
            <span style={{ color: 'var(--color-cyan-accent)' }}>In Motion</span>
          </h2>
          <p className="text-white/80 text-[17px] leading-relaxed">
            Take an exclusive video tour of our luxury developments, site progress, and architectural builds directly from our Instagram feed.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
          <video
            ref={videoRef}
            src="/videos/spectrum-tour.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[460px] md:h-[540px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-[2px]" style={{ backgroundColor: 'var(--color-gold-accent)' }} />
                <span className="uppercase tracking-[0.2em] font-bold text-[11px] text-gold-accent">
                  @spectrumrealestateuganda
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl md:text-2xl text-white">
                Modern Luxury Estate & Commercial Development Tour
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={togglePlay}
                className="px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md transition-all font-bold text-sm text-white flex items-center gap-2 border border-white/20"
              >
                <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`} />
                {isPlaying ? 'Pause' : 'Play'}
              </button>

              <a
                href="https://www.instagram.com/spectrumrealestateuganda/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 transition-all font-bold text-sm text-white flex items-center gap-2 shadow-lg"
              >
                <i className="fa-brands fa-instagram" />
                View Instagram Reel
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
