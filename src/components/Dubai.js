import React from "react";
import Introduction from "./Introduction";
import ImageWithText from "./ImageWithText";
import FullbleedImageWithText from "./FullbleedImageWithText";
import EightImagesGallery from "./EightImagesGallery";
import ThreeImagesInRowGallery from "./ThreeImagesInRowGallery";
import BlockQuote from "./BlockQuote";
import Spacer from "./Spacer";
import { parseText } from "../util/helper";

const overview ="Dubai is a fascinating city in the United Arab Emirates - luxurious, full of man wonders, truly internationalized, modern and dynamic. Yet a 45-minute drive can take you to the deep inland desert of wildlife and rural lifestyle, into another world. "
const almaha = "Al Maha \n Camel \n Desert dinner \n Sand \n A man with South African accent \n A girl from Jiangxi, China \n Two Japanese couples"
const quote = "A contemporary one thousand and one nights";

const Dubai = ({ content }) => {
  const {
    title,
    coverImage,
    map,
    horizontalImages,
    eightImages,
    threeImages,
    sectionCoverImages,
  } = content;

  return (
    <div className='country-page'>
      <Introduction titleSize={"large"} url={coverImage} title={title} />
      <ImageWithText text={overview} image={map} />
      <FullbleedImageWithText
        image={horizontalImages[0]}
        text={parseText(almaha)}
        title={"Fragments"}
      />
      <EightImagesGallery
        portraitUrls={eightImages.slice(0, 4)}
        landscapeUrls={eightImages.slice(4, 8)}
      />
      <FullbleedImageWithText image={sectionCoverImages[0]} title={"Al Maha"}/>
      <ThreeImagesInRowGallery images={threeImages} />
      <FullbleedImageWithText image={horizontalImages[1]} />
      <BlockQuote quote={quote} />
      <Spacer size={"lg"} />
    </div>
  );
};

export default Dubai;
