import { useState } from "react";

import intibiomeLogo from "../../assets/images/logo-intibiome.png";
import closeIcon from "../../assets/icons/close.png";
import { MenuIcon, SearchIcon } from "../../assets/icons";
import "./style.css";

const Header = ({ isMobile }) => {
  const [openMobileNavigation, setOpenMobileNavigation] = useState(false);

  const handleMobileNavigation = () => {
    setOpenMobileNavigation(!openMobileNavigation);
    console.log(openMobileNavigation);
  };

  return (
    <header className="header">
      <div className="icons-container">
        {isMobile ? (
          openMobileNavigation ? (
            <img
              src={closeIcon}
              className="close-mobile-navigation-icon"
              onClick={handleMobileNavigation}
            />
          ) : (
            <span onClick={handleMobileNavigation}>
              <MenuIcon />
            </span>
          )
        ) : (
          <span />
        )}
        <img className="logo" alt="Main Logo" src={intibiomeLogo} />
        <SearchIcon />
      </div>
      {isMobile && openMobileNavigation && (
        <nav className="navigation-mobile-container">
          <button className="navigation-mobile-button">brand philosophy</button>
          <button className="navigation-mobile-button">
            product technology
          </button>
          <button className="navigation-mobile-button">all products</button>
          <button className="navigation-mobile-button">
            intibiome wellness
          </button>
          <button className="navigation-mobile-button">intibiome active</button>
          <button className="navigation-mobile-button">
            intibiome agecare
          </button>
          <button className="navigation-mobile-button">article 1</button>
          <button className="navigation-mobile-button">article 2</button>
          <button className="navigation-mobile-button">article 3</button>
          <button className="navigation-mobile-button">faq</button>
          <button className="navigation-mobile-button">contact us</button>
        </nav>
      )}
      {!isMobile && (
        <nav className="navigation-desktop-container">
          <button className="navigation-desktop-button">about us</button>
          <button className="navigation-desktop-button">our products</button>
          <button className="navigation-desktop-button">intimate health</button>
          <button className="navigation-desktop-button">contact us</button>
        </nav>
      )}
    </header>
  );
};

export default Header;
