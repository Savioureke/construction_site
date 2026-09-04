import { Link } from 'react-router-dom'

const CAPABILITIES = [
  'Keyword research & opportunity identification',
  'SEO content planning',
  'Blog/content generation & optimization',
  'Optimization of existing website pages',
  'Meta titles & descriptions',
  'Internal linking recommendations',
  'Search-intent analysis',
  'Content performance analysis',
  'Identification of new search topics',
  'Competitor & market analysis',
  'Conversion optimization recommendations',
  'Continuous SEO improvement',
]

export default function SEOAndMarketing() {
  return (
    <section className="py-section bg-white fade-section w-full overflow-x-hidden">
      <div className="container-site w-full overflow-hidden">
        <div className="grid lg:grid-cols-5 xl:grid-cols-5 gap-8 lg:gap-10 xl:gap-12 items-start w-full max-w-full">
          <div className="lg:col-span-2 xl:col-span-2 lg:sticky xl:sticky lg:top-32 xl:top-36 w-full min-w-0">
            <span className="section-eyebrow">AI-Powered SEO & Marketing</span>
            <h2 className="section-h2 mb-7">
              A Website That Keeps{' '}
              <span style={{ color: 'var(--color-cyan-accent)' }}>Improving After Launch</span>
            </h2>
            <p className="text-body-copy text-text-body/85 leading-relaxed mb-6">
              A static website is yesterday's approach. We combine modern construction-site
              design with an AI-powered SEO and marketing engine that runs continuously —
              researching, writing, optimizing, and reporting so your online presence gets
              stronger every month.
            </p>
            <p className="text-body-copy text-text-body/85 leading-relaxed mb-8">
              Every quarter, you'll see measurable gains in search impressions, clicks, and
              qualified enquiries — instead of watching your site collect dust.
            </p>
            <Link to="/contact" className="btn-primary">
              See Our Strategy
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
