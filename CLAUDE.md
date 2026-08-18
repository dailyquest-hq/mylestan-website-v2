# mylestan-website-v2 — Claude Instructions

Next.js (App Router) marketing + ministry site for Myles Yeo Tan — https://mylesyeotan.com

## Content updates are the main job here

**Myles usually asks for content updates**, not feature work. The request almost always
arrives as a screenshot: an event poster, a Facebook post, an award photo, a media feature —
often with a one-line caption ("pwede paupdate for august, got invited to speak here").

**Before writing any of it, review the recent commits.** Every content batch follows the same
established shape, and `git log` is the spec:

```bash
git log --oneline -10
git show --stat <recent-content-commit>
git show <recent-content-commit> -- src/app/media-speaking/page.tsx
```

Recent reference commits: `96aab6b` (Alpha Intel + CCF Davao), `0d69178` (JCI Foundation Pin),
`aa01316` (JCI Foundation Pin blog post), `4f404c9` (The Asian Pearl feature).

## The content-batch pattern

A speaking engagement / media feature / recognition normally touches **three files plus an asset**:

| What | Where |
|---|---|
| Poster / photo asset | `src/assets/media-speaking/<slug>-<month>-<year>.jpg` |
| Card in the grid | `src/app/media-speaking/page.tsx` → `<VideoCard …>`, newest first |
| Speaking-history row | `src/app/media-speaking/page.tsx` → `<EventRow …>`, appended at the end |
| JSON-LD event schema | `src/app/media-speaking/layout.tsx` → `events[]` via `eventSchema({…})` |
| About-page timeline entry | `src/components/about/InteractiveTimeline.tsx` → `timelineData` year block, newest first |

Conventions that matter:

- **Asset naming**: kebab-case, descriptive, month + year suffix — e.g.
  `know-yourself-know-your-money-august-2026.jpg`. Import alias is `@/assets/...`.
- **Card `type`**: `UPCOMING TALK` (future dated), `ANNOUNCEMENT`, `WEBINAR RECAP`.
  An `UPCOMING TALK` whose date has passed is stale — flag it when you notice one.
- **Card `duration`**: `MMM DD · H:MM PM` for dated events, `MMM YYYY` for announcements.
- **`EventRow` `date`**: `MMM YYYY`. Rows are appended chronologically at the bottom.
- **Timeline `date`**: `MONTH DD` (or bare `MONTH`), newest at the top of the year block.
  Timeline `image` takes `.src` off the import, not the import itself.
- **Ordering**: cards and timeline entries are **newest first**; `EventRow`s and `eventSchema`
  entries are appended in the order they were added.
- **`startDate`** in `eventSchema` is ISO. Use a full offset timestamp
  (`2026-08-29T14:00:00+08:00`) when the exact start time is known, bare date otherwise.
- Blog posts, when Myles asks for one, are authored in `src/app/blogs/posts.tsx` (rendered by
  `src/app/blogs/[slug]/page.tsx`, listed by `src/app/blogs/page.tsx`) — see `aa01316`.
- A **role/title or affiliation change** is a wider batch than a speaking gig — it also touches
  `src/lib/schemas.ts`, `src/app/api/person/route.ts`, `src/app/page.tsx`, `bio`, and `faqs`.
  See `4f404c9` for that shape. A one-off talk does NOT need those files.
- Curly quotes (`“ ”`) inside JSX string props, escaped `\"` inside the timeline's TS strings.

## Verify before proposing the commit

```bash
npx tsc --noEmit
npm run build     # catches missing assets / bad imports
```

Then propose the commit (specific files by name, never `git add .`) and wait for the go-ahead.
Commit messages follow `feat: <what was added>` with a bulleted body naming each surface touched.

## Design constraints

See `.impeccable.md` for the full design context. Non-negotiables: accent `#ed5128`,
dark sections `#0f100a`, `rounded-none` everywhere, Darker Grotesque display / Inter body /
Poppins labels. No pastels, no soft shadows, no gradient-startup look.

## Gotchas

- `next.config.mjs` conditionally adds `unsafe-eval` to the CSP for `NODE_ENV=development` —
  without it React hydration breaks in dev. Don't remove it.
- `/api/contact` sends a notification + auto-reply through Resend from
  `noreply@mylesyeotan.com` (the verified sender). Myles replies personally from his own inbox.
- `next-env.d.ts` is gitignored (auto-generated).
