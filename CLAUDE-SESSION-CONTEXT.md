# DWB Website - Claude Session Context

> This file preserves context for Claude Code sessions. Reference this at the start of new sessions.

## Project Overview

- **Repo:** https://github.com/TheWorkLessCo/dwb-website
- **Stack:** Next.js 14, Tailwind CSS v4, shadcn/ui (50+ components)
- **Brand Colors:** Primary blue `#049bf2`, Navy `#00152e`
- **Font:** Poppins

## Git Workflow

GitHub is authenticated via `gh auth`. To save work:
```bash
cd ~/Development/dwb-website
git add [files]
git commit -m "message"
git push origin main
```

## Session Progress (Jan 27, 2025)

### Completed
1. Set up GitHub authentication
2. Committed and pushed previous unsaved changes
3. Increased ImageBridge photo height (h-72/h-80/h-96)
4. Removed Transformation Framework from Services and City pages (kept on Home only)
5. **Added design tokens** - modern shadows, gradients, custom easing in globals.css
6. **Added accessibility** - skip link, prefers-reduced-motion, semantic main element
7. **Created scroll animations** - useIntersectionObserver hook + AnimateOnScroll component
8. **Added Card variants** - glass, elevated, subtle, ghost variants in card.tsx
9. **Applied scroll animations** - AnimateOnScroll on Transformation Framework (staggered)
10. **Applied scroll animations** - AnimateOnScroll on Benefits section (staggered)
11. **Created focus trap** - useFocusTrap hook for mobile menu accessibility
12. **Applied focus trap** - Mobile nav menu now has proper focus trapping + ARIA

### Next Up (Phase 2 Remaining)
- Upgrade button hover states in button.tsx (add micro-lift, shadow transitions)
- Apply gradient backgrounds to sections (bg-mesh-subtle)
- Apply glass Card variant to appropriate components

---

## UI/UX Analysis Summary

### Current State (6.5/10 Design Maturity)

**Strengths:**
- Good mobile responsiveness (sm/md/lg/xl breakpoints)
- shadcn/ui component library integrated
- Decent micro-interactions (hover transforms, accordion animations)
- Clean typography with Poppins

**Issues Identified:**

| Problem | Location | Impact |
|---------|----------|--------|
| Heavy box-shadows | Multiple components | Dated look |
| Pulsing glow animations | globals.css, warranty-card.tsx | Web 2.0 feel |
| Hard-coded hex colors | 50+ files | Inconsistent |
| No scroll animations | Site-wide | Static feel |
| No loading states | Site-wide | Poor perceived perf |
| Missing accessibility | header.tsx, layout.tsx | Compliance gaps |

### 2026 Trends to Apply
- Glassmorphism / "Liquid Glass" (translucent + blur)
- Subtle directional shadows
- Scroll-triggered animations (fade-up on viewport)
- Custom cubic-bezier easing
- Gradient backgrounds
- Accessibility-first (focus traps, reduced motion, skip links)

---

## Improvement Plan

### Phase 1: Quick Wins (Today)

**1.1 Design Tokens** - `app/globals.css`
```css
:root {
  --brand-blue: #049bf2;
  --brand-blue-hover: #0389d5;
  --brand-navy: #00152e;
  --shadow-card: 0 4px 6px -1px rgba(0,21,46,0.04);
  --shadow-card-hover: 0 20px 25px -5px rgba(4,155,242,0.08);
}
```

**1.2 Accessibility** - `app/globals.css`, `app/layout.tsx`
- Add skip link
- Add `prefers-reduced-motion` media query

**1.3 Remove Dated Animations** - `app/globals.css`
- Remove pulse-orange, pulse-blue, pulse-slow keyframes
- Replace with static subtle effects

### Phase 2: Component Upgrades (This Week)

**2.1 Scroll Animations**
- Create `hooks/use-intersection-observer.ts`
- Create `components/animate-on-scroll.tsx`

**2.2 Card Variants** - `components/ui/card.tsx`
- Add `glass` variant with backdrop-blur
- Add `elevated` variant with blue shadows

**2.3 Button Upgrades** - `components/ui/button.tsx`
- Add micro-lift on hover
- Add shadow transitions

**2.4 Focus Trap** - `components/header.tsx`
- Create `hooks/use-focus-trap.ts`
- Apply to mobile menu

### Phase 3: Larger Improvements (Next Sprint)
- Skeleton loading states
- Bento grid layouts
- Custom easing functions

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `app/globals.css` | Design tokens, shadows, gradients, easing, accessibility |
| `app/layout.tsx` | Root layout with skip link and semantic main |
| `app/page.tsx` | Homepage with all sections |
| `components/ui/card.tsx` | Card with glass/elevated/subtle/ghost variants |
| `components/ui/button.tsx` | Base button component (needs hover upgrade) |
| `components/animate-on-scroll.tsx` | **NEW** - Scroll-triggered animation wrapper |
| `hooks/use-intersection-observer.ts` | **NEW** - Intersection Observer hook |
| `hooks/use-focus-trap.ts` | **NEW** - Focus trap hook for accessibility |
| `components/header.tsx` | Navigation with mobile menu + focus trap applied |
| `components/hero.tsx` | Homepage hero with video |
| `components/warranty-card.tsx` | Glassmorphism example |
| `components/transformation-framework.tsx` | 5-card methodology section |
| `components/ImageBridge.tsx` | Full-width image section |

---

## Dev Server

```bash
cd ~/Development/dwb-website
npm run dev
# Runs at http://localhost:3000
```

---

## Resume Instructions for Claude

When starting a new session:
1. Read this file first
2. Check `git status` for any uncommitted changes
3. Run `npm run dev` if not already running
4. Continue from the "In Progress" section above
