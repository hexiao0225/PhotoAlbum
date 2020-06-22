import React from "react";

export const Introduction = ({ url, titleSize, title }) => {
  return (
    <div className='introduction'>
      <div
        className={
          titleSize === "large"
            ? "introduction-title unfold-to-right"
            : "script-title"
        }
      >
        {title}
      </div>
      <img alt='' className='picture' src={url}></img>
    </div>
  );
};

export default Introduction;
