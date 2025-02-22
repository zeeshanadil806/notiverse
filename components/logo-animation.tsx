"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const AnimatedLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="/" className="relative block h-10 w-[6rem] overflow-hidden">
      <motion.div
        className="absolute inset-0 flex items-center justify-start"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        {/* "N" moves out */}
        <motion.span
          className="absolute left-2 text-4xl font-bold text-primary"
          initial={{ x: 0, opacity: 1 }}
          animate={isHovered ? { x: 20, opacity: 0 } : { x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          N
        </motion.span>

        {/* "Notify" moves in */}
        <motion.span
          className="absolute left-2 text-2xl font-bold text-primary"
          initial={{ x: -20, opacity: 0 }}
          animate={isHovered ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
        >
          Notify
        </motion.span>
      </motion.div>
    </Link>
  );
};
