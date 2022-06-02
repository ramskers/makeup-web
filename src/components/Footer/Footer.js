import { Facebook, Instagram, Twitter, YouTube } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">Testimonials</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Me</h2>
            <Link to="book">Contact</Link>
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
              GlamBySam
            </Link>
          </div>
          <small className="website-rights">GlamBySam © 2022</small>
          <div className="social-icons">
            <Link
              className="Social-icon-link"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <Facebook style={{ color: "#fff" }} />
            </Link>
            <Link
              className="Social-icon-link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <Instagram style={{ color: "#fff" }} />
            </Link>
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
