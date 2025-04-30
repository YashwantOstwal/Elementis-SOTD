import React from "react";
import * as motion from "motion/react-client";
const Br = () => (
  <svg
    className="absolute inset-x-0 top-0"
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <motion.path
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 0.4,
        delay: 0.2,
        ease: [0.24, 0.43, 0.15, 0.97],
      }}
      d="M0 0H100"
      stroke="#ffffff75"
      strokeWidth="2px"
    />
  </svg>
);

export default Br;
