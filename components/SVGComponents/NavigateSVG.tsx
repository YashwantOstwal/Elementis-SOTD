import * as motion from "motion/react-client";
import cn from "@/utils/cn";
import { AnimationProps, MotionStyle, Variants } from "motion/react";

interface NavigateSVGProps extends AnimationProps {
  fill?: "#2B3530" | "#D1CCBF" | "#FFFFFF";
  className?: string;
  style?: MotionStyle;
  animateOnHover?: boolean;
  variants?: Variants;
}
export default function NavigateSVG({
  fill = "#D1CCBF",
  className,
  style,
  animateOnHover = false,
  variants = {
    initial: { fill },
    whileHover: {
      fill: "#2b3530",
    },
  },
}: NavigateSVGProps) {
  return (
    <motion.svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      style={{ ...style }}
      variants={animateOnHover ? variants : undefined}
    >
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        initial={{ fill }}
        d="M11.9966 8.5308C11.9966 8.84819 11.7334 9.11139 11.416 9.11139C11.0986 9.11139 10.8354 8.84819 10.8354 8.5308V1.98239L0.989067 11.8287C0.872949 11.9448 0.725867 11.999 0.578784 11.999C0.431702 11.999 0.284619 11.9448 0.168502 11.8287C-0.0559931 11.6042 -0.0559931 11.2326 0.168502 11.0082L10.0155 1.16118H3.46578C3.14839 1.16118 2.88519 0.897979 2.88519 0.58059C2.88519 0.263201 3.14839 0 3.46578 0H11.416C11.5014 0 11.5828 0.0190504 11.6563 0.0530812C11.7183 0.0808598 11.7763 0.119992 11.8267 0.170477C11.8841 0.227843 11.9268 0.294813 11.9549 0.366478C11.9817 0.432929 11.9966 0.505232 11.9966 0.58059V8.5308Z"
      />
    </motion.svg>
  );
}
