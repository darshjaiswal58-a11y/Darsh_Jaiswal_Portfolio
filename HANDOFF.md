Update the existing HANDOFF.md in the repository so that it accurately captures the CURRENT state of the portfolio project for another Codex account that will continue the work.

IMPORTANT:
This is a handoff/documentation task only.

Do not redesign the portfolio.
Do not implement Phase 4.
Do not change the existing portfolio implementation except HANDOFF.md.
Do not install dependencies.

First inspect the current repository so the handoff reflects the actual state.

The handoff must clearly document the following:

# PROJECT

Darsh Jaiswal's premium cinematic/editorial portfolio.

Repository:
3D-portfolio

The old portfolio is only the source of factual content:
https://portfolio-bice-delta-63.vercel.app/

The old portfolio's visual design must NOT be copied.

Videos from the old portfolio are intentionally excluded.

---

# CURRENT IMPLEMENTATION STATUS

Phase 1 — Foundation + Opening Composition: COMPLETE

Phase 2 — Origin Story: COMPLETE

Phase 3 — Build Gallery: COMPLETE

Phase 4 — Learning Path: NOT STARTED

Phase 5 — Proof of Craft: NOT STARTED

Phase 6 — Field Notes: NOT STARTED

Phase 7 — Connect: NOT STARTED

The next approved implementation task is:

PHASE 4 — LEARNING PATH

Do not skip directly to later phases.

---

# COMPLETED EXPERIENCE

The portfolio uses the core:

OVERVIEW → FOCUS → JOURNEY

The initial desktop viewport is a complete editorial portfolio composition.

Major chapter labels are visible and readable.

Supporting content is intentionally compressed at overview scale.

Scrolling focuses the composition into the active chapter.

The experience is cinematic/editorial rather than a conventional stacked portfolio.

The reference video is used only as inspiration for choreography.
It must not be visually cloned.

---

# CHAPTERS

00 — Darsh Jaiswal
Hero statement + supplied portrait

01 — Origin Story
About content

02 — Build Gallery
Six projects

03 — Learning Path
Education + skills

04 — Proof of Craft
Five certifications

05 — Field Notes
Tata Motors internship

06 — Connect
Contact + links

---

# PHASE 1 — COMPLETED

Opening composition implemented.

The opening shows the full portfolio map on desktop.

The supplied portrait is intended to be the main visual.

The master GSAP/ScrollTrigger architecture was established.

The Overview → Origin Story transition was implemented.

---

# PHASE 2 — COMPLETED

Origin Story is integrated into the master cinematic timeline.

It uses the approved About content.

Desktop uses an editorial archive/profile composition.

Mobile uses a readable native-flow version.

The mobile correction is already implemented:
desktop GSAP pinning is skipped below the mobile breakpoint.

Validation previously passed:
- npm run lint
- npm run build
- git diff --check HEAD

Browser visual validation was partially limited by the previous Codex environment/usage limit.

---

# PHASE 3 — COMPLETED

Build Gallery is implemented.

Six existing projects are presented as a sequential editorial reel, NOT conventional cards.

Projects:

01 — AI Fitness Rehabilitation System
02 — Insurance Claim Prediction
03 — Lazy Autotuner
04 — FlowZen
05 — TravelX
06 — Task Tracker

No fabricated screenshots, videos, project URLs, or invented assets were introduced.

The master GSAP timeline was extended through:
Opening → Origin Story → Build Gallery → Learning Path handoff

Desktop:
One project dominates at a time with a persistent readable project index.

Mobile:
Cinematic pinning is disabled and the projects become a readable vertical editorial sequence.

Validation passed:
- npm run lint
- npm run build
- TypeScript/static generation
- desktop project sequence
- tablet presentation
- mobile presentation
- no horizontal overflow
- keyboard-focusable project index
- reduced-motion fallback

---

# IMPORTANT CURRENT LIMITATION

The supplied portrait is currently represented by an existing placeholder.

Do NOT invent or generate a replacement image.

The real supplied portrait asset still needs to be integrated when the asset is available/approved.

This should be handled separately from the structural chapter implementation.

---

# VISUAL IDENTITY — LOCKED

Editorial × Cinematic × Technical

Background:
deep burgundy / near-black red

Primary text:
warm ivory / cream

Secondary text:
muted warm gray

Primary accent:
controlled bright red

Secondary accent:
controlled blue

Typography:
editorial serif for display
modern sans-serif for UI/body

Visual language:
- oversized typography
- asymmetric layouts
- generous negative space
- layered imagery
- subtle film grain
- thin editorial rules
- page numbers
- technical metadata
- restrained geometry
- coordinates/markers used as abstract composition elements

Decorative elements must remain restrained.

Motion must be:
- slow
- smooth
- intentional
- cinematic

Avoid:
- unnecessary bouncing
- excessive spinning
- perpetual animation
- decorative animation that harms readability

---

# ANIMATION ARCHITECTURE — LOCKED

GSAP + ScrollTrigger:
main cinematic scroll choreography

Motion:
small/local UI interactions

Lenis:
optional only if genuinely required

Three.js/WebGL:
NOT currently required

Do not introduce competing page-level ScrollTrigger timelines.

The portfolio should maintain one coherent master cinematic scroll architecture.

---

# RESPONSIVE STRATEGY — LOCKED

Desktop:
full cinematic pinned composition

Tablet:
reduced overlap and scale shifts

Mobile:
intentional vertical editorial chapters

Do NOT squeeze the desktop composition into mobile.

Mobile content must remain comfortably readable.

---

# ACCESSIBILITY — LOCKED

The portfolio must remain usable without animation.

Required:
- semantic HTML
- meaningful heading hierarchy
- keyboard navigation
- visible focus states
- skip link
- descriptive alt text
- prefers-reduced-motion support
- native scrolling fallback

Content must never depend on hover or animation completion.

---

# CONTENT RULE

Use only factual content from the existing portfolio.

Do not invent:
- projects
- employers
- achievements
- credentials
- dates
- technologies
- statistics
- URLs
- personal information

Do not reuse videos.

Do not create fake project screenshots.

---

# NEXT TASK — PHASE 4

Implement:

LEARNING PATH / 03

Content:
Education + Skills

Education:
01 — St. Francis School — ICSE — Class 10th
02 — Lucknow Public School — CBSE — Class 12th
03 — VIT Bhopal University — 2024–2028 — Bachelor in Computer Science and Engineering

Skills:

Languages:
Python, C++, Java, SQL

Core Concepts:
Data Structures and Algorithms, OOPs, DBMS

AI/ML:
OpenCV, MediaPipe, PoseNet, Model Training

Web:
HTML, CSS, JavaScript

Tools:
Git, Linux (Ubuntu VM), VS Code

Do not add technologies or achievements.

The visual concept is:

EDUCATION
    →
TECHNICAL KNOWLEDGE
    →
PROOF

Education should feel like an editorial academic timeline.

Skills should feel like a technical taxonomy.

The VIT Bhopal entry should receive the strongest visual emphasis.

Do not use:
- skill percentage bars
- star ratings
- generic skill cards
- invented proficiency levels

Phase 4 should integrate into the existing master GSAP/ScrollTrigger timeline.

Do not implement Phase 5 until Phase 4 has been reviewed and approved.

---

# DEVELOPMENT PHILOSOPHY

Always work phase-by-phase:

BUILD
→ RUN
→ VISUAL CHECK
→ FIX
→ VALIDATE
→ LOCK
→ NEXT PHASE

Quality is more important than speed.

The goal is a finished, polished portfolio, not an MVP.

---

# HANDOFF RULE FOR FUTURE CODEX SESSIONS

Before making changes:

1. Read HANDOFF.md.
2. Inspect the current repository.
3. Inspect git status.
4. Inspect recent commits.
5. Understand what phases are already complete.
6. Never restart completed work.
7. Never redesign locked systems without a concrete reason.
8. Continue only from the next unfinished approved phase.

The current stopping point is:

PHASE 3 COMPLETE
PHASE 4 — LEARNING PATH IS NEXT

After updating HANDOFF.md, show me the resulting file summary.

Do not implement anything else.