"use client";
import { motion, MotionValue, useMotionValueEvent } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { CSSProperties, ReactNode, useState } from "react";
import AnimatedMaskText from "@/components/Client/MaskTextClient";
import ClipImageContainer from "@/components/Client/ClipImageContainer";
import SectionTitle from "../Server/SectionTitle";
import cn from "@/utils/cn";
interface ClipImageCardProps {
  scrollYProgress: MotionValue<number>;
  images: StaticImageData[];
  className?: string;
  style?: CSSProperties;
}

interface DataItem {
  title: ReactNode[];
  description: {
    mobile: ReactNode[];
    desktop: ReactNode[];
  };
}

export default function ClipImageCard({
  scrollYProgress,
  images,
  className,
  style,
}: ClipImageCardProps) {
  const [currentState, setCurrentState] = useState(1);
  const data: DataItem[] = [
    {
      title: [<>ELEMENTIS</>, <>Innovation Culture</>],
      description: {
        mobile: [
          <>We foster a culture of Innovation that </>,
          <>enriches lives through transformative</>,
          <>solutions and innovative ideas that</>,
          <>resonate with our global Community.</>,
        ],
        desktop: [
          <>We foster a culture of Innovation that enriches</>,
          <>lives through transformative solutions and</>,
          <>innovative ideas that resonate with our global</>,
          <>Community.</>,
        ],
      },
    },
    {
      title: [<>Exceptional Wood</>, <>Construction</>],
      description: {
        mobile: [
          <>Our high-quality glue laminated timber</>,
          <>revolutionizes tropical climate</>,
          <>construction byseamlessly combining</>,
          <>natural elegance, unparalleled durability,</>,
          <>and environmental responsibility.</>,
        ],
        desktop: [
          <>Our high-quality glue laminated timber</>,
          <>revolutionizes tropical climate construction by</>,
          <>seamlessly combining natural elegance,</>,
          <>unparalleled durability, and environmental</>,
          <>responsibility.</>,
        ],
      },
    },
    {
      title: [<>Innovative Glass</>, <>Solutions</>],
      description: {
        mobile: [
          <>The innovative Low-E solar control glass</>,
          <>stands out for its unparalleled ability to</>,
          <>blend energy efficiency, enhanced</>,
          <>comfort, and breathtaking aesthetic</>,
          <>appeal.</>,
        ],
        desktop: [
          <>The innovative Low-E solar control glass stands</>,
          <>out for its unparalleled ability to blend energy</>,
          <>efficiency, enhanced comfort, and breathtaking</>,
          <>aesthetic appeal.</>,
        ],
      },
    },
    {
      title: [<>World First Climate</>, <>Control</>],
      description: {
        mobile: [
          <>We pioneer an innovative climate</>,
          <>control system that outperforms any</>,
          <>other option, ending the battle with</>,
          <>moid for an infinitely healthier</>,
          <>experience. When combined with our</>,
          <>solar energy system it provides a</>,
          <>world-first sustainable solution.</>,
        ],
        desktop: [
          <>We pioneer an innovative climate control</>,
          <>system that outperforms any other option,</>,
          <>ending the battle with moid for an infinitely </>,
          <>healthier experience. When combined with our</>,
          <>solar energy system it provides a world-first</>,
          <>sustainable solution.</>,
        ],
      },
    },
    {
      title: [<>State-of-the-Art</>, <>Design</>],
      description: {
        mobile: [
          <>By blending natural elements,panoramic</>,
          <>views, tactile textures, luxury touches,</>,
          <>and sustainable design principles, we</>,
          <>create a memorable and inviting hotel</>,
          <>interior that reflects ELEMENTIS</>,
          <>modern, wooden eco concept.</>,
        ],
        desktop: [
          <>By blending natural elements,panoramic views,</>,
          <>tactile textures, luxury touches, and sustainable</>,
          <>design principles, we create a memorable and</>,
          <>inviting hotel interior that reflects ELEMENTIS</>,
          <>modern, wooden eco concept.</>,
        ],
      },
    },
  ];

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.125) {
      setCurrentState(1);
    } else if (latest <= 0.375) {
      setCurrentState(2);
    } else if (latest <= 0.625) {
      setCurrentState(3);
    } else if (latest <= 0.875) {
      setCurrentState(4);
    } else {
      setCurrentState(5);
    }
  });
  const prependZero = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  return (
    <motion.div
      initial="initial"
      whileInView="inView"
      viewport={{ amount: 0.5, once: true }}
      style={{ ...style }}
      className={cn(
        "relative z-10 flex h-full flex-col items-center justify-between py-[8vh] text-[#d1ccbf] backdrop-brightness-[60%] md:flex-row md:px-16 md:py-[15vh]",
        className,
      )}
    >
      <SectionTitle className="">Innovation</SectionTitle>
      <motion.div
        variants={{
          initial: { y: "50%" },
          inView: { y: "0%" },
        }}
        transition={{
          ease: [0.24, 0.43, 0.15, 0.97],
          duration: 0.8,
        }}
        className="relative z-20 my-[5vh] flex h-[70vh] min-h-fit w-[90%] flex-col items-center gap-8 bg-[#D1CCBF] p-5-75 text-[#2B3530] md:h-full md:max-h-172 md:w-full md:max-w-118 md:px-8 md:py-4"
      >
        <div className="flex items-center gap-1 text-2xs md:text-sm">
          <AnimatedMaskText
            state={currentState}
            lines={[<>{prependZero(currentState)}</>]}
            className="[line-height:1]"
          />
          <span className="opacity-60">-</span>
          <span className="opacity-60">{prependZero(images.length)}</span>
        </div>
        <AnimatedMaskText
          state={currentState}
          lines={data[currentState - 1].title}
          className="text-18 -space-y-1 text-center text-lg [line-height:1] font-light md:text-28"
        />

        <div className="relative aspect-[1.62] w-full overflow-hidden md:aspect-[1.85]">
          {images.map((eachImage: StaticImageData, index: number) => (
            <ClipImageContainer
              key={"card-image-container-" + (index + 1)}
              index={index}
              scrollYProgress={scrollYProgress}
            >
              <Image
                src={eachImage}
                alt={"card-image-" + (index + 1)}
                className="size-full object-cover"
              />
            </ClipImageContainer>
          ))}
        </div>
        <AnimatedMaskText
          state={currentState}
          lines={data[currentState - 1].description["desktop"]} //change this
          className="text-center text-base [line-height:1.25] md:text-base"
        />
      </motion.div>
      <span className="text-base [line-height:1] md:text-xl">
        ( Keep Scrolling ){" "}
      </span>
    </motion.div>
  );
}
