"use client"
import { motion } from "framer-motion"

export default function ContactHero() {
  return (
    <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl mt-20 font-bold leading-tight sm:text-5xl md:text-6xl"
          >
            Get in Touch with <span className="text-primary">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-xl text-gray-300 sm:text-2xl"
          >
            We&apos;re here to help you transform your digital presence
          </motion.p>
        </div>
      </div>
    </section>
  )
}

