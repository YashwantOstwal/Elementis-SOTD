import { MotionValue, useTransform } from "motion/react";
export default function useMaskImage(
  localProgress: MotionValue<number>,
  isMobile: boolean | null,
  config?: {
    divisions: number;
    inset: number;
    gap: number;
    vh: number;
  },
) {
  const { divisions = 28, inset = 0, gap = 0.35, vh = 130 } = config ?? {};
  const func = (i: number, latest: number) => {
    const buffer = (1 - 2 * inset - gap) / (divisions - 1);
    if (inset + i * buffer > latest) return 0;
    if (inset + gap + i * buffer < latest) return 1;
    return (latest - (inset + i * buffer)) / gap;
  };

  const maskImage = useTransform(localProgress, (latest) => {
    if (typeof isMobile != "boolean") return "";
    else if (isMobile) {
      return `linear-gradient(to top,rgba(0,0,0,0) 0%,rgba(0,0,0,0) ${latest * 100}% ,rgba(0,0,0,1) ${latest * 100}%,rgba(1,1,1,1) 100%)`;
    }
    let temp = "";

    for (let i = 0; i < divisions; i++) {
      temp += `rgba(0,0,0,0) ${i * (vh / divisions)}vh ,rgba(0,0,0,0) ${func(i, latest) * (vh / divisions) + i * (vh / divisions)}vh,rgba(0,0,0,1) ${func(i, latest) * (vh / divisions) + i * (vh / divisions)}vh,rgba(0,0,0,1) ${(i + 1) * (vh / divisions)}vh`;
      if (i != divisions - 1) temp += ",";
    }
    return `linear-gradient(to top,${temp})`;
  });
  return maskImage;
}
