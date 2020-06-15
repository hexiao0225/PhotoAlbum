import React from "react";
import Paragraph from "./Paragraph";

const ImageWithText = ({ text, url }) => {
  return (
    <div className='image-with-text scale-down-center'>
      <img
        alt=''
        className='picture'
        src={
          url ||
          "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/01/27124550/AlSafar_Map_updated_Algerie.png"
        }
      ></img>
      <Paragraph text={text} />
    </div>
  );
};

export default ImageWithText;
