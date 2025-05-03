"use client";

import { useIsMobile } from "@/app/providers";
import { ReactNode } from "react";
import ParallaxContainer from "@/components/Client/ParallaxContainer";
interface ResponsiveImageProps {
  children: ReactNode;
  parallaxAmount: number;
}
export default function ResponsiveImage({
  children,
  parallaxAmount,
}: ResponsiveImageProps) {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        children
      ) : (
        <ParallaxContainer parallaxAmount={parallaxAmount}>
          {children}
        </ParallaxContainer>
      )}
    </>
  );
}
