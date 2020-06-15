import React, { useRef } from "react";
import { useIntersection } from "react-use";

const Paragraph = ({ text, title }) => {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  const isSeen = !(intersection && intersection.intersectionRatio < 0.5);
  return (
    <div ref={sectionRef}>
      <h3 className={isSeen ? "script-title slide-up" : "script-title"}>
        {title}
      </h3>
      <div className={isSeen ? "paragraph fade-in" : "paragraph fade-out"}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Paragraph;
