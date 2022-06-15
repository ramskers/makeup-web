import { Facebook, Instagram, Twitter, YouTube } from "@material-ui/icons";
import React from "react";
import { Link } from "react-scroll";
import "./Footer.css";
import SamLogo from "../../assets/images/SamLogo1.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Me</h2>
            <Link
              to="artist"
              spy={true}
              smooth={true}
              offset={-160}
              duration={100}
              style={{ cursor: "pointer" }}
            >
              Artist
            </Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Me</h2>
            <Link to="book" style={{ cursor: "pointer" }}>
              Contact
            </Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Video Reels</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link
              to="/"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "24px",
              }}
            >
              <img src={SamLogo} alt="logo" className="navbar-logo" />
            </Link>
          </div>
          <small className="website-rights">S A M © 2022</small>
          <div className="social-icons">
            <a
              className="Social-icon-link"
              href="https://www.facebook.com/sammi.oneill.18"
              target="_blank"
              aria-label="Facebook"
              rel="noreferrer"
            >
              <Facebook style={{ color: "#fff" }} />
            </a>
            <a
              className="Social-icon-link"
              href="https://www.instagram.com/glam.bysamx/"
              target="_blank"
              aria-label="Instagram"
              rel="noreferrer"
            >
              <Instagram style={{ color: "#fff" }} />
            </a>
            <Link
              className="Social-icon-link"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <YouTube style={{ color: "#fff" }} />
            </Link>
            <Link
              className="Social-icon-link"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <Twitter style={{ color: "#fff" }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
