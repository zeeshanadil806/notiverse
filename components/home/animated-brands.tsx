"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  "/logos/200x200 and 250x250-04.png",
  "/logos/1080x1080.png",
  "/logos/Afzaah.webp",
  "/logos/Aik Atelier.png",
  "/logos/Alizay Saad.webp",
  "/logos/amayra jewels.png",
  "/logos/Ara Handcrafted.png",
  "/logos/Autobuddy .png",
  "/logos/Boulangerie By Polo Lounge .jpeg",
  "/logos/candy closet.png",
  "/logos/Dara Logo .png",
  "/logos/fine jewels by Hina Hassan.png",
  "/logos/Food Parliament.jpg",
  "/logos/Mayfair Car rental.png",
  "/logos/NSC.webp",
  "/logos/Pawsitives Pet Cafe.png",
  "/logos/pet experts.webp",
  "/logos/Resorsify.png",
  "/logos/Royal Mirage .jpeg",
  "/logos/SDH.png",
  "/logos/Spice Buds Logo.png",
  "/logos/WhatsApp Image 2025-05-11 at 4.38.10 PM.jpeg",
  "/logos/WhatsApp Image 2025-05-11 at 5.11.24 PM.jpeg",
  "/logos/WhatsApp Image 2025-05-11 at 5.22.58 PM.jpeg",
  "/logos/WhatsApp Image 2025-05-14 at 1.02.21 PM.jpeg",
  "/logos/WhatsApp Image 2025-05-14 at 1.05.13 PM.jpeg",
  "/logos/WhatsApp Image 2025-05-14 at 1.06.39 PM.jpeg",
  "/logos/WhatsApp Image 2025-05-14 at 1.07.01 PM.jpeg",
  "/logos/WhatsApp Image 2025-05-14 at 1.08.56 PM.jpeg",
  "/logos/WhatsApp Image 2025-05-14 at 1.10.29 PM.jpeg",
  "/logos/WhatsApp Image 2025-05-14 at 1.11.49 PM.jpeg",
  "/logos/WhatsApp Image 2025-05-14 at 1.18.15 PM.jpeg",
  "/logos/WhatsApp Image 2025-05-14 at 1.29.58 PM.jpeg",
  "/logos/WhatsApp Image 2025-05-14 at 1.31.05 PM.jpeg",
  "/logos/WhatsApp Image 2025-05-14 at 1.32.46 PM.jpeg",
  "/logos/WhatsApp Image 2025-05-14 at 1.33.15 PM.jpeg",
  "/logos/WhatsApp Image 2025-05-14 at 12.58.32 PM.jpeg",
  "/logos/WhatsApp Image 2025-05-14 at 12.59.48 PM.jpeg",
  "/logos/youcater_logo.png",
  "/logos/zen skincare.png",
];

const AnimatedBrands = () => {
  const repeatedBrands = [...brands, ...brands]; // Repeat for seamless loop

  return (
    <div className="relative w-full overflow-hidden py-4 bg-white">
      <motion.div
        className="flex gap-8 w-max animate-slide"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        }}
      >
        {repeatedBrands.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Brand ${index}`}
            width={100}
            height={100}
            className="h-16 w-auto object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedBrands;
