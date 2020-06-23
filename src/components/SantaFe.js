import React from "react";
import Introduction from "./Introduction";
import ThreeImagesInRowGallery from "./ThreeImagesInRowGallery";
import Paragraph from "./Paragraph";
import { parseText } from "../util/helper";
import FullbleedImageWithText from "./FullbleedImageWithText";
import EightImagesGallery from "./EightImagesGallery";
import BlockQuote from "./BlockQuote";
import Spacer from "./Spacer";
import ImageWithText from "./ImageWithText";

const about = "Santa fe was the oldest capital in US";
const lalaland =
  "I think about that day \n I left him at a Greyhound station \n West of Santa Fé \n We were seventeen, \n but he was sweet and it was true \n Still I did what I had to do \n’Cause I just knew' \n - Another Day of Sun";

const openuprestaurant = "Let's open up a restaurant in Santa Fe \n Sunny Santa Fe would be nice \n We'll open up a restaurant in Santa Fe \n And leave this to the roaches and mice"
const SantaFe = ({ content }) => {
  const {
    title,
    coverImage,
    map,
    eightImages,
    threeImages,
    sectionCoverImages
  } = content;

  return (
    <div className='country-page'>
      <Introduction titleSize={"large"} url={coverImage} title={title} />
      <ImageWithText text={parseText(lalaland)} image={""} />
      <FullbleedImageWithText
        image={sectionCoverImages[0]}
        text={parseText(openuprestaurant)}
        title={"Open up a restaurant in Santa Fe"}
      />
      <EightImagesGallery
        portraitUrls={eightImages.slice(0, 4)}
        landscapeUrls={eightImages.slice(4, 8)}
      />
      <BlockQuote author={"Rent - 12"}
        quote={"Let's open up a restaurant in Santa Fe"} />
      <ThreeImagesInRowGallery images={threeImages} />
      <Spacer size={"lg"} />
    </div>
  );
};

export default SantaFe;
