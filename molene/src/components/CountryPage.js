import React from "react";
import Introduction from "./Introduction";
import ImageWithText from "./ImageWithText";
import FullbleedImageWithText from "./FullbleedImageWithText";
import EightImagesGallery from "./EightImagesGallery";
import ThreeImagesInRowGallery from "./ThreeImagesInRowGallery";
import BlockQuote from "./BlockQuote";
import Spacer from "./Spacer";
import ScrollIndicator from "./ScrollIndicator";

const portraitUrls = [
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24124922/Se%CC%81quence-6-min.png",
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24125048/Se%CC%81quence-7-min.png",
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24125139/Se%CC%81quence-15-copie-min-510x811.png",
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24125205/Se%CC%81quence-32-min.png",
];

const landscapeUrls = [
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24125447/Alger-2-min-1-603x256.png",
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24125812/Se%CC%81quence-206-min-603x256.png",
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24125752/Se%CC%81quence-89-min-603x256.png",
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24125716/Se%CC%81quence-56-min-603x256.png",
];

const ImagesForThreeImagesInRowGallery = [
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24130715/Se%CC%81quence-1.png",
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24130719/Se%CC%81quence-10.png",
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24130723/Se%CC%81quence-31.png",
];

const ImageWithTextUrl =
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/01/27124550/AlSafar_Map_updated_Algerie.png";

const sampleText =
  "Algeria is a fascinating country with an impressive size on the map. It is the largest African country, the largest country in the Mediterranean basin, and the largest country in the Arab world. \n 2.382 million km2 of land to explore: a traveler’s dream. Not very open to tourism and relatively unknown, Algeria is shrouded in mystery. It is a three-faced country that operates at three speeds. Turned towards the Mediterranean, the North is urban, modern and dynamic. The deeper we go inland and into the mountains (Kabylia, the land of the Chaoui…), the more the populations are rural and live according to traditional lifestyles… then comes the vast desert, which represents a door to another world.";

const sampleQuote = "We believe our blog will have a strong influence.";
const sampleAuthor = "Amal Jodwani";

const fullbleedImageSample1Url =
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/01/28233949/%C2%A9ALSAFAR-ALGERIA-001-IPAD-min-1440x820.jpg";
const fullbleedTitle = "Algeria";
const fullbleedImageSample2Url =
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/02/28131913/oh_amal_image7-1440x658.png";

const introImageUrl1 =
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/02/28133056/oh_gawa-algerie-image1-1440x610.png";
const introImageUrl2 =
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24130857/oh_amal_image9-1440x606.png";

  export const CountryPage = () => {
  return (
    <div className='country-page'>
      <Introduction
        url={introImageUrl1}
        titleSize={"large"}
        title={"Algeria"}
      />
      <ScrollIndicator />
      <ImageWithText text={sampleText} image={ImageWithTextUrl} />
      <FullbleedImageWithText
        url={fullbleedImageSample1Url}
        text={sampleText}
        title={fullbleedTitle}
      />
      <EightImagesGallery
        portraitUrls={portraitUrls}
        landscapeUrls={landscapeUrls}
      />
      <Introduction
        url={introImageUrl2}
        titleSize={"small"}
        title={"Amal Jodwani"}
      />
      <BlockQuote author={sampleAuthor} quote={sampleQuote} />
      <ThreeImagesInRowGallery images={ImagesForThreeImagesInRowGallery} />
      <Spacer />
      <FullbleedImageWithText url={fullbleedImageSample2Url} />
      <BlockQuote author={sampleAuthor} quote={sampleQuote} />
      <Spacer />
    </div>
  );
};

export default CountryPage;
