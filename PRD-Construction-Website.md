# Product Requirements Document (PRD)
## AI-Powered Construction Company — Presentation Website

**Prepared for:** Trae AI (build agent)
**Prepared by:** Saviour (Project Owner / Technical Lead)
**Document type:** Build specification — single-page presentation website
**Reference design source:** The Sterling Way (ESG) - Sterling Infrastructure, Inc.html
**Content source:** Client-provided "AI-Powered Construction Website & Digital Marketing Proposal" document

---

## 1. Project Summary

Build a **modern, professional, responsive presentation website** for a construction company. This is **not** a clone of strlco.com's business, brand, or copy — it is a **new site that reuses only strlco.com's visual design system** (layout patterns, section structure, typography/fonts, spacing rhythm, and general styling language) and replaces **100% of the content** with the material supplied by the client (see Section 4 — Content Map).

This build exists for a **presentation/pitch purpose**, so visual polish, structural fidelity to the reference layout, and flawless responsive behavior are the top priorities.

### 1.1 Hard Rules (Non-Negotiable)

1. **Design/UI only, not content, is cloned from strlco.com.** Do not reuse any Sterling Infrastructure text, company name, logos, images, subsidiary names, investor-relations content, or any Sterling-specific copy anywhere in the build.
2. **Typography and styling language must match strlco.com exactly** — same font families (headings + body), same font-weight pairing conventions, same letter-spacing/uppercase treatment on labels and nav items, same button styles, same section-spacing rhythm, same color-application *pattern* (dark overlay hero, white section backgrounds alternating with subtle tinted sections, bold uppercase section eyebrows like "COMPANY OVERVIEW", "OUR COMMITMENTS", "OUR AWARDS").
3. **All content must come from the client-provided proposal document** (Section 4). Do not invent company facts, do not fabricate testimonials, do not invent staff names, do not fabricate a physical address or phone number — use clearly marked placeholders for anything not supplied (see Section 4.9).
4. **Fully responsive**, per the strict rules in Section 6. This is the most important functional requirement of the entire build — verify it manually at the breakpoints listed before calling any section "done."
5. This is a **static/presentation site** — no real backend, database, payments, or authentication is required. Forms should be functional-looking (client-side validated) but can submit to a placeholder endpoint (e.g., Formspree/EmailJS/mailto) since no CMS/backend was requested.

---

## 2. Goal & Audience

- **Goal:** A polished, believable, professional single-site presentation that shows a construction company how their brand could look and function online, wrapped around the AI-powered SEO/marketing offering described in the proposal.
- **Audience:** The construction company decision-maker reviewing this as a sales/pitch deliverable, viewed on desktop, tablet, and mobile during a live walkthrough or asynchronously.
- **Success criteria:** The site should read as a real, live construction company website — not a mockup, not a slide deck, not a template — while every visual and structural cue mirrors the reference site's quality bar.

---

## 3. Design System Extraction (Do This First)

Before writing any content sections, Trae must extract and document the actual design tokens from https://www.strlco.com/ by inspecting the live site's rendered CSS (via browser devtools / computed styles), not by guessing. Produce a short internal style-guide (can be a `DESIGN_TOKENS.md` or a top-of-CSS comment block) capturing:

- **Font families**: exact `font-family` stacks used for (a) nav/headers/eyebrow labels, (b) H1/H2/H3 headings, (c) body copy, (d) buttons/CTAs. Match weights (e.g., bold/uppercase nav links, semi-bold headings).
- **Type scale**: approximate `font-size`/`line-height` for H1 (hero), H2 (section titles), H3 (card/subsection titles), body text, small print/footer text — at desktop size, to be used as the baseline before applying the mobile/tablet rules in Section 6.
- **Color palette**: primary dark color (used for header bg / overlays), primary accent color (used for links/buttons/eyebrow text), text colors on light vs. dark backgrounds, section background alternation pattern (white → light gray/tint → white, etc.).
- **Spacing rhythm**: vertical padding between major sections, container max-width, grid gutters.
- **Component patterns to replicate**:
  - Sticky/fixed top navigation with logo left, horizontal nav right, dropdown submenus on hover/click
  - Full-bleed hero section with background image, dark overlay, centered/left-aligned bold headline, and 2–3 pill/link-style CTAs layered near the bottom of the hero
  - "Eyebrow" small-caps section labels above every major H2 (e.g., "COMPANY OVERVIEW")
  - Icon + label link cards in a horizontal row (used for the three "solutions" links)
  - Three-column "commitment" cards, each with heading, paragraph, and a subtle link-through affordance
  - Horizontal logo/award strip section with evenly spaced grayscale-or-color logos
  - Multi-column dark footer with quick links column, partner/logo grid, legal line, and social icons
  - Slide-in side panel / modal form triggered from a header button (in the reference this is "Request Investor Pack" — repurpose this **pattern only** as a "Request a Quote" panel, see Section 4.8)
- **Buttons**: shape (sharp vs. rounded), border vs. filled, hover state, uppercase vs. sentence case.
- **Imagery treatment**: full-bleed hero photography, dark gradient overlays for text legibility, consistent aspect ratios for card/section images.

**Deliverable of this step:** a documented set of design tokens (CSS variables) that all subsequent components are built from — so it's clear the visual system was reverse-engineered systematically, not eyeballed per-section.

---

## 4. Content Map (Source → Site Section)

All copy below is taken directly from the client's proposal document. Trae should adapt tone slightly for web readability (short punchy headings, scannable bullets) but must not alter facts or invent new claims.

### 4.1 Header / Navigation
- Logo placeholder (left) — see Section 4.9 for placeholder handling
- Primary nav (match strlco.com's horizontal style, dropdowns optional / can be flattened to a simpler single-level nav since this company won't have as many sub-pages):
  - Home
  - About Us
  - Services
  - Projects / Portfolio
  - Why Choose Us
  - Blog
  - Contact / Get a Quote
- A prominent header CTA button: **"Request a Quote"** (opens the slide-in panel from Section 4.8)

### 4.2 Hero Section
- Full-bleed construction-site background photo with dark overlay (placeholder image — see 4.9)
- Eyebrow label (uppercase, small, letter-spaced): **"BUILDING WITH INTELLIGENCE"** (or similar — Trae may propose 1–2 alternate short taglines derived from the proposal's tone, e.g. "SMARTER CONSTRUCTION, STRONGER RESULTS")
- Headline (H1): a construction-focused value statement synthesized from the proposal's business goal, e.g. **"Trusted Construction. Continuously Growing Visibility."**
- Subheadline: one sentence drawn from the proposal's "Business Goal" section — *"Get found → Build trust → Generate enquiries → Convert visitors into clients."*
- 3 quick-link CTA chips/buttons under the hero copy, matching the reference site's 3-icon-link hero pattern, but relabeled to this company's core service categories:
  - Residential Construction
  - Commercial Construction
  - Get a Free Quote

### 4.3 Company Overview Section
- Eyebrow: **"COMPANY OVERVIEW"**
- H2: a statement built from the proposal's stated objective — *"A Website Built to Win More Construction Projects"*
- Body copy, adapted from the proposal's "Business Goal" and "Why This Approach" sections:
  > Most construction websites are created once and left unchanged. Ours is different — built with a continuous AI-powered SEO and marketing system so it keeps improving after launch, helping you get found, build trust, generate enquiries, and convert visitors into clients.
- Three icon-link cards (same visual pattern as strlco.com's three-solution row), pulled from the proposal's "What We Will Build" list, condensed to three core service pillars:
  1. **Residential & Commercial Construction**
  2. **Project Portfolio & Case Studies**
  3. **Quote Requests & Client Support**

### 4.4 What We Build — Website Features Section
- Eyebrow: **"WHAT'S INCLUDED"**
- H2: **"Everything Your Construction Business Needs Online"**
- Grid of feature cards (this is a **multi-per-row grid** — apply the Section 6 responsive font-size rule), sourced directly from the proposal's feature bullet list:
  - Professional Home Page
  - About the Company
  - Construction Services
  - Projects / Portfolio Gallery
  - Individual Project Pages
  - Residential & Commercial Construction Services
  - Contact & Quote Request Forms
  - Testimonials / Client Reviews
  - Frequently Asked Questions (FAQ)
  - Blog / Construction Resources
  - Google Maps & Business Information
  - WhatsApp Contact Integration
  - Mobile, Tablet & Desktop Optimization
  - Fast-Loading, SEO-Friendly Structure

  Desktop suggested layout: 4 per row. (Apply Section 6 mobile/tablet rule: 2 per row, larger text.)

### 4.5 AI-Powered SEO & Marketing System Section
- Eyebrow: **"AI-POWERED SEO & MARKETING"**
- H2: **"A Website That Keeps Improving After Launch"**
- Intro paragraph, adapted from the proposal's "AI-Powered SEO & Marketing System" section.
- Grid/list of capabilities (multi-per-row — apply Section 6 rule):
  - Keyword research & opportunity identification
  - SEO content planning
  - Blog/content generation & optimization
  - Optimization of existing website pages
  - Meta titles & descriptions
  - Internal linking recommendations
  - Search-intent analysis
  - Content performance analysis
  - Identification of new search topics
  - Competitor & market analysis
  - Conversion optimization recommendations
  - Continuous SEO improvement

### 4.6 Google Ranking Strategy Section
- Eyebrow: **"OUR SEO STRATEGY"**
- H2: **"SEO Built In From the Start — Not Bolted On Later"**
- Six-item structured list (can be numbered cards, 1 row of 3 + 1 row of 3, or 2-column on desktop — apply Section 6 rule since it's multi-per-row), each with a short title + 1–2 sentence description, taken directly from the proposal's six-part strategy:
  1. **Technical SEO** — Clean site structure, fast loading speed, mobile optimization, indexing configuration, and structured data.
  2. **Local SEO** — Optimization around the locations and service areas your company covers.
  3. **Service-Based SEO** — Dedicated optimized pages for each major construction service.
  4. **Content SEO** — An ongoing blog/content system targeting relevant search queries.
  5. **On-Page Optimization** — Pages optimized around keywords, search intent, headings, structure, and internal links.
  6. **Continuous Optimization** — Ongoing use of analytics and search-performance data to guide improvements.

### 4.7 "Our Commitments"-style Section → "Business Goal" Section
Reuse the reference site's **3-column commitment card pattern** ("To Our People", "To Our Customers", "To Our Investors") but repurpose it around the proposal's funnel language:
- Eyebrow: **"OUR APPROACH"**
- H2 (styled like the reference's bold serif-ish statement line): **"Get Found. Build Trust. Generate Enquiries. Convert Clients."**
- Three columns:
  1. **Get Found** — SEO and local visibility strategy that puts your company in front of people actively searching for construction services.
  2. **Build Trust** — A credible, professional site with real project case studies, testimonials, and clear service information.
  3. **Convert Visitors** — Clear calls-to-action, easy quote requests, and a site designed around enquiries, not just aesthetics.

### 4.8 Marketing & Analytics Section
- Eyebrow: **"DATA-DRIVEN GROWTH"**
- H2: **"Tracking What Matters"**
- Short paragraph + simple icon list from the proposal's "Marketing & Analytics" bullets:
  - Search impressions
  - Search clicks
  - Keywords
  - Website visitors
  - Popular pages
  - User behavior
  - Conversion opportunities
  - SEO growth

### 4.9 Long-Term Growth Section
- Eyebrow: **"BUILT TO GROW"**
- H2: **"A Website That Grows With Your Business"**
- Paragraph from the proposal's "Long-Term Growth" section, plus a bulleted list of future additions:
  - New services
  - New project locations
  - New project case studies
  - More SEO landing pages
  - Construction guides & blog articles
  - Lead-generation campaigns
  - AI-powered marketing features
  - Online quotation/request systems

### 4.10 Awards/Logo-Strip Equivalent → "Why This Approach" Callout
Reuse the reference site's horizontal logo-strip section pattern, but since there are no real award logos supplied, repurpose this slot as a **stat/highlight strip** instead (3–4 short stat-style callouts in the same horizontal layout), e.g.:
- "SEO Built In From Day One"
- "Continuously Optimized, Not Static"
- "Built for Enquiries & Conversions"
- "Mobile, Tablet & Desktop Ready"

(If the client later supplies real certifications/awards/partner logos, this section should swap back to an image-logo strip identical to the reference pattern.)

### 4.11 Quote Request / Contact Section + Slide-in Panel
- Full-width contact/CTA section near the bottom (before footer), background-tinted, with H2: **"Let's Talk About Your Next Project"** and a short line inviting the visitor to request a free quote or discuss target locations, services, and competitors (from the proposal's closing line).
- A **slide-in side panel form** (reusing the reference site's "Request Investor Pack" *interaction pattern* only), retitled **"Request a Free Quote"**, with fields:
  - Full Name (required)
  - Company (optional)
  - Email (required)
  - Phone (optional)
  - Service Interested In (dropdown: Residential / Commercial / Both / Not Sure)
  - Project Location
  - Message
  - Submit button
- This panel is triggered from the header "Request a Quote" button (matches reference site's header-triggered slide-in behavior).

### 4.12 Footer
Match the reference's dark, multi-column footer structure:
- Quick Links column (Home, About, Services, Portfolio, Blog, Contact)
- Company info column (placeholder company name, placeholder address/phone/email — clearly marked as placeholders, see 4.13)
- Social icons row (Facebook, Instagram, LinkedIn — link placeholders, `#` until real profiles are supplied)
- Legal line: `© [Current Year] [Company Name]. All Rights Reserved. » Privacy Policy » Site Map`

### 4.13 Placeholder Content Policy
The proposal document does not include: the company's actual name, logo, real address, phone number, real project photos, real testimonials, or real staff bios. Trae must:
- Use a clearly generic placeholder company name (e.g., **"[Construction Company Name]"** or a neutral sample name like **"Apex Construction Group"** clearly noted in project notes as a placeholder pending the client's real branding).
- Use royalty-free/stock-style construction photography for hero and project images (clearly sourced, no copyrighted/branded imagery).
- Leave phone/address fields visually present but filled with obvious placeholder values (e.g., `(000) 000-0000`, `[Company Address]`) so the client can see where their real info will go.
- Do not fabricate testimonials, staff names, or client logos.

---

## 5. Information Architecture

Single-page scrolling site (matches the reference site's homepage-driven structure) with anchor-linked nav:

```
Header (sticky) — Logo | Nav | Request a Quote (CTA)
  └─ Hero
  └─ Company Overview
  └─ What We Build (Features Grid)
  └─ AI-Powered SEO & Marketing System
  └─ Google Ranking Strategy
  └─ Our Approach (Get Found / Build Trust / Convert)
  └─ Marketing & Analytics
  └─ Long-Term Growth
  └─ Highlights Strip
  └─ Quote/Contact CTA Section
  └─ Footer
Slide-in Panel — Request a Free Quote (triggered globally from header)
```

If Trae determines a multi-page structure is cleaner (e.g., separate About, Services, Contact pages) that also mirrors the reference site's actual multi-page nav — that is acceptable **as long as the single-page version above is delivered as the primary presentation view**, since this is for a pitch/demo. Confirm this choice with the project owner before building multi-page navigation logic.

---

## 6. Responsive Design Requirements (Critical — Read Carefully)

This is the most important functional spec in this document. Follow it exactly.

### 6.1 Core Principle
**Mobile and tablet views must be structurally identical to desktop** — same sections, same order, same content, same visual style, same imagery, same component types. The **only structural difference allowed** is how many items sit per row in multi-item grids/rows.

### 6.2 Grid/Row Rule
- **Desktop:** use whatever natural column count fits the content (e.g., 3 or 4 per row for feature grids, 3 per row for the "Our Approach" cards, etc.) — normal/baseline font size.
- **Tablet & Mobile:** any row/grid that has **more than 1 item per row on desktop** must reflow to **exactly 2 items per row** (never 1, never 3+, never a single full-width stack) — regardless of how many columns it had on desktop.
- **Rows that are already 1 item per row on desktop** (e.g., a full-width paragraph, a single hero headline, a single full-width CTA section) **stay 1 item per row on tablet and mobile too** — no change in layout for these.

### 6.3 Font-Size Rule (tied directly to the grid rule above)
- **Any section where content is 1-per-row on all devices:** use **normal/standard font size** at every breakpoint (no special scaling beyond normal fluid responsive adjustment).
- **Any section where content is more-than-1-per-row on desktop** (and therefore becomes 2-per-row on tablet/mobile per Section 6.2): the font size for that content's headings and body text **must increase above the normal baseline specifically at tablet and mobile breakpoints**, so that text remains highly legible and doesn't look tiny inside the narrower 2-per-row cards. Desktop keeps normal-size text for these same items (since desktop has more columns, more space).

**In short:**

| Layout type | Desktop | Tablet/Mobile |
|---|---|---|
| 1 item per row | Normal font | Normal font (unchanged) |
| 2+ items per row on desktop | Normal font | **2 per row**, font size increased above normal for readability |

### 6.4 Breakpoints
- Desktop: ≥ 1024px
- Tablet: 768px – 1023px
- Mobile: ≤ 767px
- Tablet and mobile share the **same 2-per-row + larger-font treatment** described above — they should look and behave the same as each other, differing only in overall scale/spacing, not in structure.

### 6.5 Other Responsive Requirements
- Sticky header must collapse into a mobile hamburger/off-canvas menu on tablet and mobile, styled consistently with the reference site's mobile nav pattern (full-height overlay or slide-in menu).
- Hero section text and CTAs must remain fully legible and properly stacked/centered on all breakpoints — no text overflow or overlap with background imagery.
- The slide-in quote request panel must become a full-screen (or near-full-screen) overlay on mobile, matching how the reference site's slide-in panel adapts on small screens.
- Images must be responsive (`srcset`/fluid sizing) — no fixed-pixel-width images that cause horizontal scroll on mobile.
- Touch targets (buttons, nav links, form fields) must meet a minimum 44×44px tap area on mobile.
- No horizontal scrolling at any breakpoint.

### 6.6 Verification Checklist (Trae must confirm before marking responsive work complete)
- [ ] Every desktop 3-or-4-column grid becomes exactly 2 columns on both tablet and mobile.
- [ ] Every desktop full-width/1-column block stays full-width/1-column on tablet and mobile.
- [ ] Text inside 2-per-row cards on tablet/mobile is visibly larger than the equivalent desktop card text (not smaller, not the same).
- [ ] Text inside 1-per-row sections is the same normal size across all breakpoints.
- [ ] No layout uses 1-per-row or 3+-per-row on tablet/mobile for content that was multi-column on desktop.
- [ ] Nav collapses correctly; slide-in quote panel works correctly; no horizontal scroll anywhere.

---

## 7. Technical Requirements

### 7.1 Recommended Stack
- **Frontend:** HTML5/CSS3 + vanilla JS, or a lightweight framework (React/Vite or Next.js static export) — Trae's choice, optimized for fast static hosting and easy handoff.
- **Styling:** CSS with custom properties (CSS variables) for the design tokens extracted in Section 3, so the theme is centrally controlled and easy to tweak per client feedback.
- **Fonts:** Self-hosted or Google Fonts match of the exact typefaces identified in Section 3 (do not substitute a "close enough" font — match family and weights precisely).
- **Forms:** Client-side validation; submission wired to a placeholder service (Formspree, EmailJS, or `mailto:`) since no backend/CMS was requested. Note clearly in code comments where a real backend/CRM integration would be wired in later.
- **Images:** Optimized (WebP with fallback), responsive `srcset`, lazy-loaded below the fold.

### 7.2 Performance & SEO
- Semantic HTML5 structure (proper heading hierarchy, `<nav>`, `<main>`, `<footer>`, `<section>`).
- Meta title/description, Open Graph tags, and a favicon (placeholder acceptable).
- Fast-loading: compressed assets, minimal render-blocking JS/CSS, target Lighthouse performance score ≥ 90 on both mobile and desktop.
- Accessible: proper alt text on all images, sufficient color contrast, keyboard-navigable nav and forms, ARIA labels on the slide-in panel and hamburger menu.

### 7.3 Deployment
- Deliver as a static build deployable to any standard static host (Vercel, Netlify, GitHub Pages, or a plain hosting bucket) — no server-side dependency required for the presentation build.
- Provide a clean project structure with a short README covering: how to run locally, how to build, and where the design tokens / placeholder content live so they're easy to swap out once the real client provides final branding and content.

---

## 8. Out of Scope (For This Phase)
- Real backend/database/CMS integration
- Payment processing
- User accounts/authentication
- Real analytics/Search Console wiring (placeholders only, per Section 4.8's content being descriptive, not functional, at this stage)
- Multi-language support
- Any content, branding, or imagery belonging to Sterling Infrastructure, Inc. beyond the extracted design tokens

---

## 9. Acceptance Criteria (Definition of Done)

1. Visual/typographic style is a faithful match to strlco.com's design language (fonts, spacing, section rhythm, component patterns) with **zero Sterling Infrastructure content, branding, or imagery** present anywhere in the build.
2. All copy across every section matches the Content Map in Section 4, sourced from the client's proposal document, with placeholders clearly marked where the client hasn't supplied real business details yet.
3. Responsive behavior fully satisfies the rules and checklist in Section 6 — verified manually at desktop, tablet, and mobile widths.
4. Site loads fast, has no console errors, no horizontal scroll at any breakpoint, and the quote-request slide-in panel functions correctly (opens/closes, validates, submits) on all device sizes.
5. Codebase is clean, componentized, and includes the extracted design-token file/comment block from Section 3 for easy future theming.

---

## 10. Notes for Trae

- Treat Section 6 (Responsive Design Requirements) as the **primary quality bar** for this build — it is the specific instruction the client emphasized most.
- Where the proposal document's wording is written in the second person ("we will build," "we propose") flip it to first-person-company voice appropriate for a company's own website (e.g., "We build," "Our approach") since this is now presented as the construction company's own site, not a proposal *to* them.
- Ask the project owner (Saviour) before substituting any placeholder company name, logo, or contact detail with something more specific — do not silently invent brand identity beyond what's marked as an explicit placeholder in Section 4.13.
