"use client";

import { useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { RefObject } from "react";

export default function useParallaxImage(ref: RefObject<any>, offset: number) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-33%", `0%`]);
  useMotionValueEvent(y, "change", (latest) => {
    console.log(latest);
  });
  return y;
}
