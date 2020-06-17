import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import SocialMedia from "./SocialMedia";
import Logo from "./Logo";

const Header = ({ history,content }) => {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "menu"
  });
  const cities = Object.keys(content).map(city=>{
    const information = content[city]
    return {name:information['title'],value:city,coverImage:information['coverImage']}
  })

  // State of our button
  const [disabled, setDisabled] = useState(false);

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
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "close"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "close"
      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
              <div className="side-panel">
              <div disabled={disabled} onClick={handleMenu} className='menu'>
            <div className='menu-border'></div>
            {state.menuName === "menu" ? <div className='menu-icon'>
                <span></span>
                <span></span>
                <span></span>
            </div> :<div className='menu-close-icon'><span></span><span></span></div>}
            </div>
            
            <SocialMedia />
      <Logo><Link to="/"></Link></Logo>
              </div>
            
          </div>
        </div>
      </div>
      <Hamburger cities={cities} state={state} />
      
    </header>
  );
};

export default withRouter(Header);