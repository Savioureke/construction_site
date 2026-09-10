import { Link } from 'react-router-dom'

const COLUMNS = [
  {
    title: 'Trusted Experience',
    icon: 'fa-shield-halved',
    body:
      'A comprehensive portfolio of successful projects across residential, commercial, civil, and land developments in both public and private sectors.',
  },
  {
    title: 'Operational Efficiency',
    icon: 'fa-clock-rotate-left',
    body:
      'Timely project delivery, disciplined budget management, and transparent communication ensuring your investment creates maximum lasting value.',
  },
  {
    title: 'Full Compliance & Safety',
    icon: 'fa-file-circle-check',
    body:
      'Strict adherence to Uganda and regional building codes, environmental standards, legal title due diligence, and rigorous site health & safety.',
  },
]

export default function OurApproach() {
  return (
    <section id="approach" className="py-section bg-white fade-section">
      <div className="container-site">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="section-eyebrow">The Metrak Standard</span>
          <h2
            className="font-heading mb-7"
            style={{
              fontSize: 'clamp(1.75rem, 3.8vw, 3rem)',
              lineHeight: 1.1,
              fontWeight: 800,
              color: 'var(--color-navy-dark)',
            }}
          >
            Trusted Experience. Absolute Efficiency.{' '}
            <br className="hidden sm:block" />
            <span style={{ color: 'var(--color-cyan-accent)' }}>Proven Compliance & Integrity.</span>
          </h2>
          <p className="text-body-copy text-text-body/85 leading-relaxed max-w-2xl mx-auto">
            Our approach combines deep technical engineering expertise, local East African market insight, and a customer-first philosophy to build lasting value.
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
