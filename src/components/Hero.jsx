import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { buildImgUrl, useBgReady } from '../utils/images.js'

const HERO_PROMPT = 'Wide aerial panoramic photograph of a large-scale modern construction site at golden hour sunset, multiple cranes silhouetted against orange and deep blue sky, heavy machinery in foreground, steel beams and building frameworks rising, cinematic lighting, high-end editorial photography style, ultra sharp, professional'

export default function Hero({ onOpenQuote }) {
  const HERO_IMG_URL = useMemo(() => buildImgUrl(HERO_PROMPT, 'landscape_16_9'), [])
  const bgReady = useBgReady(HERO_IMG_URL)

  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-img-placeholder"
      style={{
        backgroundImage: `url('${HERO_IMG_URL}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {!bgReady && (
        <div className="img-loader" style={{ backgroundColor: 'transparent' }}>
          <div className="img-loader-spinner" />
        </div>
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(3,42,58,0.78) 0%, rgba(3,42,58,0.5) 50%, rgba(3,42,58,0.22) 100%), linear-gradient(180deg, rgba(3,42,58,0.45) 0%, rgba(3,42,58,0.15) 50%, rgba(3,42,58,0.65) 100%)',
        }}
      />

      <div className="absolute left-0 top-0 w-1 h-full hidden lg:block" style={{ background: 'linear-gradient(180deg, var(--color-gold-accent) 0%, var(--color-cyan-accent) 100%)' }} />

      <div className="relative container-site pt-36 pb-32 lg:pt-44 lg:pb-40">
        <div className="max-w-3xl lg:max-w-4xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="w-10 h-[2px]" style={{ backgroundColor: 'var(--color-gold-accent)' }} />
            <span className="uppercase tracking-[0.22em] font-bold text-[11.5px] text-white/80">
              Building With Intelligence
            </span>
          </div>

          <h1
            className="font-heading hero-h1 text-white mb-6"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.45)' }}
          >
            Trusted Construction.{' '}
            <span style={{ color: 'var(--color-cyan-accent)' }}>
              Continuously Growing Visibility.
            </span>
          </h1>

          <p className="text-white/85 text-[19px] lg:text-[21px] leading-relaxed mb-10 max-w-2xl font-body">
            Get found &nbsp;→&nbsp; Build trust &nbsp;→&nbsp; Generate enquiries
            &nbsp;→&nbsp; Convert visitors into clients.
          </p>

          <div className="flex flex-wrap gap-4 mb-14 lg:mb-20">
            <button
              type="button"
              onClick={onOpenQuote}
              className="btn-primary"
            >
              Get a Free Quote
              <i className="fa fa-arrow-right ml-2.5 text-[11px]" />
            </button>
            <Link to="/about" className="btn-outline-white">
              Learn More
            </Link>
          </div>

          <div className="hero-quicklinks">
            <Link to="/services" className="quote-chip">
              <i className="fa fa-home text-[15px]" />
              Residential Construction
            </Link>
            <Link to="/services" className="quote-chip">
              <i className="fa fa-building text-[15px]" />
              Commercial Construction
            </Link>
            <button type="button" onClick={onOpenQuote} className="quote-chip">
              <i className="fa fa-file-invoice-dollar text-[15px]" />
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-[10px] uppercase tracking-[0.25em] font-bold">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  )
}
