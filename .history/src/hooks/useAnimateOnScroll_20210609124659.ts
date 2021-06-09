import { useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useInViewport } from "react-in-viewport";

const useAnimateOnScroll = () => {
  const controls = useAnimation();
  const targetRef = useRef();
  const { inViewport } = useInViewport(
    targetRef,
    { threshold: 0.1 },
    { disconnectOnLeave: false },
    {}
  );

  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    if (inViewport) {
      controls.start("visible");
    }
  }, [controls, inViewport]);

  return [controls, targetRef, inViewport];
};
