import React, { useRef } from "react";
import { useIntersection } from "react-use";

const GalleryImage = ({ url }) => {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });
  const isSeen = !(intersection && intersection.intersectionRatio < 0.1);
  return (
    <div className='gallery-image' ref={sectionRef}>
      <li className={isSeen ? "fade-in-fwd" : "fade-out"}>
        <img alt='' className='picture' src={url}></img>
      </li>
    </div>
  );
};

export default GalleryImage;
