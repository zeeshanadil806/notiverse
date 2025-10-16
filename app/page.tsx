// import { FuturisticAbout } from "@/components/home/about-section";
import AnimatedBrands from "@/components/home/animated-brands";
import HeroSection from "@/components/home/hero-section";
import InsightsSection from "@/components/home/insights-section";
import ServicesSection from "@/components/home/services-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
// import { WhatSetsUsApart } from "@/components/home/what-sets-us-apart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notiverse",
  description:
    "Notiverse offers expert digital marketing & e-commerce solutions to grow your business. Get SEO, PPC, and social media marketing services tailored to your needs.",
  keywords: [
  "IT solutions",
  "software development",
  "custom software",
  "mobile app development",
  "AI solutions",
  "cloud computing",
  "cybersecurity services",
  "e-commerce development",
  "digital transformation",
  "web development",
  "IT consulting",
  "SEO services",
  "PPC marketing",
  "social media marketing",
],

  authors: [{ name: "Notiverse Team", url: "https://notiverse.io/" }],
  metadataBase: new URL("https://notiverse.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Notiverse | IT Solutions, Software Development & Digital Transformation",
    description:
      "Notiverse provides end-to-end IT services including custom software development, mobile app solutions, cloud computing, cybersecurity, digital marketing, and AI-powered innovations.",
    url: "https://notiverse.io/",
    siteName: "Notiverse",
    type: "website",
    images: [
      {
        url: "https://notiverse.io/logo-bg.png",
        width: 1200,
        height: 630,
        alt: "Notiverse - Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notiverse",
    description:
      "Expert digital marketing & e-commerce solutions to scale your business.",
    images: ["https://notiverse.io/images/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function Home() {
  return (
    <main className="min-h-screen ">
      <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Notiverse",
            "url": "https://notiverse.io/",
            "logo": "https://notiverse.io/logo.png",
            "sameAs": [
              "https://www.facebook.com/profile.php?id=100092555912722",
              "https://www.instagram.com/team_notify/",
              "https://www.linkedin.com/company/team-notify"
            ]
          })}
        </script>
      <HeroSection />
      <AnimatedBrands />
      {/* <FuturisticAbout /> */}
      <ServicesSection />
      {/* <WhatSetsUsApart /> */}
      <InsightsSection />
      <TestimonialsSection />
    </main>
  )
}

