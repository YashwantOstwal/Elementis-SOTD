"use client";
import { Dispatch, SetStateAction } from "react";
import CloseIcon from "../SVGComponents/CrossIcon";
import useCustomCursor from "@/utils/hooks/useCustomCursor";
import CustomCursor from "./CustomCursor2";
import CustomVideoPlayer from "./CustomVideoPlayer";

interface CustomVideoPlayerDesktopProps {
  playIntro: boolean;
  setPlayIntro: Dispatch<SetStateAction<boolean>>;
}
export default function CustomVideoPlayerDesktop(
  props: CustomVideoPlayerDesktopProps,
) {
  const { handlers, cursorProps } = useCustomCursor();
  return (
    <>
      <CustomVideoPlayer handlers={handlers} {...props} />
      <CustomCursor
        className="-translate-x-1/2 -translate-y-1/2 rounded-full p-6"
        {...cursorProps}
      >
        <CloseIcon className="[&_path]:[stroke:#ffffff]" />
      </CustomCursor>
    </>
  );
}
