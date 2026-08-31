"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ImagePreviewModal } from "@/components/ui/ImagePreviewModal";
import Link from "next/link";
import imgTimelineCard from "@/assets/about/timeline-card.jpg";
import imgFaithFinancial from "@/assets/about/faith-financial-future.png";
import imgZftCoo from "@/assets/about/zft-coo.jpg";
import imgTradingRepublic from "@/assets/about/trading-republic-speaker.jpg";
import imgAirdropSpeaker from "@/assets/about/airdrop-speaker.jpg";
import imgBilyonaryo from "@/assets/media-speaking/BNC.jpg";
import imgRfpCertificate from "@/assets/about/rfp-certificate.jpg";
import imgCtaCertificate from "@/assets/about/cta-certificate.jpg";
import imgSpiritOfWisdom from "@/assets/about/spirit-of-wisdom.jpg";
import imgNftTestimony from "@/assets/about/nft-testimony.jpg";
import imgLeanSixSigmaYellow from "@/assets/about/lean-six-sigma-yellow-belt.jpg";
import imgLeanSixSigmaWhite from "@/assets/about/lean-six-sigma-white-belt.jpg";
import imgRotaryManila from "@/assets/about/rotary-club-manila-2026.jpg";
import imgCtaWebinar from "@/assets/media-speaking/cta-webinar-april-2026.jpg";
import imgAlphaIntel from "@/assets/media-speaking/alpha-intel-us-stocks-advisor-june-2026.jpg";
import imgKnowYourMoney from "@/assets/media-speaking/know-yourself-know-your-money-august-2026.jpg";
import imgJciFoundationPin from "@/assets/blogs/jci-foundation-pin-june-2026.jpg";
import imgCcfDavaoAngpao from "@/assets/media-speaking/ccf-davao-more-than-an-angpao-july-2026.jpg";
import imgFwtPhotoContestCert from "@/assets/about/fwt-photo-contest-certificate-august-2026.jpg";
import imgYggPlaySummit from "@/assets/about/ygg-play-summit-2025.jpg";
import imgPreachersAcademy from "@/assets/about/preachers-academy-certificate.jpg";
import imgCsbBibleSchool from "@/assets/about/csb-bible-school-certificate.jpg";
import imgRzimAcademy from "@/assets/about/rzim-academy-certificate.jpg";
import imgGraceChristian from "@/assets/about/grace-christian-college-2023.jpg";
import imgGraceChristianCert from "@/assets/about/grace-christian-college-certificate.jpg";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  url?: string;
  image?: string;
}

interface YearData {
  year: string;
  image?: string;
  summary?: string;
  events: TimelineEvent[];
}

const timelineData: YearData[] = [
  {
    year: "2026",
    events: [
      {
        date: "SEPTEMBER 1",
        title: "Joined the RCManila Foundation as a Lifetime Member",
        description: "Officially joined the RCManila Foundation, Inc. (RCMFI) as a lifetime member. As an extension of the Rotary Club of Manila, RCMFI sustains the club's community programs, humanitarian advocacies, and service initiatives — creating lasting, meaningful impact where it is needed most. For Myles, true leadership and financial stewardship go hand in hand with community building. He looks forward to working alongside fellow members to advance their shared objectives and continue fostering sustainable growth and service above self.",
        url: "https://www.rotarymanila.org/"
      },
      {
        date: "AUGUST 29",
        title: "Named Top 12 Winner in the 2026 FWT Travel Photo Contest",
        description: "Named one of the Top 12 Winners of the 2026 Filipino World Travelers (FWT) Travel Photo Contest, recognized for a photograph taken in Antarctica — a lone figure in bright orange, seated on weathered rock, looking out over ice floes and snow-capped peaks. The award adds to a travel record spanning more than 69 countries across all 7 continents, marking a body of work built one continent, one country, and one story at a time.",
        url: "https://filipinoworldtravelers.com/activities/2026-fwt-travel-photo-contest/2026-winners",
        image: imgFwtPhotoContestCert.src
      },
      {
        date: "AUGUST 29",
        title: "Resource Speaker at \"Know Yourself, Know Your Money\" — Rotary Club of Manila",
        description: "Invited by River Valley Irregulars, the Rotary Club of Manila, and the Rotaract Club of Manila — with Myles Tan Ministries — to lead \"Your Voice Matters,\" a two-part Youth & Vocational Service workshop at Zero Ten Park, Makati. Part 1 covers DISC personality, leadership, communication and self-awareness; Part 2 covers money habits, budgeting, responsible investing, market basics and cryptocurrency.",
        url: "https://www.rivervalleyirregulars.com",
        image: imgKnowYourMoney.src
      },
      {
        date: "JULY 11",
        title: "Speaker at \"More Than an Angpao: Blessed to Be a Blessing\" — CCF FilChi Davao",
        description: "Invited by CCF FilChi Davao to lead a special Bible study on blessing, biblical boundaries, generosity, and faithful stewardship — sharing his personal journey of learning to handle money, opportunities, and influence according to biblical principles. Held at the CCF Davao Center, Davao City.",
        url: "https://www.facebook.com/share/p/18M2HAiAgx/",
        image: imgCcfDavaoAngpao.src
      },
      {
        date: "JUNE 16",
        title: "Welcomed as US Stocks Advisor at Alpha Intel",
        description: "Joined the Alpha Intel community as its US Stocks Advisor — providing insights, research, and guidance to help members navigate the US stock market with greater confidence.",
        url: "https://www.facebook.com/photo?fbid=122168134622956785&set=a.122094931448956785",
        image: imgAlphaIntel.src
      },
      {
        date: "JUNE 15",
        title: "Received the JCI Foundation Pin: A Phil Pugsley Patron",
        description: "At 39, Myles received the JCI Foundation Pin and the Phil Pugsley Patron recognition — not as a crown, but as a commitment to sowing into the next generation of leaders ahead of JCI World Congress 2026 in Clark, Pampanga.",
        url: "/blogs/jci-foundation-pin-phil-pugsley-patron-2026",
        image: imgJciFoundationPin.src
      },
      {
        date: "MAY",
        title: "Featured in The Asian Pearl: Grand Slam Mission for Clark 2026",
        description: "Featured in The Asian Pearl — JCI Manila's official publication — as Project Chairman of the Grand Slam Mission for Clark 2026. Led a global campaign across three continents (Malaga, Antigua, and Abidjan) to build international relationships and rally support for the Philippines' JCI World Congress 2026 bid.",
        url: "https://theasianpearl.com/project-chairman-myles-tan-and-the-grand-slam-mission-for-clark-2026/"
      },
      {
        date: "MAY",
        title: "Named Filipino World Travelers Affiliate",
        description: "Officially recognized as a Filipino World Travelers (FWT) Affiliate — a distinction reserved for Filipinos who have demonstrated a serious commitment to global exploration. Having set foot in more than 69 countries across all 7 continents, Myles brings to FWT the perspective of a purposeful, intentional global explorer.",
        url: "https://filipinoworldtravelers.com/affiliates/list"
      },
      {
        date: "APRIL 30",
        title: "Speaker at \"Crypto, Stocks, or Gold?\" Webinar",
        description: "Invited to speak at a 2026 market outlook session on where Filipino traders should position in a Peso vs Dollar world — covering Peso/Dollar trends, crypto, stocks, gold, and global positioning.",
        image: imgCtaWebinar.src
      },
      {
        date: "APRIL 16",
        title: "Inducted into Rotary Club of Manila",
        description: "Officially inducted into the Rotary Club of Manila — the first Rotary club in Asia — at the Manila Polo Club, Makati City, joining a network of business, civic, and community leaders united under \"Service Above Self.\"",
        image: imgRotaryManila.src
      },
      {
        date: "MARCH",
        title: "Lean Six Sigma Yellow Belt Certified",
        description: "Completed a 20-hour advanced training in process improvement and operational excellence under Prof. Dr. Marcelo Machado Fernandes — strengthening business process optimization, data-driven decision-making, and scaling operations.",
        image: imgLeanSixSigmaYellow.src
      },
      {
        date: "MARCH",
        title: "Lean Six Sigma White Belt Certified",
        description: "Completed foundational Lean Six Sigma White Belt training under Prof. Dr. Marcelo Machado Fernandes, covering the core principles of process improvement, waste reduction, and operational excellence.",
        image: imgLeanSixSigmaWhite.src
      }
    ]
  },
  {
    year: "2025",
    events: [
      {
        date: "2025",
        title: "Continuing Mission to Equip Believers Worldwide",
        description: "Continuing mission to equip believers worldwide through media, events, and one-on-one coaching.",
        image: imgTimelineCard.src
      },
      {
        date: "NOVEMBER",
        title: "Recognized as Icon of Play at YGG Play Summit 2025",
        description: "Handpicked as a featured speaker and Key Opinion Leader at the YGG Play Summit 2025 (November 19–22, Manila) — one of Southeast Asia's premier Web3 gaming conferences.",
        image: imgYggPlaySummit.src
      },
      {
        date: "NOVEMBER",
        title: "Bilyonaryo News Interview",
        description: "Featured interview discussing market analysis and financial insights.",
        url: "https://www.youtube.com/watch?v=nZJeBBMlAjM",
        image: imgBilyonaryo.src
      },
      {
        date: "AUGUST",
        title: "Became a Certified Technical Analyst",
        description: "Achieved professional certification as a Certified Technical Analyst (CTA) from the Society of Technical Analysts, demonstrating expertise in technical analysis and market forecasting.",
        image: imgCtaCertificate.src
      },
      {
        date: "OCTOBER",
        title: "Faith for Financial Future Talk",
        description: "Speaking engagement on integrating faith principles with financial planning.",
        image: imgFaithFinancial.src
      },
      {
        date: "OCTOBER",
        title: "Certified as a Registered Financial Planner of the Philippines",
        description: "Achieved professional certification as a Registered Financial Planner (RFP), demonstrating expertise in financial planning and advisory services.",
        image: imgRfpCertificate.src
      },
      {
        date: "JUNE",
        title: "Appointed as ZFT Trading Republic COO",
        description: "Assumed leadership role as Chief Operating Officer at ZFT Trading Republic.",
        image: imgZftCoo.src
      },
      {
        date: "MARCH",
        title: "Appeared as Regular Speaker on The Trading Republic's YouTube",
        description: "Regular speaker sharing trading insights and market analysis.",
        image: imgTradingRepublic.src
      }
    ]
  },
  {
    year: "2024",
    events: [
      {
        date: "MARCH",
        title: "Invited to be an Airdrop Resource Speaker by ZFT",
        description: "Resource speaker on cryptocurrency airdrops and blockchain technology.",
        url: "https://www.facebook.com/photo?fbid=846900120783203&set=a.465969958876223",
        image: imgAirdropSpeaker.src
      }
    ]
  },
  {
    year: "2023",
    events: [
      {
        date: "OCTOBER 10",
        title: "Resource Speaker at Grace Christian College",
        description: "Spoke as a Resource Speaker for Grace Christian College Senior High School's Accounting, Business, and Management students.",
        image: imgGraceChristian.src
      },
      {
        date: "OCTOBER 10",
        title: "Received Certificate of Appreciation from Grace Christian College",
        description: "Recognized by Grace Christian College, Quezon City for serving as a Resource Speaker to the Senior High School's Accounting, Business, and Management students.",
        image: imgGraceChristianCert.src
      }
    ]
  },
  {
    year: "2022",
    events: []
  },
  {
    year: "2021",
    events: [
      {
        date: "DECEMBER",
        title: "Completed Systematic Theology at CSB Bible School",
        description: "Completed the Systematic Theology and Practical Theology course at CSB Bible School under the leadership of Senior Pastor Hiram G. Pangilinan.",
        image: imgCsbBibleSchool.src
      },
      {
        date: "APRIL",
        title: "Completed The Preachers' Academy",
        description: "Completed The Preachers' Academy under Pastor Stephen R. Prado, covering Hermeneutics, Exegesis vs. Eisegesis, Old Testament Interpretation, and Homiletics.",
        image: imgPreachersAcademy.src
      },
      {
        date: "FEBRUARY",
        title: "Invited to be Regular Speaker at Revelation City Church",
        description: "Delivered powerful message on 'Spirit of Wisdom' - teaching on thinking, asking, and providing with wisdom and guidance.",
        url: "https://www.youtube.com/watch?v=L7Xa2_V1_u4",
        image: imgSpiritOfWisdom.src
      },
      {
        date: "2021",
        title: "Shared Christian Testimony on NFT Success Story",
        description: "Featured in international interview sharing faith-driven testimony about God's guidance in achieving $100,000 through NFT trading strategy.",
        url: "https://www.youtube.com/watch?v=GuLyPgKqIqg&t=39s",
        image: imgNftTestimony.src
      }
    ]
  },
  {
    year: "2020",
    events: [
      {
        date: "NOVEMBER",
        title: "Reinvited to be Guest Speaker at Revelation City Church",
        description: "Second speaking engagement at Revelation City Church.",
        url: "https://www.youtube.com/watch?v=Wh8kTarTS6A"
      },
      {
        date: "OCTOBER",
        title: "Invited to be Guest Speaker at Revelation City Church",
        description: "First speaking engagement at Revelation City Church.",
        url: "https://www.youtube.com/watch?v=74K1HXLi53I"
      },
      {
        date: "JANUARY",
        title: "Completed RZIM Academy Apologetics Core Module",
        description: "Completed the comprehensive Apologetics Core Module at The RZIM Academy.",
        image: imgRzimAcademy.src
      }
    ]
  }
];

export function InteractiveTimeline() {
  const [selectedYear, setSelectedYear] = useState("2026");
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const selectedData = timelineData.find(d => d.year === selectedYear);

  return (
    <section className="bg-white text-[#282828] py-20 md:py-32 px-5">
      <div className="max-w-[1600px] mx-auto flex flex-col items-center">
        <SectionLabel color="black" className="mb-6">key achievements</SectionLabel>
        <h2 className="font-darker font-semibold text-5xl md:text-[64px] leading-none mb-4 text-center">Building Impact, Year by Year</h2>
        <p className="font-poppins text-base md:text-[18px] text-[#282828] max-w-2xl mb-16 text-center">
          From career beginnings in finance to global recognition, here&apos;s the journey of growth, influence, and purpose.
        </p>

        {/* Timeline Visual */}
        <div className="relative w-full max-w-[800px] mx-auto">
          {/* Years Row */}
          <div className="flex gap-8 md:gap-16 justify-center relative">
            {timelineData.map((yearData, i) => (
              <div
                key={yearData.year}
                className="flex flex-col items-center relative cursor-pointer"
                onClick={() => setSelectedYear(yearData.year)}
              >
                {/* Year Text */}
                <span className={`font-darker font-semibold text-3xl md:text-5xl mb-4 transition-colors ${selectedYear === yearData.year ? 'text-[#ed5128]' : 'text-[#282828]'}`}>
                  {yearData.year}
                </span>

                {/* Horizontal Line */}
                {i < timelineData.length - 1 && (
                  <div className="absolute top-[60px] left-[50%] w-[100px] md:w-[150px] h-px bg-gray-300" />
                )}

                {/* Dot */}
                <div className={`w-3 h-3 rounded-full z-10 transition-all ${selectedYear === yearData.year ? 'bg-[#ed5128]' : 'bg-gray-400'}`} />

                {/* Active Card */}
                {selectedYear === yearData.year && yearData.image && (
                  <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[280px] md:w-[320px] bg-white rounded-lg shadow-xl border border-gray-100 p-4 text-left mt-4">
                    <div className="relative h-[160px] w-full rounded-md overflow-hidden mb-4 bg-gray-200">
                      <Image src={yearData.image} alt={yearData.year} fill sizes="(max-width: 768px) 280px, 320px" className="object-cover" />
                    </div>
                    <p className="font-inter text-sm md:text-base text-[#575756]">
                      {yearData.summary}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Events List */}
        {selectedData && selectedData.events.length > 0 && (
          <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {selectedData.events.map((event, idx) => (
              <TimelineEvent key={idx} {...event} onImageClick={setPreviewImage} />
            ))}
          </div>
        )}

        {/* Image Preview Modal */}
        <ImagePreviewModal
          imageUrl={previewImage}
          onClose={() => setPreviewImage(null)}
        />
      </div>
    </section>
  );
}

function TimelineEvent({ date, title, description, url, image, onImageClick }: TimelineEvent & { onImageClick?: (image: string) => void }) {
  const content = (
    <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow group">
      {image && (
        <div
          className="h-[200px] w-full overflow-hidden bg-gray-200 cursor-pointer relative"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onImageClick?.(image);
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold bg-black/50 px-3 py-1 rounded">
              Click to preview
            </span>
          </div>
        </div>
      )}
      <div className={`p-6 md:p-8 ${url ? 'cursor-pointer' : ''}`}>
        <span className="font-poppins font-bold text-[#ed5128] text-sm tracking-wider uppercase mb-3 block">
          {date}
        </span>
        <h3 className="font-darker font-semibold text-2xl md:text-3xl text-black mb-3 group-hover:text-[#ed5128] transition-colors">
          {title}
        </h3>
        <p className="font-inter text-[#575756] text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );

  if (url) {
    return (
      <Link href={url} target="_blank" rel="noopener noreferrer">
        {content}
      </Link>
    );
  }

  return content;
}
