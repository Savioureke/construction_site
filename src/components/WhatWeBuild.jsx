const FEATURES = [
  { title: 'Residential Building Construction', icon: 'fa-house', desc: 'Custom bungalows, modern villas, and multi-family apartment blocks.' },
  { title: 'Commercial & Retail Plazas', icon: 'fa-building', desc: 'Modern office buildings, schools, shopping centers, and commercial hubs.' },
  { title: 'Roads & Drainage Infrastructure', icon: 'fa-road', desc: 'Civil engineering projects, access roads, and stormwater drainage systems.' },
  { title: 'Precision Steelworks & Frameworks', icon: 'fa-trowel', desc: 'Design, fabrication, and structural installation of heavy steel works.' },
  { title: '10,000 SQM Daily Concreting', icon: 'fa-layer-group', desc: 'High-output modern equipment for rapid, high-strength concrete laying.' },
  { title: 'Roofing & Structural Renovations', icon: 'fa-wrench', desc: 'Expert roofing installations, structural repairs, and facility upgrades.' },
  { title: 'Architectural Floor Plans Design', icon: 'fa-compass-drafting', desc: 'Functional, beautiful blueprints harmonizing aesthetics with utility.' },
  { title: 'Prime Land Acquisition & Resale', icon: 'fa-map-location-dot', desc: 'Verified residential, commercial, and development plots across Uganda.' },
  { title: 'Agricultural & Farm Land Sales', icon: 'fa-wheat-awn', desc: 'Large-acre Mailo land parcels for commercial farming and agro-investments.' },
  { title: 'Certified Property Valuation', icon: 'fa-file-invoice-dollar', desc: 'Official valuation reports for mortgages, investments, and accounting.' },
  { title: 'Investment Feasibility Studies', icon: 'fa-chart-line', desc: 'Data-backed market insights, financial modeling, and risk assessments.' },
  { title: 'Turnkey Project Management', icon: 'fa-list-check', desc: 'End-to-end planning, budget control, and quality assurance from ground break.' },
  { title: 'Health & Safety HSE Commitment', icon: 'fa-helmet-safety', desc: 'Strict site safety protocols, environmental stewardship, and compliance.' },
  { title: 'Building Materials Supply & Logistics', icon: 'fa-truck-front', desc: 'Reliable sourcing and supply of quality building materials for projects.' },
]

export default function WhatWeBuild() {
  return (
    <section id="features" className="py-section fade-section overflow-x-hidden w-full" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container-site">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="section-eyebrow">What We Deliver</span>
          <h2 className="section-h2 mb-6">
            Comprehensive Real Estate &{' '}
            <span style={{ color: 'var(--color-cyan-accent)' }}>Construction Capabilities</span>
          </h2>
          <p className="text-body-copy text-text-body/85 leading-relaxed max-w-3xl mx-auto">
            From luxury homes and commercial towers to regional civil infrastructure, prime land transactions, and strategic advisory.
          </p>
        </div>

        <div className="grid-4-to-2 card-scaled">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="feature-card">
              <div className="feature-icon">
                <i className={`fa-solid ${feature.icon}`} />
              </div>
              <h3 className="card-h3 font-heading mb-2" style={{ color: 'var(--color-text-body)' }}>
                {feature.title}
              </h3>
              <div className="w-10 h-[2px] my-3" style={{ backgroundColor: 'var(--color-gold-accent)' }} />
              <p className="scaled-label text-text-gray leading-relaxed text-[14.5px]">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
