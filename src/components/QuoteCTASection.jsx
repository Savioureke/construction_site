import { useMemo } from 'react'
import { buildImgUrl, useBgReady } from '../utils/images.js'

const BG_PROMPT = 'Aerial view of modern suburban housing development construction site with several nearly completed homes, organized rows of houses at blue hour twilight, construction equipment parked, premium real estate aesthetic, professional drone photography'

export default function QuoteCTASection({ onOpenQuote }) {
  const BG_IMG_URL = useMemo(() => buildImgUrl(BG_PROMPT, 'landscape_16_9'), [])
  const bgReady = useBgReady(BG_IMG_URL)

  return (
    <section
      className="py-section relative overflow-hidden fade-section bg-img-placeholder"
      style={{
        backgroundImage: `url('${BG_IMG_URL}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {!bgReady && (
        <div className="img-loader img-loader-sm" style={{ backgroundColor: 'transparent', zIndex: 1 }}>
          <div className="img-loader-spinner" />
        </div>
      )}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(3, 42, 58, 0.9)' }} />
      <div className="absolute top-0 left-0 w-40 h-40 border-l-4 border-t-4" style={{ borderColor: 'var(--color-gold-accent)' }} />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-r-4 border-b-4 hidden md:block" style={{ borderColor: 'var(--color-gold-accent)' }} />

      <div className="relative container-site text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-10 h-[2px]" style={{ backgroundColor: 'var(--color-gold-accent)' }} />
            <span
              className="uppercase tracking-[0.22em] font-bold text-[11.5px]"
              style={{ color: 'var(--color-gold-accent)' }}
            >
              Let's Build Something Together
            </span>
            <span className="w-10 h-[2px]" style={{ backgroundColor: 'var(--color-gold-accent)' }} />
          </div>

          <h2 className="section-h2 text-white mb-7" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
            Let's Talk About{' '}
            <span style={{ color: 'var(--color-cyan-accent)' }}>Your Next Project</span>
          </h2>

          <p className="text-body-copy-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            Ready to discuss your target locations, services, and competitors? Request a
            free, no-obligation quote today and we'll put together a tailored proposal for
            how this system can work for your construction business.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button type="button" onClick={onOpenQuote} className="btn-primary">
              <i className="fa fa-file-invoice-dollar mr-2" />
              Request a Free Quote
            </button>
            <a href="tel:0000000000" className="btn-outline-white">
              <i className="fa fa-phone mr-2" />
              Call Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
