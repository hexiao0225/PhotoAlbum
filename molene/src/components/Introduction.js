import React, { useRef } from "react";
import Title from "./Title";
import { useIntersection } from "react-use";

export const Introduction = ({ titleSize, title }) => {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  const isSeen = !(intersection && intersection.intersectionRatio < 0.5);
  return (
    <div className='introduction'>
      <div className='introduction-head'>
        <Title titleSize={titleSize} title={title} />
        <div ref={sectionRef} className='introduction-cover-wrapper'>
          <img
            alt=''
            className={isSeen ? "picture fade-in-fwd" : "picture fade-out"}
            src='http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/02/28133056/oh_gawa-algerie-image1-1440x610.png'
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
