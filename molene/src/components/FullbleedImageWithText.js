import React, { useRef } from "react";
import { useIntersection } from "react-use";

const FullbleedImageWithText = () => {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  const isSeen = !(intersection && intersection.intersectionRatio < 0.5);
  return (
    <div className='fullbleed-image-with-text'>
      <div className='fullbleed-image '>
        <img
          alt=''
          className='picture fade-in'
          src='http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/01/28233949/%C2%A9ALSAFAR-ALGERIA-001-IPAD-min-1440x820.jpg'
        ></img>
      </div>
      <div ref={sectionRef}>
        <h3 className={isSeen ? "script-title slide-up" : "script-title"}>
          Algeria
        </h3>
        <div className={isSeen ? "paragraph fade-in" : "paragraph fade-out"}>
          <p>
            Algeria has an eventful history, still apparent in its geography,
            demonstrate by Algiers, with its highly eclectic urbanism. The
            city’s has some of the world’s richest and most varied architecture.
            Yan Bighetti of Flogny is eager to explore this maze of history,
            like taking a trip back in time. From the top of its cliff,
            overlooking the Mediterranean, Algiers is recognizable by its pale
            facade that earned it the name “north Africa’s white lady.” Born of
            the sea, Algeria’s capital extends toward the ridge and down the
            coast. Up on high, the kasbah (citadel), while declared a UNESCO
            World Heritage Site, has long been deserted by the upper classes and
            has fallen into a pitiful state of neglect. Algerian authorities
            have hired architect Jean Nouvel to restore it, a decision not
            welcomed by all.
          </p>
          <p>2.382 million km2 of land to explore: a traveler’s dream.</p>
          <p>
            Not very open to tourism and relatively unknown, Algeria is shrouded
            in mystery. It is a three-faced country that operates at three
            speeds. Turned towards the Mediterranean, the North is urban, modern
            and dynamic. The deeper we go inland and into the mountains
            (Kabylia, the land of the Chaoui…), the more the populations are
            rural and live according to traditional lifestyles… then comes the
            vast desert, which represents a door to another world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FullbleedImageWithText;
