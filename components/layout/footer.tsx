"use client";

import type React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { MapPinIcon } from "@heroicons/react/24/solid";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "What Sets Us Apart", href: "/#what-sets-us-apart" },
  { name: "Our Services", href: "/#services" },
  { name: "Our Team", href: "/our-team" },
  { name: "Contact Us", href: "/contact" },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=100092555912722",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/team_notify/",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/team-notify",
  },
];

export function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log("Newsletter signup submitted");
  };

  return (
    <footer className="dark:text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-4 text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
            <h3 className="my-4 text-lg font-semibold">Contact Us At</h3>
            <p className="flex">
              <Phone size={20} className="mr-2" />
              +92 323 4809973
            </p>
            <p className="flex">
              <Phone size={20} className="mr-2" />
              +1 (647) 613 8379
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="dark:text-white"
          >
            <h3 className="mb-4 text-lg font-semibold">Our Offices</h3>

            {/* Pakistan Office */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-primary mb-2">
                Pakistan
              </h4>
              <div className="flex items-start gap-2">
                <MapPinIcon className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed">
                  CP 83, Raya Fairways Commercial
                  <br />
                  Phase 6 DHA, Lahore
                </p>
              </div>
            </div>

            {/* Canada Office */}
            <div>
              <h4 className="text-sm font-medium text-primary mb-2">Canada</h4>
              <div className="flex items-start gap-2">
                <MapPinIcon className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed">
                  8 Strathmore Pl
                  <br />
                  Barrie On, Canada
                </p>
              </div>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-4 text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-primary"
                required
              />
              <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 transition-colors">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col items-center justify-between space-y-4 text-sm sm:flex-row sm:space-y-0">
          <div className="flex space-x-4">
            <Link href="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
          <Link href={"/book-a-call"}>
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Book Your Appointment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Notify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
