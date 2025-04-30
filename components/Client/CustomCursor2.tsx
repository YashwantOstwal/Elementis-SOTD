"use client";
import cn from "@/utils/cn";
import { AnimatePresence, motion, MotionStyle } from "motion/react";
import { PropsWithChildren, useId } from "react";
interface CustomCursorProps extends PropsWithChildren {
  renderCursor: boolean;
  style?: MotionStyle;
  onAnimationComplete?: () => void;
  isMobile?: boolean;
  className?: string;
}
export default function CustomCursor2({
  renderCursor,
  children,
  className,
  isMobile = false,
  ...rest
}: CustomCursorProps) {
  const id = useId();
  const variants = {
    initial: { scale: 0 },
    animate: (custom: boolean) => ({
      scale: 1,
      transition: {
        delay: custom ? 1 : 0,
        duration: 0.25,
      },
    }),
    exit: {
      scale: 0,
      duration: 0.25,
    },
  };
  return (
    <AnimatePresence>
      {renderCursor && (
        <motion.div
          {...rest}
          key={id}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={isMobile}
          variants={variants}
          className={cn(
            "pointer-events-none fixed z-[200] bg-[#fff]/30 text-lg [backdrop-filter:blur(10px)]",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
