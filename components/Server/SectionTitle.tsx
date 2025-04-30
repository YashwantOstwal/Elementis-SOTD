import { CSSProperties } from "react";
import BurgerSVG from "../SVGComponents/BurgerSVG";
import cn from "@/utils/cn";

interface SectionTitleProps {
  children: string;
  className?: string;
  style?: CSSProperties;
}
export default function SectionTitle({
  children,
  className,
  style,
}: SectionTitleProps) {
  return (
    <div
      style={{ ...style }}
      className={cn("flex h-fit items-center gap-5", className)}
    >
      <BurgerSVG />
      <div className="text-base [line-height:1] md:text-xl">{children}</div>
    </div>
  );
}
