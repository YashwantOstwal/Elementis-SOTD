import {
  useAnimate,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { useRef } from "react";
export default function useCustomCursorEvents() {
  const velocitySensitive = useRef(false);
  const [scope, animate] = useAnimate();
  const top = useSpring(0, { damping: 150, stiffness: 550 });
  const left = useSpring(0, { damping: 150, stiffness: 550 });
  // const dummy = useMotionValue(0);
  const effectiveTranslation = useMotionValue(0);
  const effectiveTranslationVelocity = useVelocity(effectiveTranslation);
  const scale = useTransform(
    effectiveTranslationVelocity,
    (latest) => ((0.95 - 1) / 1750) * Math.abs(latest) + 1,
  );
  // useMotionValueEvent(effectiveTranslationVelocity, "change", (latest) =>
  //   console.log(((0.95 - 1) / 1750) * Math.abs(latest) + 1),
  // );
  const inset = useMotionTemplate`${top}px auto auto ${left}px`;

  const handleMouseMove = (e: any) => {
    top.set(e.clientY);
    left.set(e.clientX);
    // dummy.set(Math.sqrt(Math.pow(e.clientX, 2) + Math.pow(e.clientY, 2)));
    if (velocitySensitive.current) {
      effectiveTranslation.set(
        Math.sqrt(Math.pow(e.clientX, 2) + Math.pow(e.clientY, 2)),
        // - dummy.get(),
      );
    }
  };
  const handleMouseEnter = async (e: any) => {
    top.jump(e.clientY);
    left.jump(e.clientX);
    await animate(
      scope.current,
      {
        scale: 1,
      },
      { duration: 0.3 },
    );
    velocitySensitive.current = true;
  };
  const handleMouseLeave = async () => {
    velocitySensitive.current = false;
    await animate(scope.current, { scale: 0 }, { duration: 0.3 });
  };

  return {
    scope,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
    inset,
    scale,
  };
}
