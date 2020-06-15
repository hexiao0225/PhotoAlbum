import React from "react";
import SocialMedia from "./SocialMedia";
import Logo from "./Logo";
const Menu = () => {
  return (
    <div>
      <div className='menu'>
        <div className='menu-border'></div>
        <div className='menu-icon'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className='menu-text'>Discover</div>
      <SocialMedia />
      <Logo />
    </div>
  );
};

export default Menu;
