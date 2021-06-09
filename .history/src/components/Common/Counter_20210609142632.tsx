import { animate, AnimationPlaybackControls } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Counter = ({ from, to, startAnimation }) => {
  const nodeRef = useRef<HTMLInputElement>();

  useEffect(() => {
    const node = nodeRef.current;
    let controls: AnimationPlaybackControls;
    if (startAnimation) {
      controls = animate(from, to, {
        duration: 1,
        onUpdate(value) {
          if (typeof node !== "undefined") {
            node.textContent = value.toFixed(0);
          }
        },
      });
    }

    return () => controls.stop();
  }, [from, to, startAnimation]);

  return <p ref={nodeRef} />;
};

export default Counter;
