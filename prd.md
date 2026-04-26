##### RANGER TECHNOLOGIES PRODUCT REQUIREMENTS DOCUMENT

# RANGER

# TECHNOLOGIES

### Future-Proof Service Ecosystem

DOCUMENT TYPE Product Requirements Document (PRD)
PROJECT Ranger Technologies — 3D Immersive Website
VERSION v1.0 | April 2026
STATUS Ready for Development
PREPARED BY Ranger Product Team

```
Website Design Reference: ClearPath Marketing Agency UI (Dark Theme — Immersive 3D)
Technology Stack: Three.js · React · GSAP · WebGL · Framer Motion
Color Palette: #E05910 (Orange) · #000000 (Black) · #2C2C2C (Dark Gray) · #FFFFFF (White)
```

## 01 EXECUTIVE SUMMARYProject Overview & Strategic Vision

Ranger Technologies is a future-proof technology ecosystem encompassing 10 service verticals spanning AI,
Blockchain, AR/VR, HealthTech, EdTech, and Green Technology. This PRD defines the complete specification for an
immersive, 3D-driven marketing website that communicates Ranger's positioning as the definitive technology partner
for businesses entering the next decade.

Project Name Ranger Technologies — 3D Immersive Marketing Website
Goal Establish Ranger as the most premium tech agency through
an award-winning immersive web experience
Primary Audience B2B decision-makers, startup founders, enterprise CTOs,
Series A–C companies
Design Reference ClearPath Marketing Agency — dark theme, orange accents,
3D immersive UI/UX
Core Tech Three.js · React · GSAP · WebGL · Framer Motion · Node.js
Timeline 12 Weeks (Design → Development → QA → Launch)
Expected Outcome Top 5% Awwwards / CSS Design Awards candidate; 3× lead
conversion improvement

## 02 BRAND & DESIGN SYSTEMVisual Language & Style Guide

### Color Palette

```
Token Hex Usage
Primary Orange #E05910 CTAs, highlights, accent borders, active states
Deep Black #000000 Hero backgrounds, section backgrounds, headings
Dark Gray #2C2C2C Card backgrounds, secondary surfaces
Silver Gray #A7A79E Supporting text, labels, muted elements
Pure White #FFFFFF Primary text on dark, icon fills, hover states
```
### Typography

```
Role Font Size / Weight Notes
Hero Display Inter / Space Grotesk 72–96px / Black 900 Letter-spacing: −2px
Section Titles Inter 36–52px / Bold 700 Mixed case, tight leading
Body Copy Inter 16–18px / Regular 400 Line-height: 1.
Labels / Tags Inter Mono 11–13px / Medium 500 Uppercase, tracking: 0.1em
```

Navigation Inter 14px / Semi-Bold 600 Hover: orange underline


## 03 SITE ARCHITECTUREPage Structure & Navigation Hierarchy

### Primary Navigation

```
Route Page Key Sections 3D Element
/ Home Hero · Services Overview · Process · CTA Rotating robot head / particle field
/services Services 10 vertical cards · feature detail modals Morphing geometry per service
/work Case Studies Client results · metrics · testimonials 3D card flip transitions
/about About Team · vision · values Parallax depth layers
/contact Contact Lead form · FAQ · social links Animated mesh background
/blog Insights Articles · thought leadership Hover depth effect on cards
```
### User Journey Flow

```
Land
Hero 3DScene
```
```
Explore
ServicesScroll
```
```
Engage
3D ProductViewer
```
```
Trust
```
```
StudiesCase
```
```
Contact
```
```
CaptureLead
```
### Service Ecosystem Matrix

```
AI InfraCore
1
```
```
API HubScale
2
```
```
Web 3.0Own
3
```
```
CommerceAuto
4
```
```
Data IntelSmart
5
EdTechLearn
6
```
```
HealthTechCare
7
```
```
AR/VRImmerse
8
```
```
CyberSecTrust
9
```
```
GreenTechSustain
10
```

## 04 PAGE SPECIFICATIONSDetailed Section-by-Section Requirements

###### HOME PAGE — HERO SECTION

- Full-viewport dark background (#000000) with ambient orange glow emanating from center
- Large display text: 'RANGER' (gray/white) + 'TECHNOLOGIES' (orange) — mirroring ClearPath split-color logo
treatment
- Animated 3D robot/cyborg head rendered in Three.js — rotates slowly on mouse parallax
- Tagline below: 'Future-Proof Service Ecosystem' in Inter Italic
- Two CTAs: 'Explore Services' (orange filled) + 'View Our Work' (outline white)
- Scrolling ticker at bottom: service names looping — AI · Web3 · AR/VR · Commerce · HealthTech

HOME — WHAT WE DO (Services Overview)

- 4-column grid of numbered service cards (1–4 visible, scroll to see remaining 6)
- Each card: orange number badge, service icon, title, one-line description
- Hover state: card lifts in 3D perspective with orange border glow
- Background: dark gradient with subtle grid lines (geometric / structured feel)
- CTA: 'See All Services →' linking to /services

HOME — HOW WE WORK (Process)

- 5-step vertical accordion: (1) Discovery (2) Strategy (3) Build (4) Launch (5) Optimize
- Each step reveals detail on click/hover with smooth GSAP animation
- Left side: large cursive/handwritten brand signature graphic (decorative)
- Orange vertical line connecting all steps
- Background: warm orange glow blur — identical to ClearPath reference

HOME — RESULTS / CASE STUDIES (Social Proof)

- Horizontal scrolling cards — desktop laptop mockup showing client results
- Metric highlights: Revenue % ↑, Lead Volume ↑, Cost Per Lead ↓
- 3 featured client cards with company name, industry, and key result
- CTA: 'See All Case Studies' → /work

HOME — TEAM SECTION


- Dark card layout with team member photos, names, roles
- Orange accent strips below each photo card
- Hover: slight 3D tilt using mouse position tracking

HOME — FAQ SECTION

- Accordion-style FAQ with orange expand/collapse indicator
- 5–7 questions covering pricing, process, timeline, tech stack, results
- Dark background, white text, orange active state

HOME — CONTACT / CTA SECTION

- Bold headline: 'Ready to talk about your growth?'
- Lead capture form: Name · Email · Company · Service Interest · Budget Range
- Orange submit CTA button
- Social links: LinkedIn · Twitter/X · Instagram · WhatsApp
- Footer: Logo large + email + copyright

SERVICES PAGE

- Hero: 'What We Build' — full viewport dark with animated particle constellation
- 10 service cards in a 2×5 or masonry grid layout
- Each card links to an expanded modal or sub-page with full service description
- Service sections correspond exactly to the 10 Ranger verticals (AI, API, Web3, Commerce, Data, EdTech,
HealthTech, AR/VR, Cybersecurity, GreenTech)
- Orange numbered badges, micro-animations on hover


## 05 SERVICE VERTICALSRanger's 10 Core Business Lines

1. AI Infrastructure & Automation
- Custom AI models for SMB to enterprise clients
- AI agents: customer support, sales automation, HR & recruitment, workflow automation
- Personal AI assistants for founders and leadership teams
- No-code + API-based automation systems
- Vision: Every business will have its own AI brain
2. API Economy & Platform Integration
- Centralized API hub: e-commerce (Amazon, Flipkart), payments, logistics
- White-label API solutions for 1000+ brands
- Unified operations dashboard for all client platforms
- Vision: Businesses won't run apps — they'll run APIs
3. Web 3.0 & Digital Ownership Systems
- Blockchain-based digital identity systems
- Smart contracts, asset tokenization, NFT brand loyalty
- Decentralized marketplaces
- Vision: Ownership > Access economy
4. Smart Commerce & D2C Automation
- Auto product listing across all major platforms
- AI-driven pricing optimization
- Inventory prediction using Machine Learning
- Cross-platform order synchronization
- Vision: Commerce becomes fully automated
5. Data Intelligence & Decision Systems
- Real-time business analytics dashboards
- Predictive analytics engines


- Consumer behavior tracking and segmentation
- AI-driven business decision engines
- Vision: Decisions will be AI-driven, not human guesswork
6. EdTech & Skill Intelligence Platform
- AI-based personalized learning paths
- Skill-to-income mapping systems
- Virtual labs: Physics, Technology, Business
- Teacher AI assistants and curriculum automation
- Vision: Degrees die — skills dominate
7. HealthTech & Bio Data Systems
- Personal health dashboards and monitoring
- AI diet + fitness planning systems
- Telemedicine infrastructure build-out
- Wearable device integration APIs
- Vision: Preventive healthcare > hospital system
8. AR/VR + Spatial Technology
- Virtual classrooms and educational spaces
- Virtual office environments for remote teams
- Product visualization: try-before-buy experiences
- Metaverse brand spaces and activations
- Vision: Screens → Immersive environments
9. Cybersecurity & Digital Trust
- Data protection and encryption systems
- AI-powered identity verification
- Fraud detection engines
- Secure API framework design
- Vision: Trust becomes a premium service


10. Green Tech & Smart Infrastructure
- Energy optimization software for businesses
- Solar integration management systems
- Smart building IoT systems
- Carbon tracking and reporting dashboards
- Vision: Every business must be eco-compliant


## 06 3D & ANIMATION SPECIFICATIONSImmersive Experience Technical Design

### Three.js Scene Requirements

The hero scene is the centrepiece of the Ranger website. Drawing from the ClearPath design reference, the
implementation uses a WebGL-rendered 3D scene with the following technical parameters:

```
Scene Element Specification Library / Method
Hero Model
```
```
Mechanical cyborg head — glTF/GLB format, PBR
materials, ambient orange emission Three.js GLTFLoader
Particle System
```
```
10,000 particles forming constellation network,
responsive to mouse
```
```
THREE.Points +
BufferGeometry
Lighting
```
```
AmbientLight (#111) + PointLight orange (#E05910)
+ RectAreaLight white Three.js Lights
Post-Processing Bloom pass (orange glow), SSAO, film grain overlay EffectComposer
Mouse Parallax
```
```
Camera + model rotation tracking cursor X/Y at 0.
dampening requestAnimationFrame
Scroll Trigger
```
```
Scene dissolves / morphs as user scrolls —
progress-based animation GSAP ScrollTrigger
Mobile Fallback
```
```
Static 2D render / WebP image if GPU insufficient
(detect via renderer.capabilities) Conditional render path
Performance Target
```
```
60fps desktop / 30fps mobile — LOD switching
enabled THREE.LOD
```
### GSAP Animation System

```
Animation Specifications
```
- Hero text entrance: staggered letter reveal with clip-path animation (0.8s ease-out)
- Section entrances: elements slide up 40px + fade from opacity 0→1 on ScrollTrigger
- Service card hover: CSS 3D transform (perspective 800px, rotateX/Y ±8deg)
- Navigation: smooth color transition from transparent to black on scroll (100px threshold)
- Page transitions: curtain wipe (black overlay slides out) using Framer Motion AnimatePresence
- Number counters: animated count-up on metric sections (requestAnimationFrame loop)
- Cursor: custom cursor replaces OS pointer — circle that scales on hover over interactive elements
- Mobile: all 3D transforms reduced / disabled, gsap.matchMedia used for responsive animation

### Technology Stack


1
Three.js3D Engine

```
2
UI LayerReact
```
```
3
AnimationGSAP
```
```
4
WebGLGraphics
```
```
5
FramerMotion
```
```
6
Node.jsBackend
```
```
7
MongoDBDatabase
```
```
8
VercelHosting
```

## 07 TECHNICAL ARCHITECTUREDevelopment Stack & Infrastructure

```
Layer Technology Purpose
Frontend Framework Next.js 14 (React 18)
```
```
SSR/SSG, routing, performance
optimization
3D Rendering Three.js + React Three Fiber All WebGL 3D scene management
Animation
```
```
GSAP 3 + ScrollTrigger + Framer
Motion All page and component animations
Styling Tailwind CSS + CSS Modules
```
```
Component-level styles, dark theme
system
CMS Sanity.io (headless) Blog, case studies, team content
Backend API Node.js + Express / Next.js API Routes Contact form, lead capture, integrations
Database MongoDB Atlas Lead storage, analytics events
Hosting Vercel (Edge Network)
```
```
Global CDN, auto-scaling, preview
deploys
Analytics PostHog + Google Analytics 4 Funnel tracking, heatmaps, conversion
Email / CRM Resend + HubSpot Lead nurturing, transactional email
Performance Lighthouse CI (score target: 90+) Core Web Vitals monitoring
```
### Performance Requirements

```
Metric Target Method
LCP (Largest Contentful Paint) < 2.5s Image optimization + preload hints
FID / INP (Interaction) < 100ms Web workers for 3D, code splitting
CLS (Layout Shift) < 0.1 Reserved dimensions for all media
Lighthouse Performance ≥ 90 Vercel Analytics + CI checks
3D Scene FPS (desktop) 60 FPS stable LOD + frustum culling
Bundle Size (initial JS) < 200KB gzipped Dynamic imports for Three.js
```

## 08 REVENUE PROJECTION5-Year Growth Model — All Service Verticals

Based on Ranger's service diversification across 10 verticals and projected client acquisition rates, the following chart
illustrates a conservative-to-base case revenue trajectory for Years 2025–2029.

#### Ranger Technologies — Projected Revenue Growth

```
5-Year revenue projection across all service verticals (USD Millions)
```
```
$0M
```
```
$10M
```
```
$20M
```
```
$30M
```
```
$40M
```
```
$50M
```
```
$2.5M
2025
```
```
$8M
2026
```
```
$18M
```
```
2027
```
```
$32M
```
```
2028
```
```
$50M
```
```
2029
```
```
Revenue (USD M)
Growth Trend
```
```
Year Revenue (USD M) Primary Growth Driver
```
```
Active
Services
2025 $2.5M AI Infrastructure + API Hub (launch phase) 3 verticals
2026 $8M Commerce Automation + Data Intelligence added 5 verticals
2027 $18M EdTech, HealthTech, Cybersecurity online 8 verticals
2028 $32M AR/VR + Web3 maturity, enterprise contracts 10 verticals
2029 $50M GreenTech + international expansion 10+ verticals
```

## 09 DEVELOPMENT TIMELINE12-Week Delivery Roadmap

```
1
Weeks 1–3Phase 1
Design & Prototype· Wireframes
· 3D Asset Design· Brand System
```
```
2
Weeks 4–8Phase 2
Core Development· Three.js Setup
· Page Sections· Animations
```
```
3
Weeks 9–10Phase 3
Content & SEO· Copy
· Meta Tags· Blog
```
```
4
Weeks 11–12Phase 4
QA & Launch· Testing
· Performance· Deploy
```
Phase Weeks Deliverables Owner

1. Design & Prototype 1–

```
Figma wireframes, brand guide, 3D asset sourcing, motion
spec
```
```
Design
Lead
```
2. Core Development 4–

```
Next.js setup, Three.js hero, all page sections, CMS
integration
```
```
Dev
Team
```
3. Animation Layer 6–8 GSAP scroll triggers, hover states, page transitions, cursor

```
Dev +
Design
```
4. Content & SEO 9–

```
Copywriting, blog setup, meta tags, schema markup,
sitemap
```
```
Content
Team
```
5. QA & Performance 11

```
Cross-browser testing, Lighthouse CI, mobile QA,
accessibility
```
###### QA

```
Lead
```
6. Launch & Monitor 12

```
DNS cutover, analytics verify, redirect mapping, post-launch
monitoring DevOps
```

## 10 SUCCESS METRICS & KPIsHow We Measure Website Performance

KPI Baseline Target (Month 6) Measurement Tool
Monthly Qualified Leads — 50+ per month HubSpot CRM
Lead Conversion Rate Industry avg: 2% ≥ 5% Google Analytics
Avg. Session Duration — ≥ 3 min 30s GA4 Engagement

Bounce Rate

Industry avg:
60% < 35% GA
Lighthouse Score — ≥ 90 all categories Lighthouse CI
Design Award Submission — Awwwards + CSS Awards Manual submission
Organic Search Impressions — +200% in 6 months Google Search Console

3D Scene FPS —

```
≥ 55 FPS on mid-range
device stats.js monitor
```
## 11 RISKS & MITIGATIONSProject Risk Register

Risk Impact Mitigation Strategy

3D performance on low-end devices HIGH

```
Implement progressive enhancement — static
fallback for GPU-constrained devices
```
WebGL browser compatibility MEDIUM

```
Test across Chrome, Firefox, Safari, Edge — polyfill
with Canvas 2D fallback
```
Large asset bundle size HIGH

```
Dynamic imports, lazy-load Three.js, compress glTF
models < 2MB
```
Content delivery (copy/assets late) MEDIUM

```
Lock copy by Week 8 — use placeholder content in
development
```
SEO impact of heavy JS MEDIUM

```
Use Next.js SSR/SSG, static HTML shell with
hydration
```
Scope creep on 3D features HIGH

```
Lock 3D scope in Week 3 design review — any new
3D feature = next sprint
```

## 12 APPENDIXReferences, Glossary & Design Assets

### Design References

```
Reference Materials
```
- ClearPath Marketing Agency — Behance (Nechai Polina, 2026): Dark theme, orange/black palette, robot mascot,
immersive scroll
- Awwwards Site of the Day archives: Bruno Simon, Active Theory, Resn for 3D interaction inspiration
- Three.js Journey (Bruno Simon) — reference implementation for performance-optimized 3D web
- GSAP ScrollTrigger documentation — animation timing and easing reference
- Google Core Web Vitals — performance metric definitions and targets

### Glossary

```
Term Definition
WebGL Web Graphics Library — JS API for rendering 2D/3D graphics in browser using GPU
Three.js JavaScript library that wraps WebGL with a developer-friendly API
GSAP GreenSock Animation Platform — industry-standard JS animation library
glTF/GLB GL Transmission Format — open 3D asset format optimized for web delivery
LOD Level of Detail — technique switching mesh complexity based on camera distance
LCP Largest Contentful Paint — Core Web Vital measuring perceived load speed
SSR Server-Side Rendering — Next.js feature for pre-rendering pages on server
PBR Physically Based Rendering — realistic 3D material system
CMS Content Management System — Sanity.io manages all editable content
```


