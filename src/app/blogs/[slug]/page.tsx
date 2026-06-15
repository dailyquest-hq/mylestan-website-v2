import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Calendar, Facebook } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { articleSchema, breadcrumbSchema } from "@/lib/schemas";
import { getPostBySlug, posts } from "../posts";

const SITE_URL = "https://mylesyeotan.com";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Post not found | Myles Yeo Tan" };
  }
  const url = `${SITE_URL}/blogs/${post.slug}`;
  return {
    title: `${post.title} | Myles Yeo Tan`,
    description: post.excerpt,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.datePublished,
      authors: ["Myles Yeo Tan"],
      images: [
        {
          url: post.heroImage.src,
          width: post.heroImage.width,
          height: post.heroImage.height,
          alt: post.heroImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.heroImage.src],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blogs/${post.slug}`;
  const article = articleSchema({
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.heroImage.src}`,
    datePublished: post.datePublished,
    dateModified: post.datePublished,
  });
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Blogs & Insights", url: `${SITE_URL}/blogs` },
    { name: post.title, url },
  ]);
  const graph = {
    "@context": "https://schema.org",
    "@graph": [breadcrumb, { ...article, "@type": "BlogPosting", mainEntityOfPage: url }],
  };

  const formattedDate = new Date(post.datePublished).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <main id="main-content" className="bg-white min-h-dvh w-full overflow-x-hidden">

        {/* Hero */}
        <section className="bg-[#0f100a] text-white pt-40 pb-16 md:pt-52 md:pb-24 px-5">
          <div className="max-w-[900px] mx-auto flex flex-col gap-6">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-[#9f9f9f] hover:text-white font-poppins text-sm uppercase tracking-wider transition-colors"
            >
              <ArrowLeft size={16} /> Back to Blogs
            </Link>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="bg-[#ed5128] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider font-poppins">
                {post.category}
              </span>
              <span className="text-[#9f9f9f] font-inter text-sm flex items-center gap-2">
                <Calendar size={14} /> {formattedDate}
              </span>
            </div>
            <h1 className="font-darker font-semibold text-[40px] sm:text-[52px] md:text-[64px] leading-[1] tracking-tight">
              {post.title}
            </h1>
            <p className="font-inter text-[#cfcfcf] text-lg md:text-xl leading-relaxed max-w-[760px]">
              {post.excerpt}
            </p>
            <div className="font-poppins text-sm text-[#9f9f9f] mt-2">
              By <span className="text-white font-semibold">Myles Yeo Tan</span> · Originally posted on{" "}
              <Link
                href={post.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ed5128] hover:text-white transition-colors inline-flex items-center gap-1"
              >
                {post.originalSource} <ArrowUpRight size={14} />
              </Link>{" "}
              · {post.originalDate}
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="bg-[#0f100a] px-5 pb-16 md:pb-24">
          <div className="max-w-[1100px] mx-auto">
            <div className="relative w-full aspect-[1200/628] overflow-hidden rounded-sm border border-white/10 shadow-2xl">
              <Image
                src={post.heroImage}
                alt={post.heroImageAlt}
                fill
                priority
                sizes="(max-width: 1100px) 100vw, 1100px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Body */}
        <article className="py-16 md:py-24 px-5">
          <div className="max-w-[760px] mx-auto flex flex-col gap-10">

            {/* Intro */}
            <div className="flex flex-col gap-5">
              {post.intro.map((para, i) => (
                <p
                  key={i}
                  className={`font-inter text-[#282828] leading-relaxed ${
                    i === 0 ? "text-2xl md:text-3xl font-darker font-semibold text-black leading-[1.2]" : "text-lg"
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Tips */}
            <div className="flex flex-col gap-12">
              {post.tips.map((tip) => (
                <section key={tip.number} className="flex flex-col gap-5 border-l-4 border-[#ed5128] pl-6 md:pl-8">
                  <SectionLabel color="black">Tip #{tip.number}</SectionLabel>
                  <h2 className="font-darker font-semibold text-3xl md:text-4xl leading-[1.05] text-black">
                    {tip.title} {tip.emoji && <span aria-hidden>{tip.emoji}</span>}
                  </h2>
                  {tip.quote && (
                    <blockquote className="font-darker italic text-xl md:text-2xl text-[#ed5128] leading-snug border-l-2 border-[#ed5128]/30 pl-4">
                      “{tip.quote}”
                    </blockquote>
                  )}
                  <ul className="flex flex-col gap-4">
                    {tip.bullets.map((b, i) => (
                      <li key={i} className="font-inter text-[#282828] text-lg leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            {/* Secondary image */}
            {post.secondaryImage && (
              <figure className="flex flex-col gap-3">
                <div className="relative w-full max-w-md mx-auto aspect-[9/16] overflow-hidden rounded-sm border border-gray-200 shadow-md">
                  <Image
                    src={post.secondaryImage}
                    alt={post.secondaryImageAlt || ""}
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-contain bg-black"
                  />
                </div>
                {post.secondaryImageAlt && (
                  <figcaption className="text-center font-inter text-sm text-[#9f9f9f] italic">
                    {post.secondaryImageAlt}
                  </figcaption>
                )}
              </figure>
            )}

            {/* Closing */}
            <div className="flex flex-col gap-5">
              {post.closing.map((para, i) => (
                <p key={i} className="font-inter text-[#282828] text-lg leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-[#0f100a] text-white p-8 md:p-12 rounded-sm flex flex-col gap-5">
              <SectionLabel color="white">{post.cta.sectionLabel ?? "Upcoming Talk"}</SectionLabel>
              <h3 className="font-darker font-semibold text-3xl md:text-4xl leading-[1.05]">
                {post.cta.label}
              </h3>
              <p className="font-inter text-[#cfcfcf] text-base md:text-lg">
                {post.cta.description}
              </p>
              <Link href={post.cta.url} target="_blank" rel="noopener noreferrer" className="self-start">
                <Button className="bg-[#ed5128] hover:bg-[#d9401b] text-white rounded-none uppercase h-12 px-8">
                  Register Now
                </Button>
              </Link>
            </div>

            {/* Tags + FB attribution */}
            <div className="flex flex-col gap-6 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="font-poppins text-xs uppercase tracking-wider text-[#575756] bg-[#f5f5f5] px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href={post.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-poppins text-sm text-[#282828] hover:text-[#ed5128] transition-colors group"
              >
                <Facebook size={18} />
                <span>
                  Read the original post on {post.originalSource} ({post.originalDate})
                </span>
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </article>

        {/* Back to Blogs */}
        <section className="bg-[#f9f9f9] py-16 px-5">
          <div className="max-w-[760px] mx-auto flex flex-col items-center gap-6 text-center">
            <h2 className="font-darker font-semibold text-3xl md:text-4xl text-black">
              Want more insights like this?
            </h2>
            <p className="font-inter text-[#575756] text-lg max-w-xl">
              Read the latest reflections on faith, finance, and purposeful living.
            </p>
            <Link href="/blogs">
              <Button className="bg-[#ed5128] hover:bg-[#d9401b] text-white rounded-none uppercase h-12 px-8">
                See All Posts
              </Button>
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
