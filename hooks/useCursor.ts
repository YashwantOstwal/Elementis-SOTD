import {
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { useRef, useState } from "react";

export function useCursor() {
  const [renderCursor, setRenderCursor] = useState(false);
  const velocitySensitive = useRef(false);
  const top = useSpring(0, { damping: 110, stiffness: 550 });
  const left = useSpring(0, { damping: 110, stiffness: 550 });

  const displacement = useMotionValue(0);
  const velocity = useVelocity(displacement);
  const scale = useTransform(velocity, [-5000, 0, 5000], [0.75, 1, 0.75]);

  const onMouseEnter = (e: any) => {
    left.jump(e.clientX);
    top.jump(e.clientY);
    setRenderCursor(true);
  };
  const onMouseLeave = () => {
    setRenderCursor(false);
  };

  const onMouseMove = (e: any) => {
    if (!renderCursor) {
      left.jump(e.clientX);
      top.jump(e.clientY);
      setRenderCursor(true);
    }
    left.set(e.clientX);
    top.set(e.clientY);

    if (velocitySensitive.current) {
      displacement.set(
        Math.sqrt(Math.pow(e.clientX, 2) + Math.pow(e.clientY, 2)),
      );
    } else {
      displacement.jump(
        Math.sqrt(Math.pow(e.clientX, 2) + Math.pow(e.clientY, 2)),
      );
    }
  };
  const onAnimationComplete = () => {
    velocitySensitive.current = !velocitySensitive.current;
  };

  const handlers: {
    onMouseEnter: (e: any) => void;
    onMouseLeave: () => void;
    onMouseMove: (e: any) => void;
  } = { onMouseEnter, onMouseLeave, onMouseMove };
  const cursorProps: {
    renderCursor: boolean;
    onAnimationComplete: () => void;
    style: {
      scale: MotionValue<number>;
      top: MotionValue<number>;
      left: MotionValue<number>;
    };
  } = {
    renderCursor,
    onAnimationComplete,
    style: {
      scale,
      top,
      left,
    },
  };
  return { handlers, cursorProps };
}
