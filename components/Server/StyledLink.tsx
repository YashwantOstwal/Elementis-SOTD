import Link, { LinkProps } from "next/link";
import * as motion from "motion/react-client";
import { CSSProperties } from "react";
import NavigateSVG from "@/components/SVGComponents/NavigateSVG";
import { MotionConfig } from "motion/react";
interface StyledLinkProps extends LinkProps {
  children: string;
  className?: string;
  style?: CSSProperties;
}
export default function StyledLink(props: StyledLinkProps) {
  const { children, ...restProps } = props;
  return (
    <Link {...restProps}>
      <motion.div
        initial="initial"
        whileHover="whileHover"
        className="relative flex w-full cursor-pointer items-center justify-between overflow-hidden py-4 pr-4 text-lg [line-height:1.1] md:py-2-5 md:text-xl"
      >
        <span>{children}</span>
        <NavigateSVG style={{ fill: "#d1ccbf" }} />
        <MotionConfig
          transition={{
            duration: 0.4,
            ease: "circInOut",
          }}
        >
          <div className="absolute inset-x-0 bottom-0 h-px bg-[#d0cbbe80]" />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-px bg-[#d0cbbe]"
            variants={{
              initial: {
                x: "100%",
              },
              whileHover: {
                x: ["-100%", "0%"],
              },
            }}
          />
        </MotionConfig>
      </motion.div>
    </Link>
  );
}
