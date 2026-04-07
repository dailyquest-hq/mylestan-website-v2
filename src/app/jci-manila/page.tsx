import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Myles Yeo Tan JCI Manila | JCI Philippines Member & Leader",
  description:
    "Explore the JCI Manila achievements of Myles Yeo Tan — a long-time JCI Philippines member, public speaking champion, ONTO project leader, and Commissioner for Training since 2012.",
  keywords: [
    "Myles Yeo Tan JCI Manila",
    "Myles Tan JCI Philippines",
    "JCI Manila achievements",
    "JCI Manila leader Philippines",
    "JCI Philippines member achievements",
    "Sea of Life JCI",
    "JCI public speaking champion Philippines",
  ],
  alternates: {
    canonical: "/jci-manila",
  },
  openGraph: {
    title: "Myles Yeo Tan JCI Manila | JCI Philippines Member & Leader",
    description:
      "A decade-plus record of leadership, service, and community impact within JCI Manila and JCI Philippines.",
    url: "https://mylesyeotan.com/jci-manila",
    type: "profile",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Myles Yeo Tan JCI Manila member and leader in JCI Philippines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Myles Yeo Tan JCI Manila | JCI Philippines Member & Leader",
    description:
      "A decade-plus record of leadership, service, and community impact within JCI Manila and JCI Philippines.",
    images: ["/og-image.jpg"],
  },
};

const projects = [
  {
    title: "Sea of Life",
    category: "Environmental Initiative",
    description:
      "One of the most distinctive entries in his JCI record is his involvement with Sea of Life — an initiative focused on environmental impact, ocean awareness, and underwater conservation. This project reflects the values of civic responsibility and environmental stewardship that are central to the JCI mission.",
  },
  {
    title: "ONTO Projects",
    category: "Cross-Chapter Leadership",
    description:
      "Myles served as a key figure in multiple ONTO (Official No-Title Organizer) initiatives, strengthening relationships between JCI Manila and sister chapters across JCI Philippines. These projects reinforced the bonds of brotherhood and collaboration that define the JCI movement.",
  },
  {
    title: "Commissioner for Training",
    category: "Chapter Role",
    description:
      "Appointed as Commissioner for Training, Myles took direct responsibility for member development within JCI Manila — shaping the skills, confidence, and leadership capacity of the chapter's membership through structured programs and mentorship.",
  },
  {
    title: "AVANTE Training Series",
    category: "Training & Development",
    description:
      "Myles chaired AVANTE — a flagship training program — as well as a Series of Seminars designed to elevate the professional and personal growth of JCI Manila members. His commitment to training reflects his broader belief that great organizations are built through people development.",
  },
];

const awards = [
  {
    year: "2019",
    event: "JCIP Area Conference",
    award: "1st Place Public Speaking Champion",
    icon: "🏆",
  },
  {
    year: "2019",
    event: "JCIP National Convention",
    award: "1st Runner-Up Public Speaking Champion",
    icon: "🥈",
  },
];

const trainingRoles = [
  "Commissioner for Training — JCI Manila",
  "Chair, AVANTE Training Program",
  "Chair, Series of Seminars",
  "Active in Metro Area Public Speaking Circuit",
];

const achievements = [
  "Long-time JCI Manila member since 2012",
  "Active leadership and service record within JCI Philippines",
  "Led multiple ONTO initiatives that strengthened sister-chapter ties",
  "Helped champion Sea of Life environmental and underwater impact projects",
  "Served as Commissioner for Training",
  "Chaired AVANTE training and a Series of Seminars",
  "Active in Metro Area Public Speaking circuit",
  "2019 JCIP Area Conference — Public Speaking Champion",
  "2019 JCIP National Convention — Public Speaking 1st Runner-Up",
  "Consistent participation in major JCI Philippines conferences and conventions",
  "Represented JCI Manila at ASPAC and World Congress-related platforms",
];

export default function JCIPage() {
  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden">

      {/* Hero Section */}
      <section className="bg-[#0f100a] text-white pt-40 pb-24 md:pt-60 md:pb-32 px-5 text-center">
        <div className="max-w-[1600px] mx-auto flex flex-col items-center gap-6">
          <SectionLabel color="white">JCI Manila · JCI Philippines</SectionLabel>
          <h1 className="font-darker font-semibold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-none">
            Myles Yeo Tan<br />& JCI Manila
          </h1>
          <p className="font-poppins text-[#9f9f9f] text-base md:text-lg max-w-[690px] leading-relaxed">
            A record of leadership, service, and community impact within JCI Manila and JCI Philippines — built over more than a decade of consistent contribution to the movement.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white text-[#282828] py-20 md:py-32 px-5">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">

            {/* Left: Copy */}
            <div className="w-full lg:w-[60%] flex flex-col gap-6">
              <SectionLabel color="orange">JCI Manila Leadership Journey</SectionLabel>
              <h2 className="font-darker font-semibold text-4xl md:text-[60px] leading-[0.9]">
                A Decade of Service Inside JCI Manila
              </h2>
              <div className="font-inter text-lg text-[#282828] leading-relaxed space-y-5">
                <p className="text-justify">
                  Myles Yeo Tan has been a member of JCI Manila — part of JCI Philippines — since 2012.
                  What began as membership in one of the Philippines' most respected young leaders'
                  organizations grew into a long-term record of active participation, initiative, and
                  chapter leadership that has continued to define his identity as a leader and servant
                  in the community.
                </p>
                <p className="text-justify">
                  His JCI Manila journey is not a story built on a single role or a single term. It is
                  a story built on consistent presence — showing up for projects, volunteering for
                  responsibilities, accepting appointments, and contributing to both the culture and
                  the mission of the chapter over more than a decade.
                </p>
                <p className="text-justify">
                  In JCI Manila, contribution is measured not only by titles held, but by the
                  consistency of presence, service, and chapter support over time. By that measure,
                  the record of Myles Yeo Tan stands as a testament to what sustained engagement
                  looks like — and the kind of impact it leaves on people and institutions alike.
                </p>
              </div>
            </div>

            {/* Right: Stat Cards */}
            <div className="w-full lg:w-[40%] grid grid-cols-2 gap-5">
              {[
                { value: "2012", label: "JCI Manila Member Since" },
                { value: "10+", label: "Years of Active Service" },
                { value: "ONTO", label: "Projects Led & Supported" },
                { value: "JCI PH", label: "National & Area Presence" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-[#0f100a] text-white p-8 flex flex-col justify-center"
                >
                  <div className="font-darker font-bold text-5xl text-[#ed5128] mb-2 leading-none">
                    {value}
                  </div>
                  <div className="font-inter text-sm text-white/60 leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-[#0f100a] text-white py-20 md:py-32 px-5">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col items-center text-center gap-6 mb-16">
            <SectionLabel color="white">ONTO Projects &amp; Chapter Roles</SectionLabel>
            <h2 className="font-darker font-semibold text-4xl md:text-[60px] leading-[0.9]">
              Projects That Shaped the Chapter
            </h2>
            <p className="font-poppins text-[#9f9f9f] text-base md:text-lg max-w-2xl leading-relaxed">
              From environmental service to training programs, Myles Yeo Tan's JCI Manila
              contributions span the full breadth of what it means to build a chapter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="border border-white/10 p-8 hover:border-[#ed5128] transition-colors duration-300"
              >
                <div className="text-[#ed5128] text-sm font-inter font-semibold tracking-wider uppercase mb-3">
                  {project.category}
                </div>
                <h3 className="font-darker font-semibold text-2xl mb-4">{project.title}</h3>
                <p className="font-inter text-white/60 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking & Training Section */}
      <section className="bg-white text-[#282828] py-20 md:py-32 px-5">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">

            {/* Awards */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <SectionLabel color="orange">Public Speaking Achievements</SectionLabel>
              <h2 className="font-darker font-semibold text-4xl md:text-[56px] leading-[0.9]">
                A Voice That Wins Recognition
              </h2>
              <p className="font-inter text-lg text-[#282828] leading-relaxed">
                His excellence in communication is reflected in landmark public speaking achievements
                within JCI Philippines. These honors reinforce the image of Myles Yeo Tan as a
                strong communicator, persuasive leader, and active contributor to the culture of
                excellence within JCI Manila.
              </p>
              <div className="flex flex-col gap-5 mt-4">
                {awards.map((award) => (
                  <div
                    key={award.event}
                    className="flex items-start gap-5 bg-[#f7f7f5] p-6"
                  >
                    <span className="text-4xl">{award.icon}</span>
                    <div>
                      <div className="text-[#ed5128] text-sm font-inter font-semibold tracking-wider uppercase mb-1">
                        {award.year} · {award.event}
                      </div>
                      <div className="font-darker font-semibold text-xl">{award.award}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Training Roles */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <SectionLabel color="orange">Training &amp; Development</SectionLabel>
              <h2 className="font-darker font-semibold text-4xl md:text-[56px] leading-[0.9]">
                Building Members, Building Leaders
              </h2>
              <p className="font-inter text-lg text-[#282828] leading-relaxed">
                Beyond the stage, Myles invested in the development of others. His role as
                Commissioner for Training and his chairmanship of multiple programs reflect a
                belief that the strength of a chapter lies in the quality of its people.
              </p>
              <ul className="flex flex-col gap-4 mt-4">
                {trainingRoles.map((role) => (
                  <li key={role} className="flex items-start gap-4">
                    <span className="mt-2 w-2 h-2 bg-[#ed5128] flex-shrink-0" />
                    <span className="font-inter text-lg text-[#282828]">{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-[#ed5128] text-white py-20 md:py-32 px-5">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">

            {/* Left: Heading */}
            <div className="w-full lg:w-[40%] flex flex-col gap-6">
              <SectionLabel color="white">Key Achievements</SectionLabel>
              <h2 className="font-darker font-semibold text-4xl md:text-[56px] leading-[0.9]">
                Myles Yeo Tan — JCI Manila Achievements Highlights
              </h2>
              <p className="font-inter text-white/80 text-lg leading-relaxed">
                What makes his story compelling is that his achievements are not limited to one lane.
                He has been involved in community-oriented projects, environmental initiatives,
                training programs, public speaking, chapter bonding, and cross-chapter relationship
                building — the kind of breadth that shapes chapter culture over the long run.
              </p>
            </div>

            {/* Right: List */}
            <div className="w-full lg:w-[60%]">
              <ul className="flex flex-col gap-4">
                {achievements.map((item) => (
                  <li key={item} className="flex items-start gap-4 border-b border-white/20 pb-4 last:border-0">
                    <span className="mt-2 w-2 h-2 bg-white flex-shrink-0" />
                    <span className="font-inter text-lg text-white/90 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="bg-white text-[#282828] py-20 md:py-32 px-5">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
            <SectionLabel color="orange">Why This Record Matters</SectionLabel>
            <h2 className="font-darker font-semibold text-4xl md:text-[60px] leading-[0.9]">
              Service, Brotherhood, and a Legacy Built Inside JCI Manila
            </h2>
            <div className="flex flex-col gap-5 text-left font-inter text-lg text-[#282828] leading-relaxed">
              <p className="text-justify">
                Today, the achievements of Myles Yeo Tan in JCI Manila form an important part of
                his broader leadership story. Known as a business executive, entrepreneur, and
                mentor, he has also built a meaningful legacy inside one of the most respected local
                organizations in JCI Philippines. His journey reflects service, initiative,
                brotherhood, sustainability, training, and leadership — values that continue to
                define both JCI Manila and the larger JCI movement in the Philippines.
              </p>
              <p className="text-justify">
                For those searching for Myles Tan JCI Manila, Myles Yeo Tan JCI Philippines, JCI
                Manila leaders, or JCI Philippines member achievements, this page stands as a
                record of a leader whose contributions have helped strengthen projects, members,
                and connections across the organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-black py-20 px-5 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-left max-w-2xl">
            <h2 className="font-darker font-semibold text-4xl md:text-6xl text-white mb-4">
              Want to Connect with Myles?
            </h2>
            <p className="font-inter text-[#9f9f9f] text-lg">
              Reach out for speaking engagements, mentorship, or to learn more about his work in
              JCI Manila and beyond.
            </p>
          </div>
          <Link href="/contact" className="cursor-pointer">
            <Button className="bg-[#ed5128] hover:bg-[#d9401b] text-white h-14 px-8 text-lg font-bold rounded-none uppercase">
              GET IN TOUCH
            </Button>
          </Link>
        </div>
      </section>

    </main>
  );
}
