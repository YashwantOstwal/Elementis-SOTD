"use client";
import React, { CSSProperties, ReactNode, useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import cn from "@/utils/cn";

export default function ParallaxContainer({
  style,
  children,
  className,
  parallaxAmount,
}: {
  style?: CSSProperties;
  children: ReactNode;
  className?: string;
  parallaxAmount: number;
}) {
  const imageContainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageContainer,
    offset: ["start end", "end start"],
  });
  const scrollY = useTransform(
    scrollYProgress,
    (latest) =>
      latest *
      ((globalThis.window?.innerHeight as number) +
        (imageContainer.current?.getBoundingClientRect().height as number)),
  );
  const transform = useTransform(scrollY, (latest) => {
    const containerHeight = imageContainer.current?.getBoundingClientRect()
      .height as number;
    return containerHeight >= (globalThis.window?.innerHeight as number)
      ? `translateY(${scrollYProgress.get() * parallaxAmount * 2 - parallaxAmount}%) scale(1)`
      : `translateY(${(parallaxAmount / ((globalThis.window?.innerHeight as number) - containerHeight)) * (latest - containerHeight)}%) scale(${1 + 0.01 * parallaxAmount})`;
  });
  return (
    <motion.div className="overflow-hidden" ref={imageContainer}>
      <motion.div
        style={{
          transform,
          ...style,
        }}
        className={cn(className, "origin-bottom")}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
