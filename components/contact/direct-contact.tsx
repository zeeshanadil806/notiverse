"use client"
import { motion } from "framer-motion"
import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DirectContact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-12"
    >
      <h2 className="mb-6 text-2xl font-bold">Or Contact Us Directly</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Mail className="h-5 w-5 text-primary" />
          <a href="mailto:zartash@notiverse.io" className="hover:text-primary">
            zartash@notiverse.io
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <Mail className="h-5 w-5 text-primary" />
          <a href="mailto:zartash.notify@gmail.com" className="hover:text-primary">
            zartash.notify@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="h-5 w-5 text-primary" />
          <a href="tel:+923234809973" className="hover:text-primary">
            +92 323 480 9973
          </a>
        </div>
      </div>
      <h3 className="mb-4 mt-8 text-xl font-semibold">Social Links</h3>
      <div className="flex space-x-4">
        <Button variant="outline" size="icon" asChild>
          <a href="https://www.facebook.com/profile.php?id=100092555912722" target="_blank" rel="noopener noreferrer">
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href="https://www.instagram.com/team_notify/" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href="https://www.linkedin.com/company/team-notify" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </Button>
      </div>
    </motion.div>
  )
}

