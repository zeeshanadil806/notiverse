"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  "/logos/1.png",
  "/logos/2.png",
  "/logos/3.png",
  "/logos/4.png",
  "/logos/5.png",
  "/logos/6.png",
  "/logos/7.png",
  "/logos/8.png",
  "/logos/9.png",
  "/logos/10.png",
  "/logos/11.png",
  "/logos/12.png",
  "/logos/13.png",
  "/logos/14.png",
  "/logos/15.png",
  "/logos/16.png",
  "/logos/17.png",
  "/logos/18.png",
  "/logos/19.png",
  "/logos/20.png",
  "/logos/21.png",
  "/logos/22.png",
  "/logos/23.png",
  "/logos/24.png",
  "/logos/25.png",
  "/logos/26.png",
  "/logos/27.png",
  "/logos/28.png",
  "/logos/29.png",
  "/logos/30.png",
  "/logos/31.png",
  "/logos/32.png",
  "/logos/33.png",
  "/logos/34.png",
  "/logos/35.png",
  "/logos/36.png",
  "/logos/37.png",
  "/logos/38.png",
  "/logos/39.png",
  "/logos/40.png",
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
