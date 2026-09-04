import { useMemo } from 'react'
import { buildImgUrl, useBgReady } from '../utils/images.js'

const FUTURE = [
  'New services added as your business expands',
  'New project locations and service areas',
  'New project case studies as you build them',
  'More SEO landing pages for high-value queries',
  'Construction guides and in-depth blog articles',
  'Lead-generation campaigns and landing pages',
  'AI-powered marketing features and automation',
  'Online quotation and request systems',
]

const BG_PROMPT = 'Modern construction team meeting at a high-rise building site, architects and engineers reviewing blueprints together at sunset, hard hats and safety vests, warm golden light, premium commercial photography, high detail, cinematic'

export default function LongTermGrowth() {
  const BG_IMG_URL = useMemo(() => buildImgUrl(BG_PROMPT, 'portrait_4_3'), [])
  const bgReady = useBgReady(BG_IMG_URL)

  return (
    <section className="py-section fade-section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div
            className="relative h-full min-h-[420px] w-full bg-img-placeholder-portrait"
            style={{
              backgroundImage: `url('${BG_IMG_URL}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {!bgReady && (
              <div className="img-loader" style={{ backgroundColor: 'transparent' }}>
                <div className="img-loader-spinner" />
              </div>
            )}
            <div className="absolute inset-0" style={{ backgroundColor: 'rgba(3, 42, 58, 0.35)' }} />
            <div
              className="absolute bottom-0 left-0 right-0 p-8"
              style={{ backgroundColor: 'rgba(3, 42, 58, 0.92)' }}
            >
              <p
                className="font-heading font-bold uppercase tracking-[0.15em] text-[12px] mb-3"
                style={{ color: 'var(--color-gold-accent)' }}
              >
                Long-Term Partnership
              </p>
              <p className="font-heading text-white text-[22px] lg:text-[26px] leading-tight font-bold">
                We don't build websites and disappear — we build marketing systems that grow
                alongside your business for years.
              </p>
            </div>
          </div>

          <div>
            <span className="section-eyebrow">Built To Grow</span>
            <h2 className="section-h2 mb-7">
              A Website That Grows{' '}
              <span style={{ color: 'var(--color-cyan-accent)' }}>With Your Business</span>
            </h2>
            <p className="text-body-copy text-text-body/85 leading-relaxed mb-6">
              This isn't a static brochure site. The architecture, CMS structure, and SEO
              foundation are designed from day one to support new content, new service
              lines, new geographic areas, and new campaigns as your company scales.
            </p>
            <p className="text-body-copy text-text-body/85 leading-relaxed mb-8">
              Here are just some of the things we can add on an ongoing basis:
            </p>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1">
              {FUTURE.map((item) => (
                <div key={item} className="growth-item">
                  <i className="fa-solid fa-square-check growth-check" />
                  <p className="font-semibold text-[15px] leading-relaxed" style={{ color: 'var(--color-text-body)' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
