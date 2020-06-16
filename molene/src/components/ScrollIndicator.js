import React, { useRef } from "react";
import { useIntersection } from "react-use";

const ScrollIndicator = () => {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "-70px",
    threshold: 0.9,
  });
  const isSeen = !(intersection && intersection.intersectionRatio < 0.9);
  return (
    <div ref={sectionRef} className={isSeen ? "hide-scroll" : "scroll"}>
      scroll
    </div>
  );
};

export default ScrollIndicator;
