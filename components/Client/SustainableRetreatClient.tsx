"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import StyledLinkClient from "@/components/Client/StyledLinkClient";
import Image1 from "@/public/group/discover-elementis.png";
import Image2 from "@/public/group/our-vision-and-mission.png";
import Image3 from "@/public/group/our-commitment.png";
import Image4 from "@/public/group/our-pillars.png";
import Image5 from "@/public/group/sustainability.png";
import { useImageReveal } from "@/hooks/useImageReveal";
interface LinkType {
  title: string;
  href: string;
  img: StaticImageData;
}
export default function SustainableRetreatClient() {
  const { imgContainerRef, handleFocus } = useImageReveal();
  const links: LinkType[] = [
    {
      title: "ELEMENTIS Story",
      href: "https://elementis.co/the-story",
      img: Image1,
    },
    {
      title: "Our Vision & Mission",
      href: "https://elementis.co/sustainability#mission-vision",
      img: Image2,
    },
    {
      title: "Our Commitment",
      href: "https://elementis.co/sustainability#our-comitment",
      img: Image3,
    },
    {
      title: "Our Pillars",
      href: "https://elementis.co/sustainability#our-pillars",
      img: Image4,
    },
    {
      title: "Sustainability",
      href: "https://elementis.co/sustainability",
      img: Image5,
    },
  ];

  return (
    <>
      <div ref={imgContainerRef} className="relative overflow-hidden md:w-fit">
        <Image
          src={links[links.length - 1].img}
          alt="placeholder"
          aria-hidden={true}
          className="invisible w-full max-md:aspect-[0.82] md:h-full md:w-auto"
        />
        {links.map((eachLink, i) => (
          <motion.div
            key={`image-${i + 1}`}
            data-index={i}
            className="absolute inset-0"
            style={{ zIndex: -i }}
          >
            <Image
              src={eachLink.img}
              alt={eachLink.title}
              className="size-full object-cover md:w-auto"
            />
          </motion.div>
        ))}
      </div>
      <div className="-mx-8-25 grid grid-rows-5 divide-y divide-[#D1CCBF] border-y border-[#D1CCBF] md:col-span-2 md:col-start-2 md:row-start-2 md:mx-0">
        {links.map((eachLink, index) => (
          <StyledLinkClient
            handleFocus={handleFocus}
            sNo={index + 1}
            href={eachLink.href}
            key={`link-${index + 1}`}
          >
            {eachLink.title}
          </StyledLinkClient>
        ))}
      </div>
    </>
  );
}
