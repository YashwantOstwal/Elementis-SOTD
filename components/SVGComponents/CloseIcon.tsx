import * as motion from "motion/react-client";
export default function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={className}
    >
      <motion.path
        style={{
          strokeDasharray: `16.98 10`, //Math.sqrt(2) * 12
        }}
        variants={{
          initial: {
            strokeDashoffset: 0,
          },
          whileHover: {
            strokeDashoffset: -1 * (16.98 + 10),
          },
        }}
        transition={{
          ease: [0.24, 0.43, 0.15, 0.97],
          duration: 0.8,
        }}
        d="M13 1L1 13"
        stroke="#2b3530"
        fill="none"
      ></motion.path>
      <motion.path
        style={{
          strokeDasharray: `16.98 10`, //Math.sqrt(2) * 12
        }}
        variants={{
          initial: {
            strokeDashoffset: 0,
          },
          whileHover: {
            strokeDashoffset: -1 * (16.98 + 10),
          },
        }}
        transition={{
          ease: [0.24, 0.43, 0.15, 0.97],
          duration: 0.8,
          delay: 0.15,
        }}
        d="M1 1L13 13"
        stroke="#2b3530"
        fill="none"
      ></motion.path>
    </svg>
  );
}
