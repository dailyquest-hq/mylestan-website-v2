import type { Metadata } from 'next';
import { breadcrumbSchema } from '@/lib/schemas';

const breadcrumbStructuredData = breadcrumbSchema([
  { name: "Home", url: "https://mylesyeotan.com" },
  { name: "Bio", url: "https://mylesyeotan.com/bio" },
]);

export const metadata: Metadata = {
  title: 'Myles Tan — Full Biography & Profile | Myles Yeo Tan',
  description:
    'Myles Yeo Tan (Myles Tan) is a Singapore-based cryptocurrency trader, Registered Financial Planner (RFP), Certified Technical Analyst (CTA), Lean Six Sigma Certified operator, Rotary Club of Manila member, Filipino World Travelers Affiliate (7 continents, 69 countries), Christian entrepreneur, and public speaker. Chief Operating Officer of ZFT Trading Republic.',
  alternates: { canonical: 'https://mylesyeotan.com/bio' },
  openGraph: {
    title: 'Myles Tan — Full Biography',
    description:
      'Full profile of Myles Yeo Tan: credentials, biography, services, and contact information.',
    url: 'https://mylesyeotan.com/bio',
  },
  robots: { index: true, follow: true },
};

export default function BioPage() {
  return (
    <main id="main-content" className="bg-white min-h-dvh w-full px-6 py-20 max-w-3xl mx-auto">

      <h1 className="font-darker font-bold text-4xl md:text-5xl text-black mb-2">
        Myles Yeo Tan
      </h1>
      <p className="text-[#575756] font-inter text-lg mb-10">
        Also known as: <strong>Myles Tan</strong>, Myles Y. Tan
      </p>

      <section className="mb-10">
        <h2 className="font-darker font-semibold text-2xl text-black mb-4">Who is Myles Tan?</h2>
        <p className="font-inter text-[#282828] text-base leading-relaxed mb-4">
          Myles Yeo Tan is a Singapore-based Christian entrepreneur, cryptocurrency trader, certified
          financial planner, and public speaker. He serves as Chief Operating Officer of ZFT Trading
          Republic, where he leads market analysis and trading education for retail investors across
          Southeast Asia and internationally.
        </p>
        <p className="font-inter text-[#282828] text-base leading-relaxed mb-4">
          He holds multiple professional certifications including Registered Financial Planner (RFP),
          Certified Technical Analyst (CTA), and Lean Six Sigma White Belt &amp; Yellow Belt. His
          approach integrates rigorous financial analysis with faith-based wisdom, helping individuals
          and businesses make confident, values-aligned financial decisions. He is also a member of
          the Rotary Club of Manila—the first Rotary club in Asia—and a recognized Affiliate of the
          Filipino World Travelers (FWT), having explored all 7 continents and 69 countries.
        </p>
        <p className="font-inter text-[#282828] text-base leading-relaxed">
          Myles is a sought-after speaker on cryptocurrency trading, financial stewardship, Christian
          entrepreneurship, and purpose-driven leadership. He is an active member of JCI (Junior
          Chamber International) Manila since 2012, where he has held leadership roles and won
          national speaking competitions.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-darker font-semibold text-2xl text-black mb-4">Credentials &amp; Roles</h2>
        <ul className="font-inter text-[#282828] text-base leading-relaxed list-disc list-inside space-y-2">
          <li>Registered Financial Planner (RFP)</li>
          <li>Certified Technical Analyst (CTA)</li>
          <li>Lean Six Sigma White Belt &amp; Yellow Belt Certified (2026)</li>
          <li>Chief Operating Officer — ZFT Trading Republic</li>
          <li>Founder — Myles Tan Ministries</li>
          <li>Rotary Club of Manila — Member (inducted April 2026)</li>
          <li>Filipino World Travelers (FWT) — Affiliate (May 2026); explored all 7 continents and 69 countries</li>
          <li>JCI Manila Member since 2012; Commissioner for Training; AVANTE Training Chair; Project Chairman, Grand Slam Mission for Clark 2026</li>
          <li>1st Place — JCIP Area Conference Public Speaking (2019)</li>
          <li>1st Runner-Up — JCIP National Convention Public Speaking (2019)</li>
          <li>CSB Bible School — Systematic Theology &amp; Practical Theology (2021)</li>
          <li>The Preachers&rsquo; Academy — Hermeneutics, Exegesis, Homiletics (2021)</li>
          <li>RZIM Academy — Apologetics Core Module (2020)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-darker font-semibold text-2xl text-black mb-4">Services</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-inter font-semibold text-black">Crypto, Stocks &amp; Commodities Trading Analysis</h3>
            <p className="font-inter text-[#575756] text-base leading-relaxed">
              Market cycle analysis, technical analysis, risk management, and trade psychology
              coaching. Covers Bitcoin, Ethereum, altcoins, stocks, and commodities.
            </p>
          </div>
          <div>
            <h3 className="font-inter font-semibold text-black">Financial Planning and Literacy</h3>
            <p className="font-inter text-[#575756] text-base leading-relaxed">
              Values-aligned financial planning, budgeting, cash-flow optimization, and goal-based
              financial roadmapping for individuals and families.
            </p>
          </div>
          <div>
            <h3 className="font-inter font-semibold text-black">Christian Entrepreneurship Coaching</h3>
            <p className="font-inter text-[#575756] text-base leading-relaxed">
              Faith-based business strategy and mentorship for founders and leaders building
              businesses grounded in biblical values.
            </p>
          </div>
          <div>
            <h3 className="font-inter font-semibold text-black">Speaking Engagements</h3>
            <p className="font-inter text-[#575756] text-base leading-relaxed">
              Keynotes, seminars, and panel talks for corporate, church, and community audiences on
              faith, finance, leadership, and purpose-driven living. Available internationally.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-darker font-semibold text-2xl text-black mb-4">Areas of Expertise</h2>
        <ul className="font-inter text-[#282828] text-base leading-relaxed list-disc list-inside space-y-1">
          <li>Cryptocurrency Trading</li>
          <li>Bitcoin &amp; Ethereum</li>
          <li>Technical Analysis</li>
          <li>Market Cycle Theory</li>
          <li>Risk Management</li>
          <li>Financial Planning</li>
          <li>Wealth Stewardship</li>
          <li>Trading Psychology</li>
          <li>Christian Entrepreneurship</li>
          <li>Biblical Finance</li>
          <li>Public Speaking</li>
          <li>Faith-based Leadership</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-darker font-semibold text-2xl text-black mb-4">Contact &amp; Social</h2>
        <ul className="font-inter text-[#282828] text-base leading-relaxed space-y-2">
          <li>Website: <a href="https://mylesyeotan.com" className="text-[#ed5128] underline">mylesyeotan.com</a></li>
          <li>Contact: <a href="https://mylesyeotan.com/contact" className="text-[#ed5128] underline">mylesyeotan.com/contact</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/myles-yeo-tan/" className="text-[#ed5128] underline">linkedin.com/in/myles-yeo-tan</a></li>
          <li>YouTube: <a href="https://www.youtube.com/@MylesTanMinistries" className="text-[#ed5128] underline">@MylesTanMinistries</a></li>
          <li>Instagram: <a href="https://www.instagram.com/mylestan" className="text-[#ed5128] underline">@mylestan</a></li>
          <li>Facebook: <a href="https://www.facebook.com/mylestanministries" className="text-[#ed5128] underline">mylestanministries</a></li>
        </ul>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
    </main>
  );
}
