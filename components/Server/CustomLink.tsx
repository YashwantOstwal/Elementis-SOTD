import * as motion from "motion/react-client";
import NavigateSVG from "../SVGComponents/NavigateSVG";
import { MotionConfig } from "motion/react";
import Link from "next/link";
interface CustomLinkProps {
  children: string;
  href: string;
  sNo: number;
  handleFocus: (newFocus: number, directionalSensitive: boolean) => void;
  initialDelay: number;
  delay: number;
  duration: number;
}
export default function CustomLink({
  children,
  href,
  sNo,
  initialDelay,
  delay,
  duration,
  handleFocus,
}: CustomLinkProps) {
  return (
    <Link href={href}>
      <MotionConfig
        transition={{
          ease: [0.24, 0.43, 0.15, 0.97],
        }}
      >
        <motion.div
          initial="initial"
          whileHover="whileHover"
          animate="animate"
          className="flex cursor-pointer py-2 text-3000svh font-light text-[#2b3530]"
          variants={{
            whileHover: { gap: "var(--spacing-5)" },
            initial: { gap: "0px", y: "60%", opacity: 0 },
            animate: {
              y: "0%",
              opacity: 1,
              transition: {
                duration,
                delay: initialDelay + ((sNo - 1) % 5) * delay,
              },
            },
          }}
          onMouseEnter={() => handleFocus(sNo, false)}
        >
          <NavigateSVG
            className="mr-0 size-4 origin-bottom-left [&_path]:[fill:#2b3530]"
            variants={{
              whileHover: { scale: 1 },
              initial: { scale: 0 },
            }}
            animateOnHover={true}
          />
          <motion.div
            className="[line-height:1]"
            variants={{
              whileHover: { x: "0px" },
              initial: { x: "calc(-1 * var(--spacing-4))" },
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      </MotionConfig>
    </Link>
  );
}
