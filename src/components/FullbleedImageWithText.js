import React from "react";
import Paragraph from "./Paragraph";

const FullbleedImageWithText = ({ image, text, title }) => {
  return (
    <div className='fullbleed-image-with-text'>
      <div className='fullbleed-image'>
        <img alt='' className='picture fade-in' src={image}></img>
      </div>
      <div>
        <Paragraph title={title} text={text} />
      </div>
    </div>
  );
};

export default FullbleedImageWithText;
