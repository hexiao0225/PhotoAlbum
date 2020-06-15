import React, { useRef } from "react";
import { useIntersection } from "react-use";

// 8 images per gallery block

const imageUrls = [
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24124922/Se%CC%81quence-6-min.png",
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24125048/Se%CC%81quence-7-min.png",
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24125139/Se%CC%81quence-15-copie-min-510x811.png",
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24125205/Se%CC%81quence-32-min.png",
];

const landscapeUrls = [
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24125447/Alger-2-min-1-603x256.png",
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24125812/Se%CC%81quence-206-min-603x256.png",
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24125752/Se%CC%81quence-89-min-603x256.png",
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24125716/Se%CC%81quence-56-min-603x256.png",
];
const Gallery = () => {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  const isSeen = !(intersection && intersection.intersectionRatio < 0.5);
  return (
    <div ref={sectionRef} className='gallery'>
      <ul className='gallery-landscape'>
        {landscapeUrls.map((url, index) => (
          <li key={index} className='gallery-item scale-down-center'>
            <img alt='' className='gallery-picture' src={url}></img>
          </li>
        ))}
      </ul>
      <ul className='gallery-portrait'>
        {imageUrls.map((url, index) => (
          <li key={index} className='gallery-item scale-down-center'>
            <img alt='' className='gallery-picture' src={url}></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
