import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { buildImgUrl, useBgReady, MAX_WAIT_MS } from '../utils/images.js'

const CATEGORIES = ['All Projects', 'Residential', 'Commercial', 'Infrastructure']

const PROJECTS = [
  {
    title: 'Victoria Heights Luxury Apartments',
    category: 'Residential',
    location: 'Kampala, Uganda',
    year: 'Completed',
    size: '24 Units • 4,500 m²',
    desc: 'Modern architectural luxury residential complex featuring 24 premium units, automated access, and panoramic city views.',
    prompt: 'Modern luxury residential home exterior with glass facade, landscaped garden, infinity pool, modern architecture, golden hour, high-end real estate photography',
  },
  {
    title: 'Metrak Commercial Plaza',
    category: 'Commercial',
    location: 'Central Business District, Kampala',
    year: 'Completed',
    size: '8 Floors • 12,000 m²',
    desc: 'Eight-storey modern office complex featuring energy-efficient glass facade, underground parking, and flexible floor plans.',
    prompt: 'Modern glass office building exterior with landscaped plaza, reflective glass facade, contemporary commercial architecture, professional photography',
  },
  {
    title: 'Greenwood Gated Community Estate',
    category: 'Residential',
    location: 'Entebbe Corridor, Uganda',
    year: 'Under Construction',
    size: '45 Villas • 15 Acres',
    desc: 'Master-planned residential community with paved access roads, solar streetlights, and dedicated community green park zones.',
    prompt: 'Row of beautiful new suburban family homes with landscaped front yards, tree-lined street, community development, blue sky day',
  },
  {
    title: 'Industrial Logistics & Warehouse Hub',
    category: 'Infrastructure',
    location: 'Namanve Industrial Park',
    year: 'Completed',
    size: '10,000 m² Floor',
    desc: 'Heavy-duty steel warehouse development with reinforced concrete flooring engineered for heavy logistics and container transport.',
    prompt: 'Large modern industrial warehouse and logistics center, loading docks with trucks, expansive facility, aerial view, professional commercial photography',
  },
  {
    title: 'Executive Lakeside Condominiums',
    category: 'Residential',
    location: 'Munyonyo, Kampala',
    year: 'Upcoming',
    size: '18 Luxury Condos',
    desc: 'Ultra-contemporary residences designed for executive expatriates, diplomats, and discerning real estate investors.',
    prompt: 'Luxury waterfront modern home exterior with infinity pool overlooking water, sunset golden hour, premium real estate photography, detailed architecture',
  },
  {
    title: 'Highway Drainage & Stormwater Works',
    category: 'Infrastructure',
    location: 'Wakiso Metro Corridor',
    year: 'Completed',
    size: '4.8 km Drainage',
    desc: 'Civil engineering stormwater management and reinforced culvert project ensuring long-term flood resilience and road longevity.',
    prompt: 'Civil engineering road construction and drainage site in East Africa, heavy excavators, concrete culverts, paved asphalt, professional construction photography',
  },
  {
    title: 'Multi-Storey Commercial Retail Center',
    category: 'Commercial',
    location: 'Ntinda Business Strip, Kampala',
    year: 'Completed',
    size: '3,200 m² Retail Space',
    desc: 'Modern retail and corporate banking premises engineered with open-span structural steel beams and high-traffic floor finishes.',
    prompt: 'Modern mixed-use urban building with retail storefronts on ground floor, offices and residential above, bustling city street, contemporary architecture',
  },
  {
    title: 'Suburban Villa Development',
    category: 'Residential',
    location: 'Kigo, Lake Victoria',
    year: 'Completed',
    size: '12 Luxury Villas',
    desc: 'Private boutique estate featuring luxury 4-bedroom villas with individual swimming pools and Lake Victoria views.',
    prompt: 'Modern luxury residential townhomes in gated community, brick and stone accents, manicured lawns, paved access street, golden hour light',
  },
  {
    title: 'Heavy-Duty Reinforced Concrete Paving',
    category: 'Infrastructure',
    location: 'Industrial Estate, Mukono',
    year: 'Completed',
    size: '10,000 m² Yard',
    desc: 'Expansive 10,000 m² reinforced concrete yard engineered to withstand 60-tonne container transport trucks and heavy machinery.',
    prompt: 'Industrial concrete paving works, smooth concrete yard, heavy machinery, high strength industrial flooring, professional photography',
  },
]

export default function Projects({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('All Projects')
  const [cardReady, setCardReady] = useState({})

  const HERO_PROMPT = 'Diverse portfolio of completed construction projects collage style hero image, modern homes, office buildings, industrial facilities, golden hour, professional montage, high detail'
  const CTA_PROMPT = 'Construction blueprints spread out on table with hard hat and tools, professional aesthetic, warm lighting, next project concept'

  const HERO_IMG_URL = useMemo(() => buildImgUrl(HERO_PROMPT, 'landscape_16_9'), [])
  const CTA_IMG_URL = useMemo(() => buildImgUrl(CTA_PROMPT, 'landscape_16_9'), [])

  const heroReady = useBgReady(HERO_IMG_URL)
  const ctaReady = useBgReady(CTA_IMG_URL)

  const filteredProjects = activeCategory === 'All Projects'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.05, rootMargin: '600px 0px 500px 0px' }
    )
    document.querySelectorAll('.fade-section').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [activeCategory])

  useEffect(() => {
    const timeouts = []
    filteredProjects.forEach((proj) => {
      const key = `proj-${proj.title}`
      if (cardReady[key]) return
      const img = new Image()
      img.referrerPolicy = 'no-referrer-when-downgrade'
      const done = () => setCardReady((prev) => prev[key] ? prev : { ...prev, [key]: true })
      img.onload = done
      img.onerror = done
      img.src = buildImgUrl(proj.prompt, 'landscape_4_3')
      const t = setTimeout(done, MAX_WAIT_MS)
      timeouts.push(t)
    })
    return () => timeouts.forEach((t) => clearTimeout(t))
  }, [filteredProjects])

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
          src="/videos/video-projects.mp4"
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
                Our Portfolio
              </span>
            </div>
            <h1
              className="font-heading hero-h1 text-white mb-5"
              style={{ textShadow: '0 4px 30px rgba(0,0,0,0.45)', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              Featured <span style={{ color: 'var(--color-cyan-accent)' }}>Projects & Developments</span>
            </h1>
            <p className="text-white/85 text-[18px] lg:text-[20px] leading-relaxed max-w-2xl font-body">
              A selection of civil construction, residential developments, commercial
              facilities, and land masterplans delivered by Metrak across Uganda.
            </p>
          </div>
        </div>
      </section>

      <section className="py-section-sm bg-white fade-section">
        <div className="container-site">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 font-bold uppercase tracking-wider transition-all duration-200 text-[12px] ${
                  activeCategory === cat
                    ? 'text-white'
                    : 'text-text-body border hover:border-cyan-accent hover:text-cyan-accent'
                }`}
                style={{
                  backgroundColor: activeCategory === cat ? 'var(--color-cyan-accent)' : 'transparent',
                  border: activeCategory === cat ? '2px solid var(--color-cyan-accent)' : '2px solid rgba(3, 42, 58, 0.15)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid-3-to-2 card-scaled">
            {filteredProjects.map((proj) => {
              const imgKey = `proj-${proj.title}`
              const imgUrl = buildImgUrl(proj.prompt, 'landscape_4_3')
              const isReady = cardReady[imgKey]
              return (
                <article
                  key={proj.title}
                  className="relative bg-white border overflow-hidden transition-all duration-300 hover:-translate-y-2 group"
                  style={{ borderColor: 'rgba(3, 42, 58, 0.08)' }}
                >
                  <div
                    className="relative w-full overflow-hidden bg-img-placeholder-portrait"
                    style={{ minHeight: '240px' }}
                  >
                    {!isReady && (
                      <div className="img-loader img-loader-sm">
                        <div className="img-loader-spinner" />
                      </div>
                    )}
                    <img
                      src={imgUrl}
                      alt={proj.title}
                      referrerPolicy="no-referrer-when-downgrade"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ minHeight: '240px' }}
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span
                        className="px-3 py-1.5 font-bold uppercase tracking-[0.1em] text-[11px] text-white"
                        style={{ backgroundColor: 'var(--color-navy-dark)' }}
                      >
                        {proj.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 z-10">
                      <span
                        className="px-3 py-1.5 font-bold uppercase tracking-[0.1em] text-[11px]"
                        style={{ backgroundColor: 'var(--color-gold-accent)', color: 'var(--color-navy-dark)' }}
                      >
                        {proj.year}
                      </span>
                    </div>
                  </div>
                  <div className="p-7">
                    <div className="flex items-start justify-between mb-3 gap-4">
                      <h3 className="font-heading font-bold text-xl leading-tight" style={{ color: 'var(--color-navy-deep)' }}>
                        {proj.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 text-[13px] text-text-gray">
                      <div className="flex items-center gap-1.5">
                        <i className="fa-solid fa-location-dot text-cyan-accent" />
                        {proj.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <i className="fa-solid fa-ruler-combined text-cyan-accent" />
                        {proj.size}
                      </div>
                    </div>
                    <p className="text-text-body/75 leading-relaxed text-[15px] mb-5">
                      {proj.desc}
                    </p>
                    <div className="pt-5 border-t border-black/5 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={onOpenQuote}
                        className="font-bold uppercase tracking-[0.1em] text-[12px] transition-colors inline-flex items-center gap-2"
                        style={{ color: 'var(--color-cyan-accent)' }}
                      >
                        Start similar project
                        <i className="fa-solid fa-arrow-right text-[10px]" />
                      </button>
                      <i className="fa-solid fa-arrow-up-right-from-square text-text-gray/60 group-hover:text-cyan-accent transition-colors" />
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-section fade-section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container-site">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="section-eyebrow">Project Stats</span>
            <h2 className="section-h2 mb-6">
              Track Record of <span style={{ color: 'var(--color-cyan-accent)' }}>Delivering Excellence</span>
            </h2>
          </div>
          <div className="grid-4-to-2 card-scaled">
            <div className="feature-card text-center">
              <div className="feature-icon mx-auto"><i className="fa-solid fa-building-circle-check" /></div>
              <h3 className="font-heading font-black text-4xl mb-2" style={{ color: 'var(--color-cyan-accent)' }}>150+</h3>
              <p className="text-text-gray font-semibold uppercase tracking-wider text-[13px]">Completed Projects</p>
            </div>
            <div className="feature-card text-center">
              <div className="feature-icon mx-auto"><i className="fa-solid fa-face-smile" /></div>
              <h3 className="font-heading font-black text-4xl mb-2" style={{ color: 'var(--color-cyan-accent)' }}>350+</h3>
              <p className="text-text-gray font-semibold uppercase tracking-wider text-[13px]">Satisfied Clients</p>
            </div>
            <div className="feature-card text-center">
              <div className="feature-icon mx-auto"><i className="fa-solid fa-cubes" /></div>
              <h3 className="font-heading font-black text-4xl mb-2" style={{ color: 'var(--color-cyan-accent)' }}>10k m²</h3>
              <p className="text-text-gray font-semibold uppercase tracking-wider text-[13px]">Daily Concrete Capacity</p>
            </div>
            <div className="feature-card text-center">
              <div className="feature-icon mx-auto"><i className="fa-solid fa-award" /></div>
              <h3 className="font-heading font-black text-4xl mb-2" style={{ color: 'var(--color-cyan-accent)' }}>12+</h3>
              <p className="text-text-gray font-semibold uppercase tracking-wider text-[13px]">Years in Industry</p>
            </div>
          </div>
        </div>
      </section>

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
              Have a Project or Land in <span style={{ color: 'var(--color-cyan-accent)' }}>Mind?</span>
            </h2>
            <p className="text-body-copy-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              Let's discuss your vision. Whether it's residential construction, commercial
              development, land acquisition, or certified valuation, Metrak brings it to life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button type="button" onClick={onOpenQuote} className="btn-primary">
                <i className="fa fa-file-invoice-dollar mr-2" />
                Request a Free Quote
              </button>
              <Link to="/contact" className="btn-outline-white">
                <i className="fa fa-phone mr-2" />
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
