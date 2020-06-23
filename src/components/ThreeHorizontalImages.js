import React, { useRef } from "react";
import { useIntersection } from "react-use";
const ThreeHorizontalImages = ({ images } = {}) => {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  const isSeen = !(intersection && intersection.intersectionRatio < 0.5);

  return (
    <div ref={sectionRef} className='three-horizontal-images-in-row-gallery'>
      <ul>
        {images.map((url, index) => (
          <li key={index}>
            <img
              className={
                isSeen
                  ? "horizontal-picture scale-down-center"
                  : "horizontal-picture"
              }
              alt=''
              src={url}
            ></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThreeHorizontalImages;
