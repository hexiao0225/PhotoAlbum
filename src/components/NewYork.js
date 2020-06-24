import React from "react";
import Introduction from "./Introduction";
import ImageWithText from "./ImageWithText";
import FullbleedImageWithText from "./FullbleedImageWithText";
import EightImagesGallery from "./EightImagesGallery";
import ThreeImagesInRowGallery from "./ThreeImagesInRowGallery";
import BlockQuote from "./BlockQuote";
import Spacer from "./Spacer";

const nyny = '"if you make it there you can make it anywhere"';

const NewYork = ({ content }) => {
  const {
    title,
    coverImage,
    map,
    eightImages,
    threeImages,
    sectionCoverImages,
  } = content;

  return (
    <div className='country-page'>
      <Introduction titleSize={"large"} url={coverImage} title={title} />
      <ImageWithText image={map} />
      <BlockQuote author={"New York, New York"} quote={nyny} />
      <FullbleedImageWithText
        image={sectionCoverImages[0]}
        title={"Coffee"}
      />
      <EightImagesGallery
        portraitUrls={eightImages.slice(0, 4)}
        landscapeUrls={eightImages.slice(4, 8)}
      />
      <FullbleedImageWithText image={sectionCoverImages[1]} />
      <ThreeImagesInRowGallery images={threeImages} />
      <div className="footer"> </div>
    </div>
  );
};

export default NewYork;
