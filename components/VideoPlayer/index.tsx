"use client";
import { Dispatch, SetStateAction } from "react";
import VideoPlayer from "./VideoPlayer";
import VideoPlayerDesktop from "./VideoPlayerDesktop";

interface VideoPlayerWrapperProps {
  isMobile: boolean | null;
  setPlayIntro: Dispatch<SetStateAction<boolean>>;
  playIntro: boolean;
}
export default function VideoPlayerWrapper({
  isMobile,
  ...rest
}: VideoPlayerWrapperProps) {
  if (typeof isMobile != "boolean") {
    return null;
  }
  return (
    <>
      {isMobile ? <VideoPlayer {...rest} /> : <VideoPlayerDesktop {...rest} />}
    </>
  );
}
