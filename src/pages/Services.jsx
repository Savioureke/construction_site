import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import WhatWeBuild from '../components/WhatWeBuild.jsx'
import SEOAndMarketing from '../components/SEOAndMarketing.jsx'
import RankingStrategy from '../components/RankingStrategy.jsx'
import { buildImgUrl, useBgReady } from '../utils/images.js'

const SERVICE_DETAILS = [
  {
    icon: 'fa-house',
    title: 'Residential Construction',
    desc: 'From custom dream homes to multi-unit residential developments, we deliver quality craftsmanship on every project.',
    bullets: [
      'Custom home design and build',
      'Multi-unit residential developments',
      'Renovations and additions',
      'Interior finishing and fit-outs',
      'Energy-efficient builds',
    ],
  },
  {
    icon: 'fa-building',
    title: 'Commercial Construction',
    desc: 'Full-service commercial construction for offices, retail, industrial facilities, and public infrastructure.',
    bullets: [
      'Office buildings and corporate campuses',
      'Retail centers and storefronts',
      'Industrial warehouses and facilities',
      'Hospitality and restaurant builds',
      'Public sector projects',
    ],
  },
  {
    icon: 'fa-compass-drafting',
    title: 'Project Management',
    desc: 'End-to-end project management ensuring on-time delivery, budget adherence, and quality at every stage.',
    bullets: [
      'Comprehensive project planning',
      'Budget tracking and cost control',
      'Timeline management and scheduling',
      'Subcontractor coordination',
      'Quality assurance and inspections',
    ],
  },
  {
    icon: 'fa-screwdriver-wrench',
    title: 'Renovations & Additions',
    desc: 'Transform existing spaces with our expert renovation and addition services, blending form and function.',
    bullets: [
      'Whole-home renovations',
      'Kitchen and bathroom remodels',
      'Room additions and expansions',
      'Commercial tenant improvements',
      'Historic restoration',
    ],
  },
  {
    icon: 'fa-helmet-safety',
    title: 'Design-Build Services',
    desc: 'Streamlined design-build process where we handle both the creative and construction sides of your project.',
    bullets: [
      'Architectural design collaboration',
      'Engineering and structural design',
      'Permits and regulatory compliance',
      'Seamless design-to-build transition',
      'Single point of contact',
    ],
  },
  {
    icon: 'fa-chart-line',
    title: 'AI-Powered Marketing',
    desc: 'Unique to our offering — construction-specific digital marketing and SEO that grows your pipeline continuously.',
    bullets: [
      'SEO-optimized professional website',
      'Local search and maps optimization',
      'Content marketing and blogging',
      'Lead generation campaigns',
      'Analytics and performance reporting',
    ],
  },
]

const HERO_PROMPT = 'Aerial view of multiple active construction sites with cranes, residential and commercial buildings being built, golden hour, panoramic view, high detail drone photography'
const CTA_PROMPT = 'Construction worker in safety gear giving thumbs up in front of completed modern building, afternoon light, positive attitude, professional commercial photography'

export default function Services({ onOpenQuote }) {
  const HERO_IMG_URL = useMemo(() => buildImgUrl(HERO_PROMPT, 'landscape_16_9'), [])
  const CTA_IMG_URL = useMemo(() => buildImgUrl(CTA_PROMPT, 'landscape_16_9'), [])
  const heroReady = useBgReady(HERO_IMG_URL)
  const ctaReady = useBgReady(CTA_IMG_URL)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08 }
    )
    document.querySelectorAll('.fade-section').forEach((el) => observer.observe(el))
    window.scrollTo(0, 0)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="w-full pt-32">
      <section
        className="relative w-full flex items-center overflow-hidden fade-section bg-img-placeholder"
        style={{
          backgroundImage: `url('${HERO_IMG_URL}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '320px',
        }}
      >
        {!heroReady && (
          <div className="img-loader img-loader-sm" style={{ backgroundColor: 'transparent' }}>
            <div className="img-loader-spinner" />
          </div>
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(3,42,58,0.78) 0%, rgba(3,42,58,0.48) 60%, rgba(3,42,58,0.22) 100%), linear-gradient(180deg, rgba(3,42,58,0.4) 0%, transparent 50%, rgba(3,42,58,0.6) 100%)',
          }}
        />
        <div className="relative container-site py-20">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-4">
              <span className="w-10 h-[2px]" style={{ backgroundColor: 'var(--color-gold-accent)' }} />
              <span className="uppercase tracking-[0.22em] font-bold text-[11.5px] text-white/80">
                What We Offer
              </span>
            </div>
            <h1
              className="font-heading hero-h1 text-white mb-5"
              style={{ textShadow: '0 4px 30px rgba(0,0,0,0.45)', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              Our Full Range of <span style={{ color: 'var(--color-cyan-accent)' }}>Services</span>
            </h1>
            <p className="text-white/85 text-[18px] lg:text-[20px] leading-relaxed max-w-2xl font-body">
              End-to-end construction services paired with intelligent digital marketing —
              everything you need to build great projects and a strong pipeline.
            </p>
          </div>
        </div>
      </section>

      <section className="py-section bg-white fade-section w-full overflow-x-hidden">
        <div className="container-site">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="section-eyebrow">Our Specialties</span>
            <h2 className="section-h2 mb-6">
              Comprehensive Solutions for Every <span style={{ color: 'var(--color-cyan-accent)' }}>Construction Need</span>
            </h2>
            <p className="text-body-copy text-text-body/85 leading-relaxed max-w-3xl mx-auto">
              Whether you're breaking ground on a custom home, developing a commercial
              complex, or looking to grow your company's online presence, our integrated
              services deliver results at every stage.
            </p>
          </div>
          <div className="grid-3-to-2 card-scaled">
            {SERVICE_DETAILS.map((svc) => (
              <article key={svc.title} className="commitment-card">
                <div
                  className="w-16 h-16 flex items-center justify-center mb-5 text-2xl text-white"
                  style={{ backgroundColor: 'var(--color-cyan-accent)' }}
                >
                  <i className={`fa-solid ${svc.icon}`} />
                </div>
                <h3 className="card-h3 font-heading mb-4" style={{ color: 'var(--color-navy-deep)' }}>
                  {svc.title}
                </h3>
                <p className="scaled-label text-text-body/80 leading-relaxed text-[15.5px] mb-5">
                  {svc.desc}
                </p>
                <ul className="space-y-2.5 mb-5">
                  {svc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <i className="fa-solid fa-check text-gold-accent mt-1 text-sm flex-shrink-0" />
                      <span className="text-text-body/75 leading-relaxed text-[14.5px]">{b}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="inline-flex items-center gap-2 font-bold uppercase tracking-[0.1em] text-[12px] transition-colors"
                  style={{ color: 'var(--color-cyan-accent)' }}
                >
                  Request a quote
                  <i className="fa-solid fa-arrow-right text-[10px]" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WhatWeBuild />
      <SEOAndMarketing />
      <RankingStrategy />

      <section
        className="py-section relative overflow-hidden fade-section bg-img-placeholder"
        style={{
          backgroundImage: `url('${CTA_IMG_URL}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {!ctaReady && (
          <div className="img-loader img-loader-sm" style={{ backgroundColor: 'transparent', zIndex: 1 }}>
            <div className="img-loader-spinner" />
          </div>
        )}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(3, 42, 58, 0.9)' }} />
        <div className="relative container-site text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-h2 text-white mb-7" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
              Ready to Start Your Next <span style={{ color: 'var(--color-cyan-accent)' }}>Project?</span>
            </h2>
            <p className="text-body-copy-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              Tell us about your construction needs and we'll prepare a detailed, transparent
              proposal tailored to your goals and timeline.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button type="button" onClick={onOpenQuote} className="btn-primary">
                <i className="fa fa-file-invoice-dollar mr-2" />
                Get a Free Quote
              </button>
              <Link to="/projects" className="btn-outline-white">
                <i className="fa fa-images mr-2" />
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
