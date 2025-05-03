import { Fragment } from "react";
import ResponsiveMaskText from "@/components/Client/ResponsiveMaskTextVariant";
import MaskText from "@/components/Server/MaskText";
import SectionTitle from "@/components/Server/SectionTitle";
import IntroductionImage from "@/public/Introduction.png";
import * as motion from "motion/react-client";
import Image from "next/image";
import ResponsiveImage from "@/components/Client/ResponsiveImage";

export default function IntroductionServer() {
  return (
    <div className="grid grid-rows-[auto_auto_auto] gap-y-12 bg-[#2B3530] px-3-75 pt-42-5 pb-35 text-[#D1CCBF] md:grid-cols-[1fr_1.9fr] md:grid-rows-[auto_auto] md:gap-y-32 md:px-15 md:pt-56-25 md:pb-50">
      <motion.div className="mb-2 md:col-span-2 md:col-start-2 md:mb-0">
        <ResponsiveImage parallaxAmount={8}>
          <Image
            src={IntroductionImage}
            alt="introduction-image"
            className="w-full object-cover max-md:aspect-[1.18] md:h-auto"
          />
        </ResponsiveImage>
      </motion.div>

      <SectionTitle className="md:col-start-1 md:row-start-2">
        Introduction
      </SectionTitle>

      <div className="flex flex-col gap-12 md:col-span-2 md:col-start-2 md:gap-20">
        <ResponsiveMaskText
          mobile={[
            <Fragment key="m-1">Welcome to a world of</Fragment>,
            <Fragment key="m-2">
              <span>luxury and well-being</span> with
            </Fragment>,
            <Fragment key="m-3">ELEMENTIS, where you will</Fragment>,
            <Fragment key="m-4">discover exquisite luxury</Fragment>,
            <Fragment key="m-5">health and wellness resorts</Fragment>,
            <Fragment key="m-6">and residences nestled in the</Fragment>,
            <Fragment key="m-7">most breathtaking destinations</Fragment>,
            <Fragment key="m-8">on the globe.</Fragment>,
          ]}
          desktop={[
            <Fragment key="d-1">
              Welcome to a world of <span>luxury and</span>
            </Fragment>,
            <Fragment key="d-2">
              <span>well-being</span> with ELEMENTIS, where you
            </Fragment>,
            <Fragment key="d-3">
              will discover exquisite luxury health and
            </Fragment>,
            <Fragment key="d-4">
              wellness resorts and residences nestled
            </Fragment>,
            <Fragment key="d-5">
              in the most breathtaking destinations
            </Fragment>,
            <Fragment key="d-6">on the globe.</Fragment>,
          ]}
          className="text-24 [line-height:1] md:text-40 [&>:first-child]:indent-23"
        />

        <MaskText
          lines={[
            <Fragment key="l-1">At ELEMENTIS, we use the Integrative</Fragment>,
            <Fragment key="l-2">Wellness approach that considers</Fragment>,
            <Fragment key="l-3">
              psychological, physical, and nutritional
            </Fragment>,
            <Fragment key="l-4">
              aspects of your life to improve overall
            </Fragment>,
            <Fragment key="l-5">well-being and balance.</Fragment>,
          ]}
          className="text-base [line-height:1.3] font-normal md:text-lg"
        />
      </div>
    </div>
  );
}
