import "./Hero.css";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";
import Theme from "../../styles/ThemeProvider";

function Hero() {
  return (
    <div className="landing-container" id="hero">
      <div className="hero-image-container">
        <img
          alt="dog running in water with loot paw collar"
          src="/images/glam-hero.webp"
          className="dog-image"
        />
      </div>
      <div className="hero-overlay" />
      <div className="right-hero-container">
        <span className="big-circle1"></span>
        <div className="right-inner-container">
          <h1 className="landing-header">Freelance Makeup Artist</h1>
          <p className="landing-body-text">
            IT’S YOUR TURN TO FEEL BEAUTIFUL AND CONFIDENT
          </p>
          <div className="heroBtn" style={{ marginTop: Theme.spacing(5) }}>
            <Link
              className="info-btn2"
              to="artist"
              spy={true}
              smooth={true}
              offset={-200}
              duration={100}
              style={{
                marginRight: Theme.spacing(3),
                alignSelf: "stretch",
              }}
            >
              About Me
            </Link>
            <Link className="info-btn1" to="book">
              BOOK ME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
