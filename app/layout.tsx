import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { MobileConversionBar } from "@/components/MobileConversionBar";
import { SITE_LOGO_PATH, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const keywords = [
  "Indian restaurant Birmingham AL",
  "best curry near me",
  "biryani Birmingham",
  "Mountain Brook Indian food",
  "Curry Corner",
  "Nepalese restaurant Alabama",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Indian Restaurant in Birmingham & Mountain Brook`,
    template: `%s | ${SITE_NAME}`,
  },
  description: `${SITE_TAGLINE}. Dine in or takeout. Biryani, tandoori, and classic curries at 2037 Cahaba Road, Mountain Brook.`,
  keywords,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Indian Restaurant Birmingham AL`,
    description: SITE_TAGLINE,
    images: [{ url: SITE_LOGO_PATH, alt: `${SITE_NAME} logo` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Indian Restaurant Birmingham AL`,
    description: SITE_TAGLINE,
    images: [SITE_LOGO_PATH],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileConversionBar />
      </body>
    </html>
  );
}
