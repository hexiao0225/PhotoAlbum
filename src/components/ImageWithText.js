import React from "react";
import Paragraph from "./Paragraph";

const ImageWithText = ({ text, image }) => {
  return (
    <div className='image-with-text scale-down-center'>
      <img alt='' className='picture' src={image}></img>
      <Paragraph text={text} />
    </div>
  );
};

export default ImageWithText;
