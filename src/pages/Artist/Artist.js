import React, { useEffect } from "react";
import "./Artist.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import artist from "../../assets/images/artist-img1.webp";

function Artist() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const animation = useAnimation();
  const animation1 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
      animation1.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
    if (!inView) {
      animation1.start({ x: "100vw" });
    }
  }, [inView]);

  return (
    <div className="art-background">
      <section className="artist-divider">
        <h4 className="artist-header">GET TO KNOW THE ARTIST</h4>
      </section>
      <div ref={ref} className="artist-container" id="artist">
        <motion.div className="artist-text-container" animate={animation}>
          <h3 className="artist-text">Hello there! I'm Sammi.</h3>
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
        </motion.div>
        <motion.div className="artist-img-container" animate={animation1}>
          <img alt="artist" src={artist} className="artist-img" />
        </motion.div>
      </div>
    </div>
  );
}

export default Artist;
