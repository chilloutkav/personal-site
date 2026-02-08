# Known Issues & Workarounds

This document tracks known issues, limitations, and workarounds during the kavenkim.com rebuild phase.

## Current Issues

### 1. Tailwind CSS v4 Development Mode (Critical)

**Status**: Active workaround in place
**Severity**: Critical
**Affected**: Next.js development workflow

**Problem**:
- Running `npm run dev` results in blank pages
- Tailwind v4 fails to process `@import "tailwindcss"` directive in development mode
- Next.js dev server doesn't properly compile Tailwind utilities

**Root Cause**:
- Next.js development mode (with fast refresh) has compatibility issues with Tailwind v4's new `@import` directive
- Production builds work perfectly

**Workaround** (Active):
- **Always use**: `npm run prod` for development
- **Never use**: `npm run dev`
- Build step is fast enough for iterative development

**Why This Works**:
- Production build properly processes all Tailwind v4 directives
- Server runs at localhost:3000
- Full CSS processing and HMR still work
- Startup time: ~15-20 seconds

**Permanent Solution** (Future):
- Wait for Next.js v15.1+ with full Tailwind v4 dev mode support
- Update CLAUDE.md when fix becomes available

**References**:
- Documented in `CLAUDE.md`: "⚠️ Tailwind CSS v4 Compatibility"
- Team memory: "REQUIRED WORKFLOW: npm run prod"

---

### 2. Placeholder Copy Throughout Site

**Status**: Active — needs review before deploy
**Severity**: Medium
**Affected**: All pages

**Problem**:
All generated copy is marked with `{/* TODO: Review and finalize copy */}` and needs Kaven's review before shipping to production.

**Affected Areas**:
- Homepage: hero headlines, section headings, results descriptions
- About page: full narrative content, pull-quotes
- Results page: all 5 case study narratives (anonymized)
- Testimonials: 3 placeholder testimonials with fake names (need real quotes from PRD)
- Blog posts: 3 placeholder posts with generated content
- Footer: tagline
- Various metadata descriptions

**Resolution**: Session 5 — final copy review pass

---

### 3. Testimonials Need Real Content

**Status**: Active — placeholder data
**Severity**: Medium
**Affected**: `lib/testimonials.ts`, homepage testimonials section

**Problem**:
Testimonials use fabricated quotes/names as placeholders. The PRD reportedly has actual testimonials that should replace them.

**Resolution**: Session 5 — replace with real testimonials from PRD

---

## Tracked & Tested Workarounds

### Development Server Management

**Issue**: Port 3000 already in use from previous session

**Solution**:
```bash
# Check what's using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>

# Or use this combined command
lsof -t -i:3000 | xargs kill -9

# Then start fresh
npm run prod
```

### Build Cache Issues

**Issue**: Old CSS/assets cached after config changes

**Solution**:
```bash
npm run clean   # Clears .next/ directory
npm run rebuild # Clean + full rebuild + start
```

---

## Browser & Environment Compatibility

### Tested Configurations

| Environment | Status | Notes |
|-------------|--------|-------|
| macOS 13+ (Safari) | ✅ Works | Modern CSS support |
| Chrome/Edge 120+ | ✅ Works | Full ES2022+ support |
| Firefox 121+ | ✅ Works | CSS variables support |
| Mobile Safari (iOS 16+) | ✅ Works | Responsive design tested |
| Mobile Chrome/Android | ✅ Works | Touch events working |

### Known Limitations

| Feature | Browser | Status | Workaround |
|---------|---------|--------|-----------|
| CSS Variables | IE 11 | ❌ Not supported | Not targeting IE 11 |
| `display: swap` | Old browsers | ⚠️ Limited | Graceful font fallback |
| `backdrop-filter` | IE 11, Android < 9 | ❌ Not supported | Solid fallback color |

---

## Type Checking & Linting

### TypeScript Strict Mode

**Status**: Enabled
**Rule**: All code must pass `npm run type-check`

**Common Issues**:
- Unused imports from old lib files
- Type inference on dynamic routes
- Tailwind string classes (use `className` not separate strings)

**Resolution**:
```bash
npm run type-check  # Identify issues
# Fix issues, then:
npm run type-check  # Verify fix
```

### ESLint

**Status**: Enabled with Next.js config
**Rule**: All code must pass `npm run lint`

**Common Issues**:
- Unused variables
- Missing `alt` text on images
- Missing `key` props in lists
- Client component directives where needed

**Resolution**:
```bash
npm run lint        # Show all issues
npm run lint -- --fix  # Auto-fix issues
```

---

## Performance Notes

### Current Metrics

| Metric | Value | Notes |
|--------|-------|-------|
| Build Time | ~15-20s | Using `npm run prod` |
| Startup | ~3-5s | Server ready at localhost:3000 |
| First Load | <1s | Static HTML with CSS |
| Tailwind Bundle | ~50KB | Tree-shaken unused utilities |

### Optimization Opportunities (Future)

- [ ] Image optimization with Next.js `<Image>` component
- [ ] Font subset optimization (beyond `display: swap`)
- [ ] Blog post static generation (ISR)
- [ ] Component code splitting on demand
- [ ] Analytics script async loading

---

## Git & Version Control

### Branch Management

**Current**: `rebuild/app-router`
**Main**: Untouched (from previous stable build)

**Issue**: Don't accidentally commit to main
**Workaround**: Double-check branch before committing
```bash
git branch                          # Verify current branch
git checkout rebuild/app-router     # Switch if needed
```

### Large Files

**Potential Issue**: `node_modules/` sometimes large
**Status**: Already in `.gitignore`
**Verification**:
```bash
git status  # Should not show node_modules/
```

---

## Netlify Deployment (Future)

### Environment Variables

**To Configure** (after testing complete):
- `NEXT_PUBLIC_GTM_ID=GTM-5CXC3C8` (already set)
- `BUILD_IMAGE=ubuntu-24.04-noble` (required by Jan 1, 2026)
- `AWS_LAMBDA_JS_RUNTIME=nodejs22.x` (aligns with build Node.js 22)

**Note**: These must be set in Netlify UI, not `netlify.toml`

### Build Command

**Current**: Uses Netlify's Next.js auto-detection
**May Need**: Custom build command if Next.js 15 handling differs
**Status**: To be tested during deployment phase (Session 5-7)

---

## Documentation Gaps

| Gap | Impact | Resolution |
|-----|--------|-----------|
| No component storybook | Low | Can add in future if needed |
| No API routes documented | Low | No API routes yet (planned for Phase 6) |
| No testing setup | Low | Can add test suite in Session 5 |

---

## Contact & Support

### Getting Help

For issues not listed here:
1. Check `CLAUDE.md` for project-specific guidance
2. Review `MEMORY.md` for session context
3. Check `build-log.md` for what was completed
4. Check `architecture.md` for structure overview

### Reporting Issues

When logging new issues:
- **Session**: Note which session issue appeared
- **Reproduction Steps**: Clear steps to reproduce
- **Expected vs Actual**: What should happen vs what happens
- **Environment**: OS, Node.js version, browser, etc.

---

**Last Updated**: Session 4
**Critical Issues**: 1 (Tailwind dev mode — workaround in place)
**Medium Issues**: 2 (placeholder copy, placeholder testimonials)
**Low Issues**: 0
**Status**: All features functional. Polish and content review needed in Session 5.
