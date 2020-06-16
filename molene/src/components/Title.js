import React from "react";

const Title = ({ title, titleSize }) => {
  return (
    <div className={
        titleSize === "large"
          ? "introduction-title unfold-to-right"
          : "small-introduction-title"
      }>{title}</div>
  );
};

export default Title;
