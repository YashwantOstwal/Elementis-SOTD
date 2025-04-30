import React, { PropsWithChildren } from "react";
import * as motion from "motion/react-client";
import cn from "@/utils/cn";
import { MotionProps } from "motion/react";
type BorderedButtonProps = PropsWithChildren &
  MotionProps & {
    className?: string;
  };
export default function BorderedButton({
  children,
  className,
  ...props
}: BorderedButtonProps) {
  return (
    <motion.div
      initial="initial"
      whileHover="whileHover"
      className={cn("relative", className)}
      {...props}
    >
      {children}
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 250 100"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M1 99 H249 V1 H1 Z"
            opacity="0.5"
            strokeWidth="2px"
            fill="none"
          />
          <motion.path
            d="M1 99 H249 V1 H1 Z"
            strokeWidth="3px"
            fill="none"
            variants={{
              initial: { pathLength: 0 },
              whileHover: {
                pathLength: 1,
                transition: {
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.24, 0.43, 0.15, 0.97],
                },
              },
            }}
          />
        </svg>
      </div>
    </motion.div>
  );
}
