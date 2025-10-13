"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
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
    image: "/services/dm.png",
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
    image: "/services/ecom.png",
  },
  {
    title: "Software Development & Web Solutions",
    items: [
      "UI/UX Design",
      "Mobile App Design & Development",
      "Website Design & Development",
      "Custom ERP & Business Solutions",
    ],
    image: "/services/dev.png",
  },
  {
    title: "AI Agents and Bots",
    items: [
      "Automate customer interactions and business processes with intelligent AI solutions",
      "Our custom bots work 24/7 to boost efficiency, reduce costs, and enhance user experience",
    ],
    image: "/services/ai-bots.png",
  },
  {
    title: "Staff Augmentation",
    items: [
      "Empower your leadership by quickly filling critical skill gaps without the overhead of permanent hires",
      "We provide top talent that integrates seamlessly, keeping your projects moving and your vision on track",
    ],
    image: "/services/staff-aug.png",
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
        threshold: 0.3,
        rootMargin: "-50px 0px -50px 0px",
      },
    )

    observer.observe(cardRef.current)

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [isMobile])

  const shouldShowItems = isMobile ? isInView : isHovered

  return (
    <motion.div
      ref={cardRef}
      className="relative h-[400px] min-w-[300px] md:min-w-[350px] flex-shrink-0 overflow-hidden rounded-2xl"
      onHoverStart={() => !isMobile && setIsHovered(true)}
      onHoverEnd={() => !isMobile && setIsHovered(false)}
      whileHover={!isMobile ? { scale: 1.02 } : {}}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${image})` }} 
      />

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
                className="text-sm font-semibold leading-relaxed"
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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAll, setShowAll] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector('.min-w-\\[300px\\]')?.clientWidth || 300
      carouselRef.current.scrollTo({
        left: index * (cardWidth + 24), // 24px is the gap
        behavior: 'smooth'
      })
      setCurrentIndex(index)
    }
  }

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % serviceCategories.length
    scrollToIndex(nextIndex)
  }

  const prevSlide = () => {
    const prevIndex = currentIndex === 0 ? serviceCategories.length - 1 : currentIndex - 1
    scrollToIndex(prevIndex)
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft
      const cardWidth = carouselRef.current.querySelector('.min-w-\\[300px\\]')?.clientWidth || 300
      const newIndex = Math.round(scrollLeft / (cardWidth + 24))
      setCurrentIndex(newIndex)
    }
  }

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

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          {!isMobile && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 z-20 -translate-y-1/2 transform rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110 -ml-6"
                aria-label="Previous services"
              >
                <ChevronLeft className="h-6 w-6 text-gray-800" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 z-20 -translate-y-1/2 transform rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110 -mr-6"
                aria-label="Next services"
              >
                <ChevronRight className="h-6 w-6 text-gray-800" />
              </button>
            </>
          )}

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            onScroll={handleScroll}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {serviceCategories.map((service, index) => (
              <div key={index} className="snap-start">
                <ServiceCard {...service} index={index} />
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {serviceCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile indicator */}
        {isMobile && (
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">Swipe to explore more services</p>
          </div>
        )}

        {/* View More Button (for mobile or alternative view) */}
        {serviceCategories.length > 4 && (
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "View More Services"}
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}