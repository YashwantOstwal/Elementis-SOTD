"use client";
import { motion, MotionConfig, useAnimate } from "motion/react";
import Link from "next/link";
import React, { CSSProperties } from "react";
import NavigateSVG from "@/components/SVGComponents/NavigateSVG";
import cn from "@/utils/cn";

interface StyledLinkProps {
  className?: string;
  style?: CSSProperties;
  children: string;
  sNo: number;
  href: string;
  handleFocus: (newFocus: number, directionalSensitive: boolean) => void;
}
export default function StyledLink2({
  className,
  style,
  children,
  sNo,
  href,
  handleFocus,
}: StyledLinkProps) {
  const [scope, animate] = useAnimate();
  const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
  });

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLElement>,
    index: number,
  ): void => {
    const { height, top } = e.currentTarget.getBoundingClientRect();
    if (e.clientY - top <= height / 2) {
      animate(
        scope.current,
        { height: "100%", inset: "0px 0px auto 0px" },
        {
          height: {
            ease: [0.24, 0.43, 0.15, 0.97],
            duration: 0.4,
            times: [0, 1],
            delay: 0.05,
          },
          inset: {
            duration: 0,
            delay: 0.05,
          },
        },
      );
    } else {
      animate(
        scope.current,
        { height: "100%", inset: "auto 0px 0px 0px" },
        {
          height: {
            ease: [0.24, 0.43, 0.15, 0.97],
            duration: 0.4,
            times: [0, 1],
            delay: 0.05,
          },
          inset: {
            duration: 0,
            delay: 0.05,
          },
        },
      );
    }
    handleFocus(index, true);
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>): void => {
    const { height, top } = e.currentTarget.getBoundingClientRect();
    if (e.clientY - top <= height / 2) {
      animate(
        scope.current,
        { inset: "0px 0px auto 0px", height: "0%" },
        { ease: [0.24, 0.43, 0.15, 0.97], duration: 0.6, delay: 0.05 },
      );
    } else {
      animate(
        scope.current,
        { inset: "auto 0px 0px 0px", height: "0%" },
        { ease: [0.24, 0.43, 0.15, 0.97], duration: 0.6, delay: 0.05 },
      );
    }
  };
  const childVariants = {
    initial: {
      color: "#D1CCBF",
    },
    whileHover: {
      color: "#2b3530",
    },
  };
  return (
    <Link href={href}>
      <motion.div
        initial="initial"
        whileHover="whileHover"
        onMouseEnter={(e) => handleMouseEnter(e, sNo - 1)}
        onMouseLeave={handleMouseLeave}
        style={{ ...style }}
        className={cn(
          "relative flex h-full items-center justify-between overflow-hidden p-5 [line-height:1] font-normal [&_*]:pointer-events-none",
          className,
        )}
      >
        <MotionConfig
          transition={{ ease: [0.24, 0.43, 0.15, 0.97], duration: 0.6 }}
        >
          <motion.div
            variants={{ initial: { height: "0%" } }}
            ref={scope}
            className="absolute inset-x-0 z-10 bg-[#D1CCBF]"
          />
          <motion.div
            className="z-20 flex gap-6 md:gap-28"
            variants={childVariants}
          >
            <motion.div
              variants={{
                initial: { x: 0 },
                whileHover: { x: "var(--spacing-10)" },
              }}
              className="text-2xs leading-[1] font-normal md:text-sm"
            >
              {leadingZeroFormatter.format(sNo)}
            </motion.div>
            <div className="text-lg [line-height:1] md:text-26">{children}</div>
          </motion.div>
          <NavigateSVG className="z-20 mr-2.5" animateOnHover />
        </MotionConfig>
      </motion.div>
    </Link>
  );
}
