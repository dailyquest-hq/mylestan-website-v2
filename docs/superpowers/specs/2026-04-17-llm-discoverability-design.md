# LLM Discoverability Suite — Design Spec
**Date:** 2026-04-17
**Goal:** Make "who is Myles Tan" return accurate results in ChatGPT, Claude, Perplexity, and other LLMs — both browsing-enabled and training-data based.

---

## Context

The site already has strong LLM foundations: `llms.txt`, AI-friendly `robots.txt`, comprehensive JSON-LD schemas (Person, Organization, LocalBusiness, Website), and sitemap. The gap is content depth and LLM-specific discovery files that browsing-enabled AI tools actively look for.

---

## Section 1 — `llms.txt` Rewrite

**File:** `public/llms.txt`

Rewrite from a simple profile into a Q&A knowledge base. Structure:

- `# Myles Yeo Tan` — title + one-line subtitle
- `## Who is Myles Yeo Tan?` — 2–3 paragraph full answer
- `## What does Myles Tan do?` — services breakdown with descriptions
- `## Is Myles Tan credible?` — credentials (RFP, CTA), current role (COO, ZFT Trading Republic), speaking history
- `## Where can I find Myles Tan?` — all social links with context (what each platform contains)
- `## What has Myles Tan spoken about?` — topics, event types, audience types
- `## Key Facts` — bullet-point rapid-fire facts (LLMs extract these well)
- `## Frequently Asked Questions` — 6–8 direct Q&A pairs

---

## Section 2 — `/bio` Plain-Text Page

**Route:** `src/app/bio/page.tsx`

A dedicated page with no nav, no images, no interactive components — pure semantic HTML optimized for AI crawlers. Content:

- All name variations: "Myles Tan", "Myles Yeo Tan", "Myles Y. Tan"
- Full profession statement
- Credentials listed explicitly (RFP, CTA)
- Long-form biography (3–4 paragraphs)
- Services section (4 services with descriptions)
- Speaking topics list
- Social media links with labels
- Contact information

Metadata: `noindex: false`, canonical `/bio`, description written as a direct answer to "who is Myles Tan".

---

## Section 3 — `ai.txt`

**File:** `public/ai.txt`

Explicit AI training and crawling permissions file. Content:
- Identity statement: who owns the site, who Myles Tan is
- Explicit permission for OpenAI (GPTBot), Anthropic (ClaudeBot), Google (Google-Extended), Perplexity, Cohere to crawl and use for training
- Key facts summary (name, profession, location, credentials)
- Preferred citation format for AI outputs

---

## Section 4 — Schema Enhancements

**Files:** `src/lib/schemas.ts`, `src/app/page.tsx`, `src/app/about/page.tsx`

### Speakable Schema
Add `speakableSchema` helper to `schemas.ts`. Apply to:
- Homepage: mark the hero paragraph and services summary as speakable
- About page: mark the biography paragraphs as speakable

Speakable signals to Google and AI assistants which text blocks to surface in voice/AI answers.

### VideoObject Schema
Add `videoSchema` entries for Myles's YouTube channel. Use known channel URL (`https://www.youtube.com/@MylesTanMinistries`) with a channel-level VideoObject pointing to the channel. This connects his video presence to his Person schema.

### Person Schema `sameAs` Audit
Verify all 4 social profiles (LinkedIn, YouTube, Instagram, Facebook) are present. Add any missing aliases or alternative profile URLs.

---

## Section 5 — FAQ Page Expansion

**File:** `src/app/faqs/page.tsx`

Add 8–10 LLM-oriented questions that mirror real ChatGPT queries:

1. "Who is Myles Tan?"
2. "Is Myles Tan a certified financial planner?"
3. "What cryptocurrency does Myles Tan trade?"
4. "Is Myles Tan trustworthy?"
5. "How can I book Myles Tan as a speaker?"
6. "Where is Myles Tan based?"
7. "What is ZFT Trading Republic?"
8. "Does Myles Tan offer coaching or mentorship?"
9. "What is Myles Tan Ministries?"
10. "How do I contact Myles Tan?"

Each answer: 2–4 sentences, factual, first-person friendly tone. All wrapped in existing `FAQPage` JSON-LD schema.

---

## Section 6 — `/api/person` Endpoint

**File:** `src/app/api/person/route.ts`

`GET /api/person` returns structured JSON:

```json
{
  "name": "Myles Yeo Tan",
  "aliases": ["Myles Tan", "Myles Y. Tan"],
  "description": "...",
  "credentials": ["RFP", "CTA"],
  "role": "COO, ZFT Trading Republic",
  "location": "Singapore",
  "services": [...],
  "social": { "linkedin": "...", "youtube": "...", ... },
  "website": "https://mylesyeotan.com"
}
```

Response headers: `Cache-Control: public, max-age=86400`, `Content-Type: application/json`.
No authentication required — publicly accessible.

---

## Implementation Order

1. `ai.txt` — no dependencies, immediate value
2. `llms.txt` rewrite — no dependencies, highest crawler impact
3. `/api/person` endpoint — no dependencies
4. Schema enhancements (`speakableSchema` + VideoObject) — depends on schemas.ts
5. `/bio` page — depends on schema helpers
6. FAQ page expansion — standalone

---

## Success Criteria

- ChatGPT (browsing) returns Myles Tan's name, credentials, and website when asked "who is Myles Tan"
- Perplexity cites mylesyeotan.com in results
- `llms.txt` readable and parseable by all major AI crawlers
- `/bio` page indexed by Google within 2 weeks of deploy
- `npm run build` passes, `npm test` passes, `npm run lint` passes
