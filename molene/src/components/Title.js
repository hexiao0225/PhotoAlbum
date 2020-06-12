import React from "react";

const Title = ({ title }) => {
  const stringArr = Array.from(title);
  return (
    <div className='introduction-title'>
      <span>
        {stringArr.map((char, index) => (
          <li key={index}>{char}</li>
        ))}
      </span>
    </div>
  );
};

export default Title;
