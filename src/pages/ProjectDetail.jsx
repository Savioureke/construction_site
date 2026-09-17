import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PROJECTS_DATA } from '../data/projectsData.js'

export default function ProjectDetail({ onOpenQuote }) {
  const { id } = useParams()
  const project = PROJECTS_DATA.find((p) => p.slug === id || p.id === id) || PROJECTS_DATA[0]
  const [activeImage, setActiveImage] = useState(project ? project.mainImage : '')

  useEffect(() => {
    if (project) setActiveImage(project.mainImage)
    window.scrollTo(0, 0)
  }, [id, project])

  if (!project) {
    return (
      <main className="w-full pt-40 pb-20 text-center container-site">
        <h1 className="text-3xl font-heading font-bold text-navy-deep mb-4">Project Not Found</h1>
        <Link to="/projects" className="btn-primary">Back to All Projects</Link>
      </main>
    )
  }

  const otherProjects = PROJECTS_DATA.filter((p) => p.id !== project.id).slice(0, 3)

  return (
    <main className="w-full pt-32">
      {/* Hero Header */}
      <section className="relative w-full flex items-center overflow-hidden bg-slate-900" style={{ minHeight: '340px' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/upcoming-projects.jpeg')" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(3,42,58,0.92) 0%, rgba(3,42,58,0.75) 50%, rgba(3,42,58,0.5) 100%), linear-gradient(180deg, rgba(3,42,58,0.6) 0%, rgba(3,42,58,0.3) 50%, rgba(3,42,58,0.85) 100%)',
          }}
        />
        <div className="relative container-site py-16">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[12px] uppercase tracking-wider font-semibold text-white/70 mb-4" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-gold-accent transition-colors">Home</Link>
              <span>/</span>
              <Link to="/projects" className="hover:text-gold-accent transition-colors">Projects</Link>
              <span>/</span>
              <span className="text-gold-accent truncate">{project.title}</span>
            </nav>

            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 text-white border border-white/20" style={{ backgroundColor: 'rgba(0, 188, 212, 0.4)' }}>
              {project.categoryLabel || project.category}
            </div>

            <h1 className="font-heading hero-h1 text-white mb-4" style={{ textShadow: '0 4px 30px rgba(0,0,0,0.45)', fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              {project.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-white/90 text-[14px]">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-cyan-accent" />
                <span>{project.location}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-gold-accent" />
                <span>{project.status}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-section bg-white w-full overflow-x-hidden">
        <div className="container-site">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left 7 Cols: Gallery, Video & Overview */}
            <div className="lg:col-span-7 space-y-8">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-black/10 bg-slate-100">
                <img
                  src={activeImage}
                  alt={project.title}
                  className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover transition-all duration-500"
                />
                <div className="absolute top-4 left-4 bg-navy-deep/90 backdrop-blur-sm text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20">
                  {project.status}
                </div>
              </div>

              {project.gallery && project.gallery.length > 1 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-text-gray mb-3">
                    Project Photos & Perspectives
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImage(img)}
                        className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 transition-all ${
                          activeImage === img ? 'border-cyan-accent scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {project.video && (
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <i className="fa-solid fa-video text-cyan-accent text-xl" />
                    <h3 className="font-heading font-bold text-lg text-navy-deep">
                      On-Site Video Tour & Active Progress
                    </h3>
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-lg bg-black aspect-video">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                      src={project.video}
                      poster={project.mainImage}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-4 pt-4 border-t border-black/5">
                <h2 className="font-heading font-bold text-2xl text-navy-deep">
                  Project Overview
                </h2>
                <p className="text-body-copy text-text-body/85 leading-relaxed text-[16px]">
                  {project.fullDesc || project.shortDesc}
                </p>
              </div>

              {project.features && project.features.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-black/5">
                  <h3 className="font-heading font-bold text-xl text-navy-deep">
                    Key Specifications & Civil Capabilities
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl border bg-slate-50 flex items-start gap-3" style={{ borderColor: 'rgba(3, 42, 58, 0.08)' }}>
                        <i className="fa-solid fa-circle-check text-cyan-accent text-base mt-0.5 flex-shrink-0" />
                        <span className="text-text-body text-[14.5px] leading-relaxed font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right 5 Cols: Specs, Location & CTA */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-36">
              <div className="bg-slate-50 border rounded-2xl p-7 shadow-sm" style={{ borderColor: 'rgba(3, 42, 58, 0.08)' }}>
                <h3 className="font-heading font-bold text-xl mb-5 pb-4 border-b border-black/10 text-navy-deep flex items-center gap-2.5">
                  <i className="fa-solid fa-list-check text-gold-accent" />
                  Project Details
                </h3>
                <div className="space-y-4">
                  {project.specs && project.specs.map((s, idx) => (
                    <div key={idx} className="flex items-center justify-between text-[14.5px] border-b border-black/5 pb-3 last:border-0 last:pb-0">
                      <span className="text-text-gray font-medium">{s.label}</span>
                      <span className="font-bold text-text-body text-right">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-navy-deep text-white rounded-2xl p-7 shadow-lg relative overflow-hidden">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-cyan-accent text-white">
                    <i className="fa-solid fa-map-location-dot text-lg" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg leading-tight">Development Location</h4>
                    <p className="text-xs text-white/70 uppercase tracking-wider">Uganda Regional Presence</p>
                  </div>
                </div>
                <p className="text-white/90 text-sm leading-relaxed mb-6">
                  {project.location}
                </p>
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="btn-primary w-full !py-3 text-[13px]"
                >
                  <i className="fa-solid fa-envelope mr-2" />
                  Inquire About This Project
                </button>
              </div>

              <div className="flex items-center justify-between pt-2">
                <Link to="/projects" className="inline-flex items-center gap-2 font-bold text-navy-deep text-sm hover:text-cyan-accent transition-colors">
                  <i className="fa-solid fa-arrow-left text-xs" />
                  Back to All Projects
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-cyan-accent text-sm hover:underline">
                  Speak with an Engineer
                  <i className="fa-solid fa-arrow-right text-xs" />
                </Link>
              </div>
            </div>
          </div>

          {/* More Projects Section */}
          {otherProjects.length > 0 && (
            <div className="mt-24 pt-16 border-t border-black/10">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <span className="section-eyebrow">More Developments</span>
                  <h3 className="font-heading font-bold text-2xl text-navy-deep">Explore Other Metrak Projects</h3>
                </div>
                <Link to="/projects" className="btn-outline text-xs !py-2 !px-4 hidden sm:inline-flex">
                  View All
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherProjects.map((p) => (
                  <Link
                    key={p.id}
                    to={`/projects/${p.slug}`}
                    className="group block rounded-2xl overflow-hidden border border-black/10 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-56 overflow-hidden bg-slate-100">
                      <img
                        src={p.mainImage}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-navy-deep/90 text-white px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
                        {p.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-heading font-bold text-lg text-navy-deep mb-2 group-hover:text-cyan-accent transition-colors">
                        {p.title}
                      </h4>
                      <p className="text-text-gray text-xs flex items-center gap-1.5 mb-4">
                        <i className="fa-solid fa-location-dot text-cyan-accent" />
                        {p.location}
                      </p>
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-accent flex items-center gap-1.5">
                        View Details <i className="fa-solid fa-arrow-right text-[10px]" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
