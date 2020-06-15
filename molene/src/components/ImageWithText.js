import React from "react";
import Paragraph from "./Paragraph";

const ImageWithText = ({ text, url }) => {
  return (
    <div className='image-with-text scale-down-center'>
      <img alt='' className='picture' src={url}></img>
      <Paragraph text={text} />
    </div>
  );
};

export default ImageWithText;
