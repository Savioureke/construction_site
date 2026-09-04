import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Why Choose Us', to: '/why-us' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export default function Header({ scrolled, onOpenQuote }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <header
        id="header"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: '#002d40',
          boxShadow: scrolled
            ? '0 6px 28px -10px rgba(0, 0, 0, 0.65)'
            : '0 3px 16px -8px rgba(0, 0, 0, 0.5)',
          borderBottom: '1px solid rgba(0, 188, 212, 0.2)',
        }}
      >
        <div style={{ backgroundColor: '#002636' }} className="text-white">
          <div className="container-site flex items-center justify-between h-9">
            <div className="text-[11.5px] uppercase tracking-[0.12em] font-semibold text-white/85 truncate">
              <span className="text-gold-accent mr-2">•</span>
              Building trust through quality craftsmanship since 2008
            </div>
            <div className="hidden md:flex items-center gap-5 text-[11.5px] uppercase tracking-[0.1em] font-semibold text-white/80">
              <a href="mailto:info@apexconstruction.com" className="hover:text-gold-accent transition-colors">
                <i className="fa fa-envelope mr-1.5" /> info@[placeholder].com
              </a>
              <a href="tel:0000000000" className="hover:text-gold-accent transition-colors">
                <i className="fa fa-phone mr-1.5" /> (000) 000-0000
              </a>
            </div>
          </div>
        </div>

        <div
          className="container-site flex items-center justify-between h-20"
          style={{ backgroundColor: '#002d40' }}
        >
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <div
              className="w-11 h-11 flex items-center justify-center font-heading font-black text-xl"
              style={{
                backgroundColor: 'var(--color-cyan-accent)',
                color: '#ffffff',
                clipPath: 'polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)',
              }}
            >
              A
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading font-bold text-white text-[18px] tracking-wide">
                APEX CONSTRUCTION
              </span>
              <span className="text-[10.5px] uppercase tracking-[0.22em] font-semibold" style={{ color: 'var(--color-gold-accent)' }}>
                Building With Intelligence
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex xl:flex items-center gap-0 mr-3" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `px-2.5 lg:px-2.5 xl:px-3 py-2 font-heading font-bold uppercase tracking-[0.08em] text-[11px] lg:text-[11.5px] xl:text-[12px] transition-colors relative group whitespace-nowrap ${
                    isActive ? 'text-white' : 'text-white/85 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-300"
                      style={{
                        backgroundColor: 'var(--color-gold-accent)',
                        width: isActive ? '75%' : '0%',
                      }}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={onOpenQuote}
              className="btn-primary hidden md:inline-flex"
              aria-label="Request a Quote"
            >
              <i className="fa fa-clipboard-list mr-2 text-[13px]" />
              Request a Quote
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden xl:hidden w-11 h-11 flex items-center justify-center text-white text-xl flex-shrink-0"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <i className="fa fa-bars" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu ${mobileOpen ? 'active' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="container-site pt-6 pb-8">
          <div className="flex items-center justify-between h-20 mb-6">
            <Link to="/" onClick={closeMobile} className="flex items-center gap-3">
              <div
                className="w-11 h-11 flex items-center justify-center font-heading font-black text-xl"
                style={{
                  backgroundColor: 'var(--color-cyan-accent)',
                  color: '#ffffff',
                  clipPath: 'polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)',
                }}
              >
                A
              </div>
              <span className="font-heading font-bold text-white text-[17px] tracking-wide">
                APEX CONSTRUCTION
              </span>
            </Link>
            <button
              type="button"
              onClick={closeMobile}
              className="w-11 h-11 flex items-center justify-center text-white text-2xl"
              aria-label="Close menu"
            >
              <i className="fa fa-times" />
            </button>
          </div>

          <nav className="flex flex-col mb-8" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === '/'}
                onClick={closeMobile}
                className={({ isActive }) =>
                  `py-4 border-b border-white/10 font-heading font-bold uppercase tracking-[0.12em] text-[13px] transition-colors flex items-center justify-between ${
                    isActive ? 'text-cyan-accent' : 'text-white/90 hover:text-cyan-accent'
                  }`
                }
              >
                <span>{item.label}</span>
                <i className="fa fa-chevron-right text-[11px] text-white/40" />
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => { closeMobile(); onOpenQuote() }}
            className="btn-primary w-full"
          >
            <i className="fa fa-clipboard-list mr-2" />
            Request a Free Quote
          </button>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col gap-4 text-[13px] text-white/70">
            <div className="flex items-center gap-3">
              <i className="fa fa-phone text-cyan-accent" />
              (000) 000-0000
            </div>
            <div className="flex items-center gap-3">
              <i className="fa fa-envelope text-cyan-accent" />
              info@[placeholder].com
            </div>
            <div className="flex items-center gap-3">
              <i className="fa fa-map-marker-alt text-cyan-accent" />
              [Company Address]
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
