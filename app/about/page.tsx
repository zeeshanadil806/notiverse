import { Metadata } from "next";
import AboutPage from "@/components/about/about-page";
import React from "react";

export const metadata: Metadata = {
  title: "About Notiverse - Leading Digital Marketing & E-Commerce Experts",
  description:
    "Learn more about Notiverse, a trusted leader in digital marketing and e-commerce solutions. Our expert team helps businesses grow with SEO, PPC, and branding strategies.",
  keywords: [
    "About Notiverse",
    "Notiverse digital marketing",
    "e-commerce experts",
    "SEO specialists",
    "branding solutions",
  ],
  metadataBase: new URL("https://notiverse.io"),
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Notiverse - Leading Digital Marketing & E-Commerce Experts",
    description:
      "Notiverse is a top-tier digital marketing and e-commerce solutions provider, specializing in SEO, PPC, and brand growth strategies.",
    url: "https://notiverse.io/about",
    siteName: "Notiverse",
    type: "website",
    images: [
      {
        url: "https://notiverse.io/logo-bg.png",
        width: 1200,
        height: 630,
        alt: "About Notiverse - Digital Marketing Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Notiverse - Leading Digital Marketing & E-Commerce Experts",
    description:
      "Discover how Notiverse helps businesses grow with digital marketing, SEO, and e-commerce solutions.",
    images: ["https://notiverse.io/logo-bg.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function Page() {
  return (
    <div>
      <AboutPage />
    </div>
  );
}
