import React from "react";
import Introduction from "./Introduction";
import ThreeHorizontalImages from "./ThreeHorizontalImages";
import BlockQuote from "./BlockQuote";
import {parseText} from "../util/helper"
import Paragrah from './Paragraph'

const quote = '"..guided along as it were \n a chain of flowers into \n the mysteries of life."';
const about = "A traveling \n wandering \n rootless \n Chinese woman \n on the road \n who once \n lived in \n Santa Fe"
const project = "I started this project in June 2020, and I was in the United States, quarantine at home. I miss the days when I can go out and meet friends. I’ve been wondering and wandering, mentally through books. I was reading Pamuk Orhan’s Istanbul. There’s a Chinese saying, walk a thousand miles and read a thousand books. So I thought I need to record the footprints somehow. Last year, I was in Chicago, then California, then Pittsburgh, then Chengdu, then Dubai, then New York, then Chicago again, then San Francisco, then Guadalajara, then New Zealand, and come back to San Francisco. This is a footprints of mine. "
const OnTheRoad = ({ content }) => {
  const {
    coverImage,
    sectionCoverImages,
  } = content;

  return (
    <div className='country-page landing-page'>
      <Introduction titleSize={"large"} url={coverImage} title={"On the Road"} />
      <div className="landing-page-about">{parseText(about)}</div>
      <BlockQuote author={"Charles Willson Peale"} quote={quote} />
      <ThreeHorizontalImages images={sectionCoverImages.slice(0,3)} />
      <Paragrah text={project} title={"a chain of flowers"}/>
      <div className="footer"> </div>
    </div>
  );
};

export default OnTheRoad;
