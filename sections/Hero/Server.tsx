import React from "react";
import MaskText from "@/components/Server/MaskText";
import NavigateSVG from "@/components/SVGComponents/NavigateSVG";
import Br from "@/components/Server/Br";
import ResponsiveMarquee from "@/components/Client/ResponsiveMarquee";

export default function HeroServer() {
  return (
    <div className="pointer-events-none flex h-screen flex-col justify-end gap-8">
      <MaskText
        transition={{ delayChildren: 0.2 }}
        lines={[
          <ResponsiveMarquee
            key="marquee"
            animationConfig={{
              mobile: {
                max: "-1852px",
                speed: 50,
              },
              desktop: {
                max: "-185.25%",
                speed: 5,
              },
            }}
            className="text-white"
          >
            {
              "Wellness • Innovation • Nature • Community • Wellness • Innovation • Nature • Community • "
            }
          </ResponsiveMarquee>,
        ]}
      />
      <div className="relative flex justify-center overflow-hidden py-5 font-light text-white md:mx-10 md:justify-between md:py-4 [&>*]:shrink-0">
        <MaskText
          transition={{
            delayChildren: 0.2,
          }}
          className="flex-1 max-md:hidden"
          lines={[
            <div
              key="item-1"
              style={{
                height: `${12 * Math.sqrt(2)}px`, //   -> svg.size-[12px].rotate-[135deg] -> Thus,hypotenuse of svg to perform MaskText Animation properly
              }}
            >
              <NavigateSVG
                style={{ transform: "rotate(135deg)", fill: "#ffffff" }}
              />
            </div>,
          ]}
        />
        <MaskText
          transition={{
            delayChildren: 0.4,
          }}
          className="md:[line-height:1.2]"
          lines={[
            <>A lifestyle revolution for a</>,
            <>sustaiable fulfilling future</>,
          ]}
        />
        <MaskText
          transition={{
            delayChildren: 0.6,
          }}
          lines={[<>Scroll to Explore</>]}
          className="flex-1 text-end text-nowrap [filter:blur(0.25px)] max-md:hidden"
        />
        <Br />
      </div>
    </div>
  );
}
