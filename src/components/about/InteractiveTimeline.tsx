"use client";

import { useState } from "react";
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
    events: []
  },
  {
    year: "2022",
    events: []
  },
  {
    year: "2021",
    events: [
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
      }
    ]
  }
];

export function InteractiveTimeline() {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const selectedData = timelineData.find(d => d.year === selectedYear);

  return (
    <section className="bg-white text-[#282828] py-20 md:py-32 px-5">
      <div className="max-w-[1600px] mx-auto flex flex-col items-center">
        <SectionLabel color="black" className="mb-6">key achievements</SectionLabel>
        <h2 className="font-darker font-semibold text-5xl md:text-[64px] leading-none mb-4 text-center">Building Impact, Year by Year</h2>
        <p className="font-poppins text-base md:text-[18px] text-[#282828] max-w-2xl mb-16 text-center">
          From career beginnings in finance to global recognition, here's the journey of growth, influence, and purpose.
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
                    <div className="h-[160px] w-full rounded-md overflow-hidden mb-4 bg-gray-200">
                      <img src={yearData.image} alt={yearData.year} className="w-full h-full object-cover" />
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
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold bg-black/50 px-3 py-1 rounded">
              Click to preview
            </span>
          </div>
        </div>
      )}
      <div className={`p-6 md:p-8 ${url ? 'cursor-pointer' : ''}`}>
        <span className="font-albert font-bold text-[#ed5128] text-sm tracking-wider uppercase mb-3 block">
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
