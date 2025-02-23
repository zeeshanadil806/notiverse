"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#020617] text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <h2 className="mb-8 text-3xl font-semibold">Page Not Found</h2>
        <p className="mb-8 text-xl text-gray-400">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
      >
        <Button asChild variant="outline" size="lg">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Link>
        </Button>
        <Button asChild size="lg">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Home Page
          </Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 text-center text-sm text-gray-500"
      >
        <p>
          If you believe this is an error, please{" "}
          <Link href="/contact" className="text-primary hover:underline">
            contact our support team
          </Link>
          .
        </p>
      </motion.div>
    </div>
  )
}

