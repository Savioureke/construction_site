import { useState, useEffect } from 'react'

// All 24 extracted Instagram images provided by user in public/images
export const INSTAGRAM_IMAGES = Array.from({ length: 24 }, (_, i) => `/images/html-img-${i + 1}.jpg`)

const PROMPT_MAP = {
  // Home page
  hero_home: INSTAGRAM_IMAGES[0],
  growth_home: INSTAGRAM_IMAGES[1],
  cta_home: INSTAGRAM_IMAGES[2],

  // About page
  hero_about: INSTAGRAM_IMAGES[3],
  story_about: INSTAGRAM_IMAGES[4],
  cta_about: INSTAGRAM_IMAGES[5],

  // Services page
  hero_services: INSTAGRAM_IMAGES[6],
  cta_services: INSTAGRAM_IMAGES[7],

  // Projects page
  hero_projects: INSTAGRAM_IMAGES[8],
  cta_projects: INSTAGRAM_IMAGES[9],
  proj_luxury: INSTAGRAM_IMAGES[10],
  proj_office: INSTAGRAM_IMAGES[11],
  proj_historic: INSTAGRAM_IMAGES[12],
  proj_suburban: INSTAGRAM_IMAGES[13],
  proj_logistics: INSTAGRAM_IMAGES[14],
  proj_mixed: INSTAGRAM_IMAGES[15],
  proj_waterfront: INSTAGRAM_IMAGES[16],
  proj_manufacturing: INSTAGRAM_IMAGES[17],

  // Why Us page
  hero_whyus: INSTAGRAM_IMAGES[18],
  cta_whyus: INSTAGRAM_IMAGES[19],

  // Blog page
  hero_blog: INSTAGRAM_IMAGES[20],
  faq_blog: INSTAGRAM_IMAGES[21],
  cta_blog: INSTAGRAM_IMAGES[22],
  blog_hiring: INSTAGRAM_IMAGES[0],
  blog_waterfront: INSTAGRAM_IMAGES[1],
  blog_commercial: INSTAGRAM_IMAGES[2],
  blog_budgeting: INSTAGRAM_IMAGES[3],
  blog_seo: INSTAGRAM_IMAGES[4],
  blog_sustainable: INSTAGRAM_IMAGES[5],
  blog_kitchen: INSTAGRAM_IMAGES[6],
  blog_manufacturing: INSTAGRAM_IMAGES[7],
  blog_custom: INSTAGRAM_IMAGES[8],

  // Contact page
  hero_contact: INSTAGRAM_IMAGES[23],
  map_contact: INSTAGRAM_IMAGES[22],
  skyscrapers_contact: INSTAGRAM_IMAGES[21],
}

const KEYWORD_GALLERY = [
  { keywords: ['hiring', 'essential questions'], url: INSTAGRAM_IMAGES[0] },
  { keywords: ['harbor view', 'waterfront estate'], url: INSTAGRAM_IMAGES[1] },
  { keywords: ['trends every business'], url: INSTAGRAM_IMAGES[2] },
  { keywords: ['budgeting', 'cost overruns'], url: INSTAGRAM_IMAGES[3] },
  { keywords: ['local seo', 'rankings'], url: INSTAGRAM_IMAGES[4] },
  { keywords: ['sustainable building'], url: INSTAGRAM_IMAGES[5] },
  { keywords: ['kitchen renovation'], url: INSTAGRAM_IMAGES[6] },
  { keywords: ['tech park advanced manufacturing'], url: INSTAGRAM_IMAGES[7] },
  { keywords: ['custom vs. spec'], url: INSTAGRAM_IMAGES[8] },
  { keywords: ['modern luxury residence'], url: INSTAGRAM_IMAGES[10] },
  { keywords: ['riverside office complex'], url: INSTAGRAM_IMAGES[11] },
  { keywords: ['historic downtown renovation'], url: INSTAGRAM_IMAGES[12] },
  { keywords: ['suburban family home'], url: INSTAGRAM_IMAGES[13] },
  { keywords: ['industrial logistics center'], url: INSTAGRAM_IMAGES[14] },
  { keywords: ['urban mixed-use'], url: INSTAGRAM_IMAGES[15] },
  { keywords: ['waterfront estate renovation'], url: INSTAGRAM_IMAGES[16] },
  { keywords: ['advanced manufacturing facility'], url: INSTAGRAM_IMAGES[17] },
  { keywords: ['shaking hands', 'handshake', 'meeting'], url: INSTAGRAM_IMAGES[5] },
  { keywords: ['map', 'location pin'], url: INSTAGRAM_IMAGES[22] },
  { keywords: ['reception', 'headquarters'], url: INSTAGRAM_IMAGES[23] },
  { keywords: ['blueprints', 'hard hat'], url: INSTAGRAM_IMAGES[9] },
]

export const ALL_IMAGES = INSTAGRAM_IMAGES

/**
 * Builds a fast, non-repeating local image URL using Instagram HTML images.
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
  const hash = Array.from(prompt).reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const index = Math.abs(hash) % ALL_IMAGES.length
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

