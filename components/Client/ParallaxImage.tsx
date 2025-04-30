"use client";
import Image from "next/image";
import IntroductionImage from "@/public/Introduction.png";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";

export default function ParallaxImage() {
  // const isLessThanMedium = useBelowWidth(768);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const clipPath = useTransform(
    scrollYProgress,
    (latest) => `inset(${35 * (1 - latest)}% 0% ${35 * latest}% 0%)`,
  );
  // if (isLessThanMedium) {
  //   return (
  //     <Image
  //       src={IntroductionImage}
  //       alt="introduction"
  //       className="mx-auto aspect-[1.2] w-full object-cover sm:aspect-[1.5]"
  //     />
  //   );
  // }
  return (
    <motion.div
      ref={ref}
      className="relative col-span-2 col-start-2 aspect-[1.2]"
      style={{ clipPath, y }}
    >
      <Image src={IntroductionImage} alt="introduction" fill />
    </motion.div>
  );
}
