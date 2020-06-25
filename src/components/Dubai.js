import React from "react";
import Introduction from "./Introduction";
import ImageWithText from "./ImageWithText";
import FullbleedImageWithText from "./FullbleedImageWithText";
import EightImagesGallery from "./EightImagesGallery";
import ThreeImagesInRowGallery from "./ThreeImagesInRowGallery";
import BlockQuote from "./BlockQuote";
import { parseText } from "../util/helper";

const Dubai = ({ content }) => {
  const {
    title,
    coverImage,
    map,
    horizontalImages,
    eightImages,
    threeImages,
    sectionCoverImages,
    p1,
    p2,
    quote1
  } = content;

  return (
    <div className='country-page'>
      <Introduction titleSize={"large"} url={coverImage} title={title} />
      <ImageWithText text={p1} image={map} />
      <FullbleedImageWithText
        image={horizontalImages[0]}
        text={p2}
        title={"Fragments"}
      />
      <EightImagesGallery
        portraitUrls={eightImages.slice(0, 4)}
        landscapeUrls={eightImages.slice(4, 8)}
      />
      <FullbleedImageWithText image={sectionCoverImages[0]} title={"Al Maha"}/>
      <ThreeImagesInRowGallery images={threeImages} />
      <FullbleedImageWithText image={horizontalImages[1]} />
      <BlockQuote quote={quote1} />
      <div className="footer"> </div>
    </div>
  );
};

export default Dubai;
