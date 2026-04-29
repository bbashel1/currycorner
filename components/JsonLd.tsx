import {
  ADDRESS_LINE,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  SITE_LOGO_PATH,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const base = SITE_URL.replace(/\/$/, "");

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${base}/#restaurant`,
    name: SITE_NAME,
    image: `${base}${SITE_LOGO_PATH}`,
    url: base,
    telephone: PHONE_DISPLAY,
    menu: `${base}/menu`,
    sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS_LINE,
      addressLocality: "Mountain Brook",
      addressRegion: "AL",
      postalCode: "35223",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.4842,
      longitude: -86.7741,
    },
    servesCuisine: ["Indian", "Nepalese"],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:00",
        closes: "14:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "16:00",
        closes: "21:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
