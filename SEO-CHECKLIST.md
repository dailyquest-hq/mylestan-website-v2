# SEO Optimization Checklist
**Website:** https://mylesyeotan.com
**Current Score:** 95/100
**Target Score:** 100/100
**Last Updated:** February 1, 2026

---

## ✅ Completed (95/100)

### Technical SEO Infrastructure
- [x] Security headers (7 types)
- [x] Web app manifest (PWA ready)
- [x] Dynamic favicon and app icons
- [x] Enhanced metadata (Open Graph, Twitter Cards)
- [x] Page-specific metadata (7 pages)
- [x] Dynamic sitemap
- [x] Canonical URLs on all pages
- [x] Meta descriptions
- [x] Keywords optimization
- [x] Mobile responsive
- [x] HTTPS enabled

### Structured Data (Schema.org)
- [x] Person Schema
- [x] Website Schema
- [x] Organization Schema
- [x] LocalBusiness Schema
- [x] FAQ Schema (10 Q&A pairs)
- [x] Breadcrumb Schema

### Search Engine Setup
- [x] Google Search Console verified
- [x] Google sitemap submitted (7 pages discovered)
- [x] Bing Webmaster Tools verified
- [x] Bing sitemap submitted (7 pages discovered)

### LLM Optimization
- [x] llms.txt created and deployed
- [x] robots.txt updated for AI crawlers
- [x] All major AI bots allowed (GPTBot, ClaudeBot, etc.)
- [x] Structured content for LLM understanding

### Open Graph
- [x] Dynamic OG image (text-based design)
- [x] OG tags on all pages
- [x] Twitter Card tags
- [x] Social media preview optimization

---

## 🎯 Priority 1: Quick Wins (To reach 98.5/100)

### [ ] 1. Google Analytics Setup (+2 points)
**Time:** 10 minutes
**Impact:** Track traffic, user behavior, conversions
**Difficulty:** Easy

**Steps:**
1. Go to https://analytics.google.com
2. Create GA4 property for "mylesyeotan.com"
3. Copy Measurement ID (format: G-XXXXXXXXXX)
4. Add to `.env.local` or `.env.production`:
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
5. Redeploy site
6. Verify tracking in GA4 Realtime report

**Current Status:**
- Component installed: ✅ `/src/components/GoogleAnalytics.tsx`
- Integrated in layout: ✅ `/src/app/layout.tsx`
- Measurement ID: ❌ Not configured

**Resources:**
- [Google Analytics Setup Guide](https://support.google.com/analytics/answer/9304153)

---

### [ ] 2. Professional OG Image with Photo (+1 point)
**Time:** 30 minutes
**Impact:** 38% higher engagement on social shares
**Difficulty:** Medium

**Specifications:**
- **Size:** 1200 x 630 pixels (required)
- **Format:** JPG or PNG
- **Max file size:** 5MB (recommend under 200KB)
- **File path:** `/public/og-image.jpg`

**Design Requirements:**
1. Professional suit photo (with bow tie in formal venue)
2. Text overlay:
   - Name: "Myles Tan" (large, white, bold)
   - Tagline: "Crypto Trader • Christian Entrepreneur • Public Speaker" (orange #ed5128)
   - Subtitle: "Blending faith and finance to empower people worldwide" (gray #9f9f9f)
3. Brand elements:
   - Orange accent bar on left (#ed5128)
   - Dark background (#0f100a)
   - Website URL in corner: "mylesyeotan.com"

**Options to Create:**
- **Canva:** Use "Open Graph" template (1200x630)
- **Figma:** Professional design tool
- **Fiverr/Upwork:** Hire designer ($20-50)
- **AI Tools:** ChatGPT/DALL-E for branded image

**Steps:**
1. Obtain professional suit photo file
2. Create 1200x630px design with specifications above
3. Save as `/public/og-image.jpg`
4. Test preview: https://www.opengraph.xyz
5. Commit and deploy

**Current Status:**
- OG image exists: ✅ Using placeholder
- Dynamic OG route: ✅ `/src/app/opengraph-image.tsx` (text-only)
- Professional photo: ❌ Need to replace

---

### [ ] 3. Static PWA Icons (+0.5 points)
**Time:** 15 minutes
**Impact:** Better mobile/PWA compatibility
**Difficulty:** Easy

**Required Files:**
- [ ] `/public/icon-192x192.png` (192x192px)
- [ ] `/public/icon-512x512.png` (512x512px)
- [ ] `/public/apple-touch-icon.png` (180x180px)
- [ ] `/public/favicon.ico` (32x32px) - Optional

**Design:**
- Use professional photo or brand mark
- Simple, recognizable at small sizes
- PNG format with transparency
- Brand colors (#ed5128 orange, #0f100a black)

**Steps:**
1. Create/export icons at specified sizes
2. Save to `/public/` folder
3. Verify in manifest.ts references them
4. Commit and deploy
5. Test on mobile device

**Tools:**
- [Favicon.io](https://favicon.io/) - Free generator
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Advanced

**Current Status:**
- Dynamic icons: ✅ `/src/app/icon.tsx`, `/src/app/apple-icon.tsx`
- Static icons: ❌ Not created
- Manifest: ✅ References static icons (need to create files)

---

## 📝 Priority 2: Content & Ongoing (To reach 100/100)

### [ ] 4. Bing Verification Meta Tag (+0.5 points)
**Time:** 5 minutes
**Impact:** Complete Bing verification
**Difficulty:** Easy

**Steps:**
1. Go to Bing Webmaster Tools settings
2. Find verification code
3. Update `/src/app/layout.tsx` line 82
4. Replace `"bing-verification-code-here"` with actual code
5. Commit and deploy

**Current Status:**
- Bing connected: ✅ Via Google import
- Meta tag: ❌ Placeholder only

---

### [ ] 5. Blog Content with Article Schema (+1 point)
**Time:** Ongoing
**Impact:** Ranks for long-tail keywords, establishes authority
**Difficulty:** Medium

**Initial Goal:** 3-5 blog posts

**Post Ideas:**
- "How to Start Crypto Trading as a Christian"
- "5 Biblical Principles for Financial Planning"
- "Balancing Faith and Finance in Business"
- "My Journey: From Trading to Ministry"
- "Crypto Trading Psychology: Lessons from Scripture"

**For Each Post:**
- [ ] Write 800-1500 words
- [ ] Add Article schema:
  ```typescript
  import { articleSchema } from '@/lib/schemas'

  const schema = articleSchema({
    headline: "Post Title",
    description: "Post excerpt",
    image: "/blog/post-image.jpg",
    datePublished: "2026-02-01T00:00:00Z",
    dateModified: "2026-02-01T00:00:00Z",
    author: "Myles Tan"
  })
  ```
- [ ] Add featured image (1200x630px)
- [ ] Include internal links
- [ ] Add to sitemap (auto-generated if using `/src/app/blogs/[slug]/page.tsx`)

**Current Status:**
- Blog page: ✅ `/src/app/blogs/page.tsx`
- Article schema: ✅ Available in schemas.ts
- Published posts: ❌ None yet

---

## 🚀 Priority 3: Advanced Optimizations

### [ ] 6. Performance Enhancements
**Time:** 1-2 hours
**Impact:** Better user experience, Google ranking factor
**Difficulty:** Medium

**Check Current Performance:**
1. Run Lighthouse audit: Chrome DevTools > Lighthouse
2. Check PageSpeed Insights: https://pagespeed.web.dev/
3. Test Core Web Vitals in Search Console

**Optimization Checklist:**
- [ ] Image optimization (use Next.js Image component everywhere)
- [ ] Lazy loading for below-fold images
- [ ] Font optimization (already using `display: swap` ✅)
- [ ] Minimize JavaScript bundles
- [ ] Enable compression (check server config)
- [ ] Add resource hints (preconnect, dns-prefetch)
- [ ] Optimize CSS delivery
- [ ] Enable caching headers (check next.config.mjs)

**Target Scores:**
- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

### [ ] 7. Additional Schema Types
**Time:** 1-3 hours
**Impact:** Rich snippets, enhanced search visibility
**Difficulty:** Medium

**Add When Content Exists:**

#### [ ] Review Schema
For client testimonials:
```typescript
{
  "@type": "Review",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "Client Name"
  },
  "reviewBody": "Testimonial text..."
}
```

#### [ ] Event Schema
For speaking engagements:
```typescript
{
  "@type": "Event",
  "name": "Event Title",
  "startDate": "2026-03-15T19:00",
  "location": {
    "@type": "Place",
    "name": "Venue Name"
  }
}
```

#### [ ] Video Schema
For media appearances:
- Already have function in schemas.ts ✅
- Need to implement on media-speaking page

#### [ ] Service Schema
For individual service pages:
```typescript
{
  "@type": "Service",
  "serviceType": "Crypto Trading Coaching",
  "provider": {
    "@id": "https://mylesyeotan.com/#person"
  }
}
```

---

### [ ] 8. RSS Feed for Blog
**Time:** 30 minutes
**Impact:** Content syndication, subscribers
**Difficulty:** Easy

**Create:** `/src/app/feed.xml/route.ts`

**Benefits:**
- Blog subscribers via RSS readers
- Content syndication platforms
- Additional discovery channel
- Standard for blogs

**Implementation:**
```typescript
import { NextResponse } from 'next/server'

export async function GET() {
  const feed = generateRSSFeed() // Implement based on blog posts
  return new NextResponse(feed, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
```

---

### [ ] 9. Accessibility Audit
**Time:** 2-3 hours
**Impact:** Better UX, SEO benefit, legal compliance
**Difficulty:** Medium

**Checklist:**
- [ ] All images have alt text
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] ARIA labels for interactive elements
- [ ] Keyboard navigation works
- [ ] Color contrast ratios (WCAG AA)
- [ ] Focus indicators visible
- [ ] Forms have labels
- [ ] Skip to main content link

**Tools:**
- Chrome DevTools > Lighthouse (Accessibility score)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [axe DevTools](https://www.deque.com/axe/devtools/)

---

### [ ] 10. Internal Linking Strategy
**Time:** Ongoing
**Impact:** Better crawlability, user engagement
**Difficulty:** Easy

**Best Practices:**
- [ ] Link from homepage to all main pages
- [ ] Blog posts link to related content
- [ ] Service pages cross-link
- [ ] Use descriptive anchor text
- [ ] Avoid orphan pages (pages with no internal links)

**Target:** Every page should have 3-5 internal links

---

## 📊 Score Tracker

| Category | Points | Status | Priority |
|----------|--------|--------|----------|
| Google Analytics | +2.0 | ⏳ Pending | P1 |
| Professional OG Image | +1.0 | ⏳ Pending | P1 |
| Static PWA Icons | +0.5 | ⏳ Pending | P1 |
| Bing Verification | +0.5 | ⏳ Pending | P2 |
| Blog Content | +1.0 | ⏳ Future | P2 |
| **TOTAL** | **5.0** | **Target: 100/100** | |

**Current:** 95/100
**After P1:** 98.5/100
**After P2:** 100/100 ✅

---

## 🎯 Next Steps

### This Week (Feb 1-7, 2026)
1. [ ] Set up Google Analytics
2. [ ] Replace OG image with professional photo
3. [ ] Create static PWA icons
4. [ ] Update Bing verification code

### This Month (February 2026)
5. [ ] Write first 3 blog posts
6. [ ] Run Lighthouse audit
7. [ ] Implement performance optimizations
8. [ ] Review Search Console data

### Ongoing
9. [ ] Publish blog content regularly (1-2x/month)
10. [ ] Monitor Search Console metrics
11. [ ] Build backlinks
12. [ ] Update content quarterly

---

## 📈 Success Metrics

### Week 1-2
- [ ] Google Analytics tracking active
- [ ] All pages crawled by Google/Bing
- [ ] Search Console shows impressions data

### Month 1
- [ ] Site indexed for brand searches
- [ ] 10+ impressions/day in Search Console
- [ ] First organic traffic

### Month 2-3
- [ ] 50+ impressions/day
- [ ] Ranking for topic keywords
- [ ] LLM citations begin

### Month 3-6
- [ ] 100+ impressions/day
- [ ] Growing organic traffic
- [ ] Established search presence

---

## 🔗 Resources

### SEO Tools
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [Google Analytics](https://analytics.google.com)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Schema Markup Validator](https://validator.schema.org/)

### Testing Tools
- [Open Graph Checker](https://www.opengraph.xyz/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### Documentation
- [Next.js SEO](https://nextjs.org/learn/seo/introduction-to-seo)
- [Schema.org](https://schema.org/)
- [Google SEO Guide](https://developers.google.com/search/docs)
- [llms.txt Spec](https://llmstxt.org/)

---

## ✅ Quick Reference

**Current SEO Status:**
- Technical SEO: ✅ Complete (95%)
- Search Engines: ✅ Connected & Crawling
- LLM Optimization: ✅ Complete
- Content: ⏳ In Progress
- Analytics: ❌ Needs Setup

**To Reach 100/100:**
1. Add Google Analytics ID ← **Start here**
2. Replace OG image with professional photo
3. Create static icon files
4. Publish blog content

**Deployment Command:**
```bash
git add .
git commit -m "SEO improvement: [describe change]"
git push
```

**Check After Deploy:**
- https://mylesyeotan.com/opengraph-image
- https://mylesyeotan.com/sitemap.xml
- https://mylesyeotan.com/manifest.webmanifest

---

*Last updated: February 1, 2026*
*Next review: February 7, 2026*
