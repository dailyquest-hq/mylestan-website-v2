"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Link from "next/link";
import imgTimelineCard from "@/assets/about/timeline-card.jpg";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  url?: string;
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
    image: imgTimelineCard.src,
    summary: "Continuing mission to equip believers worldwide through media, events, and one-on-one coaching.",
    events: [
      {
        date: "NOVEMBER",
        title: "Bilyonaryo News Interview",
        description: "Featured interview discussing market analysis and financial insights.",
        url: "https://www.youtube.com/watch?v=nZJeBBMlAjM"
      },
      {
        date: "OCTOBER",
        title: "Faith for Financial Future Talk",
        description: "Speaking engagement on integrating faith principles with financial planning."
      },
      {
        date: "JUNE",
        title: "Appointed as ZFT Trading Republic COO",
        description: "Assumed leadership role as Chief Operating Officer at ZFT Trading Republic."
      },
      {
        date: "MARCH",
        title: "Appeared as Regular Speaker on The Trading Republic's YouTube",
        description: "Regular speaker sharing trading insights and market analysis."
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
        url: "https://www.facebook.com/photo?fbid=846900120783203&set=a.465969958876223"
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
        description: "Began regular speaking ministry at Revelation City Church.",
        url: "https://www.youtube.com/watch?v=L7Xa2_V1_u4"
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
        <div className="relative w-full max-w-[800px] mx-auto min-h-[400px]">
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
          <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {selectedData.events.map((event, idx) => (
              <TimelineEvent key={idx} {...event} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function TimelineEvent({ date, title, description, url }: TimelineEvent) {
  const content = (
    <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
      <div className="p-6 md:p-8">
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
