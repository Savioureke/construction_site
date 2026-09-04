import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { buildImgUrl, useBgReady, MAX_WAIT_MS } from '../utils/images.js'

const BLOG_CATEGORIES = ['All Articles', 'Construction Tips', 'Project Spotlights', 'Design Trends', 'Homeowner Guides', 'Business Growth']

const POSTS = [
  {
    title: '10 Essential Questions to Ask Before Hiring a Contractor',
    category: 'Homeowner Guides',
    date: 'September 2, 2026',
    readTime: '7 min read',
    author: 'Apex Construction Team',
    excerpt: 'Hiring the right construction partner is the single most important decision for your project success. Here are 10 critical questions to ask before you sign anything.',
    prompt: 'Modern home construction site with detailed planning documents, blueprints, and hard hat on wooden table, professional aesthetic, warm natural lighting',
  },
  {
    title: 'Project Spotlight: The Harbor View Waterfront Estate',
    category: 'Project Spotlights',
    date: 'August 25, 2026',
    readTime: '9 min read',
    author: 'Apex Construction Team',
    excerpt: 'Go behind the scenes of our most ambitious residential renovation to date — a complete transformation of a 30-year-old waterfront property into a modern luxury estate.',
    prompt: 'Luxury waterfront modern home exterior with infinity pool overlooking water, sunset golden hour, premium real estate photography, detailed architecture',
  },
  {
    title: '2026 Commercial Construction Trends Every Business Owner Should Know',
    category: 'Design Trends',
    date: 'August 18, 2026',
    readTime: '6 min read',
    author: 'Apex Construction Team',
    excerpt: 'From sustainable materials to flexible workspace design, explore the top commercial construction trends shaping projects in 2026 and beyond.',
    prompt: 'Modern commercial office interior with sustainable materials, green walls, open collaborative workspace, natural light pouring in, contemporary design',
  },
  {
    title: 'The Complete Guide to Construction Budgeting: Avoiding Cost Overruns',
    category: 'Construction Tips',
    date: 'August 11, 2026',
    readTime: '10 min read',
    author: 'Apex Construction Team',
    excerpt: 'Cost overruns are the #1 cause of construction project stress. Learn proven strategies for accurate budgeting, contingency planning, and staying on track financially.',
    prompt: 'Construction budgeting documents, spreadsheets, calculator, blueprint on desk, organized financial planning, professional office setting with natural light',
  },
  {
    title: 'Why Local SEO Matters for Construction Companies in 2026',
    category: 'Business Growth',
    date: 'August 4, 2026',
    readTime: '8 min read',
    author: 'Apex Construction Team',
    excerpt: 'Did you know 87% of homeowners search online before hiring a contractor? Discover how local SEO puts your business in front of the right people at the right moment.',
    prompt: 'Digital marketing dashboard showing SEO analytics, search rankings, map results for construction business, modern computer screen, professional marketing concept',
  },
  {
    title: 'Sustainable Building Materials: What\'s Worth the Investment?',
    category: 'Construction Tips',
    date: 'July 28, 2026',
    readTime: '7 min read',
    author: 'Apex Construction Team',
    excerpt: 'From cross-laminated timber to solar-integrated roofing, we break down which sustainable building materials deliver real ROI and which ones to approach carefully.',
    prompt: 'Sustainable construction materials, cross laminated timber panels, recycled steel beams, solar panels, eco-friendly building products displayed naturally',
  },
  {
    title: 'Kitchen Renovation Mistakes to Avoid at All Costs',
    category: 'Homeowner Guides',
    date: 'July 21, 2026',
    readTime: '6 min read',
    author: 'Apex Construction Team',
    excerpt: 'A kitchen renovation is one of the highest-ROI home improvements you can make — but only if done right. Here are the top 8 mistakes we see homeowners make.',
    prompt: 'Beautiful modern renovated kitchen with island, premium cabinets, quartz countertops, designer lighting, clean and organized, high-end residential photography',
  },
  {
    title: 'Project Spotlight: The Tech Park Advanced Manufacturing Facility',
    category: 'Project Spotlights',
    date: 'July 14, 2026',
    readTime: '8 min read',
    author: 'Apex Construction Team',
    excerpt: 'How we delivered a 95,000 sq ft state-of-the-art manufacturing plant 3 weeks ahead of schedule and 4% under budget — without compromising quality.',
    prompt: 'Modern advanced manufacturing facility exterior, clean industrial architecture, loading docks, large warehouse, professional aerial photography, clear sky',
  },
  {
    title: 'Custom vs. Spec: Which Home Building Approach Is Right for You?',
    category: 'Homeowner Guides',
    date: 'July 7, 2026',
    readTime: '9 min read',
    author: 'Apex Construction Team',
    excerpt: 'Trying to decide between a custom build and a spec home? We compare cost, timeline, customization, and resale value to help you make the right choice.',
    prompt: 'Two contrasting home styles side by side concept: custom luxury home with unique architecture and move-in-ready spec home with standard finishes',
  },
]

export default function Blog({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('All Articles')
  const [cardReady, setCardReady] = useState({})

  const HERO_PROMPT = 'Modern construction blog concept hero: blueprints on wooden table, laptop showing blog article, hard hat, cup of coffee, warm natural lighting, professional flat lay photography'
  const FAQ_PROMPT = 'Construction expert consulting with clients in modern office, reviewing 3D building renderings on computer screen, professional meeting, warm lighting, high detail photography'
  const CTA_PROMPT = 'Newsletter subscription concept: email icon, construction newsletter on laptop, notepad with pencil, warm modern aesthetic, soft lighting'

  const HERO_IMG_URL = useMemo(() => buildImgUrl(HERO_PROMPT, 'landscape_16_9'), [])
  const FAQ_IMG_URL = useMemo(() => buildImgUrl(FAQ_PROMPT, 'portrait_4_3'), [])
  const CTA_IMG_URL = useMemo(() => buildImgUrl(CTA_PROMPT, 'landscape_16_9'), [])

  const heroReady = useBgReady(HERO_IMG_URL)
  const faqReady = useBgReady(FAQ_IMG_URL)
  const ctaReady = useBgReady(CTA_IMG_URL)

  const filteredPosts = activeCategory === 'All Articles'
    ? POSTS
    : POSTS.filter((p) => p.category === activeCategory)

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

  useEffect(() => {
    const timeouts = []
    filteredPosts.forEach((post) => {
      const key = `blog-${post.title}`
      if (cardReady[key]) return
      const img = new Image()
      img.referrerPolicy = 'no-referrer-when-downgrade'
      const done = () => setCardReady((prev) => prev[key] ? prev : { ...prev, [key]: true })
      img.onload = done
      img.onerror = done
      img.src = buildImgUrl(post.prompt, 'landscape_4_3')
      const t = setTimeout(done, MAX_WAIT_MS)
      timeouts.push(t)
    })
    return () => timeouts.forEach((t) => clearTimeout(t))
  }, [filteredPosts])

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
                Insights & Updates
              </span>
            </div>
            <h1
              className="font-heading hero-h1 text-white mb-5"
              style={{ textShadow: '0 4px 30px rgba(0,0,0,0.45)', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              Construction <span style={{ color: 'var(--color-cyan-accent)' }}>Blog & Resources</span>
            </h1>
            <p className="text-white/85 text-[18px] lg:text-[20px] leading-relaxed max-w-2xl font-body">
              Practical guides, project spotlights, design trends, and industry insights —
              curated for homeowners, business owners, and construction professionals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-section-sm bg-white fade-section">
        <div className="container-site">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 font-bold uppercase tracking-wider transition-all duration-200 text-[12px] ${
                  activeCategory === cat
                    ? 'text-white'
                    : 'text-text-body border hover:border-cyan-accent hover:text-cyan-accent'
                }`}
                style={{
                  backgroundColor: activeCategory === cat ? 'var(--color-cyan-accent)' : 'transparent',
                  border: activeCategory === cat ? '2px solid var(--color-cyan-accent)' : '2px solid rgba(3, 42, 58, 0.15)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid-3-to-2 card-scaled">
            {filteredPosts.map((post) => {
              const imgKey = `blog-${post.title}`
              const imgUrl = buildImgUrl(post.prompt, 'landscape_4_3')
              const isReady = cardReady[imgKey]
              return (
                <article
                  key={post.title}
                  className="relative bg-white border overflow-hidden transition-all duration-300 hover:-translate-y-2 group cursor-pointer flex flex-col"
                  style={{ borderColor: 'rgba(3, 42, 58, 0.08)' }}
                >
                  <div
                    className="relative w-full overflow-hidden bg-img-placeholder-portrait"
                    style={{ minHeight: '220px' }}
                  >
                    {!isReady && (
                      <div className="img-loader img-loader-sm">
                        <div className="img-loader-spinner" />
                      </div>
                    )}
                    <img
                      src={imgUrl}
                      alt={post.title}
                      referrerPolicy="no-referrer-when-downgrade"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ minHeight: '220px' }}
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span
                        className="px-3 py-1.5 font-bold uppercase tracking-[0.1em] text-[11px] text-white"
                        style={{ backgroundColor: 'var(--color-navy-dark)' }}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-4 mb-4 text-[13px] text-text-gray">
                      <div className="flex items-center gap-1.5">
                        <i className="fa-solid fa-calendar text-cyan-accent" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <i className="fa-solid fa-clock text-cyan-accent" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3
                      className="font-heading font-bold text-xl leading-tight mb-4 transition-colors group-hover:text-cyan-accent"
                      style={{ color: 'var(--color-navy-deep)' }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-text-body/75 leading-relaxed text-[15px] mb-5 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="pt-5 border-t border-black/5 flex items-center justify-between">
                      <div className="flex items-center gap-2.5 text-[13px] text-text-gray">
                        <div
                          className="w-8 h-8 flex items-center justify-center font-heading font-bold text-[13px] text-white rounded-full"
                          style={{ backgroundColor: 'var(--color-cyan-accent)' }}
                        >
                          A
                        </div>
                        {post.author}
                      </div>
                      <span
                        className="font-bold uppercase tracking-[0.1em] text-[12px] inline-flex items-center gap-2 transition-colors"
                        style={{ color: 'var(--color-cyan-accent)' }}
                      >
                        Read
                        <i className="fa-solid fa-arrow-right text-[10px]" />
                      </span>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-section fade-section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-eyebrow">Construction FAQ</span>
              <h2 className="section-h2 mb-7">
                Quick Answers to <span style={{ color: 'var(--color-cyan-accent)' }}>Common Questions</span>
              </h2>
              <div className="space-y-5">
                {[
                  { q: 'How long does a typical project take?', a: 'Timelines vary significantly by project size and complexity. A custom home typically takes 6–10 months, a major renovation 3–6 months, and commercial projects 9–18 months.' },
                  { q: 'Do you handle permits and inspections?', a: 'Yes. We manage the entire permitting process, schedule all required inspections, and ensure full code compliance throughout your project.' },
                  { q: 'Can I make changes once construction starts?', a: 'We understand plans evolve. Minor changes can be accommodated; major scope changes require a written change order to keep timelines and budgets transparent.' },
                  { q: 'What warranty do you provide?', a: 'We provide a comprehensive 1-year workmanship warranty on every project, plus manufacturer warranties on materials. Extended warranties are available for certain systems.' },
                ].map((item, i) => (
                  <details key={i} className="group bg-white p-6 border cursor-pointer" style={{ borderColor: 'rgba(3, 42, 58, 0.08)' }}>
                    <summary className="flex items-start justify-between gap-4 list-none font-heading font-bold text-[17px]" style={{ color: 'var(--color-navy-deep)' }}>
                      <span>{item.q}</span>
                      <i className="fa-solid fa-chevron-down transition-transform group-open:rotate-180 text-cyan-accent mt-1 flex-shrink-0" />
                    </summary>
                    <p className="mt-4 text-text-body/80 leading-relaxed text-[15px]">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
            <div className="relative">
              <div
                className="relative w-full min-h-[500px] bg-img-placeholder-portrait"
                style={{
                  backgroundImage: `url('${FAQ_IMG_URL}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {!faqReady && (
                  <div className="img-loader" style={{ backgroundColor: 'transparent' }}>
                    <div className="img-loader-spinner" />
                  </div>
                )}
              </div>
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
              Stay Updated with Our <span style={{ color: 'var(--color-cyan-accent)' }}>Latest Articles</span>
            </h2>
            <p className="text-body-copy-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              Subscribe to receive our best construction tips, project spotlights, and
              industry insights delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="form-input !py-4 !text-[15px] flex-1"
              />
              <button type="button" className="btn-primary whitespace-nowrap">
                <i className="fa fa-paper-plane mr-2 text-[13px]" />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
