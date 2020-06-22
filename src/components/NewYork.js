import React from "react";
import Introduction from "./Introduction";
import ImageWithText from "./ImageWithText";
import FullbleedImageWithText from "./FullbleedImageWithText";
import EightImagesGallery from "./EightImagesGallery";
import ThreeImagesInRowGallery from "./ThreeImagesInRowGallery";
import BlockQuote from "./BlockQuote";
import Spacer from "./Spacer";

const sampleText =
  "Algeria is a fascinating country with an impressive size on the map. It is the largest African country, the largest country in the Mediterranean basin, and the largest country in the Arab world. \n 2.382 million km2 of land to explore: a traveler’s dream. Not very open to tourism and relatively unknown, Algeria is shrouded in mystery. It is a three-faced country that operates at three speeds. Turned towards the Mediterranean, the North is urban, modern and dynamic. The deeper we go inland and into the mountains (Kabylia, the land of the Chaoui…), the more the populations are rural and live according to traditional lifestyles… then comes the vast desert, which represents a door to another world.";

const sampleQuote = "We believe our blog will have a strong influence.";
const sampleAuthor = "Amal Jodwani";

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
      <ImageWithText text={sampleText} image={map} />
      <FullbleedImageWithText
        image={sectionCoverImages[0]}
        text={sampleText}
        title={"New York"}
      />
      <EightImagesGallery
        portraitUrls={eightImages.slice(0, 4)}
        landscapeUrls={eightImages.slice(4, 8)}
      />
      <Introduction titleSize={"small"} url={sectionCoverImages[2]} title={"Jane's Carousel"} />
      <BlockQuote author={sampleAuthor} quote={sampleQuote} />
      <ThreeImagesInRowGallery images={threeImages} />
      <Spacer size={"lg"} />
    </div>
  );
};

export default NewYork;
