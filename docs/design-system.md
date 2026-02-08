# Design System

Complete reference for kavenkim.com visual language, CSS custom properties, animations, and styling conventions (Tailwind CSS v4 + custom components).

## Color Palette

All colors defined as CSS custom properties in `styles/global.css`. Apply via `var(--property-name)`.

### Primary Colors

| Variable | Value | Purpose | Usage |
|----------|-------|---------|-------|
| `--bg` | `#FAFAFA` | Background (off-white) | Page background, cards |
| `--text` | `#1A1A1A` | Primary text (near-black) | Headlines, body copy |
| `--muted` | `#6B6B6B` | Muted text (gray) | Secondary text, timestamps |
| `--border` | `#E0E0E0` | Borders (light gray) | Dividers, input borders |

### Accent Colors

| Variable | Value | Purpose | Usage |
|----------|-------|---------|-------|
| `--accent` | `#E85D3A` | Primary accent (burnt orange) | Links, buttons, hover states |
| `--accent-hover` | `#D14D2A` | Darker accent (hover state) | Button press, active state |
| `--accent-light` | `#FFF0EB` | Light accent tint | Backgrounds for accent elements |

### Color Application Examples

```css
/* Text colors */
color: var(--text);           /* Primary text */
color: var(--muted);          /* Secondary text */

/* Link colors */
.link {
  color: var(--accent);
}
.link:hover {
  color: var(--accent-hover);
}

/* Backgrounds */
background-color: var(--bg);
background-color: var(--accent-light);
```

## Typography

### Fonts

**Space Grotesk** (Headings)
- CSS Variable: `--font-heading`
- Weights: 500 (medium), 700 (bold)
- Import: `next/font/google` in `app/layout.tsx`
- Applied via: `font-[family-name:var(--font-heading)]`

**DM Sans** (Body)
- CSS Variable: `--font-body`
- Weights: 400 (regular), 500 (medium), 700 (bold)
- Import: `next/font/google` in `app/layout.tsx`
- Applied via: Default (set on `<body>` element)

### Typographic Scale

| Element | Font Size | Font Weight | Line Height | Tracking | Usage |
|---------|-----------|------------|------------|----------|-------|
| H1 (Hero) | clamp(2.5rem, 6vw, 4.5rem) | 700 (Space Grotesk) | 1.05 | tight | Homepage hero |
| H2 (Page) | clamp(2rem, 5vw, 3.5rem) | 700 (Space Grotesk) | 1.1 | tight | Page titles |
| Label | 12px | 700 | 1.4 | 0.25em | Section labels, breadcrumbs |
| Nav | 14px | 500 | 1.4 | wide | Navigation links |
| Body | 16px | 400 | 1.6 | normal | Paragraph text |
| Small | 14px | 400 | 1.5 | normal | Secondary copy |
| Caption | 12px | 400 | 1.5 | normal | Captions, timestamps |

### Text Tracking (Letter Spacing)

```css
/* Tighter for headlines */
tracking-tight          /* -0.02em */

/* Normal body text */
tracking-normal         /* 0 */

/* Wide for labels and uppercase */
tracking-[0.2em]        /* Navigation */
tracking-[0.25em]       /* Section labels */
tracking-wide           /* Custom element labels */
```

## Spacing Scale

All spacing defined as CSS custom properties. Use via `var(--space-*)` or combine with Tailwind `p-` and `m-` utilities.

| Variable | Value | Usage |
|----------|-------|-------|
| `--space-xs` | 0.25rem (4px) | Micro gaps, tight spacing |
| `--space-sm` | 0.5rem (8px) | Small gaps, padding |
| `--space-md` | 1rem (16px) | Standard padding/gaps |
| `--space-lg` | 1.5rem (24px) | Medium sections |
| `--space-xl` | 2rem (32px) | Section padding |
| `--space-2xl` | 3rem (48px) | Major section spacing |
| `--space-3xl` | 4rem (64px) | Layout spacing |
| `--space-4xl` | 6rem (96px) | Large layout gaps |
| `--space-5xl` | 8rem (128px) | Hero sections |

### Spacing Application

```jsx
{/* Using CSS variables */}
<div style={{ padding: 'var(--space-lg)' }} />

{/* Using Tailwind utilities */}
<div className="p-6 py-20 gap-8" />

{/* Responsive spacing */}
<div className="px-6 py-20 md:px-8 md:py-24 lg:px-10" />
```

## Border Radius

All radii defined as CSS custom properties.

| Variable | Value | Usage |
|----------|-------|-------|
| `--radius-sm` | 4px | Subtle borders (inputs) |
| `--radius-md` | 8px | Cards, moderate curves |
| `--radius-lg` | 12px | Button corners |
| `--radius-xl` | 16px | Large components |

Application:
```css
border-radius: var(--radius-md);
border-radius: var(--radius-lg);
```

## Layout Constraints

| Variable | Value | Purpose |
|----------|-------|---------|
| `--max-width` | 1200px | Main content container |

### Container Pattern

```jsx
{/* Standard max-width layout */}
<div className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-10">
  {/* Content */}
</div>
```

## Animations

All animations defined in `@layer components` of `styles/global.css`. Apply via `animation-*` Tailwind utilities or inline styles.

### Keyframe Animations

| Animation | Behavior | Duration | Use Case |
|-----------|----------|----------|----------|
| `fadeInUp` | Fade + translate Y up | 0.6s | Entrance animations |
| `fadeIn` | Opacity fade | 0.6s | Gradual appearance |
| `scaleIn` | Fade + slight scale | 0.6s | Growing entrance |
| `slideDown` | Fade + translate Y down | 0.4s | Dropdown menus, top-to-bottom |
| `textReveal` | Clip-path reveal left-to-right | Variable | Text animations |
| `underlineSlide` | Underline scale X animation | 0.3s | Underline effects |

### Delay Utilities

Apply animation delays for staggered effects. Classes: `.delay-100` through `.delay-800` (100ms increments).

```jsx
{/* Staggered list items */}
{items.map((item, i) => (
  <div
    key={item.id}
    style={{
      animation: `fadeInUp 0.6s ease-out ${i * 100 + 100}ms both`,
    }}
  >
    {item.label}
  </div>
))}

{/* Mobile drawer animation example */}
<div
  style={{
    animation: mobileOpen
      ? `slideDown 0.4s ease-out ${100 + index * 80}ms both`
      : "none",
  }}
>
  {/* Link content */}
</div>
```

### Scroll-Triggered Animations

Base classes for scroll reveal pattern:

| Class | CSS | Purpose |
|-------|-----|---------|
| `.animate-on-scroll` | opacity: 0; transform: translateY(24px); | Initial state |
| `.animate-on-scroll.is-visible` | opacity: 1; transform: translateY(0); | Revealed state |

**JavaScript Observer** (to be implemented in future sessions):
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
});

document.querySelectorAll('.animate-on-scroll').forEach((el) => {
  observer.observe(el);
});
```

## Component-Level Styling

### Navigation Header

```css
/* Sticky positioning */
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 50;

/* Scroll-aware styling */
transition: all 0.3s;
background-color: var(--bg) / 90%;
backdrop-filter: blur(12px);
border-bottom: 1px solid var(--border);

/* Logo */
text-[15px];
font-weight: 700;
letter-spacing: 0.2em;
text-transform: uppercase;

/* Nav links */
text-[14px];
font-weight: 500;
letter-spacing: wide;
border-bottom: 2px solid var(--accent);
transform: scaleX(0);
transform-origin: left;
```

### Footer

```css
/* 3-column grid */
display: grid;
grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
gap: 3rem;

/* Bottom bar */
display: flex;
align-items: center;
justify-content: space-between;
padding-y: 1.25rem;
border-top: 1px solid var(--border);

/* Column headers */
text-[11px];
font-weight: 700;
letter-spacing: 0.2em;
text-transform: uppercase;
color: var(--muted);
```

## Responsive Design Strategy

### Breakpoints

```tailwindcss
/* Mobile-first (default) */
className="text-16px px-6 py-20"

/* Tablet (768px+) */
md:className="md:text-18px md:px-8"

/* Desktop (1024px+) */
lg:className="lg:text-20px lg:px-10"
```

### Common Patterns

```jsx
{/* Responsive container */}
<div className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-10">

{/* Responsive grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

{/* Responsive typography */}
<h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold">

{/* Responsive spacing */}
<section className="py-20 md:py-24 lg:py-32">
```

## Utility Patterns

### Text Color States

```jsx
{/* Default + hover */}
className="text-[var(--text)] hover:text-[var(--accent)] transition-colors"

{/* Muted + hover to accent */}
className="text-[var(--muted)] hover:text-[var(--accent)]"

{/* Active state */}
className={isActive ? "text-[var(--accent)]" : "text-[var(--text)]"}
```

### Link Hover Effects

```jsx
{/* Underline animation */}
<a className="relative group">
  {label}
  <span className="absolute bottom-0 left-0 h-[2px] bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
</a>
```

## Tailwind Configuration

**Key Points**:
- No `tailwind.config.js` required (v4 zero-config)
- Custom colors available via CSS variables
- Grid/flexbox utilities fully available
- Responsive modifiers (`md:`, `lg:`, etc.) supported
- Animation utilities work with `@keyframes` in global.css

## Performance

- **Font Loading**: Both fonts use `display: "swap"` for FOUT-safe rendering
- **CSS**: Tailwind v4 tree-shakes unused utilities automatically
- **Animations**: GPU-accelerated via `transform` and `opacity` (not `left`, `top`, etc.)

---

**Last Updated**: Session 1 (February 7, 2025)
**Status**: Complete for current implementation
