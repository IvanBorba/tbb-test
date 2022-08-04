import intibiomeLogo from "../../assets/images/logo-intibiome.png";
import closeIcon from "../../assets/icons/close.png";
import downIcon from "../../assets/icons/down-arrow.png";
import { MenuIcon, SearchIcon } from "../../assets/icons";
import "./style.css";

const Header = ({ isMobile, openMobileNavigation, handleMobileNavigation }) => {
  console.log(openMobileNavigation);
  console.log(isMobile);
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
          <div className="navigation-desktop-button">
            about us <img className="down-icon" src={downIcon} />
          </div>
          <div className="navigation-desktop-button">
            our products <img className="down-icon" src={downIcon} />
          </div>
          <div className="navigation-desktop-button">
            intimate health <img className="down-icon" src={downIcon} />
          </div>
          <div className="navigation-desktop-button">contact us</div>
        </nav>
      )}
    </header>
  );
};

export default Header;
