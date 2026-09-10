const HIGHLIGHTS = [
  {
    label: 'Proven Multi-Sector Experience',
    icon: 'fa-shield-halved',
  },
  {
    label: 'Rigorous Health & Safety Standards',
    icon: 'fa-helmet-safety',
  },
  {
    label: '10,000+ SQM Daily Concreting Capacity',
    icon: 'fa-trowel-bricks',
  },
  {
    label: 'Full Legal & Environmental Compliance',
    icon: 'fa-file-circle-check',
  },
]

export default function HighlightsStrip() {
  return (
    <section
      className="py-section-sm fade-section"
      style={{ backgroundColor: 'var(--color-navy-deep)' }}
    >
      <div className="container-site">
        <div className="strip-4-to-2 card-scaled">
          {HIGHLIGHTS.map((h) => (
            <div key={h.label} className="highlight-item">
              <div
                className="w-14 h-14 flex items-center justify-center mb-4 text-2xl"
                style={{
                  border: '2px solid var(--color-gold-accent)',
                  color: 'var(--color-gold-accent)',
                }}
              >
                <i className={`fa-solid ${h.icon}`} />
              </div>
              <p
                className="scaled-label font-heading font-bold uppercase tracking-[0.1em] text-[13px] leading-relaxed text-white text-center"
              >
                {h.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
