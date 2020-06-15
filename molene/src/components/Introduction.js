import React from "react";
import Title from "./Title";

export const Introduction = ({ titleSize, title }) => {
  return (
    <div className='introduction'>
      <div className='introduction-head'>
        <Title titleSize={titleSize} title={title} />
        <div className='introduction-cover-wrapper'>
          <img
            alt=''
            className='picture'
            src='http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/02/28133056/oh_gawa-algerie-image1-1440x610.png'
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
