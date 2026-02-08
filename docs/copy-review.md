# Copy Review Tracking

This document tracks all placeholder copy generated during the rebuild phase. All placeholder text is marked with `{/* TODO: Review and finalize copy */}` comments in the codebase. This ensures no generated placeholder copy accidentally ships to production.

## Session 1 Generated Copy

### Metadata (Global)

**File**: `app/layout.tsx`

```typescript
/* Line 28 */
description:
  "I build products, scale brands, and turn growth loops into revenue. Product management, growth marketing, and ecommerce operations.",

/* Line 37-39 (OpenGraph) */
description:
  "I build products, scale brands, and turn growth loops into revenue. Product management, growth marketing, and ecommerce operations.",

/* Line 44-46 (Twitter) */
description:
  "I build products, scale brands, and turn growth loops into revenue. Product management, growth marketing, and ecommerce operations.",
```

**Status**: Placeholder copy from rebuild plan
**Priority**: Review before production deployment
**Notes**: Metadata descriptions appear in search results, social shares, and preview cards

---

### Homepage Hero Section

**File**: `app/page.tsx`

```typescript
/* Line 8-9 */
{/* TODO: Review and finalize copy */}
Homepage in progress.

/* Line 12-13 */
{/* TODO: Review and finalize copy */}
The full site is being rebuilt with a new design system. Check back shortly.
```

**Status**: Stub content for placeholder
**Priority**: Will be replaced with full hero section in Session 2
**Notes**: This is the primary hero messaging for the site

---

### Footer Tagline

**File**: `components/Footer.tsx`

```typescript
/* Line 22-25 */
{/* TODO: Review and finalize copy */}
<p>
  Building products, scaling brands, and turning growth loops into
  revenue.
</p>
```

**Status**: Placeholder tagline
**Priority**: Review and finalize before production
**Notes**: Appears in footer column 1 (brand section)

---

### Stub Pages

All stub pages contain similar placeholder copy. Review locations:

| File | Line | Content | Priority |
|------|------|---------|----------|
| `app/about/page.tsx` | 18-19 | "This page is coming in a future session." | Session 3 |
| `app/results/page.tsx` | TBD | "Coming Soon" placeholder | Session 2 |
| `app/blog/page.tsx` | TBD | "Coming Soon" placeholder | Session 4 |
| `app/blog/[slug]/page.tsx` | TBD | "Coming Soon" placeholder | Session 4 |
| `app/contact/page.tsx` | TBD | "Coming Soon" placeholder | Session 5 |

**Status**: All marked with TODO comments
**Priority**: Low (intermediate pages, not customer-facing yet)

---

## Copy Review Checklist

Before each session, review:

- [ ] All metadata descriptions (title, description, OpenGraph, Twitter)
- [ ] Hero section headlines and subheadings
- [ ] Button labels and call-to-action copy
- [ ] Section introductions and descriptions
- [ ] Footer tagline and company description
- [ ] Error messages and empty states
- [ ] Form labels and placeholder text

## Placeholder Identification

### Visual Indicator
Every piece of placeholder copy has this pattern immediately above or next to it:
```typescript
{/* TODO: Review and finalize copy */}
```

### Search Pattern
To find all placeholder copy in codebase:
```bash
grep -r "TODO: Review and finalize copy" app/ components/
```

Or with context:
```bash
grep -B2 -A2 "TODO: Review and finalize copy" app/ components/
```

## Copy Guidelines for Review

When reviewing/finalizing placeholder copy, ensure:

1. **Brand Voice**: Matches the "PM + Growth Marketer + Ecommerce Operator" positioning
2. **Tone**: Professional yet approachable, results-focused
3. **Clarity**: Clear value proposition without jargon
4. **Length**: Concise (metadata: <160 chars, headlines: <100 chars)
5. **SEO**: Includes relevant keywords naturally (for metadata)
6. **Action-Oriented**: CTAs use strong verbs when appropriate

## Future Sessions

As sessions progress, this document will be updated with new placeholder copy locations:

- **Session 2**: Homepage results section, Results page case studies
- **Session 3**: About page sections (biography, timeline, credentials)
- **Session 4**: Blog metadata (post titles, excerpts) + archive page copy
- **Session 5**: Contact page form labels and success messages
- **Session 6+**: Additional feature copy, testimonials, etc.

## Production Deployment Checklist

Before deploying to production:

- [ ] All TODO comments reviewed and copy finalized
- [ ] No unfinished stub pages exposed in navigation
- [ ] Metadata matches SEO strategy
- [ ] All CTAs have clear, compelling copy
- [ ] Tone is consistent across all pages
- [ ] No placeholder text remains (search for "TODO", "Coming Soon", etc.)

---

**Last Updated**: Session 1 (February 7, 2025)
**Total Placeholders**: 8 locations
**Completed for Production**: 0 (awaiting copy review)
