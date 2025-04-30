"use client";
import cn from "@/utils/cn";
import { MotionProps } from "motion/react";
import * as motion from "motion/react-client";

export default function AnimatedBurger(
  props: MotionProps & { className?: string },
) {
  const childVariants = {
    initial: {
      strokeDashoffset: 0,
    },
    whileHover: {
      strokeDashoffset: -175,
    },
  };
  return (
    <>
      <motion.svg
        className={cn("h-4 w-7", props.className)}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          variants={childVariants}
          transition={{ duration: 0.5, delay: 0 }}
          d="M3 2H99.5"
          strokeWidth="4px"
          strokeLinecap="round"
          strokeDasharray="100 75"
        />
        <motion.path
          variants={childVariants}
          transition={{ duration: 0.5, delay: 0.1 }}
          d="M3 47H99.5"
          strokeWidth="4px"
          strokeLinecap="round"
          strokeDasharray="100 75"
        />
        <motion.path
          variants={childVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
          d="M3 95H99.5"
          strokeWidth="4px"
          strokeLinecap="round"
          strokeDasharray="100 75"
        />
      </motion.svg>
    </>
  );
}
