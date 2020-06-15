import React from "react";
import Introduction from "./Introduction";
import ImageWithText from "./ImageWithText";
import FullbleedImageWithText from "./FullbleedImageWithText";
import EightImagesGallery from "./EightImagesGallery";
import ThreeImagesInRowGallery from "./ThreeImagesInRowGallery";
import BlockQuote from "./BlockQuote";
const ImagesForThreeImagesInRowGallery = [
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24130715/Se%CC%81quence-1.png",
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24130719/Se%CC%81quence-10.png",
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24130723/Se%CC%81quence-31.png",
];

export const CountryPage = () => {
  return (
    <div className='country-page'>
      <Introduction titleSize={"large"} title={"Algeria"} />
      <ImageWithText />
      <FullbleedImageWithText />
      <EightImagesGallery />
      <Introduction titleSize={"small"} title={"Amal Jodwani"} />
      <BlockQuote />
      <ThreeImagesInRowGallery images={ImagesForThreeImagesInRowGallery} />
      <FullbleedImageWithText />
    </div>
  );
};

export default CountryPage;
