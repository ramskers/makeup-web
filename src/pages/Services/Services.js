import React, { useEffect } from "react";
import CardItem from "../../components/Cards/CardItem";
import "./Services.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Services() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.5,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0 });
    }
  }, [inView]);

  return (
    <div ref={ref} className="cards" id="services">
      <h1 className="services-header">Services</h1>
      <motion.div className="cards__container" animate={animation}>
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/featurePhoto.webp"
              text="Photography Make-up"
              label="Outdoor"
              path="book"
            />
            <CardItem
              src="/images/featureBridal.webp"
              text="Bridal Make-up"
              label="Outdoor"
              path="book"
            />
            <CardItem
              src="/images/featureGlam.webp"
              text="Natural glam"
              label="Outdoor/Indoor"
              path="book"
            />
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default Services;
