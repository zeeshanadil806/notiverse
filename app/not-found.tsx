import NotFoundPage from '@/components/not-found'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
    title: "404 - Page Not Found | Notiverse",
    description: "Oops! The page you're looking for doesn't exist. Navigate back to the homepage or contact support.",
    metadataBase: new URL("https://notiverse.io"),
    alternates: {
      canonical: "/404",
    },
    openGraph: {
      title: "404 - Page Not Found | Notiverse",
      description: "Oops! The page you're looking for doesn't exist. Navigate back to the homepage or contact support.",
      url: "https://notiverse.io/404",
      siteName: "Notiverse",
      type: "website",
      images: [
        {
          url: "https://notiverse.io/images/404-og.jpg",
          width: 1200,
          height: 630,
          alt: "404 Page Not Found - Notiverse",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "404 - Page Not Found | Notiverse",
      description: "Oops! The page you're looking for doesn't exist. Navigate back to the homepage or contact support.",
      images: ["https://notiverse.io/images/404-twitter.jpg"],
    },
    robots: {
      index: false, // Prevents this page from being indexed by search engines
      follow: true, // Ensures other links on the site remain crawlable
    },
  };
  
export default function NotFound() {
  return (
    <div><NotFoundPage /></div>
  )
}
