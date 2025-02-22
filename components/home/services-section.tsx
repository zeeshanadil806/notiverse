"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  title: string
  items: string[]
  image: string
}

const serviceCategories: ServiceCardProps[] = [
  {
    title: "Digital Marketing Solutions",
    items: [
      "Social Media Management: Facebook, Instagram, TikTok, LinkedIn, etc.",
      "SEO",
      "Content Marketing",
      "Email Campaigns & Push Notifications",
      "Media Buying (Google, YouTube, Meta, LinkedIn, Snapchat, Tiktok)",
      "Data Tracking & Analysis",
      "Performance Reporting",
    ],
    image: "/bgservice.png",
  },
  {
    title: "Branding & Design",
    items: [
      "Logo's",
      "Brand Manual",
      "Merch Designs",
      "Packaging",
      "Print Media",
      "Store Branding",
      "Product Photography/Videography",
    ],
    image: "/bgservice.png",
  },
  {
    title: "E-commerce & Strategy",
    items: [
      "Marketing Strategy",
      "Ecommerce Store Setup",
      "Collaboration & Partnerships",
      "Market Research & Growth Strategy",
      "Keyword Analysis & Optimization",
      "Pixel Integration",
      "Catalog Mapping",
    ],
    image: "/bgservice.png",
  },
  {
    title: "Software Development & Web Solutions",
    items: [
      "UI/UX Design",
      "Mobile App Design & Development",
      "Website Design & Development",
      "Custom ERP & Business Solutions",
    ],
    image: "/bgservice.png",
  },
]

const ServiceCard = ({ title, items, image }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative h-[400px] overflow-hidden rounded-2xl"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image})` }} />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-6">
        <h3 className="text-2xl font-bold text-white">{title}</h3>

        <motion.div
          className="mt-4 flex-1 overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            height: isHovered ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <ul className="space-y-2 text-gray-200">
            {items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 0 : -20,
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-sm font-mono font-semibold"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section className="relative py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 " />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-primary text-sm font-semibold uppercase tracking-wider">OUR SERVICES</h2>
          <h3 className="mt-2 text-4xl font-bold dark:text-white sm:text-5xl text-black">Transform Your Business</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.slice(0, showAll ? undefined : 4).map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {serviceCategories.length > 4 && (
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => setShowAll(!showAll)}
            >
              View More Services
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

