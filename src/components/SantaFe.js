import React from "react";
import Introduction from "./Introduction";
import ThreeImagesInRowGallery from "./ThreeImagesInRowGallery";
import Paragraph from "./Paragraph"
import {parseText} from "../util/helper"
import FullbleedImageWithText from "./FullbleedImageWithText";
import EightImagesGallery from "./EightImagesGallery";
import BlockQuote from "./BlockQuote";
import Spacer from "./Spacer";

const about = "Santa fe was the oldest capital in US"
const lalaland = "I think about that day \n I left him at a Greyhound station \n West of Santa Fé \n We were seventeen, \n but he was sweet and it was true \n Still I did what I had to do \n’Cause I just knew'"
const SantaFe =({content}) => {
    const {title,images,coverImage,threePortraitImages,cityDescription,description} = content;
   
    return (
        <div className='country-page'>
          <Introduction titleSize={"large"} url={coverImage} title={title} />
          <ThreeImagesInRowGallery images={images.slice(1,4)}/>
          <Paragraph text={parseText(lalaland)}/>
          <Spacer size={"sm"}/>
          <FullbleedImageWithText title={'Santa Fe Plaza'} text={about} image={images[7]}/>
          <BlockQuote author={"La la land"} quote={"Grey hound station west of santa fe"}/>
          <Spacer size={"sm"}/>
          <EightImagesGallery landscapeUrls={images.slice(4,8)} portraitUrls={images.slice(8,12)}/>
        </div>
    );
  
}

export default SantaFe;
