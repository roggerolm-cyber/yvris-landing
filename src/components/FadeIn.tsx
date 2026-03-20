"use client";

import { motion } from "framer-motion";

export const FadeIn = ({
  children,
  delay = 0,
  className,
  yOffset = 30,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1], // Smooth custom ease curve (like a curtain rising)
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
