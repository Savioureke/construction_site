import { Link } from 'react-router-dom'

const CAPABILITIES = [
  'Certified Property Valuation Reports',
  'Investment Feasibility Studies',
  'Real Estate Project Advisory',
  'Market Trends & Price Forecasting',
  'Land Title & Legal Due Diligence',
  'Boundary Opening & Site Inspections',
  'Structural Engineering Assessments',
  'Architectural Planning & Floor Designs',
  'Commercial Asset Management',
  'Tenant Profiling & Lease Advisory',
  'Turnkey Construction Costing',
  'Health, Safety & Code Compliance',
]

export default function SEOAndMarketing() {
  return (
    <section className="py-section bg-white fade-section w-full overflow-x-hidden">
      <div className="container-site w-full overflow-hidden">
        <div className="grid lg:grid-cols-5 xl:grid-cols-5 gap-8 lg:gap-10 xl:gap-12 items-start w-full max-w-full">
          <div className="lg:col-span-2 xl:col-span-2 lg:sticky xl:sticky lg:top-32 xl:top-36 w-full min-w-0">
            <span className="section-eyebrow">Real Estate Advisory & Valuation</span>
            <h2 className="section-h2 mb-7">
              Strategic Advisory That{' '}
              <span style={{ color: 'var(--color-cyan-accent)' }}>Maximizes Project Value</span>
            </h2>
            <p className="text-body-copy text-text-body/85 leading-relaxed mb-6">
              Metrak Real Estate delivers institutional-grade property valuation, investment analysis, and construction advisory across Uganda and the East African region.
            </p>
            <p className="text-body-copy text-text-body/85 leading-relaxed mb-8">
              Whether you are acquiring prime land, planning modern residential developments, or assessing capital returns on commercial structures, our insights ensure precision at every step.
            </p>
            <Link to="/contact" className="btn-primary">
              Request Advisory
              <i className="fa fa-arrow-right ml-2.5 text-[11px]" />
            </Link>
          </div>

          <div className="lg:col-span-3 xl:col-span-3 w-full min-w-0 box-border overflow-hidden">
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 card-scaled w-full max-w-full box-border">
              {CAPABILITIES.map((item) => (
                <div key={item} className="capability-item w-full box-border max-w-full">
                  <i className="fa-solid fa-check-circle capability-check" />
                  <div className="flex-1 min-w-0 max-w-full">
                    <p className="scaled-label font-semibold text-[14px] lg:text-[14.5px] leading-relaxed break-words hyphens-auto" style={{ color: 'var(--color-text-body)' }}>
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
