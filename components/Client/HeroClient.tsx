"use client";

import CustomVideoPlayer from "./CustomVideoPlayer";

import { useIsMobile } from "@/app/providers";
import HeroDesktopClient from "./HeroDesktopClient";
import { useState } from "react";
import CustomCursor2 from "./CustomCursor2";
import PlaySVG from "../SVGComponents/PlaySVG";
import CustomVideoPlayerDesktop from "./CustomVideoPlayerDesktop";

export default function HeroClient() {
  const isMobile = useIsMobile();
  const [playIntro, setPlayIntro] = useState(false);
  return (
    <>
      {isMobile ? (
        <>
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
            <CustomCursor2
              renderCursor={!playIntro}
              isMobile={isMobile}
              className="absolute grid aspect-square h-11 place-items-center rounded-full"
            >
              <PlaySVG />
            </CustomCursor2>
            <CustomVideoPlayer
              playIntro={playIntro}
              setPlayIntro={setPlayIntro}
            />
          </div>
        </>
      ) : (
        <>
          <HeroDesktopClient setPlayIntro={setPlayIntro} />
          <CustomVideoPlayerDesktop
            playIntro={playIntro}
            setPlayIntro={setPlayIntro}
          />
        </>
      )}
    </>
  );
}
