"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const AnimatedLogo = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Avoid hydration mismatch

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <Link href="/" className="relative block h-10 w-[6rem] overflow-hidden">
      <motion.div className="absolute inset-0 flex items-center justify-start">
        <Image
          alt="Notiverse"
          src={isDark ? "/logo.png" : "/dark-logo.png"}
          height={100}
          width={100}
          priority
        />
      </motion.div>
    </Link>
  );
};
