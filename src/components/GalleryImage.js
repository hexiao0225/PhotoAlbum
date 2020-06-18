import React from "react";

const GalleryImage = ({ url }) => {
  return (
    <div className='gallery-image' >
      <li>
        <img alt='' className='picture' src={url}></img>
      </li>
    </div>
  );
};

export default GalleryImage;
