import React from "react";
import Introduction from "./Introduction";
import ThreeImagesInRowGallery from "./ThreeImagesInRowGallery";
import { parseText } from "../util/helper";
import FullbleedImageWithText from "./FullbleedImageWithText";
import EightImagesGallery from "./EightImagesGallery";
import BlockQuote from "./BlockQuote";

const SantaFe = ({ content }) => {
  const {
    title,
    map,
    coverImage,
    eightImages,
    threeImages,
    sectionCoverImages,
    p1,
    p2,
    p3,
    p4,
    quote1
  } = content;

  return (
    <div className='country-page'>
      <Introduction titleSize={"large"} url={coverImage} title={title} />
      <FullbleedImageWithText title={"Confession of a Tile"} text={p1} image={map} />
      <FullbleedImageWithText
        image={sectionCoverImages[0]}
        text={p2}
        title={"Guardian of L'Olivier"}
      />
      <EightImagesGallery
        portraitUrls={eightImages.slice(0, 4)}
        landscapeUrls={eightImages.slice(4, 8)}
      />
      <BlockQuote
        quote={quote1} />
      <ThreeImagesInRowGallery images={threeImages} />
      <FullbleedImageWithText
        text={p3}
        title={"Two Songs"}
      />
      <FullbleedImageWithText
        text={p4}
      />
      <div className="footer"> </div>
    </div>
  );
};

export default SantaFe;
