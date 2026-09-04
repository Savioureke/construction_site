const METRICS = [
  { label: 'Search Impressions', icon: 'fa-eye' },
  { label: 'Search Clicks', icon: 'fa-mouse-pointer' },
  { label: 'Keywords Tracked', icon: 'fa-key' },
  { label: 'Website Visitors', icon: 'fa-users' },
  { label: 'Popular Pages', icon: 'fa-chart-line' },
  { label: 'User Behavior', icon: 'fa-chart-pie' },
  { label: 'Conversion Opportunities', icon: 'fa-rocket' },
  { label: 'SEO Growth Trends', icon: 'fa-arrow-trend-up' },
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
            Data-Driven Growth
          </span>
          <h2 className="section-h2 text-white mb-6">
            Tracking What{' '}
            <span style={{ color: 'var(--color-cyan-accent)' }}>Matters</span>
          </h2>
          <p className="text-body-copy text-white/75 leading-relaxed max-w-2xl mx-auto">
            Every decision is backed by real numbers. You'll always know exactly how your
            website is performing, where your traffic comes from, and which pages are
            producing real business.
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
