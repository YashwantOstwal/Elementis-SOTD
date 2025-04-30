import * as motion from "motion/react-client";
import cn from "@/utils/cn";

interface FullScreenIconProps {
  className?: string;
}
export default function FullScreenIcon({ className }: FullScreenIconProps) {
  return (
    <motion.svg
      className={cn("", className)}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ scale: 1.2 }}
      transition={{ ease: [0.24, 0.43, 0.15, 0.97] }}
    >
      <path
        d="M8.57031 0.857178H9.48868C10.4034 0.857178 11.1417 1.59555 11.1417 2.51024V3.42861"
        stroke="#FFFFFF"
        strokeWidth="1.5px"
        strokeLinecap="square"
        fill="none"
      ></path>
      <path
        d="M8.57031 11.1428H9.48868C10.4034 11.1428 11.1417 10.4045 11.1417 9.48976V8.57139"
        stroke="#FFFFFF"
        strokeWidth="1.5px"
        strokeLinecap="square"
        fill="none"
      ></path>
      <path
        d="M3.42969 0.857178H2.51132C1.59663 0.857178 0.858259 1.59555 0.858259 2.51024V3.42861"
        stroke="#FFFFFF"
        strokeWidth="1.5px"
        strokeLinecap="square"
        fill="none"
      ></path>
      <path
        d="M3.42969 11.1428H2.51132C1.59663 11.1428 0.858259 10.4045 0.858259 9.48976V8.57139"
        stroke="#FFFFFF"
        strokeWidth="1.5px"
        strokeLinecap="square"
        fill="none"
      ></path>
    </motion.svg>
  );
}
