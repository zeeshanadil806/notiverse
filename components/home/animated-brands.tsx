"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  "/brands/b1.png",
  "/brands/b2.svg",
  "/brands/b3.png",
  "/brands/b4.svg",
  "/brands/b5.svg",
];

const AnimatedBrands = () => {
  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className="flex space-x-8">
        {/* Left to Right Animation */}
        <motion.div
          className="flex space-x-8"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          {brands.map((logo, index) => (
            <Image
              width={100}
              height={100}
              key={index}
              src={logo}
              alt={`Brand ${index}`}
              className="h-16 w-auto object-contain"
            />
          ))}
        </motion.div>

        {/* Right to Left Animation */}
        <motion.div
          className="flex space-x-8 mt-20"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          {brands.map((logo, index) => (
            <Image
              width={100}
              height={100}
              key={`rev-${index}`}
              src={logo}
              alt={`Brand ${index}`}
              className="h-16 w-auto object-contain"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedBrands;
