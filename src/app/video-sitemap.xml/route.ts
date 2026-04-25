import { NextResponse } from 'next/server';

const baseUrl = 'https://mylesyeotan.com';
const pageUrl = `${baseUrl}/media-speaking`;

const videos = [
  {
    title: 'Myles Yeo Tan — 2024 Highlight Reel',
    description: "A compilation of key moments from the 'Kingdom Impact' tour across Southeast Asia, featuring keynote talks on faith, finance, and leadership.",
    youtubeId: 'nZJeBBMlAjM',
    durationSeconds: 1800,
    publicationDate: '2024-12-01T00:00:00Z',
  },
  {
    title: 'Bilyonaryo News Channel — Market Analysis with Myles Tan',
    description: 'In-depth market analysis covering crypto trends, trading strategies, and financial insights for Filipino investors.',
    youtubeId: 'nZJeBBMlAjM',
    durationSeconds: 1800,
    publicationDate: '2025-11-01T00:00:00Z',
  },
  {
    title: 'ZFT Trading Republic — New COO Announcement',
    description: "Official announcement of Myles Yeo Tan's appointment as Chief Operating Officer of ZFT Trading Republic.",
    youtubeId: 'GYb1q8tm36s',
    durationSeconds: 900,
    publicationDate: '2025-06-01T00:00:00Z',
  },
  {
    title: 'ZFT Kingdom Playlist — Trading Republic Series',
    description: 'Educational series covering trading fundamentals, market analysis techniques, and kingdom principles in finance.',
    youtubeId: 'GYb1q8tm36s',
    publicationDate: '2025-03-01T00:00:00Z',
  },
];

function escapeXml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const urls = videos
    .map((v) => {
      const thumb = `https://i.ytimg.com/vi/${v.youtubeId}/maxresdefault.jpg`;
      const player = `https://www.youtube-nocookie.com/embed/${v.youtubeId}`;
      const watch = `https://www.youtube.com/watch?v=${v.youtubeId}`;
      return `  <url>
    <loc>${pageUrl}</loc>
    <video:video>
      <video:thumbnail_loc>${thumb}</video:thumbnail_loc>
      <video:title>${escapeXml(v.title)}</video:title>
      <video:description>${escapeXml(v.description)}</video:description>
      <video:player_loc allow_embed="yes">${player}</video:player_loc>
      <video:content_loc>${watch}</video:content_loc>
${v.durationSeconds ? `      <video:duration>${v.durationSeconds}</video:duration>\n` : ''}      <video:publication_date>${v.publicationDate}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:requires_subscription>no</video:requires_subscription>
      <video:live>no</video:live>
      <video:uploader info="${baseUrl}">Myles Yeo Tan</video:uploader>
    </video:video>
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
