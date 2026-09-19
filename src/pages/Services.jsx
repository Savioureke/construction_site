import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useBgReady } from '../utils/images.js'

const SERVICES_DATA = [
  {
    id: 'construction',
    badge: 'Core Service',
    icon: 'fa-trowel-bricks',
    title: 'Construction & Civil Engineering',
    quote:
      'From plans to Reality. Construction is not simply a physical process. It is a management process that eventually becomes physical. Metrak provides structured construction and project delivery support focused on cost, quality, timelines, and execution.',
    image: '/images/landscape-image.jpeg',
    whatWeDoTitle: 'What We Do',
    whatWeDo: [
      {
        title: 'Project Planning',
        desc: 'Establishing scope, budgets, timelines, and comprehensive project requirements from day one.',
      },
      {
        title: 'Construction Management',
        desc: 'Co-ordinating the different people, contractors, and activities required to deliver the project efficiently.',
      },
      {
        title: 'Site Supervision',
        desc: 'Monitoring progress, workmanship, structural compliance, and strict adherence to architectural standards.',
      },
      {
        title: 'Procurement Co-ordination',
        desc: 'Supporting the sourcing, quality assurance, and timely delivery of high-grade construction materials and services.',
      },
      {
        title: 'Quality Control',
        desc: 'Maintaining rigorous engineering standards, cube test verifications, and finishing excellence throughout execution.',
      },
      {
        title: 'Project Delivery',
        desc: 'Keeping the project moving toward flawless, on-schedule completion and turnkey client handover.',
      },
    ],
    ctaText: 'Have a project in mind? Let’s discuss what you want to build.',
  },
  {
    id: 'property-development',
    badge: 'Development & Asset Protection',
    icon: 'fa-building-shield',
    title: 'Property Development & Management',
    overview:
      'Gated communities and estate development • Mixed-use property investments • Turnkey development partnerships • Design-Build-Finance-Operate (DBFO) models collecting rental dues from tenants.',
    quote:
      'Metrak provides professional property management designed to protect your asset and simplify ownership.',
    image: '/images/in-services-2.jpeg',
    whatWeDoTitle: 'What We Manage',
    whatWeDo: [
      {
        title: 'Tenant Co-ordination',
        desc: 'Professional tenant onboarding, relationship management, and lease agreement administration.',
      },
      {
        title: 'Rent Administration',
        desc: 'Timely rental billing, automated collection tracking, and transparent escrow accounting.',
      },
      {
        title: 'Property Inspections',
        desc: 'Routine structural and facility audits to detect preventative maintenance needs early.',
      },
      {
        title: 'Maintenance Co-ordination',
        desc: 'Fast-response plumbing, electrical, HVAC, and structural repairs with trusted technicians.',
      },
      {
        title: 'Service Provider Management',
        desc: 'Managing security guards, cleaning crews, waste disposal, and utility providers seamlessly.',
      },
      {
        title: 'Property Reporting & Operational Oversight',
        desc: 'Comprehensive monthly financial statements, occupancy analytics, and full operational oversight.',
      },
    ],
    ctaText: 'Looking for professional property management or estate development?',
  },
  {
    id: 'joint-ventures',
    badge: 'Value Creation',
    icon: 'fa-handshake',
    title: 'Joint Ventures & Developments',
    quote:
      'Selling your land is not always the only way to benefit from its value. Through Joint Venture partnerships, Metrak works with landowners to identify development opportunities, structure partnerships, and bring viable projects to life.',
    image: '/images/services-3.jpg',
    whatWeDoTitle: 'What We Do',
    whatWeDo: [
      {
        title: 'Development Strategy & Feasibility Assessment',
        desc: 'From identifying viable uses for the property to understanding the commercial potential of the opportunity, we co-ordinate everything.',
      },
      {
        title: 'Partnership Structuring',
        desc: 'Creating a clear, legally secure framework for the relationship between landowners and development partners.',
      },
      {
        title: 'Developer Sourcing',
        desc: 'Connecting suitable development expertise and capital to viable real estate opportunities.',
      },
      {
        title: 'Project Execution',
        desc: 'Co-ordinating the entire journey from initial concept and physical planning to complete development.',
      },
    ],
    ctaText: 'Do you own land with development potential? Tell us about your property and let’s explore what it could become.',
  },
  {
    id: 'land-acquisition',
    badge: 'Land & Legal Security',
    icon: 'fa-map-location-dot',
    title: 'Land Acquisition & Disposal',
    overview:
      'Identification of prime land parcels for purchase or investment • 100% legal verification and land titling • Subdivision and land use master planning • Expert negotiation and transaction facilitation.',
    quote:
      'Securing genuine land with verified cadastral boundaries and clean documentation across Uganda.',
    image: '/images/land-acquisition-service.jpeg',
    whatWeDoTitle: 'Key Land Solutions',
    whatWeDo: [
      {
        title: 'Parcel Identification',
        desc: 'Locating prime commercial, residential, and agricultural land parcels tailored to client budgets and investment strategies.',
      },
      {
        title: 'Title Search & Legal Verification',
        desc: 'Rigorous due diligence with the Ministry of Lands, local councils (LCs), and cadastral survey records to ensure clean ownership.',
      },
      {
        title: 'Boundary Opening & Surveying',
        desc: 'Accurate boundary pegging, topographic mapping, and certified land surveying by registered land surveyors.',
      },
      {
        title: 'Subdivision & Land Use Planning',
        desc: 'Master layout design, statutory municipal physical planning approvals, and title deed processing.',
      },
    ],
    ctaText: 'Ready to acquire or dispose of prime land in Uganda with complete peace of mind?',
  },
  {
    id: 'real-estate-sales',
    badge: 'Advisory & Brokerage',
    icon: 'fa-chart-line',
    title: 'Real Estate Sales & Consultancy',
    quote:
      'Whether you are buying, selling, or evaluating an investment opportunity, Metrak provides the market knowledge and professional guidance needed to make informed real estate decisions.',
    image: '/images/marketing-sales-office.jpeg',
    whatWeDoTitle: 'What We Do',
    whatWeDo: [
      {
        title: 'Qualified Buyer & Seller Matching',
        desc: 'We connect property owners with verified buyers and high-yield investment opportunities.',
      },
      {
        title: 'Targeted Property Identification',
        desc: 'We help clients identify, evaluate, and acquire properties tightly aligned with their personal or commercial objectives.',
      },
      {
        title: 'Professional Transaction Guidance',
        desc: 'End-to-end guidance throughout property pricing, legal transfers, and negotiations.',
      },
      {
        title: 'Investment & Risk Evaluation',
        desc: 'Helping investors evaluate market yields, risks, cash flows, and projected capital appreciation.',
      },
    ],
    ctaText: 'Speak with our real estate consultants at our Kampala offices today.',
  },
]

const HOW_IT_WORKS = [
  {
    num: '01',
    step: 'Make An Appointment',
    title: 'Consultation & Discovery',
    desc: 'Reach out to our team or book a consultation at our Kampala offices to discuss your project vision, land assets, or investment goals.',
    icon: 'fa-calendar-check',
  },
  {
    num: '02',
    step: 'Select Your Services',
    title: 'Tailored Scope Selection',
    desc: 'Choose from our structured service offerings—civil construction, turnkey development, property management, joint ventures, or land transactions.',
    icon: 'fa-cubes-stacked',
  },
  {
    num: '03',
    step: 'Confirm & Plan',
    title: 'Feasibility & Project Roadmap',
    desc: 'We conduct thorough site feasibility, establish clear budgets, agree on project milestones, and establish legally binding frameworks.',
    icon: 'fa-file-signature',
  },
  {
    num: '04',
    step: 'Execution & Delivery',
    title: 'Quality Execution to Handover',
    desc: 'Our experienced engineers and project managers supervise every stage, ensuring high quality, timeline compliance, and successful handover.',
    icon: 'fa-circle-check',
  },
]

export default function Services({ onOpenQuote }) {
  const HERO_IMG_URL = '/extracted_images/construction-civil-engineering/construction-civil-engineering_2.jpg'
  const CTA_IMG_URL = '/extracted_images/construction-civil-engineering/construction-civil-engineering_5.jpg'
  const heroReady = useBgReady(HERO_IMG_URL)
  const ctaReady = useBgReady(CTA_IMG_URL)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08 }
    )
    document.querySelectorAll('.fade-section').forEach((el) => observer.observe(el))
    window.scrollTo(0, 0)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="w-full pt-32">
      {/* Hero Section */}
      <section
        className="relative w-full flex items-center overflow-hidden fade-section bg-slate-900"
        style={{ minHeight: '360px' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/upcoming-projects.jpeg')" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(3,42,58,0.92) 0%, rgba(3,42,58,0.75) 60%, rgba(3,42,58,0.5) 100%), linear-gradient(180deg, rgba(3,42,58,0.6) 0%, rgba(3,42,58,0.3) 50%, rgba(3,42,58,0.85) 100%)',
          }}
        />
        <div className="relative container-site py-20">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-4">
              <span className="w-10 h-[2px]" style={{ backgroundColor: 'var(--color-gold-accent)' }} />
              <span className="uppercase tracking-[0.22em] font-bold text-[11.5px] text-white/80">
                Shaping the Skyline
              </span>
            </div>
            <h1
              className="font-heading hero-h1 text-white mb-5"
              style={{ textShadow: '0 4px 30px rgba(0,0,0,0.45)', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              Our Full Range of <span style={{ color: 'var(--color-cyan-accent)' }}>Services</span>
            </h1>
            <p className="text-white/85 text-[18px] lg:text-[20px] leading-relaxed max-w-2xl font-body">
              From plans to reality — structured civil engineering, turnkey property development, joint ventures, and verified land advisory across Uganda.
            </p>
          </div>
        </div>
      </section>

      {/* Structured Services Sections */}
      <section className="py-section bg-white fade-section w-full overflow-x-hidden">
        <div className="container-site space-y-24 lg:space-y-32">
          {SERVICES_DATA.map((service, index) => {
            const isReversed = index % 2 !== 0
            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-5 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-black/5 group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 opacity-20 group-hover:opacity-10 transition-opacity"
                      style={{
                        background:
                          'linear-gradient(180deg, transparent 60%, rgba(3,42,58,0.8) 100%)',
                      }}
                    />
                    <div className="absolute top-4 left-4 bg-navy-deep/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider border border-white/20">
                      {service.badge}
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl text-white shadow-md flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-navy-deep)' }}
                    >
                      <i className={`fa-solid ${service.icon}`} />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-gold-accent block">
                        Metrak Expertise
                      </span>
                      <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-[32px] leading-tight" style={{ color: 'var(--color-navy-deep)' }}>
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  {service.quote && (
                    <div
                      className="p-5 rounded-xl border-l-4"
                      style={{
                        backgroundColor: 'rgba(3, 42, 58, 0.03)',
                        borderColor: 'var(--color-cyan-accent)',
                      }}
                    >
                      <p className="text-[15.5px] lg:text-[16px] italic text-text-body/90 leading-relaxed font-body">
                        "{service.quote}"
                      </p>
                    </div>
                  )}

                  {service.overview && (
                    <p className="text-body-copy text-text-body/85 font-medium leading-relaxed">
                      {service.overview}
                    </p>
                  )}

                  <div>
                    <h3 className="font-heading font-bold text-lg mb-4 text-navy-deep flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-cyan-accent)' }} />
                      {service.whatWeDoTitle}
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.whatWeDo.map((item) => (
                        <div
                          key={item.title}
                          className="p-4 rounded-xl border bg-slate-50/50 hover:bg-slate-50 transition-colors"
                          style={{ borderColor: 'rgba(3, 42, 58, 0.08)' }}
                        >
                          <div className="flex items-start gap-2.5">
                            <i className="fa-solid fa-check-circle text-cyan-accent text-sm mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-heading font-bold text-[15px] text-text-body mb-1">
                                {item.title}
                              </h4>
                              <p className="text-text-gray text-[13.5px] leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-black/5">
                    <p className="text-[14.5px] font-semibold text-text-body/80 italic">
                      {service.ctaText}
                    </p>
                    <button
                      type="button"
                      onClick={onOpenQuote}
                      className="btn-primary !py-2.5 !px-5 text-[13px]"
                    >
                      <i className="fa-solid fa-clipboard-list mr-2" />
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* How It Works Section - Clean, Meaningful Process (No Lorem Ipsum) */}
      <section className="py-section fade-section relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg-tint)' }}>
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="section-eyebrow">Seamless Execution</span>
            <h2 className="section-h2 mb-5">
              How It <span style={{ color: 'var(--color-cyan-accent)' }}>Works</span>
            </h2>
            <p className="text-body-copy text-text-body/85 leading-relaxed max-w-2xl mx-auto">
              A clear, four-step structured methodology ensuring transparency, engineering integrity, and flawless project delivery from initial consultation to final handover.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((step) => (
              <div
                key={step.num}
                className="bg-white p-7 rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between"
                style={{ borderColor: 'rgba(3, 42, 58, 0.08)' }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading font-black text-3xl text-navy-deep/20 group-hover:text-cyan-accent transition-colors">
                      {step.num}
                    </span>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg shadow-sm"
                      style={{ backgroundColor: 'var(--color-navy-deep)' }}
                    >
                      <i className={`fa-solid ${step.icon}`} />
                    </div>
                  </div>

                  <span className="text-[11px] uppercase tracking-[0.16em] font-bold text-gold-accent block mb-1">
                    {step.step}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-text-body mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-gray text-[14.5px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 flex items-center gap-2 text-cyan-accent text-xs font-bold uppercase tracking-wider">
                  <span>Step {step.num} Verified</span>
                  <i className="fa-solid fa-arrow-right text-[10px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="py-section relative overflow-hidden fade-section bg-img-placeholder"
        style={{
          backgroundImage: `url('${CTA_IMG_URL}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {!ctaReady && (
          <div className="img-loader img-loader-sm" style={{ backgroundColor: 'transparent', zIndex: 1 }}>
            <div className="img-loader-spinner" />
          </div>
        )}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(3, 42, 58, 0.92)' }} />
        <div className="relative container-site text-center">
          <div className="max-w-3xl mx-auto">
            <span className="uppercase tracking-[0.22em] font-bold text-[11.5px] text-gold-accent block mb-3">
              Start Your Real Estate Journey
            </span>
            <h2 className="section-h2 text-white mb-6" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
              Ready to Build or Invest with <span style={{ color: 'var(--color-cyan-accent)' }}>Metrak?</span>
            </h2>
            <p className="text-body-copy-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto font-body">
              Whether you are planning a civil construction project, developing prime land, or structuring a joint venture, our team is ready to deliver excellence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button type="button" onClick={onOpenQuote} className="btn-primary">
                <i className="fa fa-file-invoice-dollar mr-2" />
                Request a Proposal
              </button>
              <Link to="/projects" className="btn-outline-white">
                <i className="fa fa-images mr-2" />
                View Completed Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

