"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { Dispatch, SetStateAction, useRef } from "react";
import useBackgroundImage from "@/dump/useBackgroundImage";
import PlaySVG from "@/components/SVGComponents/PlaySVG";
import { useCursor } from "@/hooks/useCursor";
import Cursor from "@/components/Client/Cursor";
import useMaskImage from "@/hooks/useMaskImage";

interface HeroDesktopClientProps {
  setPlayIntro: Dispatch<SetStateAction<boolean>>;
}
export default function HeroDesktopClient({
  setPlayIntro,
}: HeroDesktopClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "50vh start"],
  });
  const maskImage = useMaskImage(scrollYProgress, false, {
    divisions: 24,
    inset: 0.15,
    gap: 0.3,
    vh: 100,
  });
  const { handlers, cursorProps } = useCursor();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  return (
    <>
      <div className="absolute inset-0 overflow-clip" ref={containerRef}>
        <motion.div style={{ y, maskImage }} className="h-full">
          <video className="size-full object-cover" autoPlay muted loop>
            <source src="/Hero/elementismp4.mp4" type="video/mp4"></source>
          </video>
        </motion.div>
        <motion.div
          className="absolute inset-x-0 top-0 flex h-screen cursor-pointer flex-col justify-end gap-8"
          // style={{ backgroundImage }}
          {...handlers}
          onClick={() => {
            handlers.onMouseLeave(); //will exit the cursor
            setPlayIntro((prev) => !prev);
          }}
        />
      </div>
      <Cursor
        {...cursorProps}
        className="-translate-x-1/2 -translate-y-1/2 rounded-full p-6"
      >
        <PlaySVG />
      </Cursor>
    </>
  );
}
