"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export const AnimatedLogo = () => {

  return (
    <Link href="/" className="relative block h-10 w-[6rem] overflow-hidden">
      <motion.div
        className="absolute inset-0 flex items-center justify-start"
      >
        <Image alt="Notiverse" src={"/logo.png"} height={100} width={100}/>
      </motion.div>
    </Link>
  );
};
