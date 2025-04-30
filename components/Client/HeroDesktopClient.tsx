"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { Dispatch, SetStateAction, useRef } from "react";
import useBackgroundImage from "@/utils/hooks/useBackgroundImage";
import PlaySVG from "@/components/SVGComponents/PlaySVG";
import useCustomCursor from "@/utils/hooks/useCustomCursor";
import CustomCursor2 from "@/components/Client/CustomCursor2";
export default function HeroClient({
  setPlayIntro,
}: {
  setPlayIntro: Dispatch<SetStateAction<boolean>>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "50vh start"],
  });
  const backgroundImage = useBackgroundImage(
    scrollYProgress,
    24,
    0.15,
    0.3,
    100,
  );
  const { handlers, cursorProps } = useCustomCursor();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  return (
    <>
      <div className="absolute inset-0 overflow-clip" ref={containerRef}>
        <motion.div style={{ y }} className="h-full">
          <video className="size-full object-cover" autoPlay muted loop>
            <source src="/Hero/elementismp4.mp4" type="video/mp4"></source>
          </video>
        </motion.div>
        <motion.div
          className="absolute inset-x-0 top-0 flex h-screen cursor-pointer flex-col justify-end gap-8"
          style={{ backgroundImage }}
          {...handlers}
          onClick={() => {
            handlers.onMouseLeave(); //will exit the cursor
            setPlayIntro((prev) => !prev);
          }}
        />
      </div>
      <CustomCursor2
        {...cursorProps}
        className="-translate-x-1/2 -translate-y-1/2 rounded-full p-6"
      >
        <PlaySVG />
      </CustomCursor2>
    </>
  );
}
