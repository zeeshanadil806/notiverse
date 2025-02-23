import { Metadata } from "next";
import ContactHero from "@/components/contact/contact-hero";
import ContactForm from "@/components/contact/contact-form";
import DirectContact from "@/components/contact/direct-contact";
// import LocationMap from "@/components/contact/location-map";

export const metadata: Metadata = {
  title: "Contact Us - Notify | Get in Touch with Our Experts",
  description:
    "Have questions? Contact Notify for expert digital marketing & e-commerce solutions. Reach us via email, phone, or visit our office.",
  keywords: [
    "contact Notify",
    "digital marketing support",
    "e-commerce solutions contact",
    "Notify customer service",
  ],
  metadataBase: new URL("https://notiverse.io"),
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us - Notify | Get in Touch with Our Experts",
    description:
      "Need help with digital marketing or e-commerce solutions? Contact Notify today via email, phone, or visit us in person.",
    url: "https://notiverse.io/contact",
    siteName: "Notify",
    type: "website",
    images: [
      {
        url: "https://notiverse.io/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Notify Digital Marketing Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Notify | Get in Touch with Our Experts",
    description:
      "Need help with digital marketing or e-commerce? Contact Notify today!",
    images: ["https://notiverse.io/images/contact-twitter.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-br from-[#020617] via-[#041434] to-[#020617] text-white">
      <ContactHero />
      <div className="container mx-auto grid gap-12 px-4 py-20 md:grid-cols-2">
        <ContactForm />
        <div>
          <DirectContact />
          {/* <LocationMap /> */}
        </div>
      </div>
    </main>
  );
}