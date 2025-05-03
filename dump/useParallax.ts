import { useScroll, useTransform } from "motion/react";
import { RefObject } from "react";

export default function useParallax(ref: RefObject<any>, offset: number) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${offset}%`]);
  const clipPath = useTransform(
    scrollYProgress,
    (latest) => `inset(${offset * (1 - latest)}% 0% ${offset * latest}% 0%)`,
  );
  return { y, clipPath };
}
