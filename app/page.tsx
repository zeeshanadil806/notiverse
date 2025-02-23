import { FuturisticAbout } from "@/components/home/about-section";
import AnimatedBrands from "@/components/home/animated-brands";
import HeroSection from "@/components/home/hero-section";
import InsightsSection from "@/components/home/insights-section";
import ServicesSection from "@/components/home/services-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { WhatSetsUsApart } from "@/components/home/what-sets-us-apart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notify",
  description:
    "Notify offers expert digital marketing & e-commerce solutions to grow your business. Get SEO, PPC, and social media marketing services tailored to your needs.",
  keywords: [
    "digital marketing",
    "SEO",
    "e-commerce solutions",
    "PPC",
    "social media marketing",
  ],
  authors: [{ name: "Notify Team", url: "https://notiverse.io/" }],
  metadataBase: new URL("https://notiverse.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Notify",
    description:
      "Boost your business with our top-notch digital marketing and e-commerce strategies.",
    url: "https://notiverse.io/",
    siteName: "Notify",
    type: "website",
    images: [
      {
        url: "https://notiverse.io/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Notify - Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notify",
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
            "name": "Notify",
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
      <FuturisticAbout />
      <ServicesSection />
      <WhatSetsUsApart />
      <InsightsSection />
      <AnimatedBrands />
      <TestimonialsSection />
    </main>
  )
}

