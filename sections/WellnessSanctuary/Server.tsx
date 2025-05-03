import Image from "next/image";
import { Fragment } from "react";
import WellnessSanctuaryImage from "@/public/WellnessSanctuaryImage.png";
import ResponsiveMaskText from "@/components/Client/ResponsiveMaskTextVariant";
import SectionTitle from "@/components/Server/SectionTitle";
import MaskText from "@/components/Server/MaskText";
import StyledLink from "@/components/Server/StyledLink";
import ResponsiveImage from "@/components/Client/ResponsiveImage";
export default function WellnessSanctuary() {
  const textLines = {
    desktop: [
      <Fragment key="desktop-1">
        <span>Personalized</span> wellness,
      </Fragment>,
      <Fragment key="desktop-2">innovation, and nature</Fragment>,
      <Fragment key="desktop-3">meet in synergy</Fragment>,
    ],
    mobile: [
      <Fragment key="mobile-1">
        <span>Personalized</span> wellness,
      </Fragment>,
      <Fragment key="mobile-2">innovation, and nature meet</Fragment>,
      <Fragment key="mobile-3">in synergy</Fragment>,
    ],
  };

  return (
    <div className="flex flex-col bg-[#30493D] text-[#D1CCBF] md:grid md:grid-cols-2">
      <ResponsiveImage parallaxAmount={20}>
        <Image
          src={WellnessSanctuaryImage}
          alt="wellness-sanctuary-image"
          className="h-auto w-full"
        />
      </ResponsiveImage>
      <div className="flex flex-col justify-center px-3-75 py-40 md:py-0">
        <div className="flex flex-col gap-12 md:ml-36 md:w-fit md:gap-16">
          <SectionTitle>Wellness Sanctuary</SectionTitle>
          <ResponsiveMaskText
            {...textLines}
            className="text-24 [line-height:1] md:text-40"
          />
          <MaskText
            lines={[
              <>At ELEMENTIS, we use the Integrative</>,
              <>Wellness approach that considers</>,
              <>psychological, physical, and nutritional</>,
              <>aspects of your life to improve overall</>,
              <>well-being and balance.</>,
            ]}
            className="text-lg [line-height:1.3] font-normal"
          />
          <StyledLink href="https://elementis.co/wellness">
            Discover ELEMENTIS
          </StyledLink>
        </div>
      </div>
    </div>
  );
}
