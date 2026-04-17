import { NextResponse } from 'next/server';

const person = {
  name: 'Myles Yeo Tan',
  aliases: ['Myles Tan', 'Myles Y. Tan'],
  description:
    'Singapore-based Christian entrepreneur, cryptocurrency trader, Registered Financial Planner (RFP), Certified Technical Analyst (CTA), and public speaker. Chief Operating Officer of ZFT Trading Republic.',
  location: 'Singapore',
  role: 'Chief Operating Officer, ZFT Trading Republic',
  credentials: ['RFP', 'CTA'],
  services: [
    'Crypto, Stocks & Commodities Trading Analysis',
    'Financial Planning and Literacy',
    'Christian Entrepreneurship Coaching',
    'Speaking Engagements',
  ],
  topics: [
    'Cryptocurrency Trading',
    'Bitcoin',
    'Ethereum',
    'Technical Analysis',
    'Financial Planning',
    'Christian Entrepreneurship',
    'Public Speaking',
    'Trading Psychology',
    'Biblical Finance',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/myles-yeo-tan/',
    youtube: 'https://www.youtube.com/@MylesTanMinistries',
    instagram: 'https://www.instagram.com/mylestan',
    facebook: 'https://www.facebook.com/mylestanministries',
  },
  website: 'https://mylesyeotan.com',
  schema: 'https://schema.org/Person',
};

export async function GET() {
  return NextResponse.json(person, {
    headers: {
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
    },
  });
}
