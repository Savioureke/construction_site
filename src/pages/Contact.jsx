import { useEffect, useMemo, useState } from 'react'
import { buildImgUrl, useBgReady, MAX_WAIT_MS } from '../utils/images.js'

export default function Contact({ onOpenQuote }) {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [mapReady, setMapReady] = useState(false)

  const HERO_PROMPT = 'Modern construction company office reception area with professional team greeting visitors, brand signage, contemporary design, warm welcoming atmosphere, high detail photography'
  const MAP_PROMPT = 'Modern simplified city map illustration showing construction company location pin, clean professional style, soft colors, office building icon'
  const CTA_PROMPT = 'Two construction professionals shaking hands after successful meeting at job site, sunset golden hour, completed building in background, celebratory positive moment, high detail photography'

  const HERO_IMG_URL = useMemo(() => buildImgUrl(HERO_PROMPT, 'landscape_16_9'), [])
  const MAP_IMG_URL = useMemo(() => buildImgUrl(MAP_PROMPT, 'landscape_4_3'), [])
  const CTA_IMG_URL = useMemo(() => buildImgUrl(CTA_PROMPT, 'landscape_16_9'), [])

  const heroReady = useBgReady(HERO_IMG_URL)
  const ctaReady = useBgReady(CTA_IMG_URL)

  useEffect(() => {
    let cancelled = false
    const mark = () => { if (!cancelled) setMapReady(true) }
    const img = new Image()
    img.referrerPolicy = 'no-referrer-when-downgrade'
    img.onload = mark
    img.onerror = mark
    img.src = MAP_IMG_URL
    const t = setTimeout(mark, MAX_WAIT_MS)
    return () => { cancelled = true; clearTimeout(t) }
  }, [MAP_IMG_URL])

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email) return
    setSubmitted(true)
  }

  return (
    <main className="w-full pt-32">
      <section
        className="relative w-full flex items-center overflow-hidden fade-section bg-img-placeholder"
        style={{
          backgroundImage: `url('${HERO_IMG_URL}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '320px',
        }}
      >
        {!heroReady && (
          <div className="img-loader img-loader-sm" style={{ backgroundColor: 'transparent' }}>
            <div className="img-loader-spinner" />
          </div>
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(3,42,58,0.78) 0%, rgba(3,42,58,0.48) 60%, rgba(3,42,58,0.22) 100%), linear-gradient(180deg, rgba(3,42,58,0.4) 0%, transparent 50%, rgba(3,42,58,0.6) 100%)',
          }}
        />
        <div className="relative container-site py-20">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-4">
              <span className="w-10 h-[2px]" style={{ backgroundColor: 'var(--color-gold-accent)' }} />
              <span className="uppercase tracking-[0.22em] font-bold text-[11.5px] text-white/80">
                Get In Touch
              </span>
            </div>
            <h1
              className="font-heading hero-h1 text-white mb-5"
              style={{ textShadow: '0 4px 30px rgba(0,0,0,0.45)', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              Contact <span style={{ color: 'var(--color-cyan-accent)' }}>Our Team</span>
            </h1>
            <p className="text-white/85 text-[18px] lg:text-[20px] leading-relaxed max-w-2xl font-body">
              Ready to start your next project, have questions, or want to learn more?
              We're here to help — reach out by any method below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-section bg-white fade-section w-full overflow-x-hidden">
        <div className="container-site">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: 'fa-map-location-dot',
                title: 'Visit Us',
                lines: ['[Company Address Placeholder]', '[City, State ZIP]'],
                accent: 'var(--color-cyan-accent)',
              },
              {
                icon: 'fa-phone',
                title: 'Call Us',
                lines: ['Phone: (000) 000-0000', 'Mon – Fri: 7am – 6pm'],
                accent: 'var(--color-gold-accent)',
              },
              {
                icon: 'fa-envelope',
                title: 'Email Us',
                lines: ['info@[placeholder].com', 'We reply within 24 hours'],
                accent: 'var(--color-cyan-accent)',
              },
            ].map((c) => (
              <div key={c.title} className="relative p-8 bg-white border transition-all duration-300 hover:-translate-y-2 text-center" style={{ borderColor: 'rgba(3, 42, 58, 0.08)' }}>
                <div
                  className="w-16 h-16 mx-auto flex items-center justify-center text-2xl text-white mb-5"
                  style={{ backgroundColor: c.accent }}
                >
                  <i className={`fa-solid ${c.icon}`} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3" style={{ color: 'var(--color-navy-deep)' }}>
                  {c.title}
                </h3>
                {c.lines.map((line) => (
                  <p key={line} className="text-text-body/75 leading-relaxed text-[15px]">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="section-eyebrow">Reach Out Directly</span>
                <h2 className="section-h2 mb-6 text-left">
                  Let's Start a <span style={{ color: 'var(--color-cyan-accent)' }}>Conversation</span>
                </h2>
                <p className="text-body-copy text-text-body/85 leading-relaxed mb-8">
                  Prefer the convenience of online messaging? Fill out the form and a
                  member of our team will get back to you within 24 business hours with a
                  response tailored to your project needs.
                </p>
              </div>
              <div
                className="relative w-full border border-black/10 overflow-hidden bg-img-placeholder-portrait"
                style={{ minHeight: '340px' }}
              >
                {!mapReady && (
                  <div className="img-loader">
                    <div className="img-loader-spinner" />
                  </div>
                )}
                <img
                  src={MAP_IMG_URL}
                  alt="Map showing our location"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full object-cover"
                  style={{ minHeight: '340px' }}
                />
              </div>
              <div className="bg-white border p-7" style={{ borderColor: 'rgba(3, 42, 58, 0.08)' }}>
                <h3 className="font-heading font-bold text-xl mb-5" style={{ color: 'var(--color-navy-deep)' }}>
                  Business Hours
                </h3>
                <div className="space-y-3 text-[15px]">
                  {[
                    ['Monday – Friday', '7:00am – 6:00pm'],
                    ['Saturday', '8:00am – 2:00pm'],
                    ['Sunday', 'Closed'],
                  ].map(([day, hours]) => (
                    <div key={day} className="flex items-center justify-between border-b border-black/5 pb-3 last:border-0 last:pb-0">
                      <span className="font-semibold text-text-body">{day}</span>
                      <span className="text-text-gray">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              {submitted ? (
                <div
                  className="w-full h-full flex items-center justify-center p-10 text-center border"
                  style={{
                    borderColor: 'rgba(0, 188, 212, 0.25)',
                    backgroundColor: 'rgba(0, 188, 212, 0.05)',
                  }}
                >
                  <div>
                    <div
                      className="w-20 h-20 mx-auto flex items-center justify-center text-white text-3xl mb-6 rounded-full"
                      style={{ backgroundColor: 'var(--color-cyan-accent)' }}
                    >
                      <i className="fa-solid fa-check" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl mb-3" style={{ color: 'var(--color-navy-deep)' }}>
                      Thank You — Your Message Has Been Sent!
                    </h3>
                    <p className="text-text-body/80 leading-relaxed max-w-lg mx-auto mb-8">
                      We've received your project details and a member of our team will be
                      in touch within 24 business hours. In the meantime, feel free to call
                      us if you need immediate assistance.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false)
                        setForm({ name: '', company: '', email: '', phone: '', service: '', location: '', message: '' })
                      }}
                      className="btn-outline"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white border p-8 lg:p-10"
                  style={{ borderColor: 'rgba(3, 42, 58, 0.08)' }}
                >
                  <div className="mb-8 pb-6 border-b border-black/5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-[2px]" style={{ backgroundColor: 'var(--color-gold-accent)' }} />
                      <span className="uppercase tracking-[0.18em] font-bold text-[11.5px]" style={{ color: 'var(--color-cyan-accent)' }}>
                        Project Inquiry Form
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-2xl" style={{ color: 'var(--color-navy-deep)' }}>
                      Tell Us About Your Project
                    </h3>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="form-label">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Company Name (optional)"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="(000) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="form-label">Service Interested In</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">Select a service</option>
                        <option>Residential Construction</option>
                        <option>Commercial Construction</option>
                        <option>Renovations & Additions</option>
                        <option>Both / Not Sure</option>
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Project Location</label>
                      <input
                        type="text"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="City, State or Service Area"
                      />
                    </div>
                  </div>

                  <div className="mb-7">
                    <label className="form-label">Project Details</label>
                    <textarea
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      className="form-input resize-none"
                      placeholder="Tell us about your project — scope, timeline, budget range, goals, or any specific questions we can answer."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full !py-4 text-[14px]">
                    <i className="fa-solid fa-paper-plane mr-2.5 text-[13px]" />
                    Send Message
                  </button>

                  <p className="text-center text-[12.5px] text-text-gray mt-4">
                    We respect your privacy. Your information is never shared and we respond
                    to every inquiry within 24 business hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

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
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(3, 42, 58, 0.9)' }} />
        <div className="relative container-site text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-h2 text-white mb-7" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
              Prefer a Written <span style={{ color: 'var(--color-cyan-accent)' }}>Quote?</span>
            </h2>
            <p className="text-body-copy-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              Use our quick quote request form to get a detailed, itemized proposal for
              your project. Available 24/7.
            </p>
            <button type="button" onClick={onOpenQuote} className="btn-primary">
              <i className="fa fa-file-invoice-dollar mr-2" />
              Request a Free Quote
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
