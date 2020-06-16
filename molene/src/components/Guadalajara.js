import React from "react";
import Introduction from "./Introduction";
// import ImageWithText from "./ImageWithText";
// import FullbleedImageWithText from "./FullbleedImageWithText";
// import EightImagesGallery from "./EightImagesGallery";
// import ThreeImagesInRowGallery from "./ThreeImagesInRowGallery";
// import BlockQuote from "./BlockQuote";
// import Spacer from "./Spacer";
import ScrollIndicator from "./ScrollIndicator";

const Guadalajara = ({ content }) => {
  const { title, images, coverImage } = content[0];
  return (
    <div className='country-page'>
      <Introduction titleSize={"large"} url={coverImage} title={title} />
      <ScrollIndicator />
    </div>
  );
};

export default Guadalajara;
