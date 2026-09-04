import { Link } from 'react-router-dom'

const COLUMNS = [
  {
    title: 'Get Found',
    icon: 'fa-magnifying-glass-chart',
    body:
      'SEO and local visibility strategy that puts your company in front of people actively searching for the exact construction services you offer.',
  },
  {
    title: 'Build Trust',
    icon: 'fa-handshake',
    body:
      'A credible, professional site with real project case studies, honest testimonials, and clear service information that reads like a company you can hire today.',
  },
  {
    title: 'Convert Visitors',
    icon: 'fa-comments-dollar',
    body:
      'Clear calls-to-action, easy quote requests, and a site designed around enquiries and conversions — not just pretty pictures.',
  },
]

export default function OurApproach() {
  return (
    <section id="approach" className="py-section bg-white fade-section">
      <div className="container-site">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="section-eyebrow">Our Approach</span>
          <h2
            className="font-heading mb-7"
            style={{
              fontSize: 'clamp(1.75rem, 3.8vw, 3rem)',
              lineHeight: 1.1,
              fontWeight: 800,
              color: 'var(--color-navy-dark)',
            }}
          >
            Get Found. Build Trust.{' '}
            <br className="hidden sm:block" />
            Generate Enquiries.{' '}
            <span style={{ color: 'var(--color-cyan-accent)' }}>Convert Clients.</span>
          </h2>
          <p className="text-body-copy text-text-body/85 leading-relaxed max-w-2xl mx-auto">
            Every decision in the design, copy, and SEO of this site flows through a single
            question: does it move someone further down this four-step funnel?
          </p>
        </div>

        <div className="grid-3-to-2 card-scaled">
          {COLUMNS.map((col) => (
            <article key={col.title} className="commitment-card">
              <div
                className="w-16 h-16 flex items-center justify-center mb-5 text-2xl text-white"
                style={{ backgroundColor: 'var(--color-cyan-accent)' }}
              >
                <i className={`fa-solid ${col.icon}`} />
              </div>
              <h3 className="card-h3 font-heading mb-4" style={{ color: 'var(--color-navy-deep)' }}>
                {col.title}
              </h3>
              <p className="scaled-label text-text-body/80 leading-relaxed text-[15.5px] mb-5">
                {col.body}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-bold uppercase tracking-[0.1em] text-[12px] transition-colors"
                style={{ color: 'var(--color-cyan-accent)' }}
              >
                Learn more
                <i className="fa-solid fa-arrow-right text-[10px]" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
