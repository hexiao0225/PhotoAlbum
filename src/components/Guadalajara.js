import React from "react";
import Introduction from "./Introduction";
// import ImageWithText from "./ImageWithText";
// import FullbleedImageWithText from "./FullbleedImageWithText";
// import EightImagesGallery from "./EightImagesGallery";
// import ThreeImagesInRowGallery from "./ThreeImagesInRowGallery";
// import BlockQuote from "./BlockQuote";
// import Spacer from "./Spacer";
import GalleryImage from "./GalleryImage";
import ScrollIndicator from "./ScrollIndicator";
import Paragraph from "./Paragraph";

const Guadalajara = ({ content }) => {
  const { title, images, coverImage, cityDescription, description } = content;
  return (
    <div className='country-page'>
      <Introduction titleSize={"large"} url={coverImage} title={title} />
      <ScrollIndicator />
      <Paragraph text={description} />
      <Paragraph text={cityDescription} />
      {images.map((image) => (
        <GalleryImage url={image} />
      ))}
    </div>
  );
};

export default Guadalajara;
