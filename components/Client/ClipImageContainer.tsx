"use client";
import {
  motion,
  MotionValue,
  useMotionTemplate,
  useTransform,
} from "motion/react";
import { ReactNode } from "react";

interface CardImageProps {
  index: number;
  scrollYProgress: MotionValue<number>;
  children: ReactNode;
}
export default function ClipImageContainer({
  index,
  scrollYProgress,
  children,
}: CardImageProps) {
  const bottom = useTransform(
    scrollYProgress,
    [index * 0.25, index * 0.25 + 0.25],
    ["0%", "100%"],
  );
  const scale = useTransform(
    scrollYProgress,
    [(index - 1) * 0.25, index * 0.25 + 0.25],
    [1, 1.05],
  );
  const clipPath = useMotionTemplate`inset(0px 0px ${bottom} 0px)`;
  return (
    <motion.div
      className="absolute inset-0"
      style={{ clipPath, zIndex: -index, scale }}
    >
      {children}
    </motion.div>
  );
}
