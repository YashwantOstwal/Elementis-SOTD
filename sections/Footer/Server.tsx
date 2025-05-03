import LogoFull from "../../components/SVGComponents/LogoFull";
import DashedLink from "@/components/Server/DashedLink";
import StayConnected from "../../components/Server/StayConnected";
import Link from "next/link";
import ContactUs from "../../components/Server/ContactUs";

interface LinkItem {
  href: string;
  link: string;
}

export default function Footer() {
  const data: LinkItem[] = [
    { href: "", link: "Home" },
    {
      href: "https://elementis.co/destinations",
      link: "Destinations",
    },
    {
      href: "https://elementis.co/wellness",
      link: "Wellness",
    },
    {
      href: "https://elementis.co/innovation",
      link: "Innovation",
    },
    {
      href: "https://elementis.co/sustainability",
      link: "Nature",
    },
    {
      href: "https://elementis.co/community",
      link: "Community",
    },
    {
      href: "https://elementis.co/the-story",
      link: "The Story",
    },
    {
      href: "https://elementis.co/the-story",
      link: "New Developments",
    },
    {
      href: "https://elementis.co/the-story",
      link: "Press Room",
    },
    {
      href: "https://elementis.co/the-story",
      link: "Careers",
    },
  ];

  return (
    <div className="bg-[#2B3530] md:px-16">
      <div className="grid grid-rows-[repeat(4,auto)] border-b border-white/50 px-3-75 py-20 text-[#D1CCBF] md:grid-cols-[1fr_1.375fr] md:grid-rows-2 md:px-0 md:pt-36 md:pb-28-75 [&_.animated-underline]:bg-[#D1CCBF]">
        <div>
          <LogoFull className="h-auto w-1/2 [&_path]:[fill:white]" />
          <ContactUs className="mt-17-5 hidden w-fit flex-col gap-y-8 text-base max-md:mt-16 md:flex [&>div]:gap-6 md:[&>div]:gap-4" />
        </div>
        <ol className="mt-20 grid grid-flow-col-dense grid-cols-2 grid-rows-5 gap-y-5 overflow-hidden text-xl [line-height:1.1] font-light text-nowrap md:mt-0 md:gap-y-6-5 md:text-30">
          {data.map((eachColData, i) =>
            i === 0 ? (
              <div
                key={"list-item-" + (i + 1)}
                className="underline decoration-[#D1CCBF] decoration-[1px] underline-offset-2"
              >
                {eachColData.link}
              </div>
            ) : (
              <Link href={eachColData.href} key={"list-item" + (i + 1)}>
                <DashedLink
                  key={"list-item-" + (i + 1)}
                  className="w-fit [line-height:1] [&_.animated-underline]:bg-[#D1CCBF]"
                >
                  {eachColData.link}
                </DashedLink>
              </Link>
            ),
          )}
        </ol>
        <ContactUs className="gap-y-8 text-base max-md:mt-16 md:hidden [&>div]:gap-x-5" />
        <StayConnected className="justify-end gap-y-6 text-base [line-height:1] max-md:mt-12 md:col-start-2 md:gap-y-12 [&_div]:gap-x-8 md:[&_div]:gap-x-10 [&_path]:[fill:#D1CCBF]" />
      </div>
      <div className="flex flex-col gap-y-4 bg-[#2B3530] px-3-75 py-7-5 text-xs text-[#D1CCBF] md:flex-row md:justify-between md:pb-10 md:text-base [&_.animated-underline]:h-px [&_.animated-underline]:bg-[#D1CCBF]">
        <div className="md:flex-1">© 2025 ELEMENTIS. All Rights Reserved</div>
        <Link href="https://elementis.co/privacy-terms">
          <DashedLink className="w-fit cursor-pointer">
            Policies and Terms
          </DashedLink>
        </Link>
        <div className="flex flex-1 justify-end">
          <DashedLink className="w-fit cursor-default">
            Website cloned by Yash Ostwal
          </DashedLink>
        </div>
      </div>
    </div>
  );
}
