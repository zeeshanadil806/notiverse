"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Code, Globe, Rocket, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Innovative and responsive websites tailored to your brand.",
  },
  {
    icon: Zap,
    title: "Social Media Management",
    description: "Comprehensive strategies to boost your online presence.",
  },
  { icon: Rocket, title: "Performance Marketing", description: "Targeted campaigns to drive growth and engagement." },
  {
    icon: Code,
    title: "Custom Digital Solutions",
    description: "Bespoke digital tools to address your unique challenges.",
  },
]

export const FuturisticAbout = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <section className="relative overflow-hidden border-b border-gray-700 py-20 text-white" id="services">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <svg className="h-full w-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center text-4xl font-bold leading-tight"
        >
          Empowering Businesses with{" "}
          <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            Innovative Digital Solutions
          </span>{" "}
          Since 2014
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 text-center text-lg text-gray-300"
        >
          At Notify, we specialize in creating personalized digital strategies that drive business growth in the online
          world.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card
                className="group relative overflow-hidden bg-gray-800/50 transition-all duration-300 hover:bg-gray-700/50"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <motion.div
                  className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 to-blue-500/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredService === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10 p-6">
                  <service.icon className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button
            size="lg"
            variant="default"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Explore Our Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

