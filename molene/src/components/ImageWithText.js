import React from "react";

const ImageWithText = () => {
  return (
    <div className='image-with-text'>
        <img
        alt=''
        className='picture'
        src='http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/01/27124550/AlSafar_Map_updated_Algerie.png'
        sizes='(max-width: 2860px) 100vw, 2860px'
      ></img>
      <div className="paragraph">
      <p>Algeria is a fascinating country with an impressive size on the map. It is the largest African country, the largest country in the Mediterranean basin, and the largest country in the Arab world.</p>
      <p>2.382 million km2 of land to explore: a traveler’s dream.</p>
      <p>Not very open to tourism and relatively unknown, Algeria is shrouded in mystery. It is a three-faced country that operates at three speeds. Turned towards the Mediterranean, the North is urban, modern and dynamic. The deeper we go inland and into the mountains (Kabylia, the land of the Chaoui…), the more the populations are rural and live according to traditional lifestyles… then comes the vast desert, which represents a door to another world.</p>
      </div>
        </div>
  );
};

export default ImageWithText;
