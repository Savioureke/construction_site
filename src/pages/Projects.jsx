import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { buildImgUrl, useBgReady, MAX_WAIT_MS } from '../utils/images.js'

const CATEGORIES = ['All Projects', 'Residential', 'Commercial', 'Renovations', 'Industrial']

const PROJECTS = [
  {
    title: 'Modern Luxury Residence',
    category: 'Residential',
    location: 'Downtown District',
    year: '2025',
    size: '5,200 sq ft',
    desc: 'A stunning custom home featuring floor-to-ceiling windows, smart home technology, and premium finishes throughout.',
    prompt: 'Modern luxury residential home exterior with glass facade, landscaped garden, infinity pool, modern architecture, golden hour, high-end real estate photography',
  },
  {
    title: 'Riverside Office Complex',
    category: 'Commercial',
    location: 'Business Park',
    year: '2024',
    size: '45,000 sq ft',
    desc: 'LEED-certified multi-tenant office building with open floor plans, rooftop terrace, and energy-efficient systems.',
    prompt: 'Modern glass office building exterior with landscaped plaza, reflective glass facade, contemporary commercial architecture, professional photography',
  },
  {
    title: 'Historic Downtown Renovation',
    category: 'Renovations',
    location: 'Historic District',
    year: '2024',
    size: '8,500 sq ft',
    desc: 'Complete restoration and modernization of a century-old building, preserving historic character while adding contemporary amenities.',
    prompt: 'Beautifully restored historic brick building with modern windows, blend of old and new architecture, downtown streetscape, warm sunset light',
  },
  {
    title: 'Suburban Family Home Development',
    category: 'Residential',
    location: 'Green Valley',
    year: '2025',
    size: '12 Home Community',
    desc: 'Master-planned community of 12 custom family homes with cohesive design, shared green spaces, and community amenities.',
    prompt: 'Row of beautiful new suburban family homes with landscaped front yards, tree-lined street, community development, blue sky day',
  },
  {
    title: 'Industrial Logistics Center',
    category: 'Industrial',
    location: 'Commerce Park',
    year: '2024',
    size: '120,000 sq ft',
    desc: 'State-of-the-art distribution facility with high ceilings, automated loading docks, and advanced climate control systems.',
    prompt: 'Large modern industrial warehouse and logistics center, loading docks with trucks, expansive facility, aerial view, professional commercial photography',
  },
  {
    title: 'Urban Mixed-Use Development',
    category: 'Commercial',
    location: 'Central District',
    year: '2025',
    size: '78,000 sq ft',
    desc: 'Vibrant mixed-use building featuring ground-floor retail, upper-floor offices, and premium residential penthouses.',
    prompt: 'Modern mixed-use urban building with retail storefronts on ground floor, offices and residential above, bustling city street, contemporary architecture',
  },
  {
    title: 'Waterfront Estate Renovation',
    category: 'Renovations',
    location: 'Harbor View',
    year: '2024',
    size: '9,800 sq ft',
    desc: 'Comprehensive renovation of a waterfront property, including expanded living spaces, outdoor entertaining areas, and private dock.',
    prompt: 'Luxury waterfront home with private dock, expansive deck overlooking water, modern estate, sunset reflections on water, high-end real estate',
  },
  {
    title: 'Advanced Manufacturing Facility',
    category: 'Industrial',
    location: 'Tech Park',
    year: '2025',
    size: '95,000 sq ft',
    desc: 'Purpose-built manufacturing plant with cleanroom environments, advanced HVAC systems, and integrated technology infrastructure.',
    prompt: 'Modern advanced manufacturing facility exterior, clean industrial architecture, large windows, landscaped grounds, professional aerial view',
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
                Our Portfolio
              </span>
            </div>
            <h1
              className="font-heading hero-h1 text-white mb-5"
              style={{ textShadow: '0 4px 30px rgba(0,0,0,0.45)', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              Featured <span style={{ color: 'var(--color-cyan-accent)' }}>Projects</span>
            </h1>
            <p className="text-white/85 text-[18px] lg:text-[20px] leading-relaxed max-w-2xl font-body">
              A selection of our recent work across residential, commercial, industrial, and
              renovation projects — each one delivered with quality and precision.
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
              <h3 className="font-heading font-black text-4xl mb-2" style={{ color: 'var(--color-cyan-accent)' }}>250+</h3>
              <p className="text-text-gray font-semibold uppercase tracking-wider text-[13px]">Projects Completed</p>
            </div>
            <div className="feature-card text-center">
              <div className="feature-icon mx-auto"><i className="fa-solid fa-calendar-check" /></div>
              <h3 className="font-heading font-black text-4xl mb-2" style={{ color: 'var(--color-cyan-accent)' }}>94%</h3>
              <p className="text-text-gray font-semibold uppercase tracking-wider text-[13px]">On-Time Delivery</p>
            </div>
            <div className="feature-card text-center">
              <div className="feature-icon mx-auto"><i className="fa-solid fa-sack-dollar" /></div>
              <h3 className="font-heading font-black text-4xl mb-2" style={{ color: 'var(--color-cyan-accent)' }}>97%</h3>
              <p className="text-text-gray font-semibold uppercase tracking-wider text-[13px]">On-Budget Projects</p>
            </div>
            <div className="feature-card text-center">
              <div className="feature-icon mx-auto"><i className="fa-solid fa-face-smile" /></div>
              <h3 className="font-heading font-black text-4xl mb-2" style={{ color: 'var(--color-cyan-accent)' }}>98%</h3>
              <p className="text-text-gray font-semibold uppercase tracking-wider text-[13px]">Client Satisfaction</p>
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
              Have a Project in <span style={{ color: 'var(--color-cyan-accent)' }}>Mind?</span>
            </h2>
            <p className="text-body-copy-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              Let's discuss your vision. Whether it's residential, commercial, industrial, or
              a renovation, we'd love to bring your next project to life.
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
