import { Metadata } from "next";
import BookMeeting from "@/components/book-a-call/BookMeeting";

export const metadata: Metadata = {
  title: "Book a Call - Schedule a Free Consultation | Notiverse",
  description:
    "Book a free consultation with Notiverse's digital marketing and e-commerce experts. Let's discuss your business growth strategies today!",
  keywords: [
    "Book a call",
    "schedule a meeting",
    "free consultation",
    "digital marketing strategy",
    "e-commerce consultation",
  ],
  metadataBase: new URL("https://notiverse.io"),
  alternates: {
    canonical: "/book-a-call",
  },
  openGraph: {
    title: "Book a Call - Schedule a Free Consultation | Notiverse",
    description:
      "Schedule a free consultation with Notiverse to explore expert digital marketing and e-commerce solutions tailored to your business.",
    url: "https://notiverse.io/book-a-call",
    siteName: "Notiverse",
    type: "website",
    images: [
      {
        url: "https://notiverse.io/logo-bg.png",
        width: 1200,
        height: 630,
        alt: "Book a call with Notiverse - Digital Marketing Consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Call - Schedule a Free Consultation | Notiverse",
    description:
      "Get expert insights on digital marketing and e-commerce strategies by scheduling a free call with Notiverse today.",
    images: ["https://notiverse.io/logo-bg.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function BookACallPage() {
  return <BookMeeting />;
}
