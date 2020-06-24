import React from "react";
import Introduction from "./Introduction";
import ImageWithText from "./ImageWithText";
import FullbleedImageWithText from "./FullbleedImageWithText";
import EightImagesGallery from "./EightImagesGallery";
import ThreeImagesInRowGallery from "./ThreeImagesInRowGallery";
import BlockQuote from "./BlockQuote";
import Spacer from "./Spacer";
import { parseText } from "../util/helper";
import Paragraph from "./Paragraph";
const coffeeshop = "Gestures no longer work, when it comes to describing fruity flavors. A young woman helped me to translate the order to Spanish. \n - \n You speak really good English. \n I lived in LA before. \n Are you from Guadalajara? \n Yes. "
const lagunablanca = "At Cafe P’al Real \n Girl who works at the Cafe and I \n - \n I’m from Mexico City. I have lived here for 8 years. \n Is there any good pottery shop nearby? \n Lagunablanca. By the way do you like vintage clothing? \n Yes !  \n I recommend this store. \n [Typing Bravo Vintage 2 on my phone] \n This sweater is from them. \n [Pointing to her knit pattern sweater] "
const museum = "The museum is inside a 19 century colonial era architecture, \n preserving indigenous handcrafts of Jalisco. \n The red paint on the wall reminds me of Orhan Pamuk’s My Name is Red."
const Guadalajara = ({ content }) => {
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
      <FullbleedImageWithText
        image={sectionCoverImages[0]}
        text={parseText(lagunablanca)}
        title={"Lagunablanca"}
      />
      <EightImagesGallery
        portraitUrls={eightImages.slice(0, 4)}
        landscapeUrls={eightImages.slice(4, 8)}
      />
      <FullbleedImageWithText
        image={sectionCoverImages[2]}
        text={parseText(coffeeshop)}
      />
      <FullbleedImageWithText
        image={sectionCoverImages[1]}
        title={"Ceramics"}
        text={parseText(museum)}
      />
      <ThreeImagesInRowGallery images={threeImages} />
      <div className="footer"> </div>
    </div>
  );
};

export default Guadalajara;
