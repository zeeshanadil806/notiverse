"use client"
import { motion } from "framer-motion"
import { Calendar, Clock, Users, Zap } from "lucide-react"
import CalendlyEmbed from "./CalendlyEmbed"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const benefits = [
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Choose a time that works best for you from our wide range of available slots.",
  },
  {
    icon: Clock,
    title: "30-Minute Power Session",
    description: "Get straight to the point with our focused, 30-minute consultation calls.",
  },
  {
    icon: Users,
    title: "Expert Consultation",
    description: "Speak directly with our experienced team about your digital needs and goals.",
  },
  {
    icon: Zap,
    title: "Immediate Next Steps",
    description: "Walk away with actionable insights and a clear path forward for your project.",
  },
]

export default function BookMeeting() {
  return (
    <main className="mt-20 min-h-screen py-12 dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h1 className="mb-6 text-center text-4xl font-bold text-primary">Book a Call with Us</h1>
        <p className="mb-12 text-center text-xl text-gray-400">
          Take the first step towards transforming your digital presence. Schedule a free 30-minute consultation with
          our experts.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="mb-6 text-2xl font-semibold">Why Book a Call?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <Link href={"/book-a-call"} key={index}>
                <Card  className="bg-gray-800">
                  <CardHeader>
                    <benefit.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg text-white">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-lg bg-gray-800 p-4"
          >
            <CalendlyEmbed url="https://calendly.com/zartash-notiverse-amid" />
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}

