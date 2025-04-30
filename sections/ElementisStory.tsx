import ResponsiveMaskText from "@/components/Client/ResponsiveMaskTextVariant";
import SectionTitle from "@/components/Server/SectionTitle";
import StyledLink from "@/components/Server/StyledLink";
import ElementisStoryClient from "@/components/Client/ElementisStoryClient";
import { Fragment } from "react";

export default function ElementisStory() {
  const textLines = {
    mobile: [
      <Fragment key="m-1"> Our story is deeply</Fragment>,
      <Fragment key="m-2">
        rooted in fostering <span>meaningful</span>
      </Fragment>,
      <Fragment key="m-3">
        <span>connections</span>, providing genuine
      </Fragment>,
      <Fragment key="m-4">care, and upholding a strong</Fragment>,
      <Fragment key="m-5">commitment to our Community.</Fragment>,
    ],
    desktop: [
      <Fragment key="d-1">Our story is deeply rooted in</Fragment>,
      <Fragment key="d-2">
        fostering <span>meaningful connections</span>,
      </Fragment>,
      <Fragment key="d-3">providing genuine care, and upholding</Fragment>,
      <Fragment key="d-4">a strong commitment to our</Fragment>,
      <Fragment key="d-5">Community.</Fragment>,
    ],
  };

  return (
    <>
      <div className="bg-[#2B3530] px-3-75 py-40 text-[#D1CCBF] md:grid md:grid-cols-11 md:grid-rows-[repeat(2,auto)] md:gap-x-5 md:gap-y-24 md:px-16 md:py-50">
        <SectionTitle className="md:col-span-3">ELEMENTIS Story</SectionTitle>
        <div className="max-md:mt-12 md:col-span-6 md:col-start-6">
          <ResponsiveMaskText
            {...textLines}
            className="text-24 [line-height:1] md:text-40 [&>:first-child]:indent-23"
          />
          <div className="mt-12 flex flex-col gap-1 max-md:mb-16 md:gap-4">
            <StyledLink href="https://elementis.co/the-story">
              Discover ELEMENTIS
            </StyledLink>
            <StyledLink href="https://elementis.co/the-story#team">
              Meet The Global Team
            </StyledLink>
          </div>
        </div>
        <ElementisStoryClient />
      </div>
    </>
  );
}
