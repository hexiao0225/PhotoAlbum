import React from "react";
import Introduction from "./Introduction";
import ThreeImagesInRowGallery from "./ThreeImagesInRowGallery";
import { parseText } from "../util/helper";
import FullbleedImageWithText from "./FullbleedImageWithText";
import EightImagesGallery from "./EightImagesGallery";
import BlockQuote from "./BlockQuote";

const tile = "I’m a tile, lives in piles of tiles.\n I have cream background, sneaky smiling face. Disguised in the contour of sun. I know I look the same as the two other tiles above me. But I’m different. \n I’ve been waiting here for years, at this goddamn corner, excuse my language, of an open air antique market, near a dusty road of Santa Fe. \n I can’t close my eyes, cause the sun is too bright. Wait that’s the yellow paint. Never mind. Anyway. I’m the sun, the real sun. \n I know I’m not as comfortable, as the striped Indian wool blanket across the street. But if you take me home, I’ll add a touch of color, a sense of playfulness, a taste of exoticness, to your sun dried adobe wall. At night, I’ll enter your dream, and kick the moon off."
const lalaland = "From Another Day of Sun\n - \nI think about that day \n I left him at a Greyhound station \n West of Santa Fé \n We were seventeen, \n but he was sweet and it was true \n Still I did what I had to do \n ’Cause I just knew"
const dog = "I’m a dog. They call me “Guardian of L’Olivier”. \n During the day I wander on Galisteo St, or sleep under the tree. At night I wait outside on the streets, to get some good treat from chief Xavier. \n I met a young and beautiful dog from New York. A gentlemen like me, listened to her quietly.\n She told me things like she was scared by coyotes, and how she miss the friendly Central Park squirrels. \n Her owners, a middle-age couple, moved to Santa Fe a months ago. One is a fan of Georgia O’Keeffe and now works for a gallery on Canyon Road.\n The other listens to broadway musical Rent again and again. I heard he wants to open up a restaurant in Santa Fe. \n I don’t care about her owner. \n All I can see is her shinny hair, in this golden hour.\n If chief Xavier has the courage to move from Paris to here, \n if her owners have the courage to move from New York to here, \n I should too have the courage to ask her out by that ice-cream shop across the street. "
const rent = "From Santa Fe, Musical Rent\n - \n Let's open up a restaurant in Santa Fe \n Sunny Santa Fe would be nice \n We'll open up a restaurant in Santa Fe \n And leave this [New York] to the roaches and mice"
const SantaFe = ({ content }) => {
  const {
    title,
    map,
    coverImage,
    eightImages,
    threeImages,
    sectionCoverImages
  } = content;

  return (
    <div className='country-page'>
      <Introduction titleSize={"large"} url={coverImage} title={title} />
      <FullbleedImageWithText title={"Confession of a Tile"}text={parseText(tile)} image={map} />
      <FullbleedImageWithText
        image={sectionCoverImages[0]}
        text={parseText(dog)}
        title={"Guardian of L'Olivier"}
      />
      <EightImagesGallery
        portraitUrls={eightImages.slice(0, 4)}
        landscapeUrls={eightImages.slice(4, 8)}
      />
      <BlockQuote
        quote={"Let's open up a restaurant in Santa Fe"} />
      <ThreeImagesInRowGallery images={threeImages} />
      <FullbleedImageWithText
        image={""}
        text={parseText(lalaland)}
        title={"Two Songs"}
      />
      <FullbleedImageWithText
        image={""}
        text={parseText(rent)}
      />
      <div className="footer"> </div>
    </div>
  );
};

export default SantaFe;
