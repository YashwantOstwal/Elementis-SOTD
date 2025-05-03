import { MotionValue, useTransform } from "motion/react";
export default function useBackgroundImage(
  localProgress: MotionValue<number>,
  divisions: number,
  inset: number,
  gap: number,
  vh: number,
) {
  //   const divisions = 28,
  //     inset = 0.15,
  //     gap = 0.25,
  //     vh = 130;
  const func = (i: number, latest: number) => {
    const buffer = (1 - 2 * inset - gap) / (divisions - 1);
    if (inset + i * buffer > latest) return 0;
    if (inset + gap + i * buffer < latest) return 1;
    return (latest - (inset + i * buffer)) / gap;
  };

  const backgroundImage = useTransform(localProgress, (latest) => {
    let temp = "";
    for (let i = 0; i < divisions; i++) {
      temp += `#2B3530 ${i * (vh / divisions)}vh ,#2B3530 ${func(i, latest) * (vh / divisions) + i * (vh / divisions)}vh,rgba(0,0,0,0) ${func(i, latest) * (vh / divisions) + i * (vh / divisions)}vh,rgba(0,0,0,0) ${(i + 1) * (vh / divisions)}vh`;
      if (i != divisions - 1) temp += ",";
    }
    return `linear-gradient(to top,${temp})`;
  });
  return backgroundImage;
}
