import React from "react";
import Paragraph from "./Paragraph";

const FullbleedImageWithText = ({ url, text, title }) => {
  return (
    <div className='fullbleed-image-with-text'>
      <div className='fullbleed-image '>
        <img
          alt=''
          className='picture fade-in'
          src='http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/01/28233949/%C2%A9ALSAFAR-ALGERIA-001-IPAD-min-1440x820.jpg'
        ></img>
      </div>
      <div>
        <Paragraph title={title || "Algeria"} />
      </div>
    </div>
  );
};

export default FullbleedImageWithText;
