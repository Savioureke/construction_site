import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import CompanyOverview from '../components/CompanyOverview.jsx'
import OurApproach from '../components/OurApproach.jsx'
import HighlightsStrip from '../components/HighlightsStrip.jsx'
import { buildImgUrl, useBgReady } from '../utils/images.js'

const HERO_PROMPT = 'Modern construction company headquarters building exterior with glass facade and professional signage, sunrise golden light, landscaped grounds, premium commercial architecture photography, high detail, sharp'
const STORY_PROMPT = 'Construction team in hard hats and safety vests collaborating around blueprints at a job site trailer, sunlight streaming in, diverse team of engineers and foremen, professional commercial photography, high detail'
const CTA_PROMPT = 'Close up of construction worker hands using precision tools on a modern building facade, golden hour lighting, craftsmanship detail shot, professional photography'

export default function About({ onOpenQuote }) {
  const HERO_IMG_URL = useMemo(() => buildImgUrl(HERO_PROMPT, 'landscape_16_9'), [])
  const STORY_IMG_URL = useMemo(() => buildImgUrl(STORY_PROMPT, 'portrait_4_3'), [])
  const CTA_IMG_URL = useMemo(() => buildImgUrl(CTA_PROMPT, 'landscape_16_9'), [])

  const heroReady = useBgReady(HERO_IMG_URL)
  const storyReady = useBgReady(STORY_IMG_URL)
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
          src="/videos/video-about.mp4"
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
                Get To Know Us
              </span>
            </div>
            <h1
              className="font-heading hero-h1 text-white mb-5"
              style={{ textShadow: '0 4px 30px rgba(0,0,0,0.45)', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              About <span style={{ color: 'var(--color-cyan-accent)' }}>Metrak Real Estate</span>
            </h1>
            <p className="text-white/85 text-[18px] lg:text-[20px] leading-relaxed max-w-2xl font-body">
              Civil engineering precision, trusted real estate brokerage, and premier property
              development across Uganda.
            </p>
          </div>
        </div>
      </section>

      <CompanyOverview />

      <section className="py-section bg-white fade-section w-full overflow-x-hidden">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="section-eyebrow">Our Heritage & Expertise</span>
              <h2 className="section-h2 mb-7">
                Engineering Excellence & <span style={{ color: 'var(--color-cyan-accent)' }}>Trusted Solutions</span>
              </h2>
              <p className="text-body-copy text-text-body/85 leading-relaxed mb-6">
                Metrak Real Estate and Construction Ltd was established with a singular mission:
                to deliver premier construction, civil engineering, and real estate solutions
                defined by structural integrity, transparent transactions, and lasting value.
              </p>
              <p className="text-body-copy text-text-body/85 leading-relaxed mb-6">
                Led by an experienced multidisciplinary team of engineers, quantity surveyors,
                and certified real estate specialists, Metrak has built an outstanding track
                record across Kampala, Mbarara, and regions throughout Uganda. From 10,000 sqm
                daily concreting capacity to comprehensive land due diligence, our standard
                remains uncompromising.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-10">
                <div className="text-center">
                  <div className="font-heading font-black text-4xl mb-2" style={{ color: 'var(--color-cyan-accent)' }}>15+</div>
                  <p className="text-text-gray uppercase tracking-wider text-[12px] font-bold">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="font-heading font-black text-4xl mb-2" style={{ color: 'var(--color-cyan-accent)' }}>250+</div>
                  <p className="text-text-gray uppercase tracking-wider text-[12px] font-bold">Projects Delivered</p>
                </div>
                <div className="text-center">
                  <div className="font-heading font-black text-4xl mb-2" style={{ color: 'var(--color-cyan-accent)' }}>100%</div>
                  <p className="text-text-gray uppercase tracking-wider text-[12px] font-bold">HSE & Legal Compliance</p>
                </div>
              </div>
            </div>
            <div
              className="relative h-full min-h-[480px] w-full bg-img-placeholder-portrait"
              style={{
                backgroundImage: `url('${STORY_IMG_URL}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {!storyReady && (
                <div className="img-loader" style={{ backgroundColor: 'transparent' }}>
                  <div className="img-loader-spinner" />
                </div>
              )}
              <div className="absolute inset-0" style={{ backgroundColor: 'rgba(3, 42, 58, 0.2)' }} />
              <div
                className="absolute bottom-0 left-0 right-0 p-8"
                style={{ backgroundColor: 'rgba(3, 42, 58, 0.94)' }}
              >
                <p
                  className="font-heading font-bold uppercase tracking-[0.15em] text-[12px] mb-3"
                  style={{ color: 'var(--color-gold-accent)' }}
                >
                  Our Mission
                </p>
                <p className="font-heading text-white text-[20px] leading-tight font-bold">
                  To deliver exceptional construction and real estate services through
                  innovation, integrity, precision engineering, and client-focused solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurApproach />
      <HighlightsStrip />

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
              Ready to Work With a Proven <span style={{ color: 'var(--color-cyan-accent)' }}>Construction & Property Partner?</span>
            </h2>
            <p className="text-body-copy-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              Let's discuss your next construction project, land acquisition, or development in
              Uganda. Our team provides end-to-end expertise you can trust.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button type="button" onClick={onOpenQuote} className="btn-primary">
                <i className="fa fa-file-invoice-dollar mr-2" />
                Request a Free Quote
              </button>
              <Link to="/contact" className="btn-outline-white">
                <i className="fa fa-comments mr-2" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
