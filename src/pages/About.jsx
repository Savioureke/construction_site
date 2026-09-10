import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import CompanyOverview from '../components/CompanyOverview.jsx'
import OurApproach from '../components/OurApproach.jsx'
import HighlightsStrip from '../components/HighlightsStrip.jsx'
import { buildImgUrl, useBgReady } from '../utils/images.js'

const HERO_PROMPT = 'Modern construction company headquarters building exterior with glass facade and professional signage, sunrise golden light, landscaped grounds, premium commercial architecture photography, high detail, sharp'
const STORY_PROMPT = 'Construction team in hard hats and safety vests collaborating around blueprints at a job site trailer, sunlight streaming in, diverse team of engineers and foremen, professional commercial photography, high detail'
const CTA_PROMPT = 'Close up of construction worker hands using precision tools on a modern building facade, golden hour lighting, craftsmanship detail shot, professional photography'

const LEADERSHIP_TEAM = [
  {
    name: 'Tumuhimbise Akimu',
    role: 'Metrak Director',
    image: '/images/team/akimu.jpg',
    bio: 'Executive Director providing strategic governance, institutional partnerships, and regional corporate expansion for Metrak.',
  },
  {
    name: 'Dan Mwesigye',
    role: 'Metrak Director',
    image: '/images/team/mwesigye.jpg',
    bio: 'Executive Director leading operations, commercial land acquisitions, and client portfolio developments across Uganda.',
  },
  {
    name: 'Eng Denis Aniku',
    role: 'Lead Project Engineer',
    image: '/images/team/aniku.jpg',
    bio: 'Lead Project Engineer spearheading civil engineering, structural integrity, high-volume concrete works, and site safety.',
  },
]

const TRUSTED_CLIENTS = [
  { name: 'Kazisa Investment Uganda Ltd', category: 'Investment Partner', logo: '/images/clients/kazisa.png' },
  { name: 'POWERCHINA / YELLOW RIVER', category: 'Infrastructure & Energy', logo: '/images/clients/powerchina.png' },
  { name: 'TACIT', category: 'Commercial Development', logo: '/images/clients/tacit.png' },
  { name: 'CREC (China Railway Engineering Corp)', category: 'Engineering & Construction', logo: '/images/clients/crec.jpg' },
]

export default function About({ onOpenQuote }) {
  const HERO_IMG_URL = '/extracted_images/about-us/about-us_3.jpg'
  const STORY_IMG_URL = '/extracted_images/about-us/about-us_4.jpg'
  const CTA_IMG_URL = '/extracted_images/about-us/about-us_5.jpg'

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
                Metrak Real Estate and Construction Ltd is a fully registered, multi-service
                real estate and construction company headquartered at Dungu 5 Building Rm. D.1,
                Kampala, Uganda.
              </p>
              <p className="text-body-copy text-text-body/85 leading-relaxed mb-6">
                Led by seasoned directors and civil engineers, Metrak delivers premier
                property development, high-capacity concreting up to 10,000 m² daily,
                certified valuations, and secure land transactions across Uganda and the East
                African region.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
                <div className="text-center">
                  <div className="font-heading font-black text-3xl mb-1" style={{ color: 'var(--color-cyan-accent)' }}>150+</div>
                  <p className="text-text-gray uppercase tracking-wider text-[11px] font-bold">Completed Projects</p>
                </div>
                <div className="text-center">
                  <div className="font-heading font-black text-3xl mb-1" style={{ color: 'var(--color-cyan-accent)' }}>350+</div>
                  <p className="text-text-gray uppercase tracking-wider text-[11px] font-bold">Satisfied Clients</p>
                </div>
                <div className="text-center">
                  <div className="font-heading font-black text-3xl mb-1" style={{ color: 'var(--color-cyan-accent)' }}>10,000m²</div>
                  <p className="text-text-gray uppercase tracking-wider text-[11px] font-bold">Daily Concreting</p>
                </div>
                <div className="text-center">
                  <div className="font-heading font-black text-3xl mb-1" style={{ color: 'var(--color-cyan-accent)' }}>12+</div>
                  <p className="text-text-gray uppercase tracking-wider text-[11px] font-bold">Years in Industry</p>
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

      {/* Authentic Leadership Staff Section */}
      <section className="py-section fade-section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="section-eyebrow">Executive Leadership</span>
            <h2 className="section-h2 mb-6">
              Experienced Leaders Guiding <span style={{ color: 'var(--color-cyan-accent)' }}>Every Project</span>
            </h2>
            <p className="text-body-copy text-text-body/85 leading-relaxed max-w-2xl mx-auto">
              Meet the executive leadership and engineering heads driving Metrak's commitment
              to structural excellence, transparency, and regional growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 card-scaled">
            {LEADERSHIP_TEAM.map((member) => (
              <div
                key={member.name}
                className="bg-white border p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2"
                style={{ borderColor: 'rgba(3, 42, 58, 0.08)' }}
              >
                <div className="w-28 h-28 rounded-full overflow-hidden mb-6 border-4 shadow-sm" style={{ borderColor: 'var(--color-cyan-accent)' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center font-heading font-bold text-2xl text-white" style="background-color: var(--color-cyan-accent)">${member.name[0]}</div>`
                    }}
                  />
                </div>
                <h3 className="font-heading font-bold text-xl mb-1" style={{ color: 'var(--color-navy-deep)' }}>
                  {member.name}
                </h3>
                <p
                  className="font-heading font-bold uppercase tracking-[0.12em] text-[12px] mb-4"
                  style={{ color: 'var(--color-gold-accent)' }}
                >
                  {member.role}
                </p>
                <p className="text-text-body/75 leading-relaxed text-[14.5px]">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Corporate Clients / Institutional Partners */}
      <section className="py-section bg-white fade-section">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="section-eyebrow">Institutional Partnerships</span>
            <h2 className="section-h2 mb-4">
              Trusted By Leading <span style={{ color: 'var(--color-cyan-accent)' }}>Organizations</span>
            </h2>
            <p className="text-body-copy text-text-body/85 leading-relaxed">
              Metrak collaborates with major institutional investors, energy contractors, and developers across East Africa.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 card-scaled">
            {TRUSTED_CLIENTS.map((client) => (
              <div
                key={client.name}
                className="p-6 border bg-slate-50 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-md"
                style={{ borderColor: 'rgba(3, 42, 58, 0.08)' }}
              >
                <div className="h-16 w-full flex items-center justify-center mb-3">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-12 max-w-[140px] object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement.innerHTML = `<i class="fa-solid fa-building-flag text-3xl" style="color: var(--color-cyan-accent)"></i>`
                    }}
                  />
                </div>
                <h4 className="font-heading font-bold text-[14px] leading-tight mb-1" style={{ color: 'var(--color-navy-deep)' }}>
                  {client.name}
                </h4>
                <p className="text-[12px] text-text-gray font-medium">{client.category}</p>
              </div>
            ))}
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
