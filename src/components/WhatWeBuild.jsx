const FEATURES = [
  { title: 'Professional Home Page', icon: 'fa-house' },
  { title: 'About the Company', icon: 'fa-building' },
  { title: 'Construction Services', icon: 'fa-trowel' },
  { title: 'Projects / Portfolio Gallery', icon: 'fa-images' },
  { title: 'Individual Project Pages', icon: 'fa-file-lines' },
  { title: 'Residential & Commercial', icon: 'fa-city' },
  { title: 'Contact & Quote Request Forms', icon: 'fa-envelope-open-text' },
  { title: 'Testimonials / Client Reviews', icon: 'fa-star' },
  { title: 'Frequently Asked Questions', icon: 'fa-circle-question' },
  { title: 'Blog / Construction Resources', icon: 'fa-blog' },
  { title: 'Google Maps & Business Info', icon: 'fa-map-location-dot' },
  { title: 'WhatsApp Contact Integration', icon: 'fa-whatsapp' },
  { title: 'Mobile, Tablet & Desktop Ready', icon: 'fa-mobile-screen' },
  { title: 'Fast-Loading, SEO-Friendly', icon: 'fa-gauge-high' },
]

export default function WhatWeBuild() {
  return (
    <section id="features" className="py-section fade-section overflow-x-hidden w-full" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container-site">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="section-eyebrow">What's Included</span>
          <h2 className="section-h2 mb-6">
            Everything Your Construction Business{' '}
            <span style={{ color: 'var(--color-cyan-accent)' }}>Needs Online</span>
          </h2>
          <p className="text-body-copy text-text-body/85 leading-relaxed max-w-3xl mx-auto">
            A complete, turnkey digital presence — crafted specifically for construction
            companies that mean business.
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
                Professionally designed and optimized for maximum visibility and conversion.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
