import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-scroll";
import "./Header.css";

import SamLogo from "../../assets/images/SamLogo1.png";

const Navbar = () => {
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [click, setClick] = useState(false);
  const [showButton, setShowButton] = useState(true);

  // listens for scrolling and sets state accordingly
  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 100) {
      setNavbarScrolled(true);
    }
    if (window.scrollY < 100) {
      setNavbarScrolled(false);
    }
  });

  const navBarStyle = useMemo(() => {
    if (!navbarScrolled && !click) return "transparent-nav";
    return "solid-nav";
  }, [navbarScrolled, click]);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const makeResponsive = () => {
    if (window.innerWidth <= 960) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  };

  useEffect(() => {
    makeResponsive();
  }, []);

  window.addEventListener("resize", () => makeResponsive());

  return (
    <div
      style={{ position: "fixed", color: "secondary" }}
      className={navBarStyle}
    >
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="hero" onClick={closeMobileMenu}>
            <img src={SamLogo} alt="logo" className="navbar-logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <CloseIcon style={{ color: "#1abc9c" }} />
            ) : (
              <MenuIcon style={{ color: "#1abc9c" }} />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu hidden"}>
            <li className="nav-item">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="artist"
                spy={true}
                smooth={true}
                offset={-160}
                duration={100}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ARTIST
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="gallery"
                spy={true}
                smooth={true}
                offset={-75}
                duration={100}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                GALLERY
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-125}
                duration={100}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                SERVICES
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="book"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                BOOK ME
              </Link>
            </li>
          </ul>
          {showButton && (
            <Link className="info-btn3" to="book">
              BOOK ME
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
