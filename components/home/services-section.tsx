"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  title: string
  items: string[]
  image: string
  index: number
}

const serviceCategories: Omit<ServiceCardProps, "index">[] = [
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

const ServiceCard = ({ title, items, image, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Intersection Observer for scroll-based animation on mobile
  useEffect(() => {
    if (!isMobile || !cardRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the card is visible
        rootMargin: "-50px 0px -50px 0px", // Add some margin to trigger animation earlier
      },
    )

    observer.observe(cardRef.current)

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [isMobile])

  // Determine whether to show items based on mobile/desktop and interaction state
  const shouldShowItems = isMobile ? isInView : isHovered

  return (
    <motion.div
      ref={cardRef}
      className="relative h-[400px] overflow-hidden rounded-2xl"
      onHoverStart={() => !isMobile && setIsHovered(true)}
      onHoverEnd={() => !isMobile && setIsHovered(false)}
      whileHover={!isMobile ? { scale: 1.02 } : {}}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image})` }} />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-6">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>

        {/* Items list with conditional animation */}
        <motion.div
          className="flex-1 overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: shouldShowItems ? 1 : 0,
            height: shouldShowItems ? "auto" : 0,
          }}
          transition={{
            duration: isMobile ? 0.6 : 0.3,
            ease: "easeInOut",
          }}
        >
          <ul className="space-y-2 text-gray-200">
            {items.map((item, itemIndex) => (
              <motion.li
                key={itemIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: shouldShowItems ? 1 : 0,
                  x: shouldShowItems ? 0 : -20,
                }}
                transition={{
                  duration: isMobile ? 0.4 : 0.3,
                  delay: shouldShowItems ? itemIndex * (isMobile ? 0.15 : 0.1) : 0,
                  ease: "easeOut",
                }}
                className="text-sm font-mono font-semibold leading-relaxed"
              >
                • {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Mobile indicator */}
        {isMobile && !isInView && (
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-white/70 text-xs text-center">Scroll to view services</div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section className="relative py-20">
      {/* Background gradient */}
      <div className="absolute inset-0" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-primary text-sm font-semibold uppercase tracking-wider">OUR SERVICES</h2>
          <h3 className="mt-2 text-4xl font-bold dark:text-white sm:text-5xl text-black">
            Empowering Businesses with Innovative Digital Solutions
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.slice(0, showAll ? undefined : 4).map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
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
