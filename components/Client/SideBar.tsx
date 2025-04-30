"use client";

import { Dispatch, SetStateAction } from "react";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import CustomLink from "../Server/CustomLink";
import DashedLink from "../Server/DashedLink";
import CrossIcon from "../SVGComponents/CrossIcon";
import Home from "@/public/SideBar/home.png";
import Destinations from "@/public/SideBar/destination.png";
import Wellness from "@/public/SideBar/wellness.png";
import Innovation from "@/public/SideBar/innovation.png";
import Nature from "@/public/SideBar/nature.png";
import Community from "@/public/SideBar/community.png";
import TheStory from "@/public/SideBar/the-story.png";
import NewDevelopments from "@/public/SideBar/new-developments.png";
import PressRoom from "@/public/SideBar/press-room.png";
import Careers from "@/public/SideBar/careers.png";
import useHomework1 from "@/utils/hooks/useHomework1";
import StayConnected from "../Server/StayConnected";
import Link from "next/link";

interface LinkItem {
  href: string;
  link: string;
  src: StaticImageData;
}

interface SideBarProps {
  setOpenSideBar: Dispatch<SetStateAction<boolean>>;
}
export default function SideBar({ setOpenSideBar }: SideBarProps) {
  const { imgContainerRef, handleFocus } = useHomework1();
  const data: LinkItem[] = [
    { href: "https://elementis.co/", link: "Home", src: Home },
    {
      href: "https://elementis.co/destinations",
      link: "Destinations",
      src: Destinations,
    },
    { href: "https://elementis.co/wellness", link: "Wellness", src: Wellness },
    {
      href: "https://elementis.co/innovation",
      link: "Innovation",
      src: Innovation,
    },
    {
      href: "https://elementis.co/sustainability",
      link: "Nature",
      src: Nature,
    },
    {
      href: "https://elementis.co/community",
      link: "Community",
      src: Community,
    },
    {
      href: "https://elementis.co/the-story",
      link: "The Story",
      src: TheStory,
    },
    {
      href: "https://elementis.co/new-developments",
      link: "New Developments",
      src: NewDevelopments,
    },
    { href: "https://elementis.co/press", link: "Press Room", src: PressRoom },
    { href: "https://elementis.co/careers", link: "Careers", src: Careers },
  ];

  const temp = {
    initialDelay: 0.8 * 0.4,
    delay: 0.05,
    duration: 0.5,
  };

  const variants = {
    initial: {
      y: "60%",
      opacity: 0,
    },
    animate: {
      y: "0%",
      opacity: 1,
    },
  };
  return (
    <motion.div
      key="Side-bar"
      initial={{ backgroundColor: "rgba(0,0,0,0)" }}
      animate={{
        backgroundColor: "rgba(0,0,0,0.35)",
        transition: {
          duration: 0.8,
          ease: [0.24, 0.43, 0.15, 0.97],
        },
      }}
      exit={{
        clipPath: "inset(0% 0% 100% 0%)",
        transition: {
          delay: 0.1,
          duration: 0.8,
          ease: [0.24, 0.43, 0.15, 0.97],
        },
      }}
      className="fixed top-0 z-[200] w-full"
    >
      <motion.div
        className="flex h-screen bg-[#CED1BF]"
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{
          duration: 0.8,
          ease: [0.24, 0.43, 0.15, 0.97],
        }}
      >
        <motion.div
          initial={{
            clipPath: "inset(100% 0% 0% 0%)",
          }}
          animate={{
            clipPath: "inset(0% 0% 0% 0%)",
            transition: {
              delay: 0.1,
              ease: [0.24, 0.43, 0.15, 0.97],
              duration: 0.8,
            },
          }}
          exit={{
            clipPath: "inset(0% 0% 100% 0%)",
            transition: {
              ease: [0.24, 0.43, 0.15, 0.97],
              duration: 0.8,
            },
          }}
          className="relative flex-[0.9] bg-black"
          ref={imgContainerRef}
        >
          {data.map(({ src, link }, i) => (
            <motion.div
              key={link}
              data-index={i}
              style={{ zIndex: -i }}
              className="absolute inset-0"
            >
              <Image src={src} alt={link} fill style={{ objectFit: "cover" }} />
            </motion.div>
          ))}
        </motion.div>
        <div className="flex-1 pt-7000svh pr-16 pb-3500svh pl-48">
          <span className="text-1800svh text-[#2b3530]/80">Discover pages</span>
          <nav
            aria-label="pages"
            className="mt-6400svh mb-8000svh grid grid-flow-col-dense grid-cols-2 grid-rows-5"
          >
            {data.map((eachColData, i) =>
              i === 0 ? (
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={variants}
                  transition={{
                    duration: temp.duration,
                    delay: temp.initialDelay + (i % 5) * temp.delay,
                    ease: [0.24, 0.43, 0.15, 0.97],
                  }}
                  key={"link-" + (i + 1)}
                  className="cursor-default py-2 text-3000svh [line-height:120%] font-light text-[#2b3530] underline"
                >
                  {eachColData.link}
                </motion.div>
              ) : (
                <CustomLink
                  {...temp}
                  key={"link-" + (i + 1)}
                  href={eachColData.href}
                  sNo={i + 1}
                  handleFocus={handleFocus}
                >
                  {eachColData.link}
                </CustomLink>
              ),
            )}
          </nav>
          <motion.div
            className="space-y-5600svh"
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  delayChildren: temp.initialDelay + 5 * temp.delay,
                  staggerChildren: temp.delay,
                  duration: temp.duration,
                },
              },
            }}
          >
            <motion.div
              variants={variants}
              transition={{
                duration: temp.duration,
                ease: [0.24, 0.43, 0.15, 0.97],
              }}
              id="contact-us"
              className="space-y-2400svh text-1800svh text-[#2b3530]"
            >
              <div className="text-[#2b3530]/80">Contact Us</div>
              <div className="flex items-center [&_.animated-underline]:h-[2px] [&_.animated-underline]:bg-[#2b3530]">
                <DashedLink>info@ELEMENTIS.co</DashedLink>
                <div className="mx-5">|</div>
                <DashedLink>+62 823 4078 1817</DashedLink>
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              transition={{
                duration: temp.duration,
                ease: [0.24, 0.43, 0.15, 0.97],
              }}
            >
              <StayConnected
                style={{
                  fontSize: "var(--text-1800svh)",
                }}
                className="gap-y-2400svh text-1800svh text-[#2b3530]/80 [&_div]:gap-x-10 [&_svg]:h-2400svh [&_svg]:w-auto [&>:first-child]:text-[#2b3530]/80"
              />
            </motion.div>
            <motion.div
              variants={variants}
              transition={{
                duration: temp.duration,
                ease: [0.24, 0.43, 0.15, 0.97],
              }}
              className="text-1600svh"
            >
              <Link href="https://elementis.co/privacy-terms">
                <DashedLink className="w-fit text-[#2b3530] [&_.animated-underline]:h-[2px] [&_.animated-underline]:bg-[#2b3530]">
                  Policy and Terms
                </DashedLink>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <motion.button
          initial="initial"
          whileHover="whileHover"
          className="absolute top-8 right-16 cursor-pointer"
          // p-2000svh
          onClick={() => setOpenSideBar((prev) => !prev)}
        >
          <CrossIcon className="size-7 [&_path]:[stroke-width:1px]" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
