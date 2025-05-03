"use client";
import { Dispatch, SetStateAction } from "react";
import Cursor from "@/components/Client/Cursor";
import PlaySVG from "@/components/SVGComponents/PlaySVG";
export default function HeroMobileClient({
  playIntro,
  setPlayIntro,
}: {
  setPlayIntro: Dispatch<SetStateAction<boolean>>;
  playIntro: boolean;
}) {
  return (
    <div
      className="absolute inset-0 grid place-items-center"
      onClick={() => setPlayIntro((prev) => !prev)}
    >
      <video
        className="size-full object-cover md:hidden"
        autoPlay
        muted
        loop
        poster="/Hero/elementis-cover-mjpg.png"
      >
        <source src="Hero/elementismp4.mp4" type="video/mp4" />
      </video>
      <Cursor
        renderCursor={!playIntro}
        isMobile={true}
        className="absolute grid aspect-square h-11 place-items-center rounded-full"
      >
        <PlaySVG />
      </Cursor>
    </div>
  );
}
