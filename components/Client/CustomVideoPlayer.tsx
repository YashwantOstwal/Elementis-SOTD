"use client";
import React, { Dispatch, SetStateAction, useRef } from "react";
import { AnimatePresence, motion, useSpring, useTransform } from "motion/react";
import FullScreenIcon from "../SVGComponents/FullScreenIcon";

interface CustomVideoPlayerProps {
  setPlayIntro: Dispatch<SetStateAction<boolean>>;
  playIntro: boolean;
  handlers?: {
    onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseLeave: () => void;
    onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  };
}
export default function CustomVideoPlayer({
  setPlayIntro,
  playIntro,
  handlers,
}: CustomVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoProgress = useSpring(0, { mass: 1, damping: 30, stiffness: 100 });
  const width = useTransform(videoProgress, (latest) => {
    if (videoRef.current) {
      return `${(latest / videoRef.current.duration) * 100}%`;
    }
  });
  const handleTimeLineClick = (e: React.MouseEvent<HTMLElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const progress =
        ((e.clientX - rect.x) / rect.width) *
        (videoRef.current.duration as number);

      videoProgress.set(progress);
      videoRef.current.currentTime = progress;
    }
  };
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPlayIntro(false);
    handlers?.onMouseLeave();
  };
  return (
    <>
      <AnimatePresence>
        {playIntro && (
          <motion.div
            key="video-container"
            onClick={handleClick}
            {...handlers}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: { clipPath: "inset(100% 0% 0% 0%)" },
              animate: {
                clipPath: "inset(0% 0% 0% 0%)",
                transition: {
                  ease: [0.24, 0.43, 0.15, 0.97],
                  duration: 0.8,
                },
              },
              exit: {
                clipPath: "inset(0% 0% 100% 0%)",
                transition: {
                  ease: [0.24, 0.43, 0.15, 0.97],
                  duration: 0.8,
                  delay: 0.25,
                },
              },
            }}
            className="fixed top-0 z-[100] grid h-screen w-full cursor-pointer place-items-center bg-[#1a1a1a] px-3-75"
          >
            <div className="flex h-auto w-full flex-col md:w-[140vh]">
              <div className="flex-1">
                <video
                  ref={videoRef}
                  width="100%"
                  height="100%"
                  autoPlay={true}
                  loop={true}
                  onTimeUpdate={() => {
                    videoProgress.set(videoRef.current?.currentTime as number);
                  }}
                >
                  <source src="/Hero/elementis-fullmp4.mp4" type="Video/mp4" />
                </video>
              </div>
              <div
                className="flex items-center gap-5 px-1 py-2"
                onMouseEnter={(e) => {
                  e.stopPropagation();
                  handlers?.onMouseLeave();
                }}
                onMouseLeave={(e) => {
                  e.stopPropagation();
                  handlers?.onMouseEnter(e);
                }}
                onMouseMove={(e) => e.stopPropagation()}
              >
                <div
                  className="flex-1 cursor-pointer overflow-hidden py-2.5"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTimeLineClick(e);
                  }}
                >
                  <motion.div
                    className="pointer-events-none h-px bg-white/30"
                    variants={{
                      initial: {
                        x: "-100%",
                      },
                      animate: {
                        x: "0%",
                        transition: {
                          ease: [0.24, 0.43, 0.15, 0.97],
                          duration: 0.5,
                          delay: 0.25,
                        },
                      },
                      exit: {
                        x: "100%",
                        transition: {
                          ease: [0.24, 0.43, 0.15, 0.97],
                          duration: 0.3,
                        },
                      },
                    }}
                  >
                    <motion.div
                      className="h-full w-0 rounded-tr-full rounded-br-full bg-white"
                      style={{
                        width,
                      }}
                    />
                  </motion.div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    videoRef.current?.requestFullscreen();
                  }}
                >
                  <FullScreenIcon className="cursor-pointer" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
