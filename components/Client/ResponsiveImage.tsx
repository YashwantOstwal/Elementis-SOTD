"use client";

import { useIsMobile } from "@/app/providers";
import { ReactNode } from "react";
import FinalParallax from "./FinalParallax";

export default function ResponsiveImage({
  children,
  parallaxAmount,
}: {
  children: ReactNode;
  parallaxAmount: number;
}) {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        children
      ) : (
        <FinalParallax parallaxAmount={parallaxAmount}>
          {children}
        </FinalParallax>
      )}
    </>
  );
}
