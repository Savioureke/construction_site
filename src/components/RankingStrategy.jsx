const STRATEGY = [
  {
    num: 1,
    title: 'Site Feasibility & Due Diligence',
    body:
      'Topographical surveys, boundary verification, title authentication, soil testing, and environmental impact assessments before ground break.',
  },
  {
    num: 2,
    title: 'Architectural & Structural Design',
    body:
      'Collaborative floor planning, 3D visualizations, and structural engineering that balance functionality, aesthetic elegance, and cost efficiency.',
  },
  {
    num: 3,
    title: 'Permitting & Regulatory Compliance',
    body:
      'Securing all municipal building permits, physical planning approvals, and environmental compliance certificates seamlessly.',
  },
  {
    num: 4,
    title: 'Civil & Foundation Engineering',
    body:
      'Site preparation, earthworks, drainage systems, and high-capacity reinforced concreting using modern construction machinery.',
  },
  {
    num: 5,
    title: 'Superstructure & MEP Installation',
    body:
      'High-grade masonry, structural steelworks, roofing, electrical grids, plumbing, and mechanical systems executed to top industry codes.',
  },
  {
    num: 6,
    title: 'Quality Handover & Asset Management',
    body:
      'Meticulous final inspections, title conveyance handover, warranty protection, and dedicated facility support for lasting asset value.',
  },
]

export default function RankingStrategy() {
  return (
    <section className="py-section fade-section" style={{ backgroundColor: 'var(--color-bg-tint)' }}>
      <div className="container-site">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="section-eyebrow">Our Execution Framework</span>
          <h2 className="section-h2 mb-6">
            Engineered For Excellence —{' '}
            <span style={{ color: 'var(--color-navy-deep)' }}>From Concept to Handover</span>
          </h2>
          <p className="text-body-copy text-text-body/85 leading-relaxed max-w-3xl mx-auto">
            Six interlocking operational pillars ensuring every real estate and construction venture is delivered with precision, safety, and commercial value.
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
