import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import {
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose
} from "./Animations";


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
                {cities.map((el,index) => (
                    <li key={index}>
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