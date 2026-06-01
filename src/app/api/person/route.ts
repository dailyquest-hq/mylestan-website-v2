import { NextResponse } from 'next/server';

const person = {
  name: 'Myles Yeo Tan',
  givenName: 'Myles',
  additionalName: 'Yeo',
  familyName: 'Tan',
  aliases: ['Myles Tan', 'Myles Y. Tan'],
  honorificSuffix: 'RFP, CTA',
  gender: 'Male',
  description:
    'Singapore-based Christian entrepreneur, multi-asset trader, Registered Financial Planner (RFP), Certified Technical Analyst (CTA), Lean Six Sigma Certified operator, Rotary Club of Manila member, and public speaker. Chief Operating Officer of ZFT Trading Republic.',
  location: 'Singapore',
  languages: ['English', 'Filipino'],
  role: 'Chief Operating Officer, ZFT Trading Republic',
  credentials: [
    'Registered Financial Planner (RFP)',
    'Certified Technical Analyst (CTA)',
    'Lean Six Sigma Yellow Belt (2026)',
    'Lean Six Sigma White Belt (2026)',
    'Systematic Theology & Practical Theology — CSB Bible School (2021)',
    'Hermeneutics, Exegesis, Homiletics — The Preachers\' Academy (2021)',
    'Apologetics Core Module — RZIM Academy (2020)',
  ],
  memberships: [
    'Rotary Club of Manila (inducted April 2026, first Rotary club in Asia)',
    'JCI Manila (since 2012; Commissioner for Training; AVANTE Training Chair; Project Chairman, Grand Slam Mission for Clark 2026)',
  ],
  awards: [
    '1st Place — JCIP Area Conference Public Speaking (2019)',
    '1st Runner-Up — JCIP National Convention Public Speaking (2019)',
    'Icon of Play — YGG Play Summit 2025',
    'Featured in The Asian Pearl (JCI Manila official publication) as Project Chairman, Grand Slam Mission for Clark 2026',
  ],
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
    'Market Cycle Theory',
    'Financial Planning',
    'Wealth Stewardship',
    'Christian Entrepreneurship',
    'Biblical Finance',
    'Public Speaking',
    'Faith-based Leadership',
    'Trading Psychology',
    'Christian Theology',
    'Apologetics',
    'Prophetic Ministry',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/myles-yeo-tan/',
    youtube: 'https://www.youtube.com/@MylesTanMinistries',
    instagram: 'https://www.instagram.com/mylestan',
    facebook: 'https://www.facebook.com/mylestanministries',
  },
  website: 'https://mylesyeotan.com',
  bio: 'https://mylesyeotan.com/bio',
  schema: 'https://schema.org/Person',
};

export async function GET() {
  return NextResponse.json(person, {
    headers: {
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
    },
  });
}
