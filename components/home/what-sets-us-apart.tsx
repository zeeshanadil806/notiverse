"use client"
import { motion } from "framer-motion"
import { Shield, Brain, Globe, Cpu, Users, Rocket } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "Trust",
    description: "We focus on empowering businesses of all sizes, providing the expertise and results they need.",
  },
  {
    icon: Brain,
    title: "Expertise",
    description:
      "Our specialists are not just marketers—they're strategists, analysts, developers, and creatives who live and breathe innovation.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Leveraging international insights, we ensure your campaigns resonate both locally and globally.",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Technology",
    description:
      "Harnessing the power of AI and the latest technological advancements, we optimize campaigns, automate processes, and deliver precision-driven results to keep your business ahead of the curve.",
  },
  {
    icon: Users,
    title: "Remote Excellence",
    description:
      "With a proven track record in remote collaboration, we bring together the best talent from across the globe, ensuring your projects are handled by top-tier professionals, regardless of location.",
  },
  {
    icon: Rocket,
    title: "A Digital Powerhouse",
    description:
      "As a full-service digital agency, we offer everything from strategy to execution under one roof—creating a seamless experience that drives business growth and long-lasting success.",
  },
]

export const WhatSetsUsApart = () => {
  return (
    <section id="what-sets-us-apart" className="relative py-20 text-white">
      <div className="absolute inset-0 z-0 opacity-10">
        {/* <svg className="h-full w-full">
          <pattern id="circuit-board" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 0 0 L 100 0 100 100 0 100 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="2" fill="currentColor" />
            <circle cx="0" cy="0" r="2" fill="currentColor" />
            <circle cx="100" cy="0" r="2" fill="currentColor" />
            <circle cx="0" cy="100" r="2" fill="currentColor" />
            <circle cx="100" cy="100" r="2" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit-board)" />
        </svg> */}
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-4xl font-bold leading-tight"
        >
          What Sets Us{" "}
          <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Apart?</span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gray-800/50 transition-all duration-300 hover:bg-gray-700/50">
                <CardHeader>
                  <feature.icon className="mb-4 h-8 w-8 text-primary" />
                  <CardTitle className="text-xl font-semibold text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

