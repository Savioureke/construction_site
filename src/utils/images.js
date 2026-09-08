import { useState, useEffect } from 'react'

// Direct mapping from exact prompts or keywords to unique local images in public/images
const PROMPT_MAP = {
  // Home page
  hero_home: '/images/hero.jpg',
  growth_home: '/images/growth-home.jpg',
  cta_home: '/images/cta-home.jpg',

  // About page
  hero_about: '/images/hero-about.jpg',
  story_about: '/images/company-story-about.jpg',
  cta_about: '/images/cta-about.jpg',

  // Services page
  hero_services: '/images/hero-services.jpg',
  cta_services: '/images/cta-services.jpg',

  // Projects page
  hero_projects: '/images/hero-projects.jpg',
  cta_projects: '/images/cta-projects.jpg',
  proj_luxury: '/images/proj-luxury-residence.jpg',
  proj_office: '/images/proj-office-complex.jpg',
  proj_historic: '/images/proj-historic-renovation.jpg',
  proj_suburban: '/images/proj-suburban-homes.jpg',
  proj_logistics: '/images/proj-logistics-center.jpg',
  proj_mixed: '/images/proj-mixed-use.jpg',
  proj_waterfront: '/images/proj-waterfront-estate.jpg',
  proj_manufacturing: '/images/proj-manufacturing.jpg',

  // Why Us page
  hero_whyus: '/images/hero-whyus.jpg',
  cta_whyus: '/images/cta-whyus.jpg',

  // Blog page
  hero_blog: '/images/hero-blog.jpg',
  faq_blog: '/images/faq-blog.jpg',
  cta_blog: '/images/cta-blog.jpg',
  blog_hiring: '/images/blog-hiring-contractor.jpg',
  blog_waterfront: '/images/blog-waterfront-spotlight.jpg',
  blog_commercial: '/images/blog-commercial-trends.jpg',
  blog_budgeting: '/images/blog-budgeting-guide.jpg',
  blog_seo: '/images/blog-local-seo.jpg',
  blog_sustainable: '/images/blog-sustainable-materials.jpg',
  blog_kitchen: '/images/blog-kitchen-renovation.jpg',
  blog_manufacturing: '/images/blog-manufacturing-spotlight.jpg',
  blog_custom: '/images/blog-custom-vs-spec.jpg',

  // Contact page
  hero_contact: '/images/hero-contact.jpg',
  map_contact: '/images/city-map-contact.jpg',
  skyscrapers_contact: '/images/skyscrapers-contact.jpg',
}

const KEYWORD_GALLERY = [
  { keywords: ['hiring', 'essential questions'], url: '/images/blog-hiring-contractor.jpg' },
  { keywords: ['harbor view', 'waterfront estate'], url: '/images/blog-waterfront-spotlight.jpg' },
  { keywords: ['trends every business'], url: '/images/blog-commercial-trends.jpg' },
  { keywords: ['budgeting', 'cost overruns'], url: '/images/blog-budgeting-guide.jpg' },
  { keywords: ['local seo', 'rankings'], url: '/images/blog-local-seo.jpg' },
  { keywords: ['sustainable building'], url: '/images/blog-sustainable-materials.jpg' },
  { keywords: ['kitchen renovation'], url: '/images/blog-kitchen-renovation.jpg' },
  { keywords: ['tech park advanced manufacturing'], url: '/images/blog-manufacturing-spotlight.jpg' },
  { keywords: ['custom vs. spec'], url: '/images/blog-custom-vs-spec.jpg' },
  { keywords: ['modern luxury residence'], url: '/images/proj-luxury-residence.jpg' },
  { keywords: ['riverside office complex'], url: '/images/proj-office-complex.jpg' },
  { keywords: ['historic downtown renovation'], url: '/images/proj-historic-renovation.jpg' },
  { keywords: ['suburban family home'], url: '/images/proj-suburban-homes.jpg' },
  { keywords: ['industrial logistics center'], url: '/images/proj-logistics-center.jpg' },
  { keywords: ['urban mixed-use'], url: '/images/proj-mixed-use.jpg' },
  { keywords: ['waterfront estate renovation'], url: '/images/proj-waterfront-estate.jpg' },
  { keywords: ['advanced manufacturing facility'], url: '/images/proj-manufacturing.jpg' },
  { keywords: ['shaking hands', 'handshake', 'meeting'], url: '/images/cta-about.jpg' },
  { keywords: ['map', 'location pin'], url: '/images/city-map-contact.jpg' },
  { keywords: ['reception', 'headquarters'], url: '/images/hero-contact.jpg' },
  { keywords: ['blueprints', 'hard hat'], url: '/images/cta-projects.jpg' },
]

const ALL_IMAGES = Object.values(PROMPT_MAP)

/**
 * Builds a fast, non-repeating local image URL.
 */
export const buildImgUrl = (prompt = '', size = 'landscape_16_9') => {
  if (!prompt) return ALL_IMAGES[0]

  const lower = prompt.toLowerCase()

  // Match keyword gallery first
  for (const item of KEYWORD_GALLERY) {
    if (item.keywords.some((kw) => lower.includes(kw))) {
      return item.url
    }
  }

  // Exact prompt checks
  if (lower.includes('aerial panoramic photograph') || lower.includes('heavy machinery')) return PROMPT_MAP.hero_home
  if (lower.includes('modern construction team meeting at a high-rise')) return PROMPT_MAP.growth_home
  if (lower.includes('aerial view of modern suburban housing')) return PROMPT_MAP.cta_home
  if (lower.includes('headquarters building exterior')) return PROMPT_MAP.hero_about
  if (lower.includes('collaborating around blueprints')) return PROMPT_MAP.story_about
  if (lower.includes('precision tools')) return PROMPT_MAP.cta_about
  if (lower.includes('active construction sites with cranes')) return PROMPT_MAP.hero_services
  if (lower.includes('portfolio of completed construction')) return PROMPT_MAP.hero_projects
  if (lower.includes('shaking hands with happy clients')) return PROMPT_MAP.hero_whyus
  if (lower.includes('blog concept hero')) return PROMPT_MAP.hero_blog
  if (lower.includes('office reception area')) return PROMPT_MAP.hero_contact

  // Fallback deterministically without repeats
  const index = Math.abs(prompt.length) % ALL_IMAGES.length
  return ALL_IMAGES[index]
}

export const MAX_WAIT_MS = 200

export const useBgReady = (url) => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!url) return
    let cancelled = false
    const mark = () => {
      if (!cancelled) setReady(true)
    }

    const img = new Image()
    img.onload = mark
    img.onerror = mark
    img.src = url

    const t = setTimeout(mark, MAX_WAIT_MS)
    return () => {
      cancelled = true
      clearTimeout(t)
    }
  }, [url])

  return ready
}
