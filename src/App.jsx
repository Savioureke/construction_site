import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import QuotePanel from './components/QuotePanel.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Projects from './pages/Projects.jsx'
import WhyUs from './pages/WhyUs.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'

function ScrollAndReveal({ children }) {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('.fade-section')
      const vh = window.innerHeight
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top < vh * 0.95) {
          section.classList.add('visible')
        }
      })
    }, 50)
    return () => clearTimeout(timer)
  }, [location.pathname])
  return <div key={location.pathname}>{children}</div>
}

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Router>
      <div className="min-h-screen bg-white w-full">
        <Header
          scrolled={scrolled}
          onOpenQuote={() => setIsQuoteOpen(true)}
        />
        <ScrollAndReveal>
          <Routes>
            <Route path="/" element={<Home onOpenQuote={() => setIsQuoteOpen(true)} />} />
            <Route path="/about" element={<About onOpenQuote={() => setIsQuoteOpen(true)} />} />
            <Route path="/services" element={<Services onOpenQuote={() => setIsQuoteOpen(true)} />} />
            <Route path="/projects" element={<Projects onOpenQuote={() => setIsQuoteOpen(true)} />} />
            <Route path="/why-us" element={<WhyUs onOpenQuote={() => setIsQuoteOpen(true)} />} />
            <Route path="/blog" element={<Blog onOpenQuote={() => setIsQuoteOpen(true)} />} />
            <Route path="/contact" element={<Contact onOpenQuote={() => setIsQuoteOpen(true)} />} />
          </Routes>
        </ScrollAndReveal>
        <Footer onOpenQuote={() => setIsQuoteOpen(true)} />
        <QuotePanel isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      </div>
    </Router>
  )
}
