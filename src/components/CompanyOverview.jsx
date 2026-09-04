import { Link } from 'react-router-dom'

const PILLARS = [
  {
    title: 'Residential & Commercial Construction',
    icon: 'fa-hammer',
    desc: 'Full-service construction from custom homes to large commercial developments.',
    to: '/services',
  },
  {
    title: 'Project Portfolio & Case Studies',
    icon: 'fa-diagram-project',
    desc: 'Showcasing completed projects with real results, budgets, and timelines.',
    to: '/projects',
  },
  {
    title: 'Quote Requests & Client Support',
    icon: 'fa-headset',
    desc: 'Easy online quoting and dedicated support at every stage of your build.',
    to: '/contact',
  },
]

export default function CompanyOverview() {
  return (
    <section className="py-section bg-white fade-section overflow-x-hidden w-full">
      <div className="container-site">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="section-eyebrow">Company Overview</span>
          <h2 className="section-h2 mb-6">
            A Website Built to Win{' '}
            <span style={{ color: 'var(--color-cyan-accent)' }}>More Construction Projects</span>
          </h2>
          <p className="text-body-copy text-text-body/85 leading-relaxed max-w-3xl mx-auto">
            Most construction websites are created once and left unchanged. Ours is different
            — built with a continuous AI-powered SEO and marketing system so it keeps
            improving after launch, helping you get found, build trust, generate enquiries,
            and convert visitors into clients.
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
