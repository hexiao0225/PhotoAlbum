import React, { useRef } from "react";
import { useIntersection } from "react-use";
import { parseText } from "../util/helper";
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
      {title && <h3 className={isSeen ? "script-title fade-in" : "script-title"}>
        {title}
      </h3>}
      {text && <div className={isSeen ? "paragraph fade-in" : "paragraph"}>
        {parseText(text)}
      </div>}
    </div>
  );
};

export default Paragraph;
