import React from "react";

const Title = ({ title, titleSize }) => {
  const stringArr = Array.from(title);

  return (
    <div
      className={
        titleSize === "large"
          ? "introduction-title unfold-to-right"
          : "small-introduction-title"
      }
    >
      <span>
        {stringArr.map((char, index) => (
          <li key={index}>{char}</li>
        ))}
      </span>
    </div>
  );
};

export default Title;
