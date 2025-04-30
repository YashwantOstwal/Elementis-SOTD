import cn from "@/utils/cn";
import * as motion from "motion/react-client";
import { AnimationProps, MotionStyle } from "motion/react";
import React, { PropsWithChildren } from "react";

type DashedLinkProps = PropsWithChildren &
  AnimationProps & {
    style?: MotionStyle;
    className?: string;
  };
export default function DashedLink({
  children,
  className,
  style,
  ...AnimationProps
}: DashedLinkProps) {
  return (
    // <Link href={href}>
    <motion.div className="" {...AnimationProps}>
      <motion.div
        initial="initial"
        whileHover="hover"
        className={cn("relative [line-height:1.2]", className)}
        style={{ ...style }}
      >
        {children}
        <motion.div
          className="animated-underline absolute bottom-0 h-[1px] bg-black"
          variants={{
            initial: { width: "0%", right: "0px", left: "auto" },
            hover: { width: "100%", left: "0px", right: "auto" },
          }}
          transition={{
            left: {
              duration: 0,
            },
            right: {
              duration: 0,
            },
            default: {
              ease: [0.24, 0.43, 0.15, 0.97],
              duration: 0.8,
            },
          }}
        />
      </motion.div>
    </motion.div>
    // </Link>
  );
}
