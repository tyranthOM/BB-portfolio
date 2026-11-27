# Architecture & Codebase Map — Om Bhalerao Portfolio

This document provides a comprehensive map of the entire codebase, listing every active subfile, its exact architectural role, its exports, and how each component connects within the Next.js App Router application.

---

## 1. High-Level Architecture Overview

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 with custom CSS variable theme bindings
- **Data Source**: Single source of truth in `src/data/projects.ts` (strictly typed)
- **Deployment**: Vercel Production (`https://bb-portfolio-alpha.vercel.app`)
- **Theme Support**: Seamless Light (Warm Paper / Swiss Editorial) and Dark (Obsidian Blueprint) modes with unified deep emerald/forest teal accents (`#0D7A68` / `#10B981`)

```
src/
├── app/                  # Next.js App Router (Routes & Metadata)
├── components/           # Reusable Modular UI Components
│   ├── contact/          # Contact page client & CTA banner
│   ├── experience/       # Leadership & experience timeline
│   ├── hero/             # Hero banner & canvas token animation
│   ├── layout/           # Fixed navbar & global footer
│   ├── projects/         # Featured projects & read-only paper reader
│   ├── resume/           # Resume client & embedded PDF viewer
│   ├── skills/           # 3 defensible skills groups
│   ├── theme/            # Theme provider & toggle button
│   └── ui/               # Vector icons (GitHub, LinkedIn)
└── data/
    └── projects.ts       # Typed dataset for all projects & biography
```

---

## 2. Directory & Subfile Directory Map

### A. Routing & Configuration (`src/app/`)

| File Path | Role & Purpose | Key Exports / Logic |
| :--- | :--- | :--- |
| `src/app/layout.tsx` | Root layout for the application. Injects Google fonts (`Syne`, `Playfair Display`, `Plus Jakarta Sans`, `Geist Mono`), configures global metadata, and wraps the app with `ThemeProvider`. | `RootLayout`, `metadata` |
| `src/app/page.tsx` | **Homepage (`/`)**. Orchestrates the 5-phase founder flow: Hero → Featured Projects (3) → Leadership & Experience → Defensible Skills → Contact CTA. | `default function Home()` |
| `src/app/globals.css` | Core Tailwind v4 setup with `@theme` token definitions, CSS custom variables for light/dark themes, background grid patterns (`.grid-bg`), and typography utility classes. | Theme variables, `.grid-bg`, `.mono-tag` |
| `src/app/meta.ts` | Centralized OpenGraph and meta tag definitions for social previews and SEO crawlers. | `metadata` object |
| `src/app/sitemap.ts` | Dynamic XML sitemap generator mapping all root pages and project case study URLs (`/projects/[slug]`). | `default function sitemap()` |
| `src/app/robots.ts` | Robots.txt generator directing search engine bots and referencing the sitemap. | `default function robots()` |
| `src/app/projects/page.tsx` | **Projects Archive (`/projects`)**. Displays the complete portfolio of products and systems with client-side category filtering (`ALL`, `AI`, `WEB`, `SYSTEMS`). | `default function ProjectsPage()` |
| `src/app/projects/[slug]/page.tsx` | **Case Study Dynamic Route (`/projects/[slug]`)**. Pre-renders static case studies using `generateStaticParams` for each project. Adheres to structured case study format: *The Problem, My Role, Architecture, Key Decisions, and Result*. | `generateStaticParams`, `generateMetadata`, `default function ProjectCaseStudyPage` |
| `src/app/resume/page.tsx` | **Resume Page (`/resume`)**. Server-side wrapper setting page metadata and mounting the interactive resume client. | `metadata`, `default function ResumePage()` |
| `src/app/contact/page.tsx` | **Contact Page (`/contact`)**. Server-side wrapper for the direct founder dispatch and communication coordinates. | `metadata`, `default function ContactPage()` |

---

### B. UI Components (`src/components/`)

#### 1. Hero & Visual Experience (`src/components/hero/`)
| File Path | Role & Purpose |
| :--- | :--- |
| `src/components/hero/Hero.tsx` | The primary above-the-fold founder hero section. Displays Om's unobscured name, headline (*AI & Product Builder \| Team Lead*), one-line ask (*Summer 2027 internships*), immediate download/email buttons, and the high-resolution portrait photograph. |
| `src/components/hero/HeroCanvas.tsx` | High-performance HTML5 canvas animation rendering drifting, subtle system tokens (`c++`, `esp32`, `wal`, `tcp`, `01`, `ptr*`) in the hero background. Respects light/dark themes and automatically pauses when off-screen. |

#### 2. Projects & Case Studies (`src/components/projects/`)
| File Path | Role & Purpose |
| :--- | :--- |
| `src/components/projects/FeaturedProjects.tsx` | Homepage 3-card grid highlighting the flagship projects (*Cafe La Roche*, *Bridge IT*, and *iLoveSwap*). Displays one-line outcomes, tech stacks, case study links, live app links, and the DBT paper reader toggle. |
| `src/components/projects/ProposalReader.tsx` | Dedicated in-browser read-only paper viewer for the DBT Biotech-KISAN Research Proposal (*Project X*). Features protected in-place reading with copy/download restrictions. |

#### 3. Leadership & Experience (`src/components/experience/`)
| File Path | Role & Purpose |
| :--- | :--- |
| `src/components/experience/ExperienceSection.tsx` | Timeline component detailing technical leadership (*SAKEC Pratishtha'27, SAKEC Alumni Association, Partners Beverages, Bridge IT*) and a concise note on earlier robotics/hardware roots. |

#### 4. Skills (`src/components/skills/`)
| File Path | Role & Purpose |
| :--- | :--- |
| `src/components/skills/SkillsSection.tsx` | Renders the 3 defensible skill categories (*Product & Leadership, AI & Data, Engineering*). Purged of unverified buzzwords to ensure full defensibility in founder interviews. |

#### 5. Contact & Actions (`src/components/contact/`)
| File Path | Role & Purpose |
| :--- | :--- |
| `src/components/contact/ContactCta.tsx` | Inverted call-to-action banner on the homepage inviting startup founders and engineering leads to reach out. |
| `src/components/contact/ContactClient.tsx` | Interactive contact interface with one-click email copying, geographic availability, timezone information, and direct dispatch form. |

#### 6. Resume (`src/components/resume/`)
| File Path | Role & Purpose |
| :--- | :--- |
| `src/components/resume/ResumeClient.tsx` | Resume page client component containing the embedded PDF viewer (`/resume.pdf`), download button, and structured academic & leadership summaries. |

#### 7. Global Layout & Theme (`src/components/layout/` & `src/components/theme/`)
| File Path | Role & Purpose |
| :--- | :--- |
| `src/components/layout/Navbar.tsx` | Floating glassmorphic pill navbar (`rounded-full`, backdrop blur). Hosts the brand monogram badge, direct navigation links, theme toggle, and mobile responsive menu. |
| `src/components/layout/Footer.tsx` | Clean technical footer displaying brief biography, fun fact, quick social links (GitHub, LinkedIn, Email), resume shortcut, and copyright. |
| `src/components/theme/ThemeProvider.tsx` | React Context managing `light` and `dark` mode state with `localStorage` persistence and synchronized HTML/Body class and data attribute updates. |
| `src/components/theme/ThemeToggle.tsx` | Sun/Moon theme toggle button featuring smooth icon rotation and instant color palette transitions. |

#### 8. SVG Icons (`src/components/ui/`)
| File Path | Role & Purpose |
| :--- | :--- |
| `src/components/ui/SocialIcons.tsx` | Lightweight, native inline SVG icons for GitHub (`GithubIcon`) and LinkedIn (`LinkedinIcon`), eliminating heavy external icon dependencies. |

---

### C. Data Layer (`src/data/`)

| File Path | Role & Purpose |
| :--- | :--- |
| `src/data/projects.ts` | **The single source of truth** for all portfolio content. Exports strongly-typed data structures: `Project`, `LeadershipExperience`, `PERSONAL_INFO`, `PROJECTS`, `LEADERSHIP_EXPERIENCE`, and `SKILLS_GROUPS`. Adding a new project or updating dates only requires editing this single file. |

---

## 3. Refactoring Summary

During this refactor:
1. **Removed Dead / Unused Code**: Cleaned out 15+ legacy files and widgets from previous experimental iterations (including `BenchmarksSection`, `DevClockSection`, `live-widgets/*`, `TechMarquee`, `ManifestoStrip`, `MockWindow`, `OtherProjects`, and `content.ts` shims).
2. **Consolidated Data Layer**: Unified all data into `projects.ts`, removing duplicate objects and fragmented schemas.
3. **Cleaned Component Tree**: Every component in `src/components/` is now strictly imported and actively rendered.
4. **Verified Type Safety**: Zero implicit `any` types; all routes compile cleanly through `npx tsc --noEmit`.
