import { useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useInViewport } from "react-in-viewport";

const useAnimateOnScroll = ({ startLabel: string, endLabel?: string }) => {
  const controls = useAnimation();
  const targetRef = useRef();
  const { inViewport } = useInViewport(
    targetRef,
    { threshold: 0.1 },
    { disconnectOnLeave: false },
    {}
  );

  useEffect(() => {
    if (inViewport) {
      controls.start(startLabel);
    }
  }, [controls, inViewport]);

  return [controls, targetRef, inViewport];
};
