import { useState, useEffect } from 'react'

const SERVICE_OPTIONS = [
  'Residential Construction',
  'Commercial Construction',
  'Both',
  'Not Sure',
]

export default function QuotePanel({ isOpen, onClose }) {
  const [form, setForm] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: SERVICE_OPTIONS[0],
    location: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && isOpen) onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  const set = (key) => (e) => {
    setForm({ ...form, [key]: e.target.value })
    if (errors[key]) setErrors({ ...errors, [key]: null })
  }

  const validate = () => {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'Full name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    // NOTE: Wire up real endpoint here (Formspree / EmailJS / CRM webhook).
    // This is a placeholder submission for the presentation build.
    // Example Formspree endpoint:
    // fetch('https://formspree.io/f/xxxxxxx', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form),
    // })
    setTimeout(() => {
      setSubmitted(false)
      setForm({ fullName: '', company: '', email: '', phone: '', service: SERVICE_OPTIONS[0], location: '', message: '' })
      onClose()
    }, 3200)
  }

  return (
    <>
      <div
        className={`panel-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />
      <aside
        className={`slide-panel ${isOpen ? 'active' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Request a Free Quote"
        aria-hidden={!isOpen}
      >
        {/* Panel header */}
        <div
          className="relative px-8 pt-10 pb-8 text-white"
          style={{
            backgroundImage: 'linear-gradient(135deg, var(--color-navy-dark) 0%, var(--color-navy-mid) 100%)',
          }}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close quote request panel"
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white text-xl"
          >
            <i className="fa fa-times" />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px]" style={{ backgroundColor: 'var(--color-gold-accent)' }} />
            <span
              className="uppercase tracking-[0.2em] font-bold text-[11px]"
              style={{ color: 'var(--color-gold-accent)' }}
            >
              Free Consultation
            </span>
          </div>

          <h3 className="font-heading font-bold text-[28px] leading-tight mb-2">
            Request a Free Quote
          </h3>
          <p className="text-white/70 text-[15px] leading-relaxed">
            Fill out the form below and we'll prepare a tailored proposal for your next project.
          </p>
        </div>

        {/* Panel body / form */}
        <div className="px-8 py-8">
          {submitted ? (
            <div className="py-10 text-center">
              <div
                className="w-20 h-20 mx-auto mb-6 flex items-center justify-center text-white text-3xl rounded-full"
                style={{ backgroundColor: 'var(--color-cyan-accent)' }}
              >
                <i className="fa-solid fa-check" />
              </div>
              <h4 className="font-heading font-bold text-2xl mb-3" style={{ color: 'var(--color-navy-deep)' }}>
                Thank You!
              </h4>
              <p className="text-text-gray leading-relaxed">
                Your request has been received. We'll be in touch within one business day to
                discuss your project in detail.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-5">
              <div>
                <label className="form-label" htmlFor="fullName">Full Name <span className="text-red-500">*</span></label>
                <input
                  id="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={set('fullName')}
                  className={`form-input ${errors.fullName ? '!border-red-400' : ''}`}
                  placeholder="John Smith"
                />
                {errors.fullName && <p className="mt-1.5 text-[12.5px] text-red-500">{errors.fullName}</p>}
              </div>

              <div>
                <label className="form-label" htmlFor="company">Company <span className="text-text-muted">(optional)</span></label>
                <input
                  id="company"
                  type="text"
                  value={form.company}
                  onChange={set('company')}
                  className="form-input"
                  placeholder="Your company name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label" htmlFor="email">Email <span className="text-red-500">*</span></label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={set('email')}
                    className={`form-input ${errors.email ? '!border-red-400' : ''}`}
                    placeholder="you@company.com"
                  />
                  {errors.email && <p className="mt-1.5 text-[12.5px] text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <label className="form-label" htmlFor="phone">Phone <span className="text-text-muted">(optional)</span></label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={set('phone')}
                    className="form-input"
                    placeholder="(000) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="form-label" htmlFor="service">Service Interested In</label>
                <select
                  id="service"
                  value={form.service}
                  onChange={set('service')}
                  className="form-input bg-white"
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="form-label" htmlFor="location">Project Location</label>
                <input
                  id="location"
                  type="text"
                  value={form.location}
                  onChange={set('location')}
                  className="form-input"
                  placeholder="City, State / Area"
                />
              </div>

              <div>
                <label className="form-label" htmlFor="message">Project Details / Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={set('message')}
                  className="form-input resize-y"
                  placeholder="Tell us a little about your project, timeline, budget range..."
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                <i className="fa-solid fa-paper-plane mr-2" />
                Submit Quote Request
              </button>

              <p className="text-center text-[12px] text-text-muted leading-relaxed">
                Your information is secure and will never be shared. We'll contact you within
                one business day.
              </p>
            </form>
          )}
        </div>
      </aside>
    </>
  )
}
