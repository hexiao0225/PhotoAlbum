import React from "react";
import Introduction from "./Introduction";
import ThreeHorizontalImages from "./ThreeHorizontalImages";
import BlockQuote from "./BlockQuote";
import { parseText } from "../util/helper";
import Paragrah from "./Paragraph";


const OnTheRoad = ({ content }) => {
  const { coverImage, sectionCoverImages,p1,p2,quote1 } = content;

  return (
    <div className='country-page landing-page'>
      <Introduction
        titleSize={"large"}
        url={coverImage}
        title={"On the Road"}
      />
      <div className='script-title'>Who</div>
      <div className='landing-page-about'>{parseText(p1)}</div>
      <BlockQuote author={"Charles Willson Peale"} quote={quote1} />
      <ThreeHorizontalImages images={sectionCoverImages.slice(0, 3)} />
      <Paragrah text={p2} title={"Measurement"} />
      <div className='footer'> </div>
    </div>
  );
};

export default OnTheRoad;
