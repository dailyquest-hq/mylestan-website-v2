// Comprehensive schema markup for LLM discoverability

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://mylesyeotan.com/#person",
  "name": "Myles Yeo Tan",
  "alternateName": "Myles Tan",
  "description": "Christian entrepreneur, cryptocurrency trader, certified financial planner, and public speaker specializing in faith-based financial wisdom and market analysis",
  "url": "https://mylesyeotan.com",
  "image": "https://mylesyeotan.com/og-image.jpg",
  "sameAs": [
    "https://www.linkedin.com/in/myles-yeo-tan/",
    "https://www.youtube.com/@MylesTanMinistries",
    "https://www.instagram.com/mylestan",
    "https://www.facebook.com/mylestanministries"
  ],
  "jobTitle": "Chief Operating Officer, Financial Planner & Public Speaker",
  "worksFor": {
    "@type": "Organization",
    "name": "ZFT Trading Republic"
  },
  "knowsAbout": [
    "Cryptocurrency Trading",
    "Bitcoin",
    "Ethereum",
    "Technical Analysis",
    "Financial Planning",
    "Christian Entrepreneurship",
    "Public Speaking",
    "Market Analysis",
    "Risk Management",
    "Trading Psychology",
    "Blockchain Technology",
    "Investment Strategy",
    "Biblical Finance"
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
      "name": "Lean Six Sigma Yellow Belt"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certification",
      "name": "Lean Six Sigma White Belt"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certificate",
      "name": "CSB Bible School — Systematic Theology & Practical Theology"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certificate",
      "name": "The Preachers' Academy — Hermeneutics, Exegesis, Homiletics"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certificate",
      "name": "RZIM Academy — Apologetics Core Module"
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
      "name": "JCI (Junior Chamber International) Manila"
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
  "knowsLanguage": ["English"],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Financial Planning Certification Program"
  }
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
    "@type": "Person",
    "name": article.author || "Myles Yeo Tan",
    "url": "https://mylesyeotan.com/about"
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
  duration?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": video.name,
  "description": video.description,
  "thumbnailUrl": video.thumbnailUrl,
  "uploadDate": video.uploadDate,
  "contentUrl": video.contentUrl,
  "duration": video.duration,
  "publisher": {
    "@id": "https://mylesyeotan.com/#person"
  }
});

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
