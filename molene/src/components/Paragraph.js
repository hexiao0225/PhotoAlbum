import React, { useRef } from "react";
import { useIntersection } from "react-use";

const Paragraph = ({ text, title }) => {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });
  const isSeen = !(intersection && intersection.intersectionRatio < 0.2);
  return (
    <div ref={sectionRef}>
      <h3 className={isSeen ? "script-title fade-in" : "script-title fade-out"}>
        {title}
      </h3>
      <p className={isSeen ? "paragraph fade-in" : "paragraph fade-out"}>
        {text}
      </p>
    </div>
  );
};

export default Paragraph;
