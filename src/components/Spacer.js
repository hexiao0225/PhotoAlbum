import React from "react";

const Spacer = ({ size }) => {
  const spacerClass = () => {
    if (size === "sm") {
      return "spacer-sm";
    } else if (size === "md") {
      return "spacer-md";
    } else if (size === "lg") {
      return "spacer-lg";
    }
  };
  return <div className={`${spacerClass}`}></div>;
};

export default Spacer;
