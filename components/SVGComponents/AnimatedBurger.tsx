"use client";
import cn from "@/utils/cn";
import { MotionProps } from "motion/react";
import * as motion from "motion/react-client";

export default function AnimatedBurger(
  props: MotionProps & { className?: string },
) {
  // const childVariants = {
  //   initial: {
  //     x: "0%",
  //   },
  //   whileHover: {
  //     x: "100%",
  //   },
  // };
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
      <motion.div
        className={cn("flex h-4 w-7 flex-col justify-between", props.className)}
      >
        <svg preserveAspectRatio="none" viewBox="0 0 100 1">
          <motion.path
            d="M0 0H100"
            variants={childVariants}
            transition={{ duration: 0.5, delay: 0 }}
            className="bg-white"
            strokeWidth="4px"
            strokeDasharray="100 75"
            strokeLinecap="round"
          />
        </svg>
        <svg preserveAspectRatio="none" viewBox="0 0 100 1">
          <motion.path
            d="M0 0H100"
            variants={childVariants}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white"
            strokeWidth="4px"
            strokeDasharray="100 75"
            strokeLinecap="round"
          />
        </svg>
        <svg preserveAspectRatio="none" viewBox="0 0 100 1">
          <motion.path
            d="M0 0H100"
            variants={childVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white"
            strokeWidth="4px"
            strokeDasharray="100 75"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </>
  );
}
