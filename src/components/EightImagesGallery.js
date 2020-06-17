import React from "react";
import GalleryImage from "./GalleryImage";

const EightImagesGallery = ({ landscapeUrls, portraitUrls }) => {
  return (
    <div className='gallery'>
      <ul className='gallery-landscape'>
        {landscapeUrls.map((url, index) => (
          <GalleryImage key={index} url={url} />
        ))}
      </ul>
      <ul className='gallery-portrait'>
        {portraitUrls.map((url, index) => (
          <GalleryImage key={index} url={url} />
        ))}
      </ul>
    </div>
  );
};

export default EightImagesGallery;
