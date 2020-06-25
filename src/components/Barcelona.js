import React from "react";
import Introduction from "./Introduction";
import ImageWithText from "./ImageWithText";
import FullbleedImageWithText from "./FullbleedImageWithText";
import EightImagesGallery from "./EightImagesGallery";
import ThreeImagesInRowGallery from "./ThreeImagesInRowGallery";
import BlockQuote from "./BlockQuote";
import Spacer from "./Spacer";
import { parseText} from "../util/helper";

const Barcelona = ({ content }) => {
  const {
    title,
    coverImage,
    map,
    eightImages,
    threeImages,
    sectionCoverImages,
    p1,
    p2,
    p3,
    quote1
  } = content;

  return (
    <div className='country-page'>
      <Introduction titleSize={"large"} url={coverImage} title={title} />
      <Spacer size={"sm"} />
      <ImageWithText text={p1} image={map} />
      <Spacer size={"sm"} />
      <FullbleedImageWithText
        title={"Paella"}
        text={p2}
        image={sectionCoverImages[0]}
      />
      <ThreeImagesInRowGallery images={threeImages} />
      <Spacer size={"sm"} />
      <FullbleedImageWithText title={"Gaudi"} text={p3} image={sectionCoverImages[1]} />
      <EightImagesGallery
        portraitUrls={eightImages.slice(0, 4)}
        landscapeUrls={eightImages.slice(4, 8)}
      />
      <BlockQuote author={"Vicky, Cristina, Barcelona"} quote={quote1} />
      <FullbleedImageWithText image={sectionCoverImages[2]} />
      <div className="footer"> </div>
    </div>
  );
};

export default Barcelona;
