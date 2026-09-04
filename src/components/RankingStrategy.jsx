const STRATEGY = [
  {
    num: 1,
    title: 'Technical SEO',
    body:
      'Clean site structure, fast loading speed, mobile optimization, indexing configuration, and structured data so search engines trust your site.',
  },
  {
    num: 2,
    title: 'Local SEO',
    body:
      'Optimization around the specific locations and service areas your company covers — appearing for searches in your target region.',
  },
  {
    num: 3,
    title: 'Service-Based SEO',
    body:
      'Dedicated, optimized landing pages for each major construction service with copy that matches the exact intent of searchers.',
  },
  {
    num: 4,
    title: 'Content SEO',
    body:
      'An ongoing blog and content system that targets the real questions and searches your potential clients are typing into Google.',
  },
  {
    num: 5,
    title: 'On-Page Optimization',
    body:
      'Every page optimized around target keywords, search intent, heading structure, metadata, and smart internal linking.',
  },
  {
    num: 6,
    title: 'Continuous Optimization',
    body:
      'Ongoing use of analytics and real search-performance data to guide weekly and monthly improvements, not one-and-done tweaks.',
  },
]

export default function RankingStrategy() {
  return (
    <section className="py-section fade-section" style={{ backgroundColor: 'var(--color-bg-tint)' }}>
      <div className="container-site">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="section-eyebrow">Our SEO Strategy</span>
          <h2 className="section-h2 mb-6">
            SEO Built In From the Start —{' '}
            <span style={{ color: 'var(--color-navy-deep)' }}>Not Bolted On Later</span>
          </h2>
          <p className="text-body-copy text-text-body/85 leading-relaxed max-w-3xl mx-auto">
            Six interlocking pillars working together — engineered specifically to put
            construction companies in front of people actively looking for their services.
          </p>
        </div>

        <div className="grid-6-32-to-2 card-scaled">
          {STRATEGY.map((item) => (
            <div key={item.num} className="strategy-card">
              <div className="strategy-number">{String(item.num).padStart(2, '0')}</div>
              <h3 className="card-h3 font-heading mb-3" style={{ color: 'var(--color-navy-deep)' }}>
                {item.title}
              </h3>
              <p className="scaled-label text-text-body/80 leading-relaxed text-[15px]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
