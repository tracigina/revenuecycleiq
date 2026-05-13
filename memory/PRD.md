# Revenue Cycle IQ — Marketing Site PRD

## Original Problem Statement
Build a professional, modern, polished website prototype for a healthcare revenue cycle consulting company called **Revenue Cycle IQ** (tagline: *Insights That Drive Revenue*). 6 pages, fully responsive, SEO-optimized, healthcare-focused navy/teal palette. Forms eventually deploy to Netlify Forms.

## User Personas
- **Healthcare CFO / VP Revenue Cycle** — exploring consulting partners for denial reduction, A/R improvement
- **Practice Administrator / Billing Director** — researching workflow optimization options
- **Behavioral Health / Hospital Operations Leader** — evaluating revenue cycle assessment vendors

## Core Requirements (static)
- 6 pages: Home, About, Services, Why Revenue Cycle IQ, Book a Call, Contact
- Sticky header (logo + nav + Book a Call CTA + mobile hamburger)
- SEO: unique title + meta per page, structured data, semantic H1/H2/H3, alt text
- Footer with brand info + quick links + © 2026
- Back-to-top button
- Contact form (Name, Email, Organization, Message)
- Booking form (Name, Email, Organization, Phone, Preferred Date, Preferred Time, Message)
- Netlify Forms-ready (hidden form definitions in index.html + form attributes on React forms)
- No Emergent branding / badge
- Responsive: mobile, tablet, desktop

## Architecture
- **Frontend**: React 19 + React Router v7 + Tailwind + framer-motion + lucide-react. Pages in `/app/frontend/src/pages/`, shared site components in `/app/frontend/src/components/site/`.
- **Backend**: FastAPI + Motor (MongoDB) at `/api/contact` and `/api/booking` (POST/GET) — prototype storage. Will be replaced by Netlify Forms on deploy.
- **Typography**: Playfair Display (serif headings) + Plus Jakarta Sans (body). Distinctive editorial pairing for trust + analytical sophistication.
- **Palette**: Deep Navy `#0F172A`, Teal `#0D9488`, Sky `#BAE6FD`, Slate-50/100, white.
- **Logo handling**: White rounded container on dark backgrounds (header on scroll = white bg; footer = explicit white container).

## What's Been Implemented (2026-02-13)
- 6 pages fully built with bespoke layouts, SEO meta, structured content per spec
- Sticky scroll-aware header (transparent→white on scroll) + mobile hamburger
- Hero with framer-motion fade-in text + 3 floating animated stat cards (desktop) and stat chip grid (mobile)
- 6-service icon grid, navy contrast "Why" section, experience tag pill grid, 4-step numbered approach
- Detailed Services page with alternating sticky-left + bullet-list-right layout for each of the 6 services
- Booking form with native date/time pickers, validation, success state, Netlify attributes + axios → backend
- Contact form with validation, success state, Netlify attributes + axios → backend
- Back-to-top button (appears > 600px scroll)
- JSON-LD structured data for ProfessionalService
- Comprehensive testing: 100% backend (10 pytest cases) + 100% frontend (E2E flows)

## Prioritized Backlog
### P1
- Replace backend submission storage with native Netlify Forms once deployed (currently runs both)
- Add real testimonial/case-study section once content is provided
- Add a "Resources / Insights" blog section for SEO long-tail keywords

### P2
- Add calendar embed (Calendly / TidyCal) on Book a Call page as alternative to form
- Add language for HIPAA / data handling on forms
- Animated counter (24+ years) using IntersectionObserver
- Performance audit + image preload hints for Unsplash heroes

### P3
- Dark-mode preference toggle
- Analytics (PostHog already injected; add custom events for CTA clicks + form submits)
- Multi-language support

## Next Tasks
- Awaiting user feedback on copy, colors, imagery
- Provide a `netlify.toml` if deploy target is set
- Replace placeholder Unsplash imagery with branded photography when available
