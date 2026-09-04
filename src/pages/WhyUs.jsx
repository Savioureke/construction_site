import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import OurApproach from '../components/OurApproach.jsx'
import MarketingAnalytics from '../components/MarketingAnalytics.jsx'
import LongTermGrowth from '../components/LongTermGrowth.jsx'
import { buildImgUrl, useBgReady } from '../utils/images.js'

const REASONS = [
  {
    icon: 'fa-award',
    title: 'Proven Track Record',
    desc: 'Over 15 years of experience and 250+ successfully completed projects across residential, commercial, and industrial sectors.',
  },
  {
    icon: 'fa-users-gear',
    title: 'Expert In-House Team',
    desc: 'Our team of licensed architects, engineers, project managers, and skilled tradespeople ensure quality at every step.',
  },
  {
    icon: 'fa-coins',
    title: 'Transparent Pricing',
    desc: 'Detailed, itemized quotes with no hidden fees. We believe in honest pricing and clear communication from day one.',
  },
  {
    icon: 'fa-shield-halved',
    title: 'Fully Licensed & Insured',
    desc: 'Complete peace of mind with full licensing, bonding, and comprehensive insurance coverage on every project we undertake.',
  },
  {
    icon: 'fa-clock',
    title: 'On-Time, Every Time',
    desc: '94% on-time delivery rate across our portfolio. We respect your timeline and work diligently to meet every milestone.',
  },
  {
    icon: 'fa-handshake',
    title: 'Long-Term Partnership',
    desc: 'We don\'t just build and disappear. Our integrated marketing support means we grow with you for the long haul.',
  },
]

const PROCESS = [
  { num: 1, title: 'Initial Consultation', desc: 'We meet with you to understand your vision, goals, budget, and timeline. This is where we get to know your project inside out.' },
  { num: 2, title: 'Custom Design & Planning', desc: 'Our team creates detailed plans, 3D renderings, and a comprehensive project scope tailored specifically to your needs.' },
  { num: 3, title: 'Transparent Proposal', desc: 'You receive a detailed, itemized quote with clear timelines, payment schedules, and no hidden fees or surprises.' },
  { num: 4, title: 'Pre-Construction Prep', desc: 'We secure permits, finalize subcontractors, order materials, and set everything in motion before ground breaks.' },
  { num: 5, title: 'Quality Construction', desc: 'Our skilled teams execute the build with meticulous attention to quality, safety, and adherence to the approved plans.' },
  { num: 6, title: 'Final Walkthrough & Warranty', desc: 'We conduct a thorough walkthrough, address any items, and stand behind our work with a comprehensive warranty program.' },
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
                Our Differentiators
              </span>
            </div>
            <h1
              className="font-heading hero-h1 text-white mb-5"
              style={{ textShadow: '0 4px 30px rgba(0,0,0,0.45)', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              Why Choose <span style={{ color: 'var(--color-cyan-accent)' }}>Us</span>
            </h1>
            <p className="text-white/85 text-[18px] lg:text-[20px] leading-relaxed max-w-2xl font-body">
              Six concrete reasons clients choose us over other contractors — and why you'll
              be glad you did too.
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
              Choosing a construction partner is one of the most important decisions you'll
              make. Here's what makes our approach different — and why it produces better
              results for our clients.
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
