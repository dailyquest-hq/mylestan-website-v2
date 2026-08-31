// Comprehensive schema markup for LLM discoverability

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://mylesyeotan.com/#person",
  "name": "Myles Yeo Tan",
  "givenName": "Myles",
  "additionalName": "Yeo",
  "familyName": "Tan",
  "alternateName": ["Myles Tan", "Myles Y. Tan"],
  "honorificSuffix": "RFP, CTA",
  "gender": "Male",
  "description": "Singapore-based Christian entrepreneur, cryptocurrency trader, Registered Financial Planner (RFP), Certified Technical Analyst (CTA), and public speaker. Chief Operating Officer of Ilyon Industrial Corporation and former Chief Operating Officer of ZFT Trading Republic.",
  "url": "https://mylesyeotan.com",
  "mainEntityOfPage": "https://mylesyeotan.com/bio",
  "image": "https://mylesyeotan.com/og-image.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Singapore",
    "addressCountry": "SG"
  },
  "sameAs": [
    "https://www.linkedin.com/in/myles-yeo-tan/",
    "https://www.youtube.com/@MylesTanMinistries",
    "https://www.instagram.com/mylestan",
    "https://www.facebook.com/mylestanministries"
  ],
  "jobTitle": "Chief Operating Officer, Financial Planner & Public Speaker",
  "worksFor": {
    "@type": "Organization",
    "name": "Ilyon Industrial Corporation",
    "description": "Philippine importer and distribution company supplying industrial raw materials and chemicals to over 200 industrial companies nationwide."
  },
  "knowsAbout": [
    "Cryptocurrency Trading",
    "Bitcoin",
    "Ethereum",
    "Altcoins",
    "Technical Analysis",
    "Market Cycle Theory",
    "Market Analysis",
    "Risk Management",
    "Trading Psychology",
    "Blockchain Technology",
    "Investment Strategy",
    "Financial Planning",
    "Wealth Stewardship",
    "Biblical Finance",
    "Christian Entrepreneurship",
    "Faith-based Leadership",
    "Public Speaking",
    "Christian Theology",
    "Apologetics",
    "Prophetic Ministry"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certification",
      "name": "Registered Financial Planner (RFP)"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certification",
      "name": "Certified Technical Analyst (CTA)"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certification",
      "name": "Lean Six Sigma Yellow Belt (2026)",
      "validFrom": "2026-03-01"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certification",
      "name": "Lean Six Sigma White Belt (2026)",
      "validFrom": "2026-03-01"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certificate",
      "name": "CSB Bible School — Systematic Theology & Practical Theology (2021)",
      "validFrom": "2021-12-01"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certificate",
      "name": "The Preachers' Academy — Hermeneutics, Exegesis, Homiletics (2021)",
      "validFrom": "2021-04-01"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certificate",
      "name": "RZIM Academy — Apologetics Core Module (2020)",
      "validFrom": "2020-01-01"
    }
  ],
  "memberOf": [
    {
      "@type": "Organization",
      "name": "Rotary Club of Manila",
      "url": "https://www.rotarymanila.org/"
    },
    {
      "@type": "Organization",
      "name": "RCManila Foundation, Inc. (RCMFI)",
      "url": "https://www.rotarymanila.org/",
      "description": "Lifetime Member (September 2026) — the foundation arm of the Rotary Club of Manila, sustaining its community programs, humanitarian advocacies, and service initiatives"
    },
    {
      "@type": "Organization",
      "name": "JCI (Junior Chamber International) Manila"
    },
    {
      "@type": "Organization",
      "name": "Filipino World Travelers (FWT)",
      "url": "https://filipinoworldtravelers.com/affiliates/list",
      "description": "Affiliate — recognized for global exploration across 7 continents and more than 69 countries (May 2026); Top 12 Winner, 2026 FWT Travel Photo Contest (August 2026)"
    }
  ],
  "affiliation": [
    {
      "@type": "Organization",
      "name": "Alpha Intel",
      "description": "US Stocks Advisor (since June 2026) — providing market analysis, research, and guidance to help the community navigate the US stock market"
    }
  ],
  "hasOccupation": [
    {
      "@type": "Occupation",
      "name": "Financial Planner",
      "description": "Provides values-aligned financial planning and literacy education"
    },
    {
      "@type": "Occupation",
      "name": "Cryptocurrency Trader",
      "description": "Market analysis and trading insights for crypto, stocks, and commodities"
    },
    {
      "@type": "Occupation",
      "name": "Public Speaker",
      "description": "Keynote speaker on faith, finance, leadership, and entrepreneurship"
    },
    {
      "@type": "Occupation",
      "name": "Business Coach",
      "description": "Christian entrepreneurship coaching and mentorship"
    }
  ],
  "award": [
    "1st Place — JCIP Area Conference Public Speaking (2019)",
    "1st Runner-Up — JCIP National Convention Public Speaking (2019)",
    "Icon of Play — YGG Play Summit 2025",
    "Featured in The Asian Pearl (JCI Manila official publication) as Project Chairman, Grand Slam Mission for Clark 2026",
    "Top 12 Winner — 2026 Filipino World Travelers (FWT) Travel Photo Contest"
  ],
  "knowsLanguage": ["English", "Filipino"],
  "alumniOf": [
    { "@type": "EducationalOrganization", "name": "RZIM Academy" },
    { "@type": "EducationalOrganization", "name": "The Preachers' Academy" },
    { "@type": "EducationalOrganization", "name": "CSB Bible School" }
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://mylesyeotan.com/#website",
  "url": "https://mylesyeotan.com",
  "name": "Myles Yeo Tan",
  "description": "Official website of Myles Yeo Tan - Crypto trader, financial planner, and Christian entrepreneur",
  "publisher": {
    "@id": "https://mylesyeotan.com/#person"
  },
  "inLanguage": "en-US"
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Myles Yeo Tan - Financial & Business Services",
  "description": "Cryptocurrency trading analysis, financial planning, Christian entrepreneurship coaching, and speaking services",
  "url": "https://mylesyeotan.com",
  "founder": {
    "@id": "https://mylesyeotan.com/#person"
  },
  "areaServed": "International",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Crypto, Stocks & Commodities Trading Analysis",
          "description": "Market cycle analysis, technical analysis, risk management, and trade psychology coaching"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Financial Planning and Literacy",
          "description": "Values-aligned financial planning, budgeting, and investment guidance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Christian Entrepreneurship Coaching",
          "description": "Faith-based business strategy and mentorship for founders"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Speaking Engagements",
          "description": "Keynotes, seminars, and panel talks on faith, finance, and leadership"
        }
      }
    ]
  }
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const articleSchema = (article: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.headline,
  "description": article.description,
  "image": article.image,
  "datePublished": article.datePublished,
  "dateModified": article.dateModified,
  "author": {
    "@id": "https://mylesyeotan.com/#person"
  },
  "publisher": {
    "@id": "https://mylesyeotan.com/#person"
  }
});

export const videoSchema = (video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl: string;
  embedUrl?: string;
  duration?: string;
}) => {
  const embedUrl =
    video.embedUrl ||
    (video.contentUrl.includes('youtube.com/watch?v=')
      ? `https://www.youtube-nocookie.com/embed/${video.contentUrl.split('v=')[1].split('&')[0]}`
      : undefined);

  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.name,
    "description": video.description,
    "thumbnailUrl": video.thumbnailUrl,
    "uploadDate": /^\d{4}-\d{2}-\d{2}$/.test(video.uploadDate)
      ? `${video.uploadDate}T00:00:00+00:00`
      : video.uploadDate,
    "contentUrl": video.contentUrl,
    ...(embedUrl && { "embedUrl": embedUrl }),
    ...(video.duration && { "duration": video.duration }),
    "isFamilyFriendly": true,
    "inLanguage": "en",
    "publisher": {
      "@id": "https://mylesyeotan.com/#person"
    }
  };
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://mylesyeotan.com/#business",
  "name": "Myles Yeo Tan - Financial & Business Services",
  "image": "https://mylesyeotan.com/og-image.jpg",
  "description": "Professional cryptocurrency trading analysis, financial planning, Christian entrepreneurship coaching, and speaking services",
  "url": "https://mylesyeotan.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Singapore",
    "addressCountry": "SG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 1.3521,
    "longitude": 103.8198
  },
  "areaServed": {
    "@type": "Place",
    "name": "International"
  },
  "sameAs": [
    "https://www.linkedin.com/in/myles-yeo-tan/",
    "https://www.youtube.com/@MylesTanMinistries",
    "https://www.instagram.com/mylestan",
    "https://www.facebook.com/mylestanministries"
  ],
  "founder": {
    "@id": "https://mylesyeotan.com/#person"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ]
};

export const speakableSchema = (url: string, cssSelectors: string[]) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "url": url,
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": cssSelectors
  }
});

export const eventSchema = (event: {
  name: string;
  startDate: string;
  endDate?: string;
  location: string;
  isOnline: boolean;
  url?: string;
  description?: string;
  image?: string;
  performerRole?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": event.name,
  "startDate": event.startDate,
  "endDate": event.endDate || event.startDate,
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": event.isOnline
    ? "https://schema.org/OnlineEventAttendanceMode"
    : "https://schema.org/OfflineEventAttendanceMode",
  "location": event.isOnline
    ? {
        "@type": "VirtualLocation",
        "url": event.url || "https://mylesyeotan.com/media-speaking",
      }
    : {
        "@type": "Place",
        "name": event.location,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": event.location,
        },
      },
  "image": event.image || "https://mylesyeotan.com/og-image.jpg",
  "performer": { "@id": "https://mylesyeotan.com/#person" },
  "organizer": { "@id": "https://mylesyeotan.com/#person" },
  "offers": {
    "@type": "Offer",
    "url": "https://mylesyeotan.com/contact",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/SoldOut",
    "validFrom": event.startDate,
  },
  ...(event.url && { "url": event.url }),
  ...(event.description && { "description": event.description }),
});

export const serviceSchema = (service: {
  name: string;
  description: string;
  serviceType: string;
  url?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "serviceType": service.serviceType,
  "provider": { "@id": "https://mylesyeotan.com/#person" },
  "areaServed": { "@type": "Place", "name": "International" },
  ...(service.url && { "url": service.url }),
});
