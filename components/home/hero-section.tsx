"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Custom hook for responsive video source
const useResponsiveVideo = () => {
  const [videoSource, setVideoSource] = useState({
    src: "/hero.mp4",
    type: "video/mp4",
  })

  useEffect(() => {
    const updateVideoSource = () => {
      const width = window.innerWidth
      if (width <= 768) {
        // Mobile video
        setVideoSource({
          src: "/hero.mp4",
          type: "video/mp4",
        })
      } else if (width <= 1024) {
        // Tablet video
        setVideoSource({
          src: "/hero.mp4",
          type: "video/mp4",
        })
      } else {
        // Desktop video
        setVideoSource({
          src: "/hero.mp4",
          type: "video/mp4",
        })
      }
    }

    // Initial check
    updateVideoSource()

    // Update on resize
    window.addEventListener("resize", updateVideoSource)
    return () => window.removeEventListener("resize", updateVideoSource)
  }, [])

  return videoSource
}

export default function HeroSection() {
  const videoSource = useResponsiveVideo()

  return (
    <div>
      <section className="relative md:h-screen w-full h-[70vh]">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Desktop Video */}
          <video
            key={videoSource.src}
            autoPlay
            muted
            loop
            playsInline
            className="hidden h-full w-full object-cover lg:block"
            // poster="/video-poster-desktop.jpg"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>

          {/* Tablet Video */}
          <video
            key={`tablet-${videoSource.src}`}
            autoPlay
            muted
            loop
            playsInline
            className="hidden h-full w-full object-cover md:block lg:hidden"
            // poster="/video-poster-tablet.jpg"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>

          {/* Mobile Video */}
          <video
            key={`mobile-${videoSource.src}`}
            autoPlay
            muted
            loop
            playsInline
            className="h-[70vh] w-full object-cover md:hidden"
            // poster="/video-poster-mobile.jpg"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex md:h-full items-center h-[70vh]">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Drive Tomorrow&apos;s Possibilities
              </h1>
              <p className="mt-4 max-w-xl text-lg text-gray-300 sm:mt-6 sm:text-xl md:mt-8">
                We help companies redefine the future through technology
              </p>
              <div className="mt-6 sm:mt-8 md:mt-10">
                <Link href={"/book-a-call"}>
                <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Get In Touch
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

