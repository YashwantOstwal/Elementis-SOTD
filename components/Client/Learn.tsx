"use client";
import React, { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Image1 from "@/public/ImageContainer/image-1.png";
import Image2 from "@/public/ImageContainer/image-2.png";
import Image3 from "@/public/ImageContainer/image-3.png";
import Image4 from "@/public/ImageContainer/image-4.png";
import Image5 from "@/public/ImageContainer/image-5.png";
import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import ClipImageCard from "./ClipImageCard";
import useMaskImage from "@/hooks/useMaskImage";
import CustomCursor from "./Cursor";
import { useCursor } from "@/hooks/useCursor";
import NavigateSVG from "@/components/SVGComponents/NavigateSVG";
import { useRouter } from "next/navigation";
import { cubicBezier } from "motion";
import { useIsMobile } from "@/app/providers";
export default function Learn() {
  const isMobile = useIsMobile();
  const router = useRouter();
  const [state, setState] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { handlers, cursorProps } = useCursor();

  const { scrollYProgress: parentProgress } = useScroll({
    target: ref,
    offset: ["15vh 0", "485vh end"],
  });
  useMotionValueEvent(parentProgress, "change", (latest) => {
    if (latest <= 0.25) {
      setState(0);
    } else if (latest <= 0.5) {
      setState(1);
    } else if (latest <= 0.75) {
      setState(2);
    } else if (latest <= 1) {
      setState(3);
    }
  });
  const imgs = [Image1, Image2, Image3, Image4, Image5];
  return (
    <div
      className="relative h-[500vh] cursor-pointer overflow-clip bg-[#2b3530]"
      ref={ref}
    >
      <motion.div
        {...handlers}
        onClick={() => router.replace("https://elementis.co/innovation")}
        className="sticky -top-[5vh] h-[110vh] md:-top-[15vh] md:h-[130vh]"
      >
        <ClipImageCard
          scrollYProgress={parentProgress}
          images={imgs}
          className="relative z-10"
        />
        {Array.from({ length: 2 }, (_, i) => state + i)
          .filter((elementIndex) => elementIndex < imgs.length)
          .map((validElementIndex, i) => {
            // if (validElementIndex == 0) {
            //   return (
            //     <ParallaxCard
            //       scrollYProgress={parentProgress}
            //       index={validElementIndex}
            //     >
            //       {imgs[validElementIndex]}
            //     </ParallaxCard>
            //   );
            // } else if (validElementIndex === imgs.length - 1) {
            //   return (
            //     <ParallaxCard2
            //       scrollYProgress={parentProgress}
            //       index={validElementIndex}
            //     >
            //       {imgs[validElementIndex]}
            //     </ParallaxCard2>
            //   );
            // } else {
            return (
              <Card
                key={"card-" + (i + 1)}
                isMobile={isMobile}
                scrollYProgress={parentProgress}
                index={validElementIndex}
              >
                {imgs[validElementIndex]}
              </Card>
            );
            // }
          })}
      </motion.div>
      <CustomCursor
        {...cursorProps}
        className="flex -translate-x-1/2 translate-y-1/4 items-center justify-center gap-2 rounded-full px-5 py-2 text-white"
      >
        Discover More
        <NavigateSVG style={{ fill: "white" }} className="size-2.5" />
      </CustomCursor>
    </div>
  );
}

const Card = ({
  scrollYProgress,
  index,
  children,
  isMobile,
}: {
  scrollYProgress: MotionValue<number>;
  index: number;
  children: StaticImageData;
  isMobile: boolean | null;
}) => {
  const localScrollYProgress = useTransform(
    scrollYProgress,
    [index * 0.25, (index + 1) * 0.25],
    [0, 1],
    {
      ease: cubicBezier(0, 0, 1, 1),
    },
  );
  const maskImage = useMaskImage(localScrollYProgress, isMobile);
  const scaleProgress = useTransform(
    scrollYProgress,
    [(index - 1) * 0.25, (index + 1) * 0.25],
    [1.075, 1],
  );
  return (
    <motion.div
      className="absolute inset-0 grid place-items-center text-white"
      style={{ zIndex: -index, maskImage, scale: scaleProgress }}
    >
      <Image
        src={children}
        alt={`image-${index + 1}`}
        className="h-full w-full origin-bottom object-cover"
      />
    </motion.div>
  );
};
// const ParallaxCard = ({
//   scrollYProgress,
//   index,
//   children,
// }: {
//   scrollYProgress: MotionValue<number>;
//   index: number;
//   children: StaticImageData;
// }) => {
//   const ref = useRef(null);
//   const { scrollYProgress: scrollYProgress2 } = useScroll({
//     target: ref,
//     offset: ["start end", "start start"],
//   });
//   const y = useTransform(scrollYProgress2, [0, 1], ["-20%", "0%"], {
//     ease: cubicBezier(0.65, 0, 0.35, 1),
//   });
//   const springifyY = useSpring(y, { mass: 1, damping: 40, stiffness: 500 });
//   const localScrollYProgress = useTransform(
//     scrollYProgress,
//     [index * 0.25, (index + 1) * 0.25],
//     [0, 1],
//   );
//   const scaleProgress = useTransform(
//     scrollYProgress,
//     [(index - 1) * 0.25, (index + 1) * 0.25],
//     [1.1, 1],
//   );
//   const maskImage = useMaskImage(localScrollYProgress, "mobil"); //change the inset

//   return (
//     <motion.div
//       className="absolute inset-0 overflow-hidden"
//       style={{ zIndex: -index }}
//       ref={ref}
//     >
//       <motion.div
//         style={{
//           maskImage,
//           // y: y,
//           scale: scaleProgress,
//           backgroundImage: `url(${children.src})`,
//         }}
//       >
//         <Image
//           src={children}
//           alt={`image-${index + 1}`}
//           className="origin-bottom"
//         />
//       </motion.div>
//     </motion.div>
//   );
// };
// const ParallaxCard2 = ({
//   scrollYProgress,
//   index,
//   children,
// }: {
//   scrollYProgress: MotionValue<number>;
//   index: number;
//   children: StaticImageData;
// }) => {
//   const ref = useRef(null);
//   const { scrollYProgress: scrollYProgress2 } = useScroll({
//     target: ref,
//     offset: ["end end", "end start"],
//   });
//   const y = useTransform(scrollYProgress2, [0, 1], ["0%", "15%"]);
//   const springifyY = useSpring(y, { mass: 1, damping: 40, stiffness: 477 });
//   const localScrollYProgress = useTransform(
//     scrollYProgress,
//     [index * 0.25, (index + 1) * 0.25],
//     [0, 1],
//   );
//   const scaleProgress = useTransform(
//     scrollYProgress,
//     [(index - 1) * 0.25, (index + 1) * 0.25],
//     [1.1, 1],
//   );
//   const maskImage = useMaskImage(localScrollYProgress); //change the inset
//   return (
//     <motion.div
//       className="absolute inset-0 overflow-hidden"
//       style={{ zIndex: -index }}
//       ref={ref}
//     >
//       <motion.div
//         style={{
//           maskImage,
//           //  y: y,
//           scale: scaleProgress,
//         }}
//       >
//         <Image
//           src={children}
//           alt={`image-${index + 1}`}
//           className="origin-bottom"
//         />
//       </motion.div>
//     </motion.div>
//   );
// };
