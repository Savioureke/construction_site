import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import WhatWeBuild from '../components/WhatWeBuild.jsx'
import SEOAndMarketing from '../components/SEOAndMarketing.jsx'
import RankingStrategy from '../components/RankingStrategy.jsx'
import { buildImgUrl, useBgReady } from '../utils/images.js'

const SERVICE_DETAILS = [
  {
    icon: 'fa-trowel-bricks',
    title: 'Construction & Civil Engineering',
    desc: 'Full-scope structural concrete, commercial buildings, residential estates, high-capacity batching, roads, and drainage.',
    bullets: [
      'Commercial & high-rise structural builds',
      'Residential housing estates & villas',
      'Daily concreting capacity up to 10,000 sqm',
      'Roads, culverts & stormwater drainage',
      'Structural steel fabrication & erection',
    ],
  },
  {
    icon: 'fa-building-shield',
    title: 'Real Estate Sales & Brokerage',
    desc: 'Trusted residential and commercial property brokerage, leasing, and tenant placement with 100% verified legal paperwork.',
    bullets: [
      'Residential apartments & luxury homes for sale',
      'Commercial office & retail leasing',
      'Verified property due diligence',
      'Landlord representation & tenant placement',
      'Investment property acquisitions',
    ],
  },
  {
    icon: 'fa-map-location-dot',
    title: 'Land Acquisition & Disposal',
    desc: 'Strategic land transactions across Uganda with comprehensive title searches, boundary surveying, and secure transfers.',
    bullets: [
      'Mailo, Freehold & Leasehold land transactions',
      'Large-acre agricultural & farm land (e.g. 193-acre parcels)',
      'Cadastral boundary confirmation & surveying',
      'Ministry of Lands title search & verification',
      'Deed transfers & local council documentation',
    ],
  },
  {
    icon: 'fa-scale-balanced',
    title: 'Valuation & Advisory',
    desc: 'Certified real estate appraisals, feasibility studies, investment analysis, and strategic property advisory.',
    bullets: [
      'Certified asset & property valuations',
      'Project feasibility & financial modeling',
      'Market rental rate assessments',
      'Bank collateral & mortgage valuations',
      'Development advisory & masterplanning',
    ],
  },
  {
    icon: 'fa-compass-drafting',
    title: 'Property Development',
    desc: 'Turnkey property development management from architectural design and permitting to complete construction delivery.',
    bullets: [
      'Masterplanned residential communities',
      'Commercial plazas & mixed-use complexes',
      'Architectural & structural engineering plans',
      'Physical planning & statutory approvals',
      'End-to-end development oversight',
    ],
  },
  {
    icon: 'fa-shield-halved',
    title: 'HSE & Quality Compliance',
    desc: 'Rigorous health, safety, and environmental standards paired with comprehensive materials testing for structural durability.',
    bullets: [
      'Site occupational health & safety management',
      'Concrete cube testing & slump verification',
      'Environmental impact compliance',
      'Certified quality control inspections',
      'Zero-compromise engineering safety protocols',
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
        className="relative w-full flex items-center overflow-hidden fade-section bg-slate-900"
        style={{
          minHeight: '340px',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/video-services.mp4"
          poster={HERO_IMG_URL}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(3,42,58,0.85) 0%, rgba(3,42,58,0.65) 60%, rgba(3,42,58,0.35) 100%), linear-gradient(180deg, rgba(3,42,58,0.5) 0%, transparent 50%, rgba(3,42,58,0.7) 100%)',
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
              End-to-end civil construction, architectural engineering, land acquisition,
              valuation, and real estate brokerage across Uganda.
            </p>
          </div>
        </div>
      </section>

      <section className="py-section bg-white fade-section w-full overflow-x-hidden">
        <div className="container-site">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="section-eyebrow">Our Specialties</span>
            <h2 className="section-h2 mb-6">
              Comprehensive Solutions for Every <span style={{ color: 'var(--color-cyan-accent)' }}>Construction & Property Need</span>
            </h2>
            <p className="text-body-copy text-text-body/85 leading-relaxed max-w-3xl mx-auto">
              From heavy civil engineering and multi-unit developments to verified land
              sales and valuation advisory, Metrak delivers professional execution at
              every stage.
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
