import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import OurApproach from '../components/OurApproach.jsx'
import MarketingAnalytics from '../components/MarketingAnalytics.jsx'
import LongTermGrowth from '../components/LongTermGrowth.jsx'
import { buildImgUrl, useBgReady } from '../utils/images.js'

const REASONS = [
  {
    icon: 'fa-award',
    title: 'Proven Engineering Track Record',
    desc: 'Over 15 years of combined experience delivering landmark residential, commercial, and civil infrastructure developments across Uganda.',
  },
  {
    icon: 'fa-users-gear',
    title: 'Multidisciplinary In-House Team',
    desc: 'Our team of licensed civil engineers, registered architects, quantity surveyors, and certified valuation experts ensures technical excellence.',
  },
  {
    icon: 'fa-file-shield',
    title: '100% Legal & Title Due Diligence',
    desc: 'Rigorous land registry due diligence, boundary confirmations, and clean title transfer guarantees on every parcel and development.',
  },
  {
    icon: 'fa-cubes',
    title: 'High-Capacity Concreting Fleet',
    desc: 'Own batching operations and concrete boom pumps capable of placing up to 10,000 sqm of certified concrete daily.',
  },
  {
    icon: 'fa-shield-halved',
    title: 'Strict HSE & Quality Standards',
    desc: 'Stringent Health, Safety, and Environment protocols ensuring zero compromise on site safety, concrete lab testing, and structural longevity.',
  },
  {
    icon: 'fa-coins',
    title: 'Transparent Itemized Costing',
    desc: 'Detailed bills of quantities (BOQ), milestone-based invoicing, and total financial transparency with no hidden surprises.',
  },
]

const PROCESS = [
  { num: 1, title: 'Consultation & Site Evaluation', desc: 'We evaluate your project vision, site topography, land title status, and technical requirements in detail.' },
  { num: 2, title: 'Architectural & Engineering Design', desc: 'Our licensed team creates structural designs, 3D architectural models, and comprehensive engineering drawings.' },
  { num: 3, title: 'Detailed BOQ & Fixed Proposal', desc: 'You receive an itemized bill of quantities with clear construction milestones, material schedules, and payment terms.' },
  { num: 4, title: 'Statutory Permitting & HSE Plan', desc: 'We coordinate physical planning approvals, municipal building permits, and implement comprehensive site safety protocols.' },
  { num: 5, title: 'Precision Execution & Concreting', desc: 'Our civil teams and batching fleets execute the build with daily laboratory quality control and precision.' },
  { num: 6, title: 'Final Inspection & Certified Handover', desc: 'We conduct rigorous structural testing, snagging resolution, and provide complete documentation and warranties.' },
]

const HERO_PROMPT = 'Construction team shaking hands with happy clients in front of newly completed luxury home, celebrating successful project completion, golden hour, professional commercial photography'
const CTA_PROMPT = 'Two professionals in construction attire discussing plans at a clean modern conference table with blueprints, natural light, professional meeting, ready to start concept'

export default function WhyUs({ onOpenQuote }) {
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
          src="/videos/video-whyus.mp4"
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
                Our Differentiators
              </span>
            </div>
            <h1
              className="font-heading hero-h1 text-white mb-5"
              style={{ textShadow: '0 4px 30px rgba(0,0,0,0.45)', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              Why Choose <span style={{ color: 'var(--color-cyan-accent)' }}>Metrak</span>
            </h1>
            <p className="text-white/85 text-[18px] lg:text-[20px] leading-relaxed max-w-2xl font-body">
              Six compelling reasons why investors, developers, and homeowners partner with
              Metrak Real Estate and Construction Ltd across Uganda.
            </p>
          </div>
        </div>
      </section>

      <section className="py-section bg-white fade-section w-full overflow-x-hidden">
        <div className="container-site">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="section-eyebrow">What Sets Us Apart</span>
            <h2 className="section-h2 mb-6">
              Six Reasons We're the <span style={{ color: 'var(--color-cyan-accent)' }}>Right Choice</span>
            </h2>
            <p className="text-body-copy text-text-body/85 leading-relaxed max-w-3xl mx-auto">
              Choosing a construction and property partner requires confidence in execution,
              engineering integrity, and legal security. Here is why clients rely on Metrak.
            </p>
          </div>
          <div className="grid-3-to-2 card-scaled">
            {REASONS.map((r) => (
              <article key={r.title} className="commitment-card">
                <div
                  className="w-16 h-16 flex items-center justify-center mb-5 text-2xl text-white"
                  style={{ backgroundColor: 'var(--color-cyan-accent)' }}
                >
                  <i className={`fa-solid ${r.icon}`} />
                </div>
                <h3 className="card-h3 font-heading mb-4" style={{ color: 'var(--color-navy-deep)' }}>
                  {r.title}
                </h3>
                <p className="scaled-label text-text-body/80 leading-relaxed text-[15.5px]">
                  {r.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <OurApproach />

      <section className="py-section fade-section" style={{ backgroundColor: 'var(--color-bg-tint)' }}>
        <div className="container-site">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="section-eyebrow">Our Process</span>
            <h2 className="section-h2 mb-6">
              A Proven <span style={{ color: 'var(--color-cyan-accent)' }}>6-Step Process</span>
            </h2>
            <p className="text-body-copy text-text-body/85 leading-relaxed max-w-3xl mx-auto">
              A structured, transparent approach from first meeting to final handoff — no
              surprises, no confusion, just clear progress at every stage.
            </p>
          </div>
          <div className="grid-6-32-to-2 card-scaled">
            {PROCESS.map((step) => (
              <div key={step.num} className="strategy-card">
                <div className="strategy-number">{String(step.num).padStart(2, '0')}</div>
                <h3 className="card-h3 font-heading mb-3" style={{ color: 'var(--color-navy-deep)' }}>
                  {step.title}
                </h3>
                <p className="scaled-label text-text-body/80 leading-relaxed text-[15px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MarketingAnalytics />
      <LongTermGrowth />

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
              Ready to Experience the <span style={{ color: 'var(--color-cyan-accent)' }}>Difference?</span>
            </h2>
            <p className="text-body-copy-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              Let's have a conversation about your project and see if we're the right fit.
              No pressure, no sales pitch — just a clear plan and honest advice.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button type="button" onClick={onOpenQuote} className="btn-primary">
                <i className="fa fa-file-invoice-dollar mr-2" />
                Request a Free Quote
              </button>
              <Link to="/contact" className="btn-outline-white">
                <i className="fa fa-comments mr-2" />
                Talk To Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
