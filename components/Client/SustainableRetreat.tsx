"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import StyledLink2 from "@/components/Client/StyledLink2";
import Image1 from "@/public/group/discover-elementis.png";
import Image2 from "@/public/group/our-vision-and-mission.png";
import Image3 from "@/public/group/our-commitment.png";
import Image4 from "@/public/group/our-pillars.png";
import Image5 from "@/public/group/sustainability.png";
import ResponsiveMaskTextVariant from "@/components/Client/ResponsiveMaskTextVariant";
import useHomework1 from "@/utils/hooks/useHomework1";
import ResponsiveMarquee from "@/components/Client/ResponsiveMarquee";
interface LinkType {
  title: string;
  href: string;
  img: StaticImageData;
}
export default function SustainableRetreat() {
  const { imgContainerRef, handleFocus } = useHomework1();

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
    <div className="bg-[#30493D] py-36 text-[#D1CCBF] md:py-60">
      <ResponsiveMarquee
        animationConfig={{
          mobile: {
            max: "-887px",
            speed: 50,
          },
          desktop: {
            max: "-88.7%",
            speed: 5,
          },
        }}
      >
        {"Sustainable Retreat • Sustainable Retreat • Sustainable Retreat • "}
      </ResponsiveMarquee>

      <div className="mt-18 flex flex-col gap-y-14 px-8-25 md:mt-26 md:grid md:grid-cols-3 md:grid-rows-[auto_auto] md:gap-y-24 md:px-16">
        <div className="flex flex-col gap-14 md:col-span-2 md:col-start-2 md:flex-row">
          <ResponsiveMaskTextVariant
            desktop={[
              <>At our Resorts and Residences, we believe in</>,
              <>fostering a sense of partnership, building a</>,
              <>thriving ecosystem, nurturing a strong</>,
              <>Community, and prioritizing the health of the</>,
              <>planet. These values shape every aspect of</>,
              <>your personalized Wellness experience.</>,
            ]}
            mobile={[
              <>At our Resorts and Residences, we believe</>,
              <>in fostering a sense of partnership,</>,
              <>building a thriving ecosystem, nurturing a</>,
              <>strong Community, and prioritizing the</>,
              <>health of the planet. These values shape</>,
              <>every aspect of your personalized</>,
              <>Wellness experience.</>,
            ]}
            className="text-base [line-height:1.33] md:text-lg"
          />
          <ResponsiveMaskTextVariant
            desktop={[
              <>We envision a world where mind, body, and</>,
              <>spirit thrive in harmony, fostering</>,
              <>connections to each other and the natural</>,
              <>world, redefining the concept of fulfillment</>,
              <>beyond material success.</>,
            ]}
            mobile={[
              <>We envision a world where mind, body,</>,
              <>and spirit thrive in harmony, fostering</>,
              <>connections to each other and the natural</>,
              <>world, redefining the concept of fulfillment</>,
              <>beyond material success.</>,
            ]}
            className="text-base [line-height:1.33] md:text-lg"
          />
        </div>

        <div
          ref={imgContainerRef}
          className="relative overflow-hidden md:w-fit"
        >
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
            <StyledLink2
              handleFocus={handleFocus}
              sNo={index + 1}
              href={eachLink.href}
              key={`link-${index + 1}`}
            >
              {eachLink.title}
            </StyledLink2>
          ))}
        </div>
      </div>
    </div>
  );
}
