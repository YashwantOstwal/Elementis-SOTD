"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const WindowSizeContext = createContext<boolean | null>(null);

export const WindowSizeProvider = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowSizeContext.Provider value={isMobile}>
      {children}
    </WindowSizeContext.Provider>
  );
};

export const useIsMobile = () => useContext(WindowSizeContext);
