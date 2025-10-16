import { Metadata } from "next";
import ContactHero from "@/components/contact/contact-hero";
import ContactForm from "@/components/contact/contact-form";
import DirectContact from "@/components/contact/direct-contact";
// import LocationMap from "@/components/contact/location-map";

export const metadata: Metadata = {
  title: "Contact Us - Notiverse | Get in Touch with Our Experts",
  description:
    "Have questions? Contact Notiverse for expert digital marketing & e-commerce solutions. Reach us via email, phone, or visit our office.",
  keywords: [
    "contact Notiverse",
    "digital marketing support",
    "e-commerce solutions contact",
    "Notiverse customer service",
  ],
  metadataBase: new URL("https://notiverse.io"),
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us - Notiverse | Get in Touch with Our Experts",
    description:
      "Need help with digital marketing or e-commerce solutions? Contact Notiverse today via email, phone, or visit us in person.",
    url: "https://notiverse.io/contact",
    siteName: "Notiverse",
    type: "website",
    images: [
      {
        url: "https://notiverse.io/logo-bg.png",
        width: 1200,
        height: 630,
        alt: "Contact Notiverse Digital Marketing Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Notiverse | Get in Touch with Our Experts",
    description:
      "Need help with digital marketing or e-commerce? Contact Notiverse today!",
    images: ["https://notiverse.io/logo-bg.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function ContactPage() {
  return (
    <main className="dark:text-white">
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