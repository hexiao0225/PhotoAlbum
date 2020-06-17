import React from "react";
import Title from "./Title";

export const Introduction = ({ url, titleSize, title }) => {
  return (
    <div className='introduction'>
      <div className='introduction-head'>
        <Title titleSize={titleSize} title={title} />
        <div className='introduction-cover-wrapper'>
          <img alt='' className='picture' src={url}></img>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
