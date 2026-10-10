# Esperia Quantum — Enterprise UI

> Digital Experience & Technology Consultancy Platform. Designed for high-velocity enterprises connecting AI, cloud, data, and human-centered design.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-14.0.0-black?style=flat-square&logo=framer&logoColor=white)

---

## 🌟 Overview

**Esperia Quantum UI** is a digital experience platform built to showcase Esperia's Enterprise Delivery Model, capabilities, client impact case studies, and thought leadership. It is crafted to match modern enterprise aesthetics: bespoke typography, glassmorphism, micro-animations, hardware-accelerated 3D graphics, interactive canvas particles, and responsive mobile drawers.

---

## 🚀 Key Features & Pages

The application is structured into a client-side hash router supporting dedicated page views across 13 routes:

### 1. Home (`#` / `LandingPage.tsx`)
- **Colossal Hero Section**: 3D Cloud-Native AI Digital Engineering asset with multi-layered ambient glows and vertical drift animation.
- **Ruled Stats Strip**: Glassmorphic banner showcasing collective experience, projects delivered, and client success metrics.
- **Intelligent Vision & Manifesto Cards**: 4 interactive cards detailing Human-First Experiences, AI-Enhanced Development, End-to-End Product Development, and Partnership Co-creation.
- **Showcase Sections**: "Human Ingenuity" and "What We Have Built" featuring the XConnect Enterprise platform.
- **Infinite Logo Marquee**: Continuous smooth logo ticker of global clients and partners.
- **Customer Testimonials & Blogs**: Masonry review cards and preview of the latest insights with active routing.

### 2. What We Do (`#what-we-do` / `WhatWeDoPage.tsx`)
- **Dark Inset Hero Card**: Floating dark container with ambient emerald/teal glow and 3D Intelligent Systems Platform artwork.
- **4 Alternating Capability Sections**:
  1. *Engineering & Platforms* (API, Cloud Solutions, Enterprise Low-Code).
  2. *AI & Data Automation* (AI Agents, Intelligent Automation, ML Pipelines).
  3. *Government Services* (Citizen Experience, Federal & State Projects).
  4. *Human & AI Experience Design* (UI/UX, Research, Design Systems, HAI Model).

### 3. Why Esperia (`#why-esperia` / `WhyEsperiaPage.tsx`)
- **Interactive 3D Saturn Hero Graphic**: Hardware-accelerated 3D planetary graphic with smooth hover zoom-in (`hover:scale-110`) and gentle return to resting scale upon mouse leave.
- **Enterprise Delivery Model Headline**: Elegant contrast with italic signature accents.
- **8 Detailed Reasons Grid**: Numbered badge items with subtle interactive hover states.
- **Partnership & Stats Card**: Dark radial container highlighting 12+ years experience, 200+ projects delivered, and 40+ success rate.
- **Ready to Transform CTA**: Dynamic coral radial banner with interactive "Let's Talk" button routing directly to Contact Us.

### 4. Our Works (`#our-works` / `OurWorksPage.tsx`)
- **Interactive 3D Solutions Platform**: Floating isometric artwork with coral aura.
- **4 Comprehensive Case Studies**:
  - *Watermelon*: AI-driven Enterprise Software Reliability Platform.
  - *Young Genius Program*: Adaptive AI-powered education ecosystem.
  - *IRIS HR System*: Modernized human resources operations & central employee data platform.
  - *TASConnect*: Supply chain & logistics intelligence with sentiment analysis dashboards.
- **Overlapping Card Layout**: Alternating visual mockups with layered elevation cards and animated action arrows.

### 5. Case Study Deep Dives
- **Watermelon** (`#watermelon` / `WatermelonDetailPage.tsx`): Business challenges, technical architecture, measurable outcomes, and interactive media demonstration player.
- **Young Genius** (`#young-genius` / `YoungGeniusDetailPage.tsx`): Adaptive learning framework, cognitive evaluation engines, and interactive student analytics.
- **IRIS HR** (`#iris-hr` / `IrisHrDetailPage.tsx`): Centralized employee data pipeline, leave automation, and role-based access management.
- **TASConnect** (`#tas-connect` / `TasConnectDetailPage.tsx`): Real-time supply chain telemetry, cargo tracking, and sentiment analytics.

### 6. Blogs & Insights
- **Blogs Feed** (`#blogs` / `BlogsPage.tsx`): Featured editorial by CTO Ravi Menon, interactive like counters, author follow toggle, and categorized insight feeds.
- **Blog Detail** (`#blog-detail` / `BlogDetailPage.tsx`): Long-form article reading view with inline blockquotes, community comments with nested replies, and recommended articles sidebar.

### 7. Contact Us & Legal Pages
- **Contact Us** (`#contact-us` / `ContactPage.tsx`): Studio cards for United States (Shrewsbury MA), Malaysia (Johor Bahru), and India (Chennai); interactive inquiry form with validation, focus states, and instant confirmation.
- **Privacy Policy** (`#privacy` / `PrivacyPolicyPage.tsx`): Full data protection disclosure, GDPR/CCPA alignment, cookies, and user rights.
- **Terms of Service** (`#terms` / `TermsOfServicePage.tsx`): Enterprise service level agreements, intellectual property rights, and platform terms.

---

## 🎨 Unified Design System

- **Typography**:
  - **Headings**: `Parkinsans` (Geometric modern sans)
  - **Body & Interface**: `Manrope` (Clean legibility)
  - **Signature Accents**: `Playball` / Dancing script accents for editorial contrast
- **Color Palette**:
  - Primary Dark: `#071F1A`, `#0A111A`, `#0F172A`
  - Coral Salmon: `#F56F6A`, `#C5445A`, `#9E1C34`
  - Mint Emerald: `#8EE5C7`, `#91CBA6`, `#3EA594`
  - Warm Canvas: `#F6F6F3`, `#FAFAF8`, `#FFFFFF`
- **Shared Components**:
  - [`Header.tsx`](src/components/Header.tsx): Unified top bar across all pages with active link coral highlight and mobile drawer.
  - [`Footer.tsx`](src/components/Footer.tsx): Unified 4-column footer across all pages with service capabilities, company links, social buttons, and legal credits.
  - [`QuantumCanvas.tsx`](src/components/QuantumCanvas.tsx): Interactive ambient canvas effects and geometric visual particles.
  - [`MotionWrappers.tsx`](src/components/MotionWrappers.tsx): Smooth Framer Motion transitions and viewport triggers.
  - [`EsperiaEmblem.tsx`](src/components/EsperiaEmblem.tsx): Brand insignia watermark and emblem component.

---

## 📁 Project Architecture

```
Esperia-Quantum-UI/
├── index.html                   # HTML entry point pointing to /src/main.tsx
├── package.json                 # Dependencies and build scripts
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite configuration with @/ path aliases
├── public/
│   └── assets/
│       └── figma/               # Static assets, SVG logos, and 3D graphics
└── src/
    ├── main.tsx                 # Application entry point
    ├── App.tsx                  # Hash router and stateful page switcher
    ├── index.css                # Global typography, keyframes, and utilities
    ├── types/
    │   └── index.ts             # PageType and navigation type contracts
    ├── data/
    │   └── blogsData.ts         # Blog articles and author metadata
    ├── components/
    │   ├── Header.tsx           # Global navigation header
    │   ├── Footer.tsx           # Global brand footer
    │   ├── QuantumCanvas.tsx    # Ambient canvas particle background
    │   ├── MotionWrappers.tsx   # Framer Motion entrance & hover wrappers
    │   └── EsperiaEmblem.tsx    # Brand watermark emblem component
    └── pages/
        ├── LandingPage.tsx          # Home landing page
        ├── WhatWeDoPage.tsx         # What We Do capabilities page
        ├── WhyEsperiaPage.tsx       # Why Esperia delivery model page
        ├── OurWorksPage.tsx         # Portfolio & case studies grid
        ├── WatermelonDetailPage.tsx  # Watermelon case study deep dive
        ├── YoungGeniusDetailPage.tsx # Young Genius case study deep dive
        ├── IrisHrDetailPage.tsx      # IRIS HR case study deep dive
        ├── TasConnectDetailPage.tsx  # TASConnect case study deep dive
        ├── BlogsPage.tsx            # Blog article feed
        ├── BlogDetailPage.tsx       # In-depth blog reading view
        ├── ContactPage.tsx          # Contact Us & studio locations
        ├── PrivacyPolicyPage.tsx    # Privacy policy disclosure
        ├── TermsOfServicePage.tsx   # Terms of service terms
        └── index.ts                 # Page export barrel
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/shyamspark19/Esperia-Quantum-UI.git

# Navigate into directory
cd "Esperia UI"

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
The app will be available locally at `http://localhost:3000`.

### Production Build
```bash
# Type check and build optimized bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📜 License & Credits
© 2025 Esperia Quantum. All rights reserved.
