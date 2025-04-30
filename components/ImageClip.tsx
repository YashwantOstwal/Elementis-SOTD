"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Picture1 from "@/public/elementis-stories/picture1.png";
import { useRef } from "react";
export default function ImageClip() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const clipPath = useTransform(
    scrollYProgress,
    (latest) => `inset(${20 * (1 - latest)}% 0% ${20 * latest}% 0%)`,
  );
  return (
    <motion.div
      ref={ref}
      className="from-red flex h-[200vh] flex-col items-center justify-center"
    >
      <motion.div
        className="relative h-[400px] w-[300px]"
        style={{ clipPath, y }}
      >
        <Image fill src={Picture1} alt="elementis-stories-picture-1" />
      </motion.div>
    </motion.div>
  );
}
