"use client";
import { Dispatch, SetStateAction } from "react";
import CloseIcon from "@/components/SVGComponents/CloseIcon";
import { useCursor } from "@/hooks/useCursor";
import Cursor from "@/components/Client/Cursor";
import VideoPlayer from "./VideoPlayer";

interface VideoPlayerDesktopProps {
  playIntro: boolean;
  setPlayIntro: Dispatch<SetStateAction<boolean>>;
}
export default function VideoPlayerDesktop(props: VideoPlayerDesktopProps) {
  const { handlers, cursorProps } = useCursor();
  return (
    <>
      <VideoPlayer handlers={handlers} {...props} />
      <Cursor
        className="-translate-x-1/2 -translate-y-1/2 rounded-full p-6"
        {...cursorProps}
      >
        <CloseIcon className="[&_path]:[stroke:#ffffff]" />
      </Cursor>
    </>
  );
}
