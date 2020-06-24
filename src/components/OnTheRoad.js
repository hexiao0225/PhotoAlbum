import React from "react";
import Introduction from "./Introduction";
import ThreeHorizontalImages from "./ThreeHorizontalImages";
import BlockQuote from "./BlockQuote";
import { parseText } from "../util/helper";
import Paragrah from "./Paragraph";

const quote =
  '"..guided along as it were \n a chain of flowers into \n the mysteries of life."';
const about =
  "An artist with cumbersome brushstrokes. \n A dancer with numb limbs. \n A figure, \n a body, \n covered with \n a Frankenstein of labels, \n written in white crayon. \n They read: \n Chinese, \n woman, \n voided Chicagoan, \n pseudo engineer, \n foreigner, \n traveler, \n wanderer, \n rootless passenger, \n silent dreamer.";
const measurement =
  "How do you measure a year? \n \n In daylight, in sunshine, in cups of coffee. \n In warm kisses, in sweated orgasms, \n in lover’s soft murmur by pillow. \n In drops of ink, rolls of prints, tubes of paint. \n \n So I attempt \n to measure time \n In footprints, inches, meters, \n in dots, lines, pixels \n In images, maps, collages. \n in walked roads.";

const OnTheRoad = ({ content }) => {
  const { coverImage, sectionCoverImages } = content;

  return (
    <div className='country-page landing-page'>
      <Introduction
        titleSize={"large"}
        url={coverImage}
        title={"On the Road"}
      />
      <div className='script-title'>Who</div>
      <div className='landing-page-about'>{parseText(about)}</div>
      <BlockQuote author={"Charles Willson Peale"} quote={quote} />
      <ThreeHorizontalImages images={sectionCoverImages.slice(0, 3)} />
      <Paragrah text={parseText(measurement)} title={"Measurement"} />
      <div className='footer'> </div>
    </div>
  );
};

export default OnTheRoad;
