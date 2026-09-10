import { Link } from 'react-router-dom'

const PILLARS = [
  {
    title: 'Construction & Civil Engineering',
    icon: 'fa-hammer',
    desc: 'From residential bungalows and apartments to commercial complexes, roads, and civil infrastructure.',
    to: '/services',
  },
  {
    title: 'Real Estate Sales & Land Transactions',
    icon: 'fa-map-location-dot',
    desc: 'Prime land acquisition, residential & commercial sales, leasing, and verified due diligence.',
    to: '/projects',
  },
  {
    title: 'Consultancy & Property Valuation',
    icon: 'fa-chart-pie',
    desc: 'Professional valuation reports, investment feasibility studies, and strategic property advisory.',
    to: '/contact',
  },
]

export default function CompanyOverview() {
  return (
    <section className="py-section bg-white fade-section overflow-x-hidden w-full">
      <div className="container-site">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="section-eyebrow">Metrak Real Estate and Construction Ltd</span>
          <h2 className="section-h2 mb-6">
            Building Excellence & Developing Real Estate{' '}
            <span style={{ color: 'var(--color-cyan-accent)' }}>Across Uganda & East Africa</span>
          </h2>
          <p className="text-body-copy text-text-body/85 leading-relaxed max-w-3xl mx-auto">
            Metrak Real Estate and Construction Ltd is a fully registered, multi-service company delivering property development, land transactions, civil engineering, building construction, and real estate advisory to individuals, investors, and organizations.
          </p>
        </div>

        <div className="row-3-to-2 card-scaled">
          {PILLARS.map((pillar) => (
            <Link
              key={pillar.title}
              to={pillar.to}
              className="iconlink-card"
              role="link"
              tabIndex={0}
            >
              <div className="iconlink-icon">
                <i className={`fa-solid ${pillar.icon}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="card-h3 font-heading mb-2" style={{ color: 'var(--color-text-body)' }}>
                  {pillar.title}
                </h3>
                <p className="scaled-label text-text-gray leading-relaxed text-[15px]">
                  {pillar.desc}
                </p>
              </div>
              <i className="fa-solid fa-arrow-right text-gold-accent text-sm" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
