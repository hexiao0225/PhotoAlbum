import React from "react";
import Introduction from "./Introduction";
import ImageWithText from "./ImageWithText";
import FullbleedImageWithText from "./FullbleedImageWithText";
import EightImagesGallery from "./EightImagesGallery";
import ThreeImagesInRowGallery from "./ThreeImagesInRowGallery";
import { parseText } from "../util/helper";

const Guadalajara = ({ content }) => {
  const {
    title,
    coverImage,
    map,
    eightImages,
    threeImages,
    sectionCoverImages,
    p1,
    p2,
    p3
  } = content;
  return (
    <div className='country-page'>
      <Introduction titleSize={"large"} url={coverImage} title={title} />
      <ImageWithText image={map} />
      <FullbleedImageWithText
        image={sectionCoverImages[0]}
        text={p1}
        title={"Lagunablanca"}
      />
      <EightImagesGallery
        portraitUrls={eightImages.slice(0, 4)}
        landscapeUrls={eightImages.slice(4, 8)}
      />
      <FullbleedImageWithText
        image={sectionCoverImages[2]}
        title={"Fruity Soda"}
        text={p2}
      />
      <FullbleedImageWithText
        image={sectionCoverImages[1]}
        title={"Ceramics"}
        text={p3}
      />
      <ThreeImagesInRowGallery images={threeImages} />
      <div className="footer"> </div>
    </div>
  );
};

export default Guadalajara;
