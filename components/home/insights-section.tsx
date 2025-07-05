"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface InsightCard {
  id: string
  category: string
  title: string
  description: string
  image: string
  link: string
}

const insights: InsightCard[] = [
  {
    id: '1',
    category: 'Featured',
    title: 'Growth Strategies Powered by Performance Marketing Solutions for Lead Gen and ecom sector',
    description: 'Learn how we revolutionized the resale process for a major e-commerce platform, increasing efficiency by 200%.',
    image: '/bginsight1.png',
    link: '/case-study/ecommerce'
  },
  {
    id: '2',
    category: 'Featured',
    title: 'Custom Website, Application Development, UI UX Superiority: Everything You Need to Know',
    description: 'Dive deep into the world of custom web applications and discover how they can transform your business operations.',
    image: '/bginsight2.png',
    link: '/blogs/web-development'
  },
  {
    id: '3',
    category: 'Featured',
    title: 'Smart ideas.Driven by imagination | Branded by humans | Boosted by AI',
    description: 'Explore how we helped XQUIC achieve 99.9% accuracy in their financial reporting through advanced automation.',
    image: '/bginsight3.png',
    link: '/case-study/finance'
  },
]

const InsightCard = ({ insight, setSelectedInsight }: { insight: InsightCard; setSelectedInsight: (insight: InsightCard | null) => void }) => {
  return (
    <motion.div
      layoutId={insight.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      onClick={() => setSelectedInsight(insight)}
      className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
        style={{ backgroundImage: `url(${insight.image})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-6">
        <div>
          <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
            {insight.category}
          </span>
          <h3 className="mt-4 text-xl font-bold text-white transition-transform group-hover:-translate-y-2">
            {insight.title}
          </h3>
        </div>

        {/* Explore Button - Slides up on hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <Button 
            variant="default" 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Explore More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

const ExpandedCard = ({ insight, onClose }: { insight: InsightCard; onClose: () => void }) => {
  return (
    <motion.div
      layoutId={insight.id}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <motion.div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-2xl bg-[#041434] p-8 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>
        <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
          {insight.category}
        </span>
        <h2 className="mt-4 text-3xl font-bold">{insight.title}</h2>
        <p className="mt-4 text-lg text-gray-300">{insight.description}</p>
        <div className="mt-8">
          <Button 
            variant="default" 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Read Full Article
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function InsightsSection() {
  const [selectedInsight, setSelectedInsight] = useState<InsightCard | null>(null)

  return (
    <section className="relative py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 " />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-semibold uppercase tracking-wider"
          >
            FEATURED INSIGHTS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-4xl font-bold text-[#948f87] dark:text-white sm:text-5xl"
          >
            Stories Of Our{' '}
            <span className="text-primary">Transformations</span> Across{' '}
            <span className="text-primary">Services</span> And{' '}
            <span className="text-primary">Industries</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 mx-auto max-w-2xl text-xl text-gray-400"
          >
            From Concept to completion, explore how we&apos;ve helped businesses across various industries achieve their digital transformation goals.
          </motion.p>
        </div>

        {/* Insights Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight) => (
            <InsightCard 
              key={insight.id} 
              insight={insight} 
              setSelectedInsight={setSelectedInsight}
            />
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button 
            size="lg"
            variant="outline" 
            className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
          >
            View All Insights
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div> */}
      </div>

      <AnimatePresence>
        {selectedInsight && (
          <ExpandedCard 
            insight={selectedInsight} 
            onClose={() => setSelectedInsight(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  )
}
