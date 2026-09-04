import { useState, useEffect } from 'react'

// Local downloaded high-resolution images stored in public/images for instant offline rendering
const GALLERY = [
  {
    keywords: ['manufacturing', 'plant', 'cleanroom', 'tech park', 'industrial facility'],
    url: '/images/manufacturing-plant.jpg',
  },
  {
    keywords: ['warehouse', 'logistics', 'distribution center'],
    url: '/images/warehouse-logistics.jpg',
  },
  {
    keywords: ['kitchen', 'renovation', 'quartz', 'cabinets'],
    url: '/images/kitchen-renovation.jpg',
  },
  {
    keywords: ['waterfront', 'dock', 'deck', 'harbor view'],
    url: '/images/waterfront-estate.jpg',
  },
  {
    keywords: ['historic', 'restored', 'brick', 'downtown streetscape'],
    url: '/images/historic-renovation.jpg',
  },
  {
    keywords: ['suburban', 'family home', 'neighborhood', 'front yards'],
    url: '/images/suburban-homes.jpg',
  },
  {
    keywords: ['mixed-use', 'mixed use', 'urban building', 'storefronts'],
    url: '/images/mixed-use.jpg',
  },
  {
    keywords: ['riverside', 'office building', 'glass facade', 'commercial architecture', 'commercial office'],
    url: '/images/office-building.jpg',
  },
  {
    keywords: ['luxury', 'residence', 'home exterior', 'pool'],
    url: '/images/luxury-residence.jpg',
  },
  {
    keywords: ['seo', 'marketing dashboard', 'analytics', 'search rankings'],
    url: '/images/marketing-analytics.jpg',
  },
  {
    keywords: ['sustainable', 'timber', 'solar', 'eco-friendly'],
    url: '/images/sustainable-materials.jpg',
  },
  {
    keywords: ['blueprint', 'budgeting', 'financial planning', 'flat lay', 'documents'],
    url: '/images/blueprints-planning.jpg',
  },
  {
    keywords: ['shaking hands', 'handshake', 'meeting', 'consultation', 'clients'],
    url: '/images/team-handshake.jpg',
  },
  {
    keywords: ['reception', 'headquarters', 'office interior', 'corporate'],
    url: '/images/office-reception.jpg',
  },
  {
    keywords: ['map', 'location pin', 'city map'],
    url: '/images/city-map.jpg',
  },
  {
    keywords: ['craftsmanship', 'hands', 'tools', 'worker'],
    url: '/images/craftsmanship.jpg',
  },
  {
    keywords: ['aerial', 'panoramic', 'crane', 'hero', 'construction site'],
    url: '/images/hero.jpg',
  },
]

const FALLBACK_URLS = [
  '/images/hero.jpg',
  '/images/blueprints-planning.jpg',
  '/images/luxury-residence.jpg',
  '/images/office-building.jpg',
  '/images/craftsmanship.jpg',
]

/**
 * Builds a fast local image URL.
 */
export const buildImgUrl = (prompt = '', size = 'landscape_16_9') => {
  if (!prompt) return FALLBACK_URLS[0]

  const lower = prompt.toLowerCase()
  for (const item of GALLERY) {
    if (item.keywords.some((kw) => lower.includes(kw))) {
      return item.url
    }
  }

  const index = Math.abs(prompt.length) % FALLBACK_URLS.length
  return FALLBACK_URLS[index]
}

export const MAX_WAIT_MS = 200

/**
 * React hook to track when a background image is loaded into cache.
 */
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
