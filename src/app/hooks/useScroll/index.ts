import { useRef } from "react";

export const useScroll = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const scrollToTarget = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return { targetRef, scrollToTarget };
};
