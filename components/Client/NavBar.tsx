"use client";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import LogoFull from "@/components/SVGComponents/LogoFull";
import DashedLink from "@/components/Server/DashedLink";
import BorderedButton from "../Server/BorderedButton";
import NavigateSVG from "../SVGComponents/NavigateSVG";
import AnimatedBurger from "../SVGComponents/AnimatedBurger";
import { useState } from "react";
import cn from "@/utils/cn";
import SideBar from "./SideBar";
import Link from "next/link";
import { useIsMobile } from "@/app/providers";
export default function NavBar() {
  const isMobile = useIsMobile();
  const [openSideBar, setOpenSideBar] = useState(false);
  const [state, setState] = useState(false);
  const [y, setY] = useState("0%");
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrollValue = latest / window.innerHeight;
    setState(scrollValue > 0.5);
    if (scrollValue > 0.65) {
      if ((scrollY.getPrevious() as number) < latest) {
        setY("-100%");
      } else {
        setY("0%");
      }
    }
  });
  const navItems = [
    {
      href: "https://elementis.co/destinations",
      children: "Destinations",
    },
    {
      href: "https://elementis.co/wellness",
      children: "Wellness",
    },
    {
      href: "https://elementis.co/innovation",
      children: "Innovation",
    },
    {
      href: "https://elementis.co/sustainability",
      children: "Nature",
    },
    {
      href: "https://elementis.co/community",
      children: "Community",
    },
    {
      href: "https://elementis.co/the-story",
      children: "The Story",
    },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 z-[50] flex w-full items-center justify-between px-5 py-10 md:px-8-25 md:px-16"
        initial="initial"
        animate={state ? "animate" : "initial"}
        transition={{
          default: {
            ease: [0.24, 0.43, 0.15, 0.97],
            duration: 0.6,
          },
          y: {
            ease: [0.24, 0.43, 0.15, 0.97],
            duration: 0.8,
          },
        }}
        variants={{
          initial: {
            paddingBlock: isMobile
              ? "calc(40 * var(--multiplier))"
              : "calc(33 * var(--multiplier))",
            backgroundColor: "rgba(206, 209, 191,0)",
            y,
          },
          animate: {
            paddingBlock: isMobile
              ? "calc(18 * var(--multiplier))"
              : "calc(8 * var(--multiplier))",
            backgroundColor: "rgba(206, 209, 191,1)",
            y,
          },
        }}
      >
        <LogoFull
          className="h-auto w-full max-w-38 origin-left md:max-w-53-75"
          variants={{
            initial: { fill: "#FFFFFF" },
            animate: { fill: "#2B3530" },
          }}
        />
        <nav aria-label="navigation" className="hidden gap-6 md:flex">
          {navItems.map((eachItem) => (
            <Link href={eachItem.href} key={eachItem.children}>
              <DashedLink
                className={cn(
                  "text-base font-normal",
                  state
                    ? "[&>.animated-underline]:bg-[#2b3530]"
                    : "[&>.animated-underline]:bg-white",
                )}
                variants={{
                  animate: { color: "#2b3530" },
                  initial: { color: "#ffffff" },
                }}
              >
                {eachItem.children}
              </DashedLink>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-8">
          <BorderedButton
            className={cn(
              "relative hidden w-fit cursor-pointer items-center gap-4 px-5 py-4.5 text-base [line-height:0.8] font-normal md:flex",
              state
                ? "text-[#2b3530] [&_svg]:[stroke:#2b3530]"
                : "text-white [&_svg]:[stroke:white]",
            )}
          >
            Join Us
            <NavigateSVG
              style={{ fill: state ? "#ffffff" : "#2b3530" }}
              className="mr-2.5 size-2.5"
            />
          </BorderedButton>
          <motion.button
            initial="initial"
            whileHover="whileHover"
            onClick={() => setOpenSideBar((prev) => !prev)}
            className="cursor-pointer p-2"
          >
            <AnimatedBurger
              className={cn(state ? "[stroke:#2b3530]" : "[stroke:white]")}
            />
          </motion.button>
        </div>
      </motion.div>
      <AnimatePresence>
        {openSideBar && <SideBar setOpenSideBar={setOpenSideBar} />}
      </AnimatePresence>
    </>
  );
}
