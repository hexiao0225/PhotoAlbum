import React from "react";
import { COUNTRY_INFO } from "../constants/text";
import Title from "./Title";

export const Introduction = () => {
  return (
    <div className='introduction'>
      <div className='introduction-head'>
        <Title title={COUNTRY_INFO.title} />
        <div className='introduction-cover-wrapper'>
          <img
            alt=''
            className='picture'
            src='http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/02/28133056/oh_gawa-algerie-image1-1440x610.png'
          ></img>
        </div>
      </div>
      <div>
        <p className='scroll'>scroll</p>
      </div>
    </div>
  );
};

export default Introduction;
