import React, { useEffect } from "react";
import "./Gallery.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import sam1 from "../../assets/images/sam1.webp";
import sam2 from "../../assets/images/sam2.webp";
import sam3 from "../../assets/images/sam3.webp";
import sam4 from "../../assets/images/sam4.webp";
import sam5 from "../../assets/images/sam5.webp";
import sam6 from "../../assets/images/sam6.webp";
import sam7 from "../../assets/images/sam7.webp";
import sam8 from "../../assets/images/sam8.webp";
import sam9 from "../../assets/images/sam9.webp";
import sam10 from "../../assets/images/sam10.webp";
import sam11 from "../../assets/images/sam11.webp";
import sam12 from "../../assets/images/sam12.webp";
import sam13 from "../../assets/images/sam13.webp";
import sam14 from "../../assets/images/sam14.webp";
import sam15 from "../../assets/images/sam15.webp";
import sam16 from "../../assets/images/sam16.webp";
import sam17 from "../../assets/images/sam17.webp";
import sam18 from "../../assets/images/sam18.webp";
import sam19 from "../../assets/images/sam19.webp";
import sam20 from "../../assets/images/sam20.webp";
import sam21 from "../../assets/images/sam21.webp";
import sam22 from "../../assets/images/sam22.webp";
import sam23 from "../../assets/images/sam23.webp";
import sam24 from "../../assets/images/sam24.webp";
import sam25 from "../../assets/images/sam25.webp";
import sam26 from "../../assets/images/sam26.webp";
import sam27 from "../../assets/images/sam27.webp";
import sam28 from "../../assets/images/sam28.webp";
import sam29 from "../../assets/images/sam29.webp";
import sam30 from "../../assets/images/sam30.webp";
import sam31 from "../../assets/images/sam31.webp";
import sam32 from "../../assets/images/sam32.webp";
import sam33 from "../../assets/images/sam33.webp";
import sam34 from "../../assets/images/sam34.webp";
import sam35 from "../../assets/images/sam35.webp";

function Gallery() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0 });
    }
  }, [inView]);

  return (
    <div className="gallery-background " ref={ref} id="gallery">
      <h1 className="galleryHeader">O'Neill Gallery</h1>
      <motion.div className="Gallerycontainer" animate={animation}>
        <div className="row">
          <div className="column">
            <img src={sam1} alt="1" />
            <img src={sam2} alt="2" />
            <img src={sam3} alt="3" />
            <img src={sam4} alt="4" />
            <img src={sam5} alt="5" />
          </div>
          <div className="column2">
            <img src={sam6} alt="5" />
            <img src={sam7} alt="5" />
            <img src={sam8} alt="5" />
            <img src={sam9} alt="5" />
            <img src={sam10} alt="5" />
          </div>
          <div className="column">
            <img src={sam11} alt="5" />
            <img src={sam12} alt="5" />
            <img src={sam13} alt="5" />
            <img src={sam14} alt="5" />
            <img src={sam15} alt="5" />
          </div>
          <div className="column">
            <img src={sam16} alt="5" />
            <img src={sam17} alt="5" />
            <img src={sam18} alt="5" />
            <img src={sam19} alt="5" />
            <img src={sam20} alt="5" />
          </div>
          <div className="column2">
            <img src={sam21} alt="5" />
            <img src={sam22} alt="5" />
            <img src={sam23} alt="5" />
            <img src={sam24} alt="5" />
            <img src={sam25} alt="5" />
          </div>
          <div className="column2">
            <img src={sam26} alt="5" />
            <img src={sam27} alt="5" />
            <img src={sam28} alt="5" />
            <img src={sam29} alt="5" />
            <img src={sam30} alt="5" />
          </div>
          <div className="column2">
            <img src={sam31} alt="5" />
            <img src={sam32} alt="5" />
            <img src={sam33} alt="5" />
            <img src={sam34} alt="5" />
            <img src={sam35} alt="5" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Gallery;
