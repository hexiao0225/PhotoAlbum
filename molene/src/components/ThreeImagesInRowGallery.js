import React, { useRef } from "react";
import { useIntersection } from "react-use";

const ThreeImagesInRowGallery = ({ images } = {}) => {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  const isSeen = !(intersection && intersection.intersectionRatio < 0.5);

  return (
    <div ref={sectionRef} className='three-images-in-row-gallery'>
      <ul>
        {images.map((url) => (
          <li>
            <img
              className={isSeen ? "picture scale-down-center" : "picture"}
              alt=''
              src={url}
            ></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThreeImagesInRowGallery;
