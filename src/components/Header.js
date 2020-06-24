import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Hamburger from "./Hamburger";
import SocialMedia from "./SocialMedia";
import Logo from "./Logo";

const Header = ({ history, content }) => {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "menu",
  });
  const cities = Object.keys(content).map((city) => {
    const information = content[city];
    return {
      name: information["title"],
      value: city.replace(" ", ""),
      coverImage: information["coverImage"],
    };
  });
  const isInHomePage =
    window.location.hash.includes("road") || window.location.hash === "#/";
  // State of our button
  const [disabled, setDisabled] = useState(false);
  // State of header color
  const [lightMode, setLightMode] = useState(isInHomePage);
  //Use Effect
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setState({ clicked: false, menuName: "menu" });
    });
  }, [history]);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    setLightMode(true);
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "close",
      });
      setLightMode(true);
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "menu",
      });
      if (!isInHomePage) {
        setLightMode(false);
      }
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "close",
      });
      setLightMode(true);
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  return (
    <header className={lightMode ? "light-mode" : ""}>
      <div className='container'>
        <div className='wrapper'>
          <div className='inner-header'>
            <div className='side-panel'>
              <div disabled={disabled} onClick={handleMenu} className='menu'>
                <div className='menu-border'></div>
                {state.menuName === "menu" ? (
                  <div className='menu-icon'>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                ) : (
                  <div className='menu-close-icon'>
                    <span></span>
                    <span></span>
                  </div>
                )}
              </div>
              <SocialMedia />
              <Logo />
            </div>
          </div>
        </div>
      </div>
      <Hamburger
        setLightMode={() => {
          setLightMode(true);
        }}
        setDarkMode={() => {
          setLightMode(false);
        }}
        cities={cities}
        state={state}
      />
    </header>
  );
};

export default withRouter(Header);
