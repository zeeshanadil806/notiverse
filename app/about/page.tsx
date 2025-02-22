import { Metadata } from "next";
import AboutPage from "@/components/about/about-page";
import React from "react";

export const metadata: Metadata = {
  title: "About Notify - Leading Digital Marketing & E-Commerce Experts",
  description:
    "Learn more about Notify, a trusted leader in digital marketing and e-commerce solutions. Our expert team helps businesses grow with SEO, PPC, and branding strategies.",
  keywords: [
    "About Notify",
    "Notify digital marketing",
    "e-commerce experts",
    "SEO specialists",
    "branding solutions",
  ],
  metadataBase: new URL("https://notiverse.io"),
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Notify - Leading Digital Marketing & E-Commerce Experts",
    description:
      "Notify is a top-tier digital marketing and e-commerce solutions provider, specializing in SEO, PPC, and brand growth strategies.",
    url: "https://notiverse.io/about",
    siteName: "Notify",
    type: "website",
    images: [
      {
        url: "https://notiverse.io/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "About Notify - Digital Marketing Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Notify - Leading Digital Marketing & E-Commerce Experts",
    description:
      "Discover how Notify helps businesses grow with digital marketing, SEO, and e-commerce solutions.",
    images: ["https://notiverse.io/images/about-twitter.jpg"],
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
