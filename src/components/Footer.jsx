import { useState } from 'react'
import { Link } from 'react-router-dom'

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio / Projects', to: '/projects' },
  { label: 'Blog / Resources', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const SERVICES = [
  { label: 'Construction & Civil Engineering', to: '/services' },
  { label: 'Real Estate Sales & Brokerage', to: '/services' },
  { label: 'Land Acquisition & Disposal', to: '/services' },
  { label: 'Property Development & Housing', to: '/services' },
  { label: 'Consultancy & Valuation', to: '/services' },
  { label: 'Health & Safety Quality Assurance', to: '/services' },
]

const INSTAGRAM_LINK = 'https://metrakrealestate.com/'

export default function Footer({ onOpenQuote }) {
  const [email, setEmail] = useState('')

  const onSubscribe = (e) => {
    e.preventDefault()
    if (!email) return
    alert(`Thanks for subscribing to Metrak Real Estate updates: ${email}`)
    setEmail('')
  }

  return (
    <footer id="footer" className="relative" style={{ backgroundColor: '#051a26' }}>
      <div className="container-site py-section pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/spectrum logo.jpg"
                alt="Metrak Real Estate and Construction"
                className="w-11 h-11 object-cover rounded-lg shadow-md border border-cyan-accent/30"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-heading font-bold text-white text-[17px] tracking-wide">
                  METRAK REAL ESTATE
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold" style={{ color: 'var(--color-gold-accent)' }}>
                  Real Estate & Construction Ltd
                </span>
              </div>
            </div>

            <p className="text-white/60 text-[14.5px] leading-relaxed mb-6">
              Multi-service real estate, civil engineering, building construction, and land advisory company headquartered in Kampala, Uganda — delivering lasting value across East Africa.
            </p>

            <button type="button" onClick={onOpenQuote} className="btn-primary">
              <i className="fa fa-clipboard-list mr-2" />
              Request a Quote
            </button>
          </div>

          <div>
            <h4
              className="font-heading font-bold uppercase tracking-[0.14em] text-[12.5px] text-white mb-5"
            >
              Quick Links
            </h4>
            <div className="w-10 h-[2px] mb-6" style={{ backgroundColor: 'var(--color-gold-accent)' }} />
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-white/65 text-[14.5px] hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <i className="fa fa-chevron-right text-[9px] text-cyan-accent" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold uppercase tracking-[0.14em] text-[12.5px] text-white mb-5">
              Our Services
            </h4>
            <div className="w-10 h-[2px] mb-6" style={{ backgroundColor: 'var(--color-gold-accent)' }} />
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.to}
                    className="text-white/65 text-[14.5px] hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <i className="fa fa-chevron-right text-[9px] text-cyan-accent" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold uppercase tracking-[0.14em] text-[12.5px] text-white mb-5">
              Contact & Connect
            </h4>
            <div className="w-10 h-[2px] mb-6" style={{ backgroundColor: 'var(--color-gold-accent)' }} />

            <ul className="space-y-3.5 mb-7">
              <li className="flex items-start gap-3">
                <i className="fa fa-map-marker-alt mt-1 text-cyan-accent" />
                <span className="text-white/65 text-[14.5px] leading-relaxed">
                  Head Office: Dungu 5 Building Rm. D.1, Press House Road, Kampala, Uganda
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa fa-phone text-cyan-accent" />
                <a href="tel:+256200959400" className="text-white/65 text-[14.5px] hover:text-white transition-colors">
                  +256 200 959 400 / +256 700 312 036
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa fa-envelope text-cyan-accent" />
                <a href="mailto:info@metrakrealestate.com" className="text-white/65 text-[14.5px] hover:text-white transition-colors">
                  info@metrakrealestate.com
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-2.5 mb-7">
              <a
                href="https://metrakrealestate.com/" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-all hover:-translate-y-0.5" style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1877F2'; e.currentTarget.style.borderColor = '#1877F2' }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
              >
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a
                href="https://metrakrealestate.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-all hover:-translate-y-0.5" style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)'; e.currentTarget.style.borderColor = 'transparent' }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
              >
                <i className="fa-brands fa-instagram" />
              </a>
              <a
                href="https://metrakrealestate.com/" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-all hover:-translate-y-0.5" style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0A66C2'; e.currentTarget.style.borderColor = '#0A66C2' }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
              >
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a
                href="https://wa.me/256200959400" aria-label="WhatsApp" className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-all hover:-translate-y-0.5" style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#25D366'; e.currentTarget.style.borderColor = '#25D366' }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
              >
                <i className="fa-brands fa-whatsapp" />
              </a>
            </div>

            <p className="font-semibold text-white/80 text-[13px] uppercase tracking-[0.08em] mb-3">
              Subscribe for updates
            </p>
            <form onSubmit={onSubscribe} className="flex">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="form-input !py-2.5 !text-[13.5px] !border-white/10 !bg-white/5 !text-white placeholder:text-white/35 focus:!border-cyan-accent"
                style={{ borderRadius: 0 }}
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="w-11 flex items-center justify-center text-white"
                style={{ backgroundColor: 'var(--color-cyan-accent)' }}
              >
                <i className="fa fa-paper-plane text-[13px]" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-white/45 text-[12.5px] text-center md:text-left">
            © {new Date().getFullYear()} Metrak Real Estate and Construction Ltd. All Rights Reserved.
            &nbsp;&nbsp;»&nbsp;&nbsp;
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            &nbsp;&nbsp;»&nbsp;&nbsp;
            <a href="#" className="hover:text-white/70 transition-colors">Site Map</a>
          </p>
          <p className="text-white/35 text-[11.5px] text-center md:text-right">
            Kampala Head Office: Dungu 5 Building Rm. D.1 • Mbarara Western Branch • Jinja Eastern Office
          </p>
        </div>
      </div>
    </footer>
  )
}
