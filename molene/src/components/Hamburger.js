import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose
} from "./Animations";

import dallas from "../images/austin.webp";
import austin from "../images/austin.webp";
import newyork from "../images/austin.webp";
import sanfrancisco from "../images/austin.webp";
import beijing from "../images/austin.webp";

const fullbleedImageSample1Url =
  "http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/01/28233949/%C2%A9ALSAFAR-ALGERIA-001-IPAD-min-1440x820.jpg";

// const cities = [
//   { name: "GuadalaJara", value:"guadalajara",image: fullbleedImageSample1Url },
//   { name: "Santa Fe", value:"santafe",image: fullbleedImageSample1Url },
//   { name: "New York", value:"newyork",image: fullbleedImageSample1Url },
//   { name: "San Francisco", value:"sanfrancisco",image: fullbleedImageSample1Url },
//   { name: "Dubai", value:"dubai",image: fullbleedImageSample1Url }
// ];


const Hamburger = ({ state,cities }) => {
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      // If menu is closed and we want to open it.
      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
    }
  }, [state]);

  return (
    <div ref={el => (menuLayer = el)} className='hamburger-menu'>
      <div
        ref={el => (reveal1 = el)}
        className='menu-secondary-background-color'></div>
      <div ref={el => (reveal2 = el)} className='menu-layer'>
        <div
          ref={el => (cityBackground = el)}
          className='menu-city-background'></div>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav >
                <ul>
                {cities.map(el => (
                    <li>
                    <Link
                      to={`${el.value}`}>
                   <span
                    key={el.name}
                    onMouseEnter={() => handleCity(el.coverImage, cityBackground)}
                    onMouseOut={() => handleCityReturn(cityBackground)}>
                    {el.name}
                  </span>
                    </Link>
                  </li>
                ))}
                </ul>
              </nav>
              <div ref={el => (info = el)} className='info'>
                <h3>About</h3>
                <p>
                  An wanderer, a traveler, a rootless passenger. Walking, sitting, moving.
                </p>
                <p>hexiao0225@gmail.com</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;