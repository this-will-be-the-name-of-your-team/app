import { useEffect, useRef, useState } from "react";

export const useHide = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const handleScroll = () => {
    if (window.scrollY < lastScroll) {
      setScroll(false);
    } else {
      setScroll(true);
    }

    setLastScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  useEffect(() => {
    if (targetRef.current && scroll) targetRef.current.style.top = "-5rem";
    if (targetRef.current && !scroll) targetRef.current.style.top = "0";
  }, [scroll]);

  return targetRef;
};
