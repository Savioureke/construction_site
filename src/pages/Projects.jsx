import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS_DATA } from '../data/projectsData.js'
import { useBgReady } from '../utils/images.js'

const CATEGORIES = ['All Projects', 'Residential', 'Commercial', 'Infrastructure']

export default function Projects({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('All Projects')

  const HERO_IMG_URL = '/images/upcoming-projects.jpeg'
  const CTA_IMG_URL = '/images/development-1.jpeg'

  const heroReady = useBgReady(HERO_IMG_URL)
  const ctaReady = useBgReady(CTA_IMG_URL)

  const filteredProjects = activeCategory === 'All Projects'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory)

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

  return (
    <main className="w-full pt-32">
      {/* Hero Header - Clean consistent background */}
      <section
        className="relative w-full flex items-center overflow-hidden fade-section bg-slate-900"
        style={{ minHeight: '360px' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url('${HERO_IMG_URL}')` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(3,42,58,0.92) 0%, rgba(3,42,58,0.75) 50%, rgba(3,42,58,0.5) 100%), linear-gradient(180deg, rgba(3,42,58,0.6) 0%, rgba(3,42,58,0.3) 50%, rgba(3,42,58,0.85) 100%)',
          }}
        />
        <div className="relative container-site py-20">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-4">
              <span className="w-10 h-[2px]" style={{ backgroundColor: 'var(--color-gold-accent)' }} />
              <span className="uppercase tracking-[0.22em] font-bold text-[11.5px] text-white/80">
                Shaping Skylines
              </span>
            </div>
            <h1
              className="font-heading hero-h1 text-white mb-5"
              style={{ textShadow: '0 4px 30px rgba(0,0,0,0.45)', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              Featured <span style={{ color: 'var(--color-cyan-accent)' }}>Developments & Projects</span>
            </h1>
            <p className="text-white/85 text-[18px] lg:text-[20px] leading-relaxed max-w-2xl font-body">
              Explore authentic Metrak civil engineering developments, residential bungalow estates, commercial hospitality complexes, and infrastructure delivered across Uganda.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Filter & Grid */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj) => (
              <article
                key={proj.id}
                className="relative bg-white border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group flex flex-col justify-between"
                style={{ borderColor: 'rgba(3, 42, 58, 0.08)' }}
              >
                <div>
                  <Link to={`/projects/${proj.slug}`} className="block relative w-full overflow-hidden bg-slate-100" style={{ height: '260px' }}>
                    <img
                      src={proj.mainImage}
                      alt={proj.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span
                        className="px-3 py-1.5 font-bold uppercase tracking-[0.1em] text-[11px] text-white rounded-full backdrop-blur-sm"
                        style={{ backgroundColor: 'rgba(3, 42, 58, 0.9)' }}
                      >
                        {proj.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 z-10">
                      <span
                        className="px-3 py-1.5 font-bold uppercase tracking-[0.1em] text-[11px] rounded-full"
                        style={{ backgroundColor: 'var(--color-gold-accent)', color: 'var(--color-navy-dark)' }}
                      >
                        {proj.year}
                      </span>
                    </div>
                  </Link>

                  <div className="p-7">
                    <Link to={`/projects/${proj.slug}`}>
                      <h3 className="font-heading font-bold text-xl leading-tight mb-3 group-hover:text-cyan-accent transition-colors" style={{ color: 'var(--color-navy-deep)' }}>
                        {proj.title}
                      </h3>
                    </Link>

                    <div className="flex flex-wrap gap-4 mb-4 text-[13px] text-text-gray">
                      <div className="flex items-center gap-1.5 font-medium">
                        <i className="fa-solid fa-location-dot text-cyan-accent" />
                        {proj.location}
                      </div>
                      <div className="flex items-center gap-1.5 font-medium">
                        <i className="fa-solid fa-layer-group text-gold-accent" />
                        {proj.size}
                      </div>
                    </div>

                    <p className="text-text-body/75 leading-relaxed text-[14.5px] mb-5 line-clamp-3">
                      {proj.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-6 pt-0 border-t border-black/5 flex items-center justify-between mt-2">
                  <Link
                    to={`/projects/${proj.slug}`}
                    className="font-bold uppercase tracking-[0.1em] text-[12px] transition-colors inline-flex items-center gap-2"
                    style={{ color: 'var(--color-cyan-accent)' }}
                  >
                    View Project Details
                    <i className="fa-solid fa-arrow-right text-[10px]" />
                  </Link>
                  <button
                    type="button"
                    onClick={onOpenQuote}
                    className="text-xs font-semibold text-text-gray hover:text-gold-accent transition-colors"
                  >
                    Inquire
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(3, 42, 58, 0.92)' }} />
        <div className="relative container-site text-center">
          <div className="max-w-3xl mx-auto">
            <span className="uppercase tracking-[0.22em] font-bold text-[11.5px] text-gold-accent block mb-3">
              Partner with Metrak
            </span>
            <h2 className="section-h2 text-white mb-6" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
              Have a Development or Land <span style={{ color: 'var(--color-cyan-accent)' }}>Project?</span>
            </h2>
            <p className="text-body-copy-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              From commercial lounges and modern bungalows to joint ventures and civil engineering, our team is ready to assist you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button type="button" onClick={onOpenQuote} className="btn-primary">
                <i className="fa fa-file-invoice-dollar mr-2" />
                Request Project Proposal
              </button>
              <Link to="/contact" className="btn-outline-white">
                <i className="fa fa-comments mr-2" />
                Contact Our Engineers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
