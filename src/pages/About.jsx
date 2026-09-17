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
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/upcoming-projects.jpeg')" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(3,42,58,0.92) 0%, rgba(3,42,58,0.75) 60%, rgba(3,42,58,0.5) 100%), linear-gradient(180deg, rgba(3,42,58,0.6) 0%, rgba(3,42,58,0.3) 50%, rgba(3,42,58,0.85) 100%)',
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

      {/* Dedicated Vision & Mission Section */}
      <section className="py-section fade-section relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="section-eyebrow">Our Guiding Purpose</span>
            <h2 className="section-h2 mb-4">
              Vision & <span style={{ color: 'var(--color-cyan-accent)' }}>Mission</span>
            </h2>
            <p className="text-body-copy text-text-body/85 leading-relaxed">
              The foundational principles guiding every development, client partnership, and civil engineering endeavor across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {/* Vision Card */}
            <div
              className="bg-white p-8 lg:p-10 rounded-2xl border shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              style={{ borderColor: 'rgba(3, 42, 58, 0.08)' }}
            >
              <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: 'var(--color-gold-accent)' }} />
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white shadow-md"
                    style={{ backgroundColor: 'var(--color-navy-deep)' }}
                  >
                    <i className="fa-solid fa-eye" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] font-bold block" style={{ color: 'var(--color-gold-accent)' }}>
                      Our Aspiration
                    </span>
                    <h3 className="font-heading font-black text-2xl" style={{ color: 'var(--color-navy-deep)' }}>
                      VISION
                    </h3>
                  </div>
                </div>
                <p className="text-text-body text-[16px] lg:text-[17px] leading-relaxed font-body">
                  “To become a leading real estate and construction brand in Africa known for excellence, integrity, and transformative developments that enhance communities and support sustainable growth.”
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-black/5 flex items-center gap-2 text-gold-accent text-xs font-bold uppercase tracking-wider">
                <i className="fa-solid fa-compass" />
                <span>Strategic Regional Goal</span>
              </div>
            </div>

            {/* Mission Card */}
            <div
              className="bg-white p-8 lg:p-10 rounded-2xl border shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              style={{ borderColor: 'rgba(3, 42, 58, 0.08)' }}
            >
              <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: 'var(--color-cyan-accent)' }} />
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white shadow-md"
                    style={{ backgroundColor: 'var(--color-navy-deep)' }}
                  >
                    <i className="fa-solid fa-bullseye" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] font-bold block" style={{ color: 'var(--color-cyan-accent)' }}>
                      Our Daily Commitment
                    </span>
                    <h3 className="font-heading font-black text-2xl" style={{ color: 'var(--color-navy-deep)' }}>
                      MISSION
                    </h3>
                  </div>
                </div>
                <p className="text-text-body text-[16px] lg:text-[17px] leading-relaxed font-body">
                  “To provide innovative, reliable, and sustainable real estate and construction services that deliver long-term value to our clients, partners, and society through professionalism, customer focus, and technical excellence.”
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-black/5 flex items-center gap-2 text-cyan-accent text-xs font-bold uppercase tracking-wider">
                <i className="fa-solid fa-handshake-angle" />
                <span>Customer-Centric Value</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage & Office Locations Section */}
      <section className="py-section bg-white fade-section w-full overflow-x-hidden">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-14 items-start mb-16">
            <div>
              <span className="section-eyebrow">Our Heritage & Presence</span>
              <h2 className="section-h2 mb-7">
                Engineering Excellence & <span style={{ color: 'var(--color-cyan-accent)' }}>Trusted Solutions</span>
              </h2>
              <p className="text-body-copy text-text-body/85 leading-relaxed mb-6">
                Metrak Real Estate is a fully registered, multi-service company with established offices in Kampala, delivering premier property development, high-capacity concreting up to 10,000 m² daily, certified valuations, and secure land transactions across Uganda.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl border bg-slate-50 flex items-start gap-4" style={{ borderColor: 'rgba(3, 42, 58, 0.08)' }}>
                  <i className="fa-solid fa-building text-gold-accent text-xl mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-navy-deep text-base">Head Office</h4>
                    <p className="text-text-gray text-sm">Dungu 5 Building Rm. D.1, Kampala, Uganda</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl border bg-slate-50 flex items-start gap-4" style={{ borderColor: 'rgba(3, 42, 58, 0.08)' }}>
                  <i className="fa-solid fa-store text-cyan-accent text-xl mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-navy-deep text-base">Marketing & Sales Office</h4>
                    <p className="text-text-gray text-sm">1st Street Industrial Area, Near Club Guvnor, Kampala, Uganda</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
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

            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-black/10">
                <img
                  src="/images/marketing-sales-office.jpeg"
                  alt="Metrak Marketing and Sales Office Kampala"
                  className="w-full h-[320px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent text-white">
                  <span className="text-[11px] uppercase tracking-widest text-gold-accent font-bold block mb-1">
                    Metrak Commercial Presence
                  </span>
                  <p className="font-heading font-bold text-lg">
                    Marketing & Sales Office — 1st Street Industrial Area, Kampala
                  </p>
                </div>
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
