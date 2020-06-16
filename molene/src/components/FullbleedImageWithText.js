import React from "react";
import Paragraph from "./Paragraph";

const FullbleedImageWithText = ({ url, text, title }) => {
  return (
    <div className='fullbleed-image-with-text'>
      <div className='fullbleed-image '>
        <img alt='' className='picture fade-in' src={url}></img>
      </div>
      <div>
        <Paragraph title={title} text={text} />
      </div>
    </div>
  );
};

export default FullbleedImageWithText;
