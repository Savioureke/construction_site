const METRICS = [
  { label: 'Quality Assurance Checks', icon: 'fa-clipboard-check' },
  { label: 'HSE Safety Inspections', icon: 'fa-shield-halved' },
  { label: 'Concrete Mix Precision', icon: 'fa-cubes' },
  { label: 'Verified Title Records', icon: 'fa-file-shield' },
  { label: 'Structural Audits', icon: 'fa-building-circle-check' },
  { label: 'Milestones Completed', icon: 'fa-chart-line' },
  { label: 'Lab Material Testing', icon: 'fa-flask-vial' },
  { label: 'On-Budget Delivery', icon: 'fa-scale-balanced' },
]

export default function MarketingAnalytics() {
  return (
    <section
      className="py-section fade-section text-white"
      style={{ backgroundColor: 'var(--color-navy-dark)' }}
    >
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="section-eyebrow" style={{ color: 'var(--color-gold-accent)' }}>
            Operational Rigour
          </span>
          <h2 className="section-h2 text-white mb-6">
            Tracking What{' '}
            <span style={{ color: 'var(--color-cyan-accent)' }}>Matters</span>
          </h2>
          <p className="text-body-copy text-white/75 leading-relaxed max-w-2xl mx-auto">
            Every project phase is measured and monitored. From daily batching plants to
            structural inspections and land registry verifications, Metrak ensures
            uncompromising build quality and legal certainty.
          </p>
        </div>

        <div className="grid-8-42-to-2 card-scaled">
          {METRICS.map((m) => (
            <div key={m.label} className="metric-card">
              <i className={`fa-solid ${m.icon} metric-icon`} />
              <p
                className="scaled-label font-heading font-bold uppercase tracking-[0.08em] text-[13px] mt-1"
                style={{ color: 'var(--color-navy-dark)' }}
              >
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
