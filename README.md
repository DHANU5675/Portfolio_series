# DHANU — THE SERIES 🎬

A cinematic, streaming-platform inspired interactive portfolio engineered for **Landa Dhanu Vara Prasad** — Full-Stack Developer (MERN) and DevOps & Cloud Enthusiast (AWS).

Every section unfolds as an episode, every project is produced as an **Original**, and the entire experience is designed with fluid animations, depth parallax, and streaming-grade UI aesthetics.

> **Disclaimer:** A creative personal developer portfolio featuring a fictional streaming-platform user interface and aesthetic. It is completely independent, not affiliated with Netflix or any other streaming service, and uses none of their trademarked assets or logos.

---

## 🌟 Interactive Features & Highlights

- **Cinematic Opening Sequence:** Custom studio card animation, dramatic letterbox framing, light leaks, and dynamic title reveals with keyboard skip capabilities (`Enter` or `Esc`).
- **"Who's Watching?" Profile Selector:** Personalizes the narrative and dynamically reorders portfolio sections based on the viewer persona (**Dhanu**, **Recruiter**, **Developer**, or **Creative**).
- **Parallax Billboard Hero:** Mouse-tracked 3D tilt, ambient particle system, light streaks, and floating interactive skill chips anchored around Dhanu's responsive portrait.
- **"▶ Play Intro" Highlight Reel:** Full-screen resume story reel with synchronized progress timers, pause-on-hold/spacebar, and touch/keyboard navigation (`←` / `→`).
- **Pinned Originals Rail:** Desktop horizontal pinned-scroll showcase with 3D card tilt and fluid swipe gestures on touch screens.
- **Full-Screen Project Deep Dives:** Shared-element layout transitions (`framer-motion`) detailing architecture, features, metrics, and live GitHub repositories.
- **Top 10 Countdown:** Stylized typographic countdown row highlighting technical capabilities, academic milestones, and certifications.
- **Skills with Real-World Evidence:** Categorized skill badges (DevOps & Cloud, Languages, Web & Databases, OS & Tools) cross-referenced with exact project and certification proof.
- **The Screenplay Resume Viewer:** Interactive collapsible resume sheet paired with an in-browser PDF modal and direct download access.
- **Performance & Accessibility First:** Native `prefers-reduced-motion` compliance, responsive WebP image optimization, code-split overlays, and Lenis smooth scrolling.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Core Framework** | [React 18.3](https://react.dev/) | Component architecture, hooks, and dynamic state management |
| **Language** | [TypeScript 5.8](https://www.typescriptlang.org/) | Type-safe data models and robust compile-time verification |
| **Build Tool & Bundler** | [Vite 6.4](https://vitejs.dev/) | Lightning-fast HMR and optimized production asset bundling |
| **Styling & Design System** | [Tailwind CSS 4.1](https://tailwindcss.com/) | Modern utility-first CSS, custom design tokens, and typography |
| **Motion & Transitions** | [Framer Motion 11.18](https://www.framer.com/motion/) | Shared-element layout animations, physics springs, and scroll triggers |
| **Smooth Scrolling** | [Lenis 1.1](https://lenis.darkroom.engineering/) | Cinematic, inertial smooth scroll with scroll-lock capabilities |
| **Image Processing** | [Sharp 0.35](https://sharp.pixelplumbing.com/) | High-performance image masking, portrait grading, and WebP generation |
| **Typography** | Google Fonts | *Bebas Neue* (display), *Instrument Serif* (editorial), and *Inter* (interface) |

---

## 📂 Project Structure

```text
Portfolio_series/
├── public/
│   ├── assets/
│   │   ├── L_DHANU_VARA_PRASAD.pdf   # Primary resume PDF document
│   │   ├── og-image.png               # High-res social preview banner (1200x630)
│   │   ├── og-image.jpg               # Fallback OpenGraph card
│   │   ├── portrait-1100.webp         # Desktop high-DPI portrait (1100x1100)
│   │   ├── portrait-720.webp          # Standard landscape portrait (720x720)
│   │   └── portrait-420.webp          # Mobile portrait thumbnail (420x420)
│   └── favicon.svg                    # Custom red "D" badge favicon
├── scripts/
│   ├── build-images.mjs               # Sharp script for portrait cutout & asset generation
│   └── raw-portrait.jpg               # High-resolution master portrait source
├── src/
│   ├── components/
│   │   ├── About.tsx                  # "The Pilot": Bio, starring badge, and career overview
│   │   ├── Achievements.tsx           # Moments & awards plus credential cards
│   │   ├── ContinueWatching.tsx       # Live scroll progress bars with custom glyphs
│   │   ├── CustomCursor.tsx           # Magnetic custom cursor with context-aware states
│   │   ├── EpisodeCard.tsx            # Journey timeline cards
│   │   ├── FinalCTA.tsx               # "TO BE CONTINUED…" outro and direct contact links
│   │   ├── Hero.tsx                   # Main billboard with 3D tilt, portrait, and chips
│   │   ├── Navbar.tsx                 # Cinematic header, profile switcher, and navigation
│   │   ├── OpeningSequence.tsx        # Fictional studio opening titles with skip controls
│   │   ├── Originals.tsx              # Pinned horizontal showcase of featured projects
│   │   ├── PlayIntro.tsx              # Full-screen resume highlight reel with timer bars
│   │   ├── Poster.tsx                 # Procedural key art backdrops and "D" SeriesMark
│   │   ├── ProfileSelector.tsx        # "Who's watching?" persona switcher
│   │   ├── ProjectCard.tsx            # Project poster card with 3D tilt and "D" badge
│   │   ├── ProjectModal.tsx           # Full-screen deep dive overlay with shared elements
│   │   ├── Rail.tsx                   # Horizontal scroll container with navigation arrows
│   │   ├── ResumeModal.tsx            # In-browser PDF resume viewer
│   │   ├── ResumeViewer.tsx           # "The Screenplay" formatted resume document
│   │   ├── Scene.tsx                  # Section wrapper for scroll tracking
│   │   ├── Seasons.tsx                # Education and experience timeline
│   │   ├── Skills.tsx                 # Categorized technical skills with proof links
│   │   ├── TopPicks.tsx               # Top 10 numbered technical highlights
│   │   └── fx.tsx                     # Reusable effects: Magnetic, Particles, RevealText, Tilt
│   ├── data/
│   │   └── portfolio.ts               # Single source of truth for all content & projects
│   ├── hooks/
│   │   ├── sectionProgress.ts         # Tracks visible scroll progress per section
│   │   ├── smoothScroll.tsx           # Lenis smooth-scroll provider and control hook
│   │   └── useMedia.ts                # Media queries for pointer type and reduced motion
│   ├── App.tsx                        # Main application controller and overlay manager
│   ├── index.css                      # Tailwind tokens, typography, and custom utilities
│   └── main.tsx                       # React application entry point
├── index.html                         # Document root, meta tags, and font preloads
├── package.json                       # Scripts, dependencies, and project metadata
├── tsconfig.json                      # TypeScript root configuration
└── vite.config.ts                     # Vite build configuration with Tailwind plugin
```

---

## 🚀 Steps to Implement & Run Locally

### 1. Prerequisites
Ensure you have **Node.js 18+** installed:
```bash
node -v
npm -v
```

### 2. Clone and Install Dependencies
```bash
git clone https://github.com/dhanuvaraprasad/Portfolio_series.git
cd Portfolio_series
npm install
```

### 3. Build Optimized Portrait Assets (Optional)
To process the portrait photo and generate responsive WebP assets:
```bash
npm run images
```
This script reads `scripts/raw-portrait.jpg`, extracts the subject with clean antialiased edges, preserves natural headroom and skin tones without artificial color artifacts, and produces `portrait-1100.webp`, `portrait-720.webp`, and `portrait-420.webp` in `public/assets/`.

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with Hot Module Replacement (HMR).

### 5. Build for Production
To generate a type-checked, minified static build:
```bash
npm run build
```
The optimized production bundle will be output to the `dist/` directory.

### 6. Preview the Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

The built application (`dist/` folder) is a pure static single-page application (SPA) ready to be hosted on any modern platform:

- **Vercel:** Connect the GitHub repository; Vercel automatically detects Vite. Set build command to `npm run build` and output directory to `dist`.
- **Netlify:** Drag and drop the `dist/` folder or link GitHub with publish directory set to `dist`.
- **GitHub Pages:** Deploy the `dist` folder using `gh-pages` or GitHub Actions.
- **AWS S3 + CloudFront:** Sync `dist/` to an S3 bucket configured for static website hosting with CloudFront CDN distribution.

---

## ⌨️ Keyboard Shortcuts & Accessibility

- **Opening Sequence:** Press `Enter` or `Esc` to instantly skip the intro.
- **Play Intro Reel:**
  - `Space`: Pause / Resume timer.
  - `→`: Next highlight slide.
  - `←`: Previous highlight slide.
  - `Esc`: Close the highlight reel.
- **Project & Resume Overlays:** Press `Esc` to close any open modal.
- **Reduced Motion:** Fully respects `prefers-reduced-motion` by disabling parallax tilt, custom cursor, smooth inertia, and particle simulations.

---

## 📬 Contact & Connect

- **Name:** Landa Dhanu Vara Prasad
- **Role:** Full-Stack Developer (MERN) • DevOps & Cloud Enthusiast
- **LinkedIn:** [linkedin.com/in/dhanuvaraprasad](https://www.linkedin.com/in/dhanuvaraprasad)
- **GitHub:** [github.com/dhanuvaraprasad](https://github.com/dhanuvaraprasad)
- **Email:** [landa.dhanu7@gmail.com](mailto:landa.dhanu7@gmail.com)

---

## 📄 License

Created by **Landa Dhanu Vara Prasad**. Distributed for personal showcase and portfolio presentation.
