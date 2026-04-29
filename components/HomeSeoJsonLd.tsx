import {
  ADDRESS_FULL,
  PHONE_DISPLAY,
  SITE_LOGO_PATH,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/site";

const base = SITE_URL.replace(/\/$/, "");

export function HomeSeoJsonLd() {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    description: SITE_TAGLINE,
    url: base,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: base,
      logo: {
        "@type": "ImageObject",
        url: `${base}${SITE_LOGO_PATH}`,
      },
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is Curry Corner located in Birmingham?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Curry Corner is an Indian and Nepalese restaurant at ${ADDRESS_FULL}. We are in Mountain Brook Village on Cahaba Road, convenient to Birmingham and surrounding neighborhoods.`,
        },
      },
      {
        "@type": "Question",
        name: "Does Curry Corner serve biryani?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We offer dum biryanis including chicken, lamb, goat, shrimp, vegetable, and chef special biryani — fragrant basmati rice cooked with spices and your choice of protein or vegetables.",
        },
      },
      {
        "@type": "Question",
        name: "What are Curry Corner’s hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are open seven days a week: lunch from 11:00 AM to 2:30 PM and dinner from 4:00 PM to 9:00 PM. Hours may change on holidays; call ahead to confirm.",
        },
      },
      {
        "@type": "Question",
        name: "How can I order from Curry Corner?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `You can order online for pickup or delivery through our Toast ordering page, or call us at ${PHONE_DISPLAY} for takeout and questions.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
