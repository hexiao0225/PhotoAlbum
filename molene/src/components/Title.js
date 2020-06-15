import React from "react";

const indexToAnimation = (index) => {
  const time = index * 0.1 + 1.1;
  const delay = time + "" + "s";
  return `slide-down ${delay} cubic-bezier(0.25, 0.46, 0.45, 0.94) both`;
};

const Title = ({ title, titleSize }) => {
  const stringArr = Array.from(title);

  return (
    <div
      className={
        titleSize === "large"
          ? "introduction-title tracking-in-expand"
          : "small-introduction-title tracking-in-expand"
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
