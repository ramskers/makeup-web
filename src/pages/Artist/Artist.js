import React from "react";
import "./Artist.css";

function Artist() {
  return (
    <>
      <section className="artist-divider">
        <h4 className="artist-header">GET TO KNOW THE ARTIST</h4>
      </section>
      <div className="artist-container" id="artist">
        <div className="artist-img-container">
          <img
            alt="artist"
            src="/images/artist-img.webp"
            className="artist-img"
          />
        </div>
        <div className="artist-text-container">
          <h3 className="artist-text-header">Hello there! I'm Sammi.</h3>
          <p className="artist-text">
            I was born & raised in Florida and my passion is & always has been
            makeup. I am a certified Freelanced Makeup Artist from OMA. I have
            years of experience. I can do as little as a natural glam to a full
            blown dramatic Smokey eye. I want you to feel beautiful and
            confident in your own skin but with a little spice added to it. I
            follow all beauty Healthline protocols & guidelines to keep
            everything sanitized and safe. I want to give my clients the best
            experience possible. Book with me now!
          </p>
        </div>
      </div>
    </>
  );
}

export default Artist;
