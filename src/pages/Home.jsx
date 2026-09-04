import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import CompanyOverview from '../components/CompanyOverview.jsx'
import WhatWeBuild from '../components/WhatWeBuild.jsx'
import SEOAndMarketing from '../components/SEOAndMarketing.jsx'
import RankingStrategy from '../components/RankingStrategy.jsx'
import OurApproach from '../components/OurApproach.jsx'
import MarketingAnalytics from '../components/MarketingAnalytics.jsx'
import LongTermGrowth from '../components/LongTermGrowth.jsx'
import HighlightsStrip from '../components/HighlightsStrip.jsx'
import QuoteCTASection from '../components/QuoteCTASection.jsx'

export default function Home({ onOpenQuote }) {
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
    return () => observer.disconnect()
  }, [])

  return (
    <main className="w-full">
      <Hero onOpenQuote={onOpenQuote} />
      <CompanyOverview />
      <WhatWeBuild />
      <SEOAndMarketing />
      <RankingStrategy />
      <OurApproach />
      <MarketingAnalytics />
      <LongTermGrowth />
      <HighlightsStrip />
      <QuoteCTASection onOpenQuote={onOpenQuote} />
    </main>
  )
}
